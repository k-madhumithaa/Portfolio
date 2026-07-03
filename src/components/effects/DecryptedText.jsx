import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%_/\\";
export default function DecryptedText({
  text,
  className = "",
  speed = 40,
  revealDelayPerChar = 45,
  startDelay = 50,
}) {
  const [display, setDisplay] = useState(text);
  const containerRef = useRef(null);
  const isAnimating = useRef(false);

  const triggerScramble = () => {
    if (isAnimating.current) return;

    isAnimating.current = true;

    const startTime = performance.now();

    const interval = setInterval(() => {
      const elapsed = performance.now() - startTime;

      let finished = true;

      const next = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";

          if (elapsed >= i * revealDelayPerChar) {
            return text[i];
          }

          finished = false;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplay(next);

      if (finished) {
        clearInterval(interval);
        setDisplay(text);
        isAnimating.current = false;
      }
    }, speed);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(text);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(triggerScramble, startDelay);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [text, startDelay]);

  return (
    <span
      ref={containerRef}
      onMouseEnter={triggerScramble}
      className={`font-mono tracking-wide ${className}`}
    >
      {display}
    </span>
  );
}