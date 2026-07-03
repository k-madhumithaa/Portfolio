/**
 * A gradient "sheen" sweeps across the text on a loop (pure CSS,
 * background-clip: text). Cheap, GPU-friendly, works for nav links/labels.
 */
export default function ShinyText({ text, className = "", speed = 3.5 }) {
  return (
    <span
      className={`shiny-text ${className}`}
      style={{ "--shiny-duration": `${speed}s` }}
    >
      {text}
    </span>
  );
}
