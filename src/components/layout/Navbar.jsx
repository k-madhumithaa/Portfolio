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
  const [isOpen, setIsOpen] = useState(false); // Controls mobile hamburger expansion

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
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Closes mobile panel when click selection anchors fire
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || isOpen
          ? "backdrop-blur-md bg-[rgba(5,6,11,0.75)] border-b border-white/5"
          : ""
      }`}
    >
      <nav className="flex w-full items-center justify-between px-5 py-5 md:px-8">
        {/* Logo */}
        <a
          href="#top"
          className="cursor-target text-lg md:text-xl z-50"
          data-cursor-pad="10"
          onClick={handleLinkClick}
        >
          <DecryptedText
            text="K Madhumitha"
            className="font-display font-semibold"
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden gap-8 md:flex">
          {LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="cursor-target"
                  data-cursor-pad="10"
                >
                  <div
                    className={`transition-all duration-300 ${
                      isActive ? "scale-105" : "scale-100"
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

        {/* Mobile Hamburger Trigger Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-[var(--text)] md:hidden z-50"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? (
            /* "X" Close State SVG */
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            /* Hamburger State SVG */
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        {/* Vertical Mobile Drawer Layer Overlay */}
        <div
          className={`fixed inset-x-0 top-[73px] -z-10 h-[calc(100vh-73px)] bg-[var(--bg)]/95 backdrop-blur-lg transition-all duration-300 ease-in-out md:hidden flex flex-col items-center justify-center px-6 ${
            isOpen 
              ? "opacity-100 translate-y-0 pointer-events-auto" 
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col gap-8 text-center">
            {LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block text-xl uppercase tracking-widest font-semibold transition-colors duration-200"
                    style={{
                      color: isActive ? "var(--cyan)" : "var(--muted)",
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}