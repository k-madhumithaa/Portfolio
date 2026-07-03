import { Mail, ArrowUp } from "lucide-react";
import { GithubMark, LinkedinMark } from "../effects/BrandIcons";
import { profile } from "../../data/portfolioData";

const LINKS = [
  { label: "GitHub", href: profile.github, icon: GithubMark, external: true },
  { label: "LinkedIn", href: profile.linkedin, icon: LinkedinMark, external: true },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail, external: false },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="font-mono text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} {profile.name}
        </p>

        <div className="flex items-center gap-4">
          {LINKS.map(({ label, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              aria-label={label}
              title={label}
              className="cursor-target flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[var(--muted)] transition-colors hover:border-[var(--cyan)]/50 hover:text-[var(--cyan)]"
            >
              <Icon size={17} />
            </a>
          ))}
          <a
            href="#top"
            aria-label="Back to top"
            title="Back to top"
            className="cursor-target flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[var(--muted)] transition-colors hover:border-[var(--cyan)]/50 hover:text-[var(--cyan)]"
          >
            <ArrowUp size={17} strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </footer>
  );
}
