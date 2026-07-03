import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(false);
  const [target, setTarget] = useState(null); 
  const [isDown, setIsDown] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  
  const springX = useSpring(x, { stiffness: 280, damping: 28, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 280, damping: 28, mass: 0.4 });

  const rectSpringConfig = { stiffness: 350, damping: 32, mass: 0.5 };
  const tW = useSpring(24, rectSpringConfig);
  const tH = useSpring(24, rectSpringConfig);
  const tX = useSpring(-100, rectSpringConfig);
  const tY = useSpring(-100, rectSpringConfig);

  const canvasRef = useRef(null);
  const clicksRef = useRef([]);
  const bubblesRef = useRef([]);

  const sparkColor = '#22D3EE'; 
  const sparkSize = 14;
  const sparkRadius = 35;
  const sparkCount = 8;
  const sparkDuration = 380;

  const easeOutQuad = useCallback((t) => t * (2 - t), []);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) {
      setIsTouch(true);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const renderFX = (timestamp) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // sparks
      clicksRef.current = clicksRef.current.filter((group) => {
        const elapsed = timestamp - group.startTime;
        if (elapsed >= sparkDuration) return false;
        const progress = elapsed / sparkDuration;
        const eased = easeOutQuad(progress);
        const distance = eased * sparkRadius;
        const currentLineLength = sparkSize * (1 - eased);

        for (let i = 0; i < group.count; i++) {
          const angle = (2 * Math.PI * i) / group.count;
          const x1 = group.x + distance * Math.cos(angle);
          const y1 = group.y + distance * Math.sin(angle);
          const x2 = group.x + (distance + currentLineLength) * Math.cos(angle);
          const y2 = group.y + (distance + currentLineLength) * Math.sin(angle);
          ctx.strokeStyle = sparkColor;
          ctx.lineWidth = 2;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
        return true;
      });

      // bubbles
      bubblesRef.current = bubblesRef.current.filter((b) => {
        const elapsed = timestamp - b.startTime;
        if (elapsed >= b.life) return false;
        const progress = elapsed / b.life;
        const currentRadius = b.maxRadius * (1 - progress * 0.5);
        const opacity = b.maxAlpha * (1 - progress);
        b.y -= 0.25; 
        b.x += b.vx;
        ctx.fillStyle = `rgba(108, 92, 231, ${opacity * 0.4})`; 
        ctx.strokeStyle = `rgba(34, 211, 238, ${opacity * 0.8})`; 
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(b.x, b.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        return true;
      });

      animationId = requestAnimationFrame(renderFX);
    };
    animationId = requestAnimationFrame(renderFX);

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);

      if (Math.random() < 0.35) {
        bubblesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 0.4,
          maxRadius: Math.random() * 5 + 3,
          maxAlpha: Math.random() * 0.5 + 0.3,
          startTime: performance.now(),
          life: Math.random() * 250 + 200
        });
      }

      const el = e.target.closest(".cursor-target");
      if (el) {
        const r = el.getBoundingClientRect();
        const pad = Number(el.dataset.cursorPad || 8);
        tX.set(r.left - pad);
        tY.set(r.top - pad);
        tW.set(r.width + pad * 2);
        tH.set(r.height + pad * 2);
        setTarget(true);
      } else {
        setTarget(null);
      }
    };

    const down = (e) => {
      setIsDown(true);
      clicksRef.current.push({ x: e.clientX, y: e.clientY, count: sparkCount, startTime: performance.now() });
    };
    const up = () => setIsDown(false);

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [x, y, tX, tY, tW, tH, easeOutQuad]);

  if (isTouch) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[999]" aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full block" />

      {/* Main outer glow track ring - stays visible as a sleek focal spot when locked over buttons */}
      <motion.div
        className="absolute rounded-full"
        style={{
          left: springX,
          top: springY,
          x: "-50%",
          y: "-50%",
          width: target ? 16 : isDown ? 50 : 80, 
          height: target ? 16 : isDown ? 50 : 80,
          background: target 
            ? "radial-gradient(circle, rgba(34,211,238,0.8) 0%, rgba(34,211,238,0.2) 60%, transparent 100%)"
            : "radial-gradient(circle, rgba(108,92,231,0.45) 0%, rgba(34,211,238,0.2) 55%, rgba(34,211,238,0) 75%)",
          filter: target ? "none" : "blur(6px)",
          transition: "width 0.2s cubic-bezier(0.25, 1, 0.5, 1), height 0.2s cubic-bezier(0.25, 1, 0.5, 1)",
        }}
      />
      
      {/* Central focus alignment point */}
      <motion.div
        className="absolute rounded-full bg-[var(--cyan)]"
        style={{
          left: springX,
          top: springY,
          x: "-50%",
          y: "-50%",
          width: 6,
          height: 6,
        }}
      />

      {/* Target Reticle Brackets */}
      <motion.div
        className="absolute"
        style={{ left: tX, top: tY, width: tW, height: tH, opacity: target ? 1 : 0, transition: "opacity 0.2s ease" }}
      >
        {[
          "top-0 left-0 border-t-2 border-l-2",
          "top-0 right-0 border-t-2 border-r-2",
          "bottom-0 left-0 border-b-2 border-l-2",
          "bottom-0 right-0 border-b-2 border-r-2",
        ].map((pos, i) => (
          <span key={i} className={`absolute h-3 w-3 ${pos} border-[var(--cyan)] rounded-[2px]`} />
        ))}
      </motion.div>
    </div>
  );
}