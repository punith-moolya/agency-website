"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { navLinks } from "@/lib/content";

// Simple Monochrome WhatsApp Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 12);
    if (open || latest < 120) {
      setHidden(false);
      lastY.current = latest;
      return;
    }
    const delta = latest - lastY.current;
    if (Math.abs(delta) > 6) {
      setHidden(delta > 0);
      lastY.current = latest;
    }
  });

  useEffect(() => {
    if (open) setHidden(false);
  }, [open]);

  return (
    <motion.header
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 h-16 overflow-visible border-b border-white/10 bg-black/80 backdrop-blur-xl transition-colors duration-300"
    >
      <Container className="relative flex h-full items-center justify-between px-4 md:px-8">
        
        {/* LOGO */}
        <Link
          href="#top"
          className="relative -my-6 flex h-28 w-auto items-center"
        >
          <Image
            src="/images/logo.png"
            alt="Ads by Effexia"
            width={200}
            height={112}
            className="h-full w-auto object-contain"
            priority
          />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons (Monochrome White & Black Theme) */}
        <div className="hidden items-center gap-3 md:flex">
          {/* WhatsApp Button: Crisp White */}
          <a
            href="https://wa.me/917306107181?text=Hi%20Ads%20by%20Effexia,%20I'm%20interested%20in%20discussing%20a%20project."
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 rounded-sm bg-white px-4 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          >
            <WhatsAppIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            <span>WhatsApp</span>
          </a>
          
          {/* Call Button: Subtle White Outline */}
          <a
            href="tel:+917306107181"
            className="group flex items-center gap-2 rounded-sm border border-white/20 bg-transparent px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:border-white/40"
          >
            <Phone className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            <span>Call</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-sm border border-white/20 text-white transition-colors duration-300 hover:bg-white/10 md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-0 top-16 px-4 pb-4 md:hidden"
          >
            <div className="flex flex-col gap-1 rounded-md border border-white/10 bg-black/90 p-4 shadow-lifted backdrop-blur-xl">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-sm px-2 py-3 text-base font-medium text-white/70 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile CTA Buttons (Monochrome) */}
              <div className="mt-3 grid grid-cols-2 gap-3 pt-3 border-t border-white/10">
                <a
                  href="https://wa.me/917306107181?text=Hi%20Ads%20by%20Effexia,%20I'm%20interested%20in%20discussing%20a%20project."
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-sm bg-white px-4 py-3 text-sm font-semibold text-black transition-all active:scale-95"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp
                </a>
                <a
                  href="tel:+917306107181"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-sm border border-white/20 bg-transparent px-4 py-3 text-sm font-semibold text-white transition-all active:scale-95 hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}