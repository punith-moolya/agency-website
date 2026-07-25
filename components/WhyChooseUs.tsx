"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyChooseUs } from "@/lib/content";

export function WhyChooseUs() {
  return (
    <section className="relative py-24 md:py-32 bg-transparent overflow-hidden">
      {/* Subtle ambient glow to elevate the section from the grid */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4DA8FF]/5 blur-[120px]" />

      <Container className="relative">
        <SectionHeading 
          eyebrow="Why Effexia" 
          title="Why Brands Choose Effexia" 
          description="We don't just deliver services; we deliver measurable momentum. Here is what sets our approach apart."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:border-[#4DA8FF]/30 hover:bg-white/[0.06] hover:shadow-[0_20px_40px_rgba(77,168,255,0.08)]"
            >
              {/* Subtle corner glow that appears on hover */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#4DA8FF]/0 blur-3xl transition-all duration-700 group-hover:bg-[#4DA8FF]/10" />

              {/* Icon Container with Sky-Blue Glow */}
              <motion.div 
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-[#4DA8FF]/20 bg-[#4DA8FF]/10 text-[#4DA8FF] shadow-[0_0_20px_rgba(77,168,255,0.1)] transition-all duration-500 group-hover:scale-110 group-hover:border-[#4DA8FF]/40 group-hover:bg-[#4DA8FF]/15 group-hover:shadow-[0_0_30px_rgba(77,168,255,0.25)]"
              >
                <item.icon size={24} strokeWidth={1.5} />
              </motion.div>

              {/* Title */}
              <h3 className="font-display text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#4DA8FF]">
                {item.title}
              </h3>

              {/* Divider Line (expands on hover) */}
              <div className="my-4 h-px w-12 bg-gradient-to-r from-[#4DA8FF]/50 to-transparent transition-all duration-500 group-hover:w-20" />

              {/* Description */}
              <p className="text-sm leading-relaxed text-[#A1A1AA] transition-colors duration-300 group-hover:text-[#D4D4D8]">
                {item.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#4DA8FF] to-transparent transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}