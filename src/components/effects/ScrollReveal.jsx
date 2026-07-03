import { motion } from "framer-motion";

/**
 * Wrap any section/child in this to get a consistent scroll-triggered
 * reveal: gradual blur-out + fade + slight rise. Uses viewport-based
 * animation so it replays are avoided (once: true) and respects
 * prefers-reduced-motion via the global CSS override.
 */
export default function ScrollReveal({
  children,
  delay = 0,
  y = 28,
  blur = 10,
  className = "",
  as = "div",
}) {
  const Comp = motion[as] || motion.div;

  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y, filter: `blur(${blur}px)` }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
}
