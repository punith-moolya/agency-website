"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { values } from "@/lib/content";

export function Values() {
  return (
    <section className="relative py-24 md:py-32 bg-transparent overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4DA8FF]/5 blur-[120px]" />

      <Container className="relative">
        <SectionHeading 
          eyebrow="What Drives Us" 
          title="Our Values" 
          description="The principles that guide every decision, every pixel, and every partnership."
        />

        <div className="mt-16">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative border-t border-white/10 py-10 transition-all duration-500 hover:border-[#4DA8FF]/30 last:border-b"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8 items-start">
                {/* Large Number */}
                <div className="md:col-span-2">
                  <span className="font-display text-5xl font-bold text-white/10 transition-colors duration-500 group-hover:text-[#4DA8FF]/40 md:text-6xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Icon + Title */}
                <div className="md:col-span-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#4DA8FF]/20 bg-[#4DA8FF]/10 text-[#4DA8FF] transition-all duration-500 group-hover:border-[#4DA8FF]/40 group-hover:bg-[#4DA8FF]/15 group-hover:shadow-[0_0_20px_rgba(77,168,255,0.2)]">
                    <value.icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                    {value.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-6">
                  <p className="text-base leading-relaxed text-[#A1A1AA] transition-colors duration-300 group-hover:text-[#D4D4D8]">
                    {value.description}
                  </p>
                </div>
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#4DA8FF] to-transparent transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}