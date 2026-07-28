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
   Floating Cube Component
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
  const [selectedTopic, setSelectedTopic] = useState("General Inquiry");

  const topics = [
    "Branding",
    "Video Production",
    "Website Design",
    "Digital Marketing",
    "General Inquiry",
  ];

  // Dynamically generate WhatsApp link based on selected topic
  const whatsappNumber = "917306107181";
  const whatsappMessage = encodeURIComponent(
    `Hi Ads by Effexia, I'm interested in discussing a ${selectedTopic} project. Please let me know the next steps!`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xpqvoypy", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("sent");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
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
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] sm:p-10">
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
                  <h3 className="font-display text-2xl font-bold text-white">Message Received!</h3>
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
                      <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  </motion.button>
                </form>
              )}

              {/* ─── QUICK CONNECT SECTION ─── */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-sm font-medium text-[#A1A1AA] mb-4 text-center">
                  Or connect with us instantly:
                </p>
                
                {/* Topic Selector Chips */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {topics.map((topic) => (
                    <button
                      key={topic}
                      onClick={() => setSelectedTopic(topic)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border ${
                        selectedTopic === topic
                          ? "bg-[#4DA8FF]/20 border-[#4DA8FF]/50 text-[#4DA8FF]"
                          : "bg-white/5 border-white/10 text-[#A1A1AA] hover:border-white/30 hover:text-white"
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:bg-[#20bd5a] hover:shadow-[0_0_20px_rgba(37,211,102,0.3)]"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    WhatsApp
                  </a>
                  <a
                    href="tel:+917306107181"
                    className="group flex items-center justify-center gap-2 rounded-xl border border-[#4DA8FF]/30 bg-[#4DA8FF]/10 px-4 py-3.5 text-sm font-bold text-[#4DA8FF] transition-all duration-300 hover:bg-[#4DA8FF]/20 hover:shadow-[0_0_20px_rgba(77,168,255,0.2)]"
                  >
                    <Phone className="h-5 w-5" />
                    Call Now
                  </a>
                </div>
              </div>

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