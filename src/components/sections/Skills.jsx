import ScrollReveal from "../effects/ScrollReveal";
import LogoLoop from "../effects/LogoLoop";
import { skills } from "../../data/portfolioData";

const ROWS = [
  { label: "Languages", items: skills.languages, speed: 32, reverse: false },
  { label: "Frameworks & ML", items: skills.frameworks, speed: 34, reverse: true },
  { label: "Databases", items: skills.databases, speed: 26, reverse: false },
  { label: "Tools", items: skills.tools, speed: 30, reverse: true },
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28 md:px-10">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--cyan)]">
            Toolkit
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Skills</h2>
        </ScrollReveal>

        <div className="mt-14 space-y-8">
          {ROWS.map((row, i) => (
            <ScrollReveal key={row.label} delay={i * 0.08}>
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
                {row.label}
              </p>
              <LogoLoop items={row.items} speed={row.speed} reverse={row.reverse} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
