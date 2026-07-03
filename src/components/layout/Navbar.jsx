import { useEffect, useState } from "react";
import DecryptedText from "../effects/DecryptedText";
import ShinyText from "../effects/ShinyText";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      let currentSection = "about";

      LINKS.forEach((link) => {
        const section = document.querySelector(link.href);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          currentSection = link.href.substring(1);
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Run once on page load
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-[rgba(5,6,11,0.6)] border-b border-white/5"
          : ""
      }`}
    >
      <nav className="flex w-full items-center justify-between px-5 py-5 md:px-8">
        {/* Logo */}
        <a
          href="#top"
          className="cursor-target text-lg md:text-xl"
          data-cursor-pad="10"
        >
          <DecryptedText
            text="K Madhumitha"
            className="font-display font-semibold"
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden gap-8 md:flex">
          {LINKS.map((link) => {
            const isActive =
              activeSection === link.href.replace("#", "");

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="cursor-target"
                  data-cursor-pad="10"
                >
                  <div
                    className={`transition-all duration-300 ${
                      isActive
                        ? "scale-105"
                        : "scale-100"
                    }`}
                    style={
                      isActive
                        ? {
                            color: "var(--cyan)",
                            textShadow:
                              "0 0 6px rgba(34,211,238,0.6), 0 0 18px rgba(34,211,238,0.35)",
                          }
                        : {}
                    }
                  >
                    <ShinyText
                      text={link.label}
                      className="text-sm font-medium uppercase tracking-wider"
                    />
                  </div>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Navigation */}
        <ul className="flex gap-4 md:hidden">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs uppercase tracking-wide text-[var(--muted)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}