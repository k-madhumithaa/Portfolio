import { useState } from "react";

/**
 * Seamless infinite marquee: renders the item list twice back-to-back and
 * animates the whole track left by exactly one copy's width (CSS keyframe,
 * defined per-instance so speed/direction can vary).
 */
export default function LogoLoop({ items, speed = 28, reverse = false, className = "" }) {
  const [paused, setPaused] = useState(false);
  const dir = reverse ? "reverse" : "normal";

  return (
    <div
      className={`group relative overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className="flex w-max gap-10"
        style={{
          animation: `logo-loop ${speed}s linear infinite`,
          animationDirection: dir,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {[...items, ...items].map((label, i) => (
          <span
            key={i}
            className="cursor-target flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 font-mono text-sm text-[var(--text)]"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
