"use client";

import Link from "next/link";
import { Instagram, Facebook, Mail, Phone, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { navLinks, services } from "@/lib/content";

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/adsbyeffexia" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/adsbyeffexia" },
  { icon: Mail, label: "Email", href: "mailto:adsbyeffexia@gmail.com" },
  { icon: Phone, label: "Phone", href: "tel:+917306107181" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-black">
      {/* 
        1. ENTIRE FOOTER GRADIENT BACKGROUND 
        A subtle radial glow at the top fading into deep black at the bottom 
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#050508] to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(77,168,255,0.1),_transparent_60%)]" />

      {/* Subtle top border glow to seamlessly blend with the page above */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4DA8FF]/40 to-transparent" />

      <Container className="relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_0.9fr_0.9fr_0.9fr]">
          
          {/* Column 1: Brand */}
          <div className="md:pr-8">
            <p className="font-display text-2xl font-extrabold tracking-tight text-white">
              Ads by <span className="text-[#4DA8FF]">Effexia</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#A1A1AA]">
              Fueling brands with creative fx — strategic marketing, branding,
              and digital innovation for businesses ready to grow.
            </p>
            
            <Link 
              href="#contact" 
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#4DA8FF]"
            >
              Start a project 
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-[#71717A]">
              Quick Links
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="group inline-flex items-center gap-2 text-sm text-[#A1A1AA] transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-px w-0 bg-[#4DA8FF] transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-[#71717A]">
              Services
            </p>
            <ul className="space-y-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.title}>
                  <span className="group inline-flex items-center gap-2 text-sm text-[#A1A1AA] transition-colors duration-300 hover:text-white cursor-default">
                    <span className="h-px w-0 bg-[#4DA8FF] transition-all duration-300 group-hover:w-3" />
                    {service.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-[#71717A]">
              Connect
            </p>
            <div className="flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#A1A1AA] backdrop-blur-sm transition-all duration-300 hover:border-[#4DA8FF]/40 hover:bg-[#4DA8FF]/10 hover:text-[#4DA8FF] hover:shadow-[0_0_20px_rgba(77,168,255,0.2)]"
                >
                  <social.icon size={18} strokeWidth={1.5} className="transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-[#71717A] sm:flex-row sm:items-center">
          <p>© {year} Ads by Effexia. All rights reserved.</p>
          <p>Mallappally, Pathanamthitta, Kerala</p>
        </div>
      </Container>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HUGE AESTHETIC BACKGROUND WORDMARK
          Now significantly bigger and more visible
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden pb-4 select-none" aria-hidden="true">
        {/* The Giant Gradient Text - Increased opacity and size for clear visibility */}
        <p 
          className="relative z-0 bg-gradient-to-b from-white/20 via-[#4DA8FF]/15 to-transparent bg-clip-text text-center font-display text-[24vw] font-black leading-none tracking-tighter text-transparent md:text-[20vw] lg:text-[18vw]"
          style={{ 
            WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.06)",
            filter: "drop-shadow(0 0 40px rgba(77, 168, 255, 0.15))"
          }}
        >
          EFFEXIA
        </p>
      </div>
    </footer>
  );
}