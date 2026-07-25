"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import { Container } from "@/components/ui/Container";

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    body: "To empower businesses with innovative branding, creative content, and digital marketing strategies that inspire audiences, strengthen customer relationships, and accelerate sustainable growth.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    body: "To become a leading creative force that redefines how brands connect, communicate, and grow — known for craftsmanship, strategy, and work that consistently moves the needle.",
  },
];

export function MissionVision() {
  return (
    <section className="relative py-24 md:py-32 bg-transparent">
      {/* Subtle ambient glow behind the cards to elevate them from the grid */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[800px] rounded-full bg-[#4DA8FF]/5 blur-[120px]" />
      </div>

      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#4DA8FF]/30 hover:bg-white/[0.07] hover:shadow-[0_20px_40px_rgba(77,168,255,0.1)] md:p-10"
            >
              {/* Hover glow sweep effect */}
              <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-[#4DA8FF]/0 via-[#4DA8FF]/0 to-[#4DA8FF]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              {/* Icon Container */}
              <motion.span 
                className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#4DA8FF]/20 bg-[#4DA8FF]/10 text-[#4DA8FF] shadow-[0_0_20px_rgba(77,168,255,0.15)] transition-all duration-500 group-hover:border-[#4DA8FF]/40 group-hover:bg-[#4DA8FF]/15 group-hover:shadow-[0_0_30px_rgba(77,168,255,0.25)]"
                whileHover={{ scale: 1.05 }}
              >
                <card.icon size={24} strokeWidth={1.5} />
              </motion.span>

              {/* Title */}
              <h3 className="font-display text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                {card.title}
              </h3>

              {/* Divider */}
              <div className="my-6 h-px w-16 bg-gradient-to-r from-[#4DA8FF]/50 to-transparent transition-all duration-500 group-hover:w-24" />

              {/* Body Text */}
              <p className="text-base leading-relaxed text-[#A1A1AA] md:text-lg">
                {card.body}
              </p>

              {/* Subtle corner accent */}
              <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-gradient-to-bl from-[#4DA8FF]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}