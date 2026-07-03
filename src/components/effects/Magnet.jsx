import { useRef } from "react";
import { motion, useSpring } from "framer-motion";

export default function Magnet({ children, strength = 0.35, range = 80, className = "" }) {
  const ref = useRef(null);
  const spring = { stiffness: 200, damping: 18, mass: 0.5 };
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    if (dist < range) {
      x.set(dx * strength);
      y.set(dy * strength);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x, y }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
