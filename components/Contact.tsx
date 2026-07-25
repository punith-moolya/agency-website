"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Instagram, MapPin, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";

const contactDetails = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 7306107181",
    href: "tel:+917306107181",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "adsbyeffexia@gmail.com",
    href: "mailto:adsbyeffexia@gmail.com",
  },
  {
    icon: Instagram,
    label: "Follow Us",
    value: "@adsbyeffexia",
    href: "https://instagram.com/adsbyeffexia",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Mallappally, Pathanamthitta, Kerala",
    href: "https://maps.google.com",
  },
];

/* ─────────────────────────────────────────────
   Floating Cube Component (Reused from About)
   ───────────────────────────────────────────── */
function FloatingCube({ size, top, left, delay, duration, rotate = 0 }: { size: number; top: string; left: string; delay: number; duration: number; rotate?: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ top, left }}
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: delay * 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        style={{ width: size, height: size, rotate: `${rotate}deg` }}
        animate={{
          y: [0, -12, 0],
          x: [0, 6, 0],
          rotate: [`${rotate}deg`, `${rotate + 4}deg`, `${rotate}deg`],
        }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
        className="relative rounded-2xl border border-[#4DA8FF]/20 bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_rgba(77,168,255,0.1)]"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4DA8FF]/10 to-transparent" />
        <motion.div
          className="absolute -inset-2 rounded-3xl bg-[#4DA8FF]/10 blur-xl"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: duration * 0.8, repeat: Infinity, ease: "easeInOut", delay }}
        />
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Main Contact Component
   ───────────────────────────────────────────── */
export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
    // Reset after 4 seconds for demo purposes
    setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-transparent overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[600px] w-[600px] rounded-full bg-[#4DA8FF]/5 blur-[120px]" />
      
      {/* Floating Cubes */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingCube size={64} top="15%" left="5%" delay={0} duration={8} rotate={12} />
        <FloatingCube size={48} top="60%" left="85%" delay={1.5} duration={9} rotate={-15} />
        <FloatingCube size={80} top="75%" left="15%" delay={2.5} duration={10} rotate={-8} />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          
          {/* ─── LEFT: Info & Contact Details ─── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#4DA8FF]">
                Get In Touch
              </span>
              <h2 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl">
                Let&apos;s Build Something{" "}
                <span className="bg-gradient-to-r from-[#4DA8FF] to-[#2D6BFF] bg-clip-text text-transparent">
                  Extraordinary
                </span>
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-[#A1A1AA]">
                Ready to elevate your brand? Let&apos;s create impactful experiences that fuel your business growth. Reach out, and let&apos;s start the conversation.
              </p>
            </motion.div>

            <ul className="mt-12 space-y-4">
              {contactDetails.map((detail, i) => (
                <motion.li
                  key={detail.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  {detail.href ? (
                    <a
                      href={detail.href}
                      target={detail.href.startsWith("http") ? "_blank" : undefined}
                      rel={detail.href.startsWith("http") ? "noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:border-[#4DA8FF]/30 hover:bg-white/[0.05]"
                    >
                      <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-[#4DA8FF]/20 bg-[#4DA8FF]/10 text-[#4DA8FF] transition-all duration-300 group-hover:border-[#4DA8FF]/40 group-hover:bg-[#4DA8FF]/15">
                        <detail.icon size={18} strokeWidth={1.5} />
                      </span>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#71717A]">
                          {detail.label}
                        </p>
                        <p className="mt-0.5 text-sm font-medium text-white transition-colors group-hover:text-[#4DA8FF]">
                          {detail.value}
                        </p>
                      </div>
                      <ArrowUpRight className="ml-auto h-4 w-4 text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#4DA8FF]" />
                    </a>
                  ) : (
                    <div className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                      <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-[#4DA8FF]/20 bg-[#4DA8FF]/10 text-[#4DA8FF]">
                        <detail.icon size={18} strokeWidth={1.5} />
                      </span>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#71717A]">
                          {detail.label}
                        </p>
                        <p className="mt-0.5 text-sm font-medium text-white">
                          {detail.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* ─── RIGHT: Glassmorphic Form ─── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Form Container */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] sm:p-10">
              
              {/* Subtle top gradient highlight */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4DA8FF]/30 to-transparent" />

              {status === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[400px] flex-col items-center justify-center gap-4 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full border border-[#4DA8FF]/30 bg-[#4DA8FF]/10 text-[#4DA8FF]"
                  >
                    <CheckCircle2 size={32} strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Message Received!
                  </h3>
                  <p className="max-w-xs text-sm text-[#A1A1AA]">
                    Thanks for reaching out. We&apos;ll get back to you shortly at the email you provided.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <FormField label="Name" name="name" placeholder="John Doe" required />
                    <FormField label="Email" name="email" type="email" placeholder="john@company.com" required />
                  </div>
                  
                  <FormField label="Project Type" name="project" placeholder="Branding, Marketing, Video..." />
                  
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[#71717A]">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us a little about your brand and goals..."
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-[#4DA8FF]/50 focus:bg-white/[0.07] focus:shadow-[0_0_20px_rgba(77,168,255,0.1)]"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#4DA8FF] px-6 py-4 text-sm font-bold text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(77,168,255,0.4)]"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Send Message
                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                    {/* Button shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Form Field Component
   ───────────────────────────────────────────── */
function FormField({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[#71717A]">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-[#4DA8FF]/50 focus:bg-white/[0.07] focus:shadow-[0_0_20px_rgba(77,168,255,0.1)]"
      />
    </div>
  );
}