export default function SpotlightCard({ children, className = "" }) {
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      onMouseMove={handleMove}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] ${className}`}
    >
      {/* spotlight overlay, positioned via inline vars set on mousemove */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(320px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(108,92,231,0.18), transparent 70%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
