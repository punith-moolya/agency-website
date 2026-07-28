"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

// Create a motion-enabled Link component for smooth Next.js routing
const MotionLink = motion(Link);

/* ─────────────────────────────────────────────
   Constants
   ───────────────────────────────────────────── */
const SKY = "#4DA8FF";
const NAVY = "#2D6BFF";
const GLOW = "rgba(77,168,255,0.25)";

/* ─────────────────────────────────────────────
   Particles (ambient floating dots)
   ───────────────────────────────────────────── */
const particles = Array.from({ length: 28 }).map((_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 8 + 10,
  delay: Math.random() * 4,
}));

function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#4DA8FF]/40"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Floating Cubes (glassmorphic, glowing borders)
   ───────────────────────────────────────────── */
type CubeProps = {
  size: number;
  top: string;
  left: string;
  delay: number;
  duration: number;
  rotate?: number;
};

function Cube({ size, top, left, delay, duration, rotate = 0 }: CubeProps) {
  return (
    <motion.div
      className="absolute"
      style={{ top, left }}
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: delay * 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        style={{
          width: size,
          height: size,
          rotate: `${rotate}deg`,
        }}
        animate={{
          y: [0, -12, 0],
          x: [0, 6, 0],
          rotate: [`${rotate}deg`, `${rotate + 4}deg`, `${rotate}deg`],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
        className="relative rounded-2xl border border-[#4DA8FF]/30 backdrop-blur-xl shadow-[0_8px_32px_rgba(77,168,255,0.15)]"
      >
        {/* Inner glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4DA8FF]/10 to-transparent" />
        {/* Outer glow pulse */}
        <motion.div
          className="absolute -inset-2 rounded-3xl bg-[#4DA8FF]/15 blur-xl"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: duration * 0.8, repeat: Infinity, ease: "easeInOut", delay }}
        />
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Shimmer Heading (moving light sweep)
   ───────────────────────────────────────────── */
function ShimmerHeading() {
  return (
    <h1 className="text-center font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-white">
      <motion.span
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="block"
      >
        Creative ideas &
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="block"
      >
        strategies for your
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative block"
      >
        {/* Animated gradient text */}
        <span
          className="bg-[length:200%_100%] bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(
              90deg,
              #4DA8FF 0%,
              #2D6BFF 25%,
              #4DA8FF 50%,
              #2D6BFF 75%,
              #4DA8FF 100%
            )`,
            animation: "shimmer 6s linear infinite",
          }}
        >
          business growth.
        </span>
        {/* Soft glow behind the highlighted text */}
        <span
          className="pointer-events-none absolute inset-0 -z-10 blur-2xl opacity-50"
          style={{
            background: `radial-gradient(ellipse at center, ${GLOW}, transparent 70%)`,
          }}
        />
      </motion.span>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </h1>
  );
}

/* ─────────────────────────────────────────────
   Stats Card with blue glow sweep
   ───────────────────────────────────────────── */
function StatCard({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, boxShadow: `0 20px 40px rgba(77,168,255,0.15)` }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-shadow duration-500"
    >
      {/* Blue glow sweep — triggers when in view */}
      {inView && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{ duration: 1.8, delay: 0.4 + index * 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute inset-0 -z-0"
          style={{
            background: `linear-gradient(90deg, transparent, ${GLOW}, transparent)`,
          }}
        />
      )}

      {/* Ambient breathing glow on hover */}
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
        style={{ background: GLOW }}
      />

      <div className="relative z-10">
        <div className="font-display text-5xl font-bold tracking-tight text-white">
          {value}
        </div>
        <div className="mt-3 text-sm font-medium text-[#A1A1AA]">{label}</div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Main About Section
   ───────────────────────────────────────────── */
export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax — cubes move slower than content
  const cubeY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-transparent"
    >
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PART 1 — HERO-STYLE INTRO
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="relative flex min-h-[90vh] items-center justify-center px-6 py-24">
        
        {/* Background: faint blue radial glow */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background: `radial-gradient(ellipse 60% 50% at 50% 40%, rgba(77,168,255,0.12), transparent 70%)`,
          }}
        />

        {/* Particles */}
        <Particles />

        {/* Floating Cubes (parallax) */}
        <motion.div style={{ y: cubeY }} className="pointer-events-none absolute inset-0">
          <Cube size={72} top="18%" left="12%" delay={0} duration={7} rotate={12} />
          <Cube size={48} top="32%" left="82%" delay={1.5} duration={8} rotate={-8} />
          <Cube size={96} top="68%" left="8%" delay={2.5} duration={9} rotate={-15} />
          <Cube size={56} top="72%" left="86%" delay={0.8} duration={7.5} rotate={20} />
          <Cube size={40} top="14%" left="72%" delay={3} duration={8.5} rotate={-25} />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 inline-flex items-center gap-3"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#4DA8FF]/60" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#4DA8FF]">
              About Us
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#4DA8FF]/60" />
          </motion.div>

          {/* Shimmer Heading */}
          <ShimmerHeading />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-[#A1A1AA] sm:text-lg"
          >
            We blend strategy, design, and technology to build brands
            that don't just compete — they lead.
          </motion.p>

          {/* CTA Button - NOW LINKS TO STORY SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12"
          >
            <MotionLink
              href="#story"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white px-7 py-3.5 text-sm font-semibold text-black shadow-[0_4px_20px_rgba(255,255,255,0.1)] transition-all duration-300 hover:border-[#4DA8FF]/60 hover:bg-[#4DA8FF]/10 hover:text-white hover:shadow-[0_8px_30px_rgba(77,168,255,0.25)]"
            >
              Discover Our Story
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </MotionLink>
          </motion.div>
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          BREATHING ROOM (120px)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="h-32" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PART 2 — ABOUT CONTENT (Image + Text)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-[45%_1fr] lg:gap-20">
          
          {/* LEFT — Image with glows */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Blue glow */}
            <div
              className="absolute -left-10 top-10 h-64 w-64 rounded-full blur-3xl"
              style={{ background: "rgba(77,168,255,0.2)" }}
            />
            {/* Light purple glow */}
            <div className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-purple-500/15 blur-3xl" />

            {/* Image wrapper */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                className="aspect-[4/5] w-full"
              >
                <Image
                  src="/images/about.jpg"
                  alt="About Ads by Effexia"
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover"
                  priority={false}
                />
              </motion.div>

              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>
          </motion.div>

          {/* RIGHT — Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 flex items-center gap-3"
            >
              <div className="h-px w-8 bg-[#4DA8FF]/60" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#4DA8FF]">
                Who We Are
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl"
            >
              Fueling Brands with{" "}
              <span
                className="bg-[length:200%_100%] bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, #4DA8FF, #2D6BFF, #4DA8FF)`,
                  animation: "shimmer 6s linear infinite",
                }}
              >
                Creative Fx
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-base leading-relaxed text-[#A1A1AA] sm:text-lg"
            >
              At Ads by Effexia, we don't just build campaigns — we architect
              experiences. Every pixel, every word, every interaction is crafted
              to move your audience and accelerate your growth.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 text-base leading-relaxed text-[#A1A1AA] sm:text-lg"
            >
              From bold brand identities to performance-driven digital
              strategies, we partner with ambitious companies to turn vision
              into measurable impact.
            </motion.p>

            <style jsx>{`
              @keyframes shimmer {
                0% { background-position: 200% 0; }
                100% { background-position: -200% 0; }
              }
            `}</style>
          </div>
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          BREATHING ROOM
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="h-32" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PART 3 — STATS CARDS
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="mx-auto max-w-7xl px-6 pb-32 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <h3 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Numbers that speak
          </h3>
          <p className="mx-auto mt-4 max-w-md text-[#A1A1AA]">
            A track record built on trust, creativity, and measurable results.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard value="150+" label="Projects Delivered" index={0} />
          <StatCard value="98%" label="Client Retention" index={1} />
          <StatCard value="12M+" label="Audience Reached" index={2} />
          <StatCard value="4.9★" label="Average Rating" index={3} />
        </div>
      </div>
    </section>
  );
}