"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

/**
 * Wraps the app in Lenis-driven smooth scrolling. This only touches the
 * scroll physics — layout and anchor links behave the same as before.
 * If Lenis ever needs to be removed, delete this file and the
 * <SmoothScroll> wrapper in app/layout.tsx; nothing else depends on it.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });
    lenisRef.current = lenis;

    // Let in-page anchor links (#about, #contact, ...) use Lenis' own
    // easing instead of an instant jump.
    function onClick(e: MouseEvent) {
      const target = (e.target as HTMLElement)?.closest("a[href^='#']");
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -88 });
    }
    document.addEventListener("click", onClick);

    let frameId: number;
    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
