"use client";

import Link from "next/link";
import { Instagram, Facebook, Mail, Phone, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { navLinks, services } from "@/lib/content";

// Simple Monochrome WhatsApp Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

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
            
            {/* Social Icons */}
            <div className="flex flex-wrap gap-3 mb-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#A1A1AA] backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:text-white"
                >
                  <social.icon size={18} strokeWidth={1.5} className="transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>

            {/* Noticeable Black & White Action Buttons */}
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/917306107181?text=Hi%20Ads%20by%20Effexia,%20I'm%20interested%20in%20discussing%20a%20project."
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
              >
                <WhatsAppIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span>Chat on WhatsApp</span>
              </a>
              
              <a
                href="tel:+917306107181"
                className="group flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-transparent px-4 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40"
              >
                <Phone className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span>Call Us Now</span>
              </a>
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
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden pb-4 select-none" aria-hidden="true">
        {/* The Giant Gradient Text */}
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