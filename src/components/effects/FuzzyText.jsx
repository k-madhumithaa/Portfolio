import { useEffect, useRef } from "react";

export default function FuzzyText({
  text,
  fontSize = 96,
  color = "#e9eaf0",
  fuzzRange = 6,
  className = "",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = window.devicePixelRatio || 1;

    const font = `700 ${fontSize}px "Space Grotesk", sans-serif`;
    ctx.font = font;
    const metrics = ctx.measureText(text);
    const width = Math.ceil(metrics.width) + fuzzRange * 4;
    const height = fontSize * 1.4;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    let raf;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.font = font;
      ctx.textBaseline = "middle";
      const baseY = height / 2;
      let cursorX = fuzzRange * 2;

      for (const ch of text) {
        const jitter = reduced ? 0 : (Math.random() - 0.5) * fuzzRange;
        ctx.fillStyle = color;
        ctx.fillText(ch, cursorX, baseY + jitter);
        cursorX += ctx.measureText(ch).width;
      }
      if (!reduced) raf = requestAnimationFrame(draw);
    };

    draw();
    return () => raf && cancelAnimationFrame(raf);
  }, [text, fontSize, color, fuzzRange]);

  return <canvas ref={canvasRef} className={className} />;
}
