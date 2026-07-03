export default function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`glass-hover rounded-2xl border border-white/10 p-8 ${className}`}
      style={{
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }}
    >
      {children}
    </div>
  );
}
