import { ImageIcon, ExternalLink } from "lucide-react";
import ScrollReveal from "../effects/ScrollReveal";
import ElectricBorder from "../effects/ElectricBorder";
import GlassCard from "../effects/GlassCard";
import { GithubMark } from "../effects/BrandIcons"; // Use your existing high-quality brand SVG
import { projects } from "../../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--cyan)]">
            Built things
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Projects</h2>
        </ScrollReveal>

        <div className="mt-14 grid items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 0.08} className="h-full">
              {/* Dynamic lightning border canvas wrap */}
              <ElectricBorder color="var(--cyan)" chaos={0.07} speed={0.8} borderRadius={16} className="h-full">
                <GlassCard className="cursor-target flex h-full flex-col p-0 glass-hover overflow-hidden relative group/card">
                  
                  {/* Image Display Shell */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/10 bg-black/40">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={`${p.name} screenshot`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-102"
                      />
                    ) : (
                      <div
                        className="flex h-full w-full flex-col items-center justify-center gap-2"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(108,92,231,0.1), rgba(34,211,238,0.05))",
                        }}
                      >
                        <ImageIcon size={22} className="text-[var(--muted)]" />
                        <span className="font-mono text-[11px] text-[var(--muted)]">
                          preview coming soon
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Text Details & Layout Stack */}
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                      <span className="shrink-0 font-mono text-xs text-[var(--muted)]">
                        {p.period}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                      {p.description}
                    </p>

                    <ul className="mt-4 space-y-1.5 mb-6">
                      {p.points.map((pt, j) => (
                        <li key={j} className="flex gap-2 text-sm text-[var(--muted)]">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--cyan)]" />
                          {pt}
                        </li>
                      ))}
                    </ul>

                    {/* Footer Row: Meta details + Interactive External Action Links */}
                    <div className="mt-auto pt-5 border-t border-white/5 flex items-center justify-between gap-4">
                      {/* Tech stack inline tags */}
                      <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                        {p.stack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-0.5 font-mono text-[10px] text-[var(--muted)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Animated Shortcut Icon Anchors */}
                      <div className="flex items-center gap-2.5 shrink-0">
                        {p.github && (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noreferrer"
                            title="View Source on GitHub"
                            aria-label="View Source on GitHub"
                            className="cursor-target flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[var(--muted)] transition-all duration-300 hover:border-[var(--cyan)]/40 hover:text-[var(--cyan)] hover:bg-white/[0.03]"
                            data-cursor-pad="4"
                          >
                            <GithubMark size={16} />
                          </a>
                        )}
                        {p.live && (
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noreferrer"
                            title="Launch Live Demo"
                            aria-label="Launch Live Demo"
                            className="cursor-target flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[var(--muted)] transition-all duration-300 hover:border-[var(--cyan)]/40 hover:text-[var(--cyan)] hover:bg-white/[0.03]"
                            data-cursor-pad="4"
                          >
                            <ExternalLink size={16} strokeWidth={2} />
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </GlassCard>
              </ElectricBorder>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}