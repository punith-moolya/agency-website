"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/ui/RevealText";
import { images } from "@/lib/images";
import { storyTimeline } from "@/lib/content";

export function OurStory() {
  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll progress through the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // The navigation line fills as you scroll through the section
  const lineProgress = useTransform(
    scrollYProgress,
    [0.15, 0.85],
    ["0%", "100%"],
  );

  // Ambient background glows
  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 0.25, 0.1],
  );
  const glowScale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative overflow-hidden bg-transparent py-28 md:py-40"
    >
      {/* Ambient background glow (subtle, won't overpower the grid) */}
      <motion.div
        style={{ opacity: glowOpacity, scale: glowScale }}
        className="pointer-events-none absolute right-[-10%] top-1/4 h-[600px] w-[600px] rounded-full bg-[#4DA8FF]/10 blur-[120px]"
      />

      <Container className="relative">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[1.15fr_1fr] md:gap-14 lg:gap-20">
          {/* ─── LEFT COLUMN: Content & Image ─── */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#4DA8FF]"
            >
              Our Story
            </motion.p>

            <RevealText
              text="Every successful brand begins with an idea."
              className="font-display text-3xl font-extrabold leading-[1.15] tracking-tight text-white md:text-[40px]"
            />

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 max-w-md text-base leading-relaxed text-[#A1A1AA]"
            >
              Ads by Effexia was founded with a passion for creativity and a
              vision to help businesses stand out through exceptional branding,
              innovative marketing, and meaningful digital experiences. Today,
              we combine strategy, design, marketing, content creation,
              photography, videography, and digital innovation to help brands
              grow with confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative mt-10 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] md:aspect-[16/11]"
            >
              {/* Subtle blue glow behind image */}
              <div className="absolute -inset-4 bg-[#4DA8FF]/10 blur-2xl" />
              <Image
                src={images.story.photo}
                alt="Ads by Effexia team collaborating"
                fill
                className="relative z-10 object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              {/* Glass overlay for depth */}
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>
          </div>

          {/* ─── RIGHT COLUMN: Map-Style Navigation Timeline ─── */}
          <div className="relative pt-1">
            {/* 1. Base Track (Subtle, distinct from grid) */}
            <div
              className="absolute left-5 top-0 bottom-0 w-px bg-white/10"
              aria-hidden
            />

            {/* 2. Active Progress Line (Glowing Sky Blue) */}
            <motion.div
              style={{ height: lineProgress }}
              className="absolute left-5 top-0 w-px bg-gradient-to-b from-[#4DA8FF] to-[#2D6BFF] shadow-[0_0_15px_rgba(77,168,255,0.5)]"
              aria-hidden
            />

            {/* 3. The "Map Navigation" Traveling Dot */}
            <motion.div
              style={{ top: lineProgress }}
              className="absolute left-5 z-20 -translate-x-1/2 -translate-y-1/2"
            >
              {/* Outer ping effect */}
              <motion.div
                className="absolute inset-0 h-4 w-4 rounded-full bg-[#4DA8FF]"
                animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {/* Core glowing dot */}
              <div className="relative h-4 w-4 rounded-full bg-[#4DA8FF] shadow-[0_0_20px_#4DA8FF]" />
            </motion.div>

            {/* 4. Timeline Steps */}
            <ol className="relative">
              {storyTimeline.map((step, i) => (
                <TimelineItem key={step.number} step={step} index={i} />
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Timeline Item Component (Isolated for useInView)
   ───────────────────────────────────────────── */
function TimelineItem({ step, index }: { step: any; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: 24 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative flex gap-6 pb-16 last:pb-0"
    >
      {/* Node Circle */}
      <span
        className={`relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full border text-xs font-bold transition-all duration-500 ${
          isInView
            ? "border-[#4DA8FF]/50 bg-[#4DA8FF]/10 text-[#4DA8FF] shadow-[0_0_15px_rgba(77,168,255,0.3)]"
            : "border-white/10 bg-black/50 text-[#71717A]"
        }`}
      >
        {step.number}
      </span>

      {/* Content */}
      <div className="pt-1.5">
        <h3 className="font-display text-lg font-bold text-white">
          {step.title}
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#A1A1AA]">
          {step.description}
        </p>
      </div>
    </motion.li>
  );
}
