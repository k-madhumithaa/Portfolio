/**
 * Renders the hero 3D model via Google's <model-viewer> web component.
 */
export default function ModelViewer({
  src = "/models/hero-model.glb",
  alt = "3D model",
  className = "",
}) {
  return (
    <div
      className={`relative ${className}`}
      style={{ cursor: "none" }}
    >
      {/* Ambient glow behind the model */}
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, var(--violet) 0%, var(--cyan) 55%, transparent 75%)",
        }}
      />

      <model-viewer
        src={src}
        alt={alt}
        camera-controls
        auto-rotate
        rotation-per-second="16deg"
        interaction-prompt="none"
        shadow-intensity="0.6"
        exposure="1.05"
        environment-image="neutral"
        style={{
          width: "100%",
          height: "100%",
          background: "transparent",
          cursor: "none",
        }}
      />
    </div>
  );
}