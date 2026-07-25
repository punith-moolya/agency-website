"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function RevealText({
  text,
  className,
  wordClassName,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
}) {
  const words = text.split(" ");

  return (
    <p className={cn("flex flex-wrap", className)}>
      {words.map((word, i) => (
        <span key={i} className="mr-[0.35em] overflow-hidden">
          <motion.span
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.02,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={cn("inline-block", wordClassName)}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </p>
  );
}
