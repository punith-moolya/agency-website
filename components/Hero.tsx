"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

// Create a motion-enabled Link component for smooth Next.js routing
const MotionLink = motion(Link);

/* ─────────────────────────────────────────────
   Animation Variants
   ───────────────────────────────────────────── */
const textRevealVariants = {
  hidden: { y: "105%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 * i },
  }),
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, x: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 },
  },
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.8 } },
};

const serviceItemVariants = {
  hidden: { opacity: 0, x: 16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

/* ─────────────────────────────────────────────
   Service Item (Arrow Removed)
   ───────────────────────────────────────────── */
const services = [
  { label: "Website Development", icon: "◈" },
  { label: "SEO Optimization", icon: "◎" },
  { label: "Brand Identity", icon: "◇" },
  { label: "Motion Design", icon: "△" },
];

function ServiceItem({ label, icon }: { label: string; icon: string }) {
  return (
    <motion.div
      variants={serviceItemVariants}
      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
      transition={{ duration: 0.25 }}
      className="group relative flex items-center gap-3 rounded-sm px-3 py-3 cursor-pointer transition-colors"
    >
      <span className="text-white/60 text-sm transition-colors duration-300 group-hover:text-white">
        {icon}
      </span>
      <span className="text-sm font-medium text-white/70 transition-colors duration-300 group-hover:text-white">
        {label}
      </span>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Hero Component
   ───────────────────────────────────────────── */
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const headingLines = ["Build.", "Market.", "Grow."];

  return (
    <section ref={sectionRef} className="relative mt-20 px-4 sm:px-6 lg:px-8 pb-8">
      <motion.div
        className="relative overflow-hidden rounded-[32px] min-h-[80vh] flex flex-col justify-center"
        style={{ scale, opacity }}
      >
        {/* VIDEO BACKGROUND */}
        <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
          >
            <source src="/videos/hero9.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Minimal dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/20" />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col justify-center px-6 py-16 sm:px-12 lg:flex-row lg:items-center lg:justify-between lg:px-20">
          
          {/* LEFT: Typography */}
          <motion.div className="max-w-2xl" style={{ y: textY }}>
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.2}
              variants={fadeUpVariants}
              className="mb-6 flex items-center gap-3"
            >
              <div className="h-px w-8 bg-white/50" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
                Digital Agency
              </span>
            </motion.div>

            <h1 className="mb-6 overflow-hidden">
              {headingLines.map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.span
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={textRevealVariants}
                    className="block text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[0.95] tracking-tight text-white"
                  >
                    {line}
                  </motion.span>
                </div>
              ))}
            </h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.7}
              variants={fadeUpVariants}
              className="mb-8 max-w-md text-base leading-relaxed text-white/80 sm:text-lg"
            >
              We craft high-performance digital experiences that drive measurable growth and leave lasting impressions.
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.9}
              variants={fadeUpVariants}
              className="flex flex-wrap items-center gap-4"
            >
              {/* Button 1: Goes to Contact Section */}
              <MotionLink
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group relative overflow-hidden rounded-sm bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 inline-flex items-center"
              >
                <span className="relative flex items-center gap-2">
                  Start Your Project
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </MotionLink>

              {/* Button 2: Goes to Services Section */}
              <MotionLink
                href="#services"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-sm border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white/50 inline-block text-center"
              >
                View Our Work
              </MotionLink>
            </motion.div>
          </motion.div>

          {/* RIGHT: Service Card */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="mt-12 w-full max-w-[360px] lg:mt-0"
          >
            <div className="rounded-md border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.6 }} className="mb-5">
                <h3 className="text-lg font-semibold text-white">Our Services</h3>
                <p className="mt-1 text-xs text-white/60">Everything you need to launch & scale</p>
              </motion.div>

              <div className="mb-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <motion.div variants={staggerChildren} initial="hidden" animate="visible" className="space-y-1">
                {services.map((service) => (
                  <ServiceItem key={service.label} label={service.label} icon={service.icon} />
                ))}
              </motion.div>

              <div className="my-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {/* Get Started Button (Arrow kept here) */}
              <MotionLink
                href="#contact"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center rounded-sm border border-white/20 bg-white/10 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white/20 hover:border-white/30"
              >
                Get Started →
              </MotionLink>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}