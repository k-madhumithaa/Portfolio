import { useState } from "react";
import emailjs from "@emailjs/browser";
import ScrollReveal from "../effects/ScrollReveal";
import GlassCard from "../effects/GlassCard";
import { supabase } from "../../config/supabaseClient"; // Imports your new client config

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      // 1. SAVE TO THE SUPABASE DATABASE LOGS
      const { error: dbError } = await supabase
        .from("contacts")
        .insert([
          { 
            name: form.name, 
            email: form.email, 
            message: form.message 
          }
        ]);

      if (dbError) throw new Error(`Database Error: ${dbError.message}`);

      // 2. DISPATCH EMAIL VIA EMAILJS
      // Paste your exact strings from the EmailJS dashboard here
      const SERVICE_ID = "service_adgubst";
      const TEMPLATE_ID = "template_tu8chat";
      const PUBLIC_KEY = "p97fif80PPElVdHrw";

      const templateParams = {
        from_name: form.name,
        reply_to: form.email,
        message: form.message,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      // Clean form inputs upon successful delivery
      setForm({ name: "", email: "", message: "" });
      setStatus({ loading: false, success: "Message transmitted into orbit successfully!", error: null });
    } catch (err) {
      console.error(err);
      setStatus({ 
        loading: false, 
        success: null, 
        error: "Transmission broken. Please reach out via linked social tags below." 
      });
    }
  };

  return (
    <section id="contact" className="relative px-6 py-28 md:px-10">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--cyan)]">
            Say hello
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Contact Me</h2>
          <p className="mt-3 max-w-lg text-sm text-[var(--muted)]">
            Have a project, internship, or idea in mind? I'd love to hear about it.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <GlassCard className="mt-10">
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs uppercase tracking-wide text-[var(--muted)]">
                    Name
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="cursor-target w-full rounded-lg border border-white/10 bg-black/20 px-4 py-2.5 text-sm outline-none focus:border-[var(--cyan)]"
                    placeholder="Your name"
                    disabled={status.loading}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs uppercase tracking-wide text-[var(--muted)]">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="cursor-target w-full rounded-lg border border-white/10 bg-black/20 px-4 py-2.5 text-sm outline-none focus:border-[var(--cyan)]"
                    placeholder="you@example.com"
                    disabled={status.loading}
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-wide text-[var(--muted)]">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="cursor-target w-full resize-none rounded-lg border border-white/10 bg-black/20 px-4 py-2.5 text-sm outline-none focus:border-[var(--cyan)]"
                  placeholder="Tell me a bit about it..."
                  disabled={status.loading}
                />
              </div>
              
              <div className="flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={status.loading}
                  className="cursor-target justify-self-start rounded-full bg-gradient-to-r from-[var(--violet)] to-[var(--cyan)] px-7 py-3 text-sm font-semibold text-black transition-opacity disabled:opacity-50"
                >
                  {status.loading ? "Sending..." : "Send Message"}
                </button>

                {status.success && (
                  <p className="text-sm text-[var(--cyan)] font-mono">{status.success}</p>
                )}
                {status.error && (
                  <p className="text-sm text-red-400 font-mono">{status.error}</p>
                )}
              </div>
            </form>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}