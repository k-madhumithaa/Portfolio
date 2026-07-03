import { useEffect, useRef } from "react";

/**
 * Fixed, full-viewport galaxy backdrop: a drifting starfield with soft
 * twinkle plus two ambient nebula glows (violet + cyan) in the corners.
 * Pure canvas, no deps. Pauses entirely when prefers-reduced-motion is set.
 */
export default function GalaxyBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let stars = [];
    let w, h;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      const density = w < 640 ? 0.00012 : 0.00018;
      const count = Math.floor(w * h * density);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.3 + 0.2,
        baseAlpha: Math.random() * 0.6 + 0.2,
        twinkleSpeed: Math.random() * 0.015 + 0.005,
        phase: Math.random() * Math.PI * 2,
        driftX: (Math.random() - 0.5) * 0.02,
        driftY: (Math.random() - 0.5) * 0.02,
      }));
    };

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        if (!reduced) {
          s.phase += s.twinkleSpeed;
          s.x += s.driftX;
          s.y += s.driftY;
          if (s.x < 0) s.x = w;
          if (s.x > w) s.x = 0;
          if (s.y < 0) s.y = h;
          if (s.y > h) s.y = 0;
        }
        const alpha = reduced
          ? s.baseAlpha
          : s.baseAlpha * (0.6 + 0.4 * Math.sin(s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(233,234,240,${alpha})`;
        ctx.fill();
      }
      if (!reduced) raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    draw(0);
    if (reduced) draw(0); // paint once, static

    return () => {
      window.removeEventListener("resize", resize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[var(--bg)]">
      {/* Nebula glows */}
      <div
        className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full opacity-30 blur-[110px]"
        style={{ background: "radial-gradient(circle, var(--violet), transparent 70%)" }}
      />
      <div
        className="absolute -bottom-40 -right-32 h-[560px] w-[560px] rounded-full opacity-25 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--cyan), transparent 70%)" }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {/* subtle vignette so foreground text stays readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(5,6,11,0.6) 100%)",
        }}
      />
    </div>
  );
}
