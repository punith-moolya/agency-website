"use client";

import { ReactNode, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost-dark" | "accent";
  className?: string;
  showArrow?: boolean;
  magnetic?: boolean;
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-ink text-white hover:bg-[#232323] shadow-soft hover:shadow-lifted",
  secondary: "bg-white text-ink border border-line hover:bg-[#F7F7F7]",
  "ghost-dark": "bg-transparent text-white border border-white/25 hover:bg-white/10",
  // The one place accent color is allowed to be loud: the site's most
  // prominent calls to action.
  accent: "bg-accent-gradient text-white shadow-soft hover:shadow-[0_20px_50px_rgba(109,40,217,0.35)]",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  showArrow = true,
  magnetic = true,
}: ButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 14, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 150, damping: 14, mass: 0.2 });

  function onMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const isExternal = href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel");

  return (
    <motion.a
      ref={ref}
      href={href}
      target={isExternal && href.startsWith("http") ? "_blank" : undefined}
      rel={isExternal && href.startsWith("http") ? "noreferrer" : undefined}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ x: springX, y: springY }}
      className={cn(
        "group inline-flex items-center gap-2 rounded-sm px-6 py-3.5 text-sm font-semibold transition-[background-color,box-shadow] duration-300 ease-out",
        variants[variant],
        className
      )}
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </motion.a>
  );
}
