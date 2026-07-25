"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { images } from "@/lib/images";
import { portfolioFilters } from "@/lib/content";

export function Portfolio() {
  const [active, setActive] = useState("All");

  const projects =
    active === "All"
      ? images.portfolio
      : images.portfolio.filter((p) => p.category === active);

  return (
    <section id="work" className="relative py-24 md:py-32 bg-transparent">
      <Container>
        {/* Header & Filters */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <SectionHeading
              eyebrow="Selected Work"
              title="Featured Projects"
              description="A snapshot of the kind of work we do — crafted with precision, strategy, and an eye for lasting impact."
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {portfolioFilters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActive(filter)}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300",
                  active === filter
                    ? "border-[#4DA8FF]/50 bg-[#4DA8FF]/10 text-[#4DA8FF] shadow-[0_0_20px_rgba(77,168,255,0.15)]"
                    : "border-white/10 bg-white/5 text-[#A1A1AA] hover:border-white/30 hover:text-white hover:bg-white/10"
                )}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-black transition-all duration-500 hover:border-[#4DA8FF]/30 hover:shadow-[0_20px_40px_rgba(77,168,255,0.1)]"
              >
                {/* Clear, Vibrant Image */}
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Subtle gradient overlay that ONLY appears on hover for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Glassmorphic Info Panel (Slides up on hover) */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="rounded-xl border border-white/10 bg-black/60 p-4 backdrop-blur-md shadow-lg">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#4DA8FF]">
                      {project.category}
                    </p>
                    <div className="mt-2 flex items-center justify-between gap-3">
                      <h3 className="font-display text-lg font-bold text-white leading-tight">
                        {project.title}
                      </h3>
                      <motion.span 
                        className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-[#4DA8FF]/30 bg-[#4DA8FF]/10 text-[#4DA8FF] transition-all duration-300 group-hover:bg-[#4DA8FF] group-hover:text-black group-hover:shadow-[0_0_15px_rgba(77,168,255,0.4)]"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ArrowUpRight size={18} strokeWidth={2} />
                      </motion.span>
                    </div>
                  </div>
                </div>

                {/* Optional: Subtle corner shine on hover */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#4DA8FF]/0 blur-3xl transition-all duration-700 group-hover:bg-[#4DA8FF]/10" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}