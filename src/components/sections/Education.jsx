import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "../effects/ScrollReveal";
import { education } from "../../data/portfolioData";

export default function Education() {
  const containerRef = useRef(null);
  
  // Track scroll position over the component viewport fold
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 50%"],
  });
  
  // Map scroll progress to a clean percentage for the CSS height
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const lineHeight = useTransform(pathLength, (v) => `${v * 100}%`);

  // education array is oldest -> newest. Reversing it keeps B.E. at the top layout position.
  const stepsTopDown = [...education].reverse();

  return (
    <section id="education" className="relative px-6 py-28 md:px-10" ref={containerRef}>
      <div className="mx-auto max-w-2xl">
        <ScrollReveal>
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--cyan)]">
            Trajectory
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Education</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Tracking milestones down the page — the journey so far.
          </p>
        </ScrollReveal>

        <div className="relative mt-16 pl-10">
          {/* Faint static full-height track layout line */}
          <div className="absolute left-[7px] top-0 h-full w-[2px] rounded-full bg-white/8" />
          
          {/* Animated gradient beam that now strikes downward from the top */}
          <motion.div
            className="absolute left-[7px] top-0 w-[2px] rounded-full"
            style={{
              height: lineHeight,
              background: "linear-gradient(to bottom, var(--violet), var(--cyan))",
              transformOrigin: "top", // Pin origin to top so height pushes downward
            }}
          />

          <div className="flex flex-col gap-16">
            {stepsTopDown.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.05}>
                <div className="relative">
                  {/* Node point accent lighting matching the theme */}
                  <span className="absolute -left-10 top-1.5 flex h-4 w-4 items-center justify-center">
                    <span className="h-3 w-3 rounded-full bg-[var(--cyan)] shadow-[0_0_14px_var(--cyan)]" />
                  </span>
                  <p className="font-mono text-xs text-[var(--cyan)]">{item.period}</p>
                  <p className="mt-1 font-display text-lg font-semibold">{item.level}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{item.institution}</p>
                  <p className="mt-2 text-sm font-medium">{item.detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}