"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { services } from "@/lib/content";

const spanPattern = [
  "lg:col-span-2",
  "",
  "",
  "lg:row-span-2",
  "",
  "",
  "lg:col-span-2",
  "",
  "lg:row-span-2",
  "",
  "",
  "lg:col-span-2",
  "",
  "",
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-transparent">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Our Services"
          description="A full creative and marketing toolkit — from first idea to finished campaign — so every part of your brand speaks the same language."
        />

        <div className="mt-14 grid grid-flow-dense grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[340px]">
          {services.map((service, i) => {
            const Icon = service.icon;
            // Now uses the exact video filename from your content file
            const videoSrc = `/videos/services/${service.video}`;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 6) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "group relative min-h-[300px] rounded-2xl",
                  spanPattern[i % spanPattern.length]
                )}
              >
                {/* Rotating gradient ring, revealed on hover */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -inset-[50%] animate-spin-slow bg-[conic-gradient(from_0deg,#4DA8FF,#2D6BFF,#4DA8FF)]" />
                </div>
                
                {/* Static default border */}
                <div className="absolute inset-0 rounded-2xl border border-white/10 transition-opacity duration-500 group-hover:opacity-0" />

                {/* Inner Card */}
                <div className="absolute inset-[2px] overflow-hidden rounded-[14px] bg-black">
                  
                  {/* VIDEO TAG */}
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  >
                    <source src={videoSrc} type="video/mp4" />
                  </video>
                  
                  {/* Subtle gradient ONLY at the bottom for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* Content Layout */}
                  <div className="relative flex h-full flex-col justify-between p-6">
                    
                    {/* Top Icon */}
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#4DA8FF]/30 bg-black/40 text-[#4DA8FF] backdrop-blur-md shadow-[0_0_15px_rgba(77,168,255,0.15)] transition-all duration-300 group-hover:border-[#4DA8FF]/50 group-hover:bg-[#4DA8FF]/10">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>

                    {/* Bottom Text Box */}
                    <div className="rounded-xl border border-white/10 bg-black/60 p-5 backdrop-blur-md transition-all duration-300 group-hover:border-[#4DA8FF]/30 group-hover:bg-black/80">
                      <h3 className="font-display text-lg font-bold text-white">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#A1A1AA]">
                        {service.description}
                      </p>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}