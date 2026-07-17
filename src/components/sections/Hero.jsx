import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import RotatingText from "../effects/RotatingText";
import ModelViewer from "../effects/ModelViewer";
import Magnet from "../effects/Magnet";
import { profile } from "../../data/portfolioData";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center px-6 pt-28 md:px-10"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Left: About / Intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div id="about" className="relative -top-24" />

          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-[var(--cyan)]">
            Hi, I'm
          </p>

          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          <h2 className="mt-4 font-display text-xl text-[var(--muted)] sm:text-2xl">
            <RotatingText words={profile.rotatingRoles} />
          </h2>

          <div className="mt-8 max-w-xl space-y-3 text-[15px] leading-relaxed text-[var(--muted)]">
            {profile.about.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            {/* Resume Button */}
            <Magnet>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                download
                className="cursor-target rounded-full bg-gradient-to-r from-[var(--violet)] to-[var(--cyan)] px-6 py-3 text-sm font-semibold text-black"
              >
                View Resume
              </a>
            </Magnet>

            {/* Contact Button */}
            <Magnet strength={0.3}>
              <a
                href="#contact"
                className="cursor-target rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-[var(--text)]"
              >
                Get in Touch
              </a>
            </Magnet>
          </div>
        </motion.div>

        {/* Right: 3D Model */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-[340px] sm:h-[420px] md:h-[480px]"
        >
          <ModelViewer className="h-full w-full" />
        </motion.div>
      </div>
    </section>
  );
}