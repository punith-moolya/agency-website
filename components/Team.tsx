"use client";

import { useCallback, useRef } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Instagram, Linkedin, Globe } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { team } from "@/lib/content"; // Import your new team array here

export function Team() {
  const autoplay = useRef(
    Autoplay({ delay: 3200, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", containScroll: false },
    [autoplay.current]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="team" className="relative py-24 md:py-32 bg-transparent">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Our People"
            title="Meet Our Team"
            description="A small, senior team covering strategy, design, marketing, and production — with room to grow."
          />

          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              aria-label="Previous team member"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#4DA8FF]/30 hover:bg-[#4DA8FF]/10 hover:text-[#4DA8FF] hover:shadow-[0_0_15px_rgba(77,168,255,0.2)]"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next team member"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#4DA8FF]/30 hover:bg-[#4DA8FF]/10 hover:text-[#4DA8FF] hover:shadow-[0_0_15px_rgba(77,168,255,0.2)]"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="mt-14 overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-5">
            {team.map((member) => (
              <div
                key={member.id}
                className="min-w-0 flex-[0_0_78%] pl-5 sm:flex-[0_0_46%] lg:flex-[0_0_29%]"
              >
                <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-black">
                  <Image
                    src={member.image} // <-- Directly using the image path from your array
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 78vw, (max-width: 1024px) 46vw, 29vw"
                    className="object-cover grayscale transition-all duration-500 ease-out group-hover:scale-105 group-hover:grayscale-0"
                  />
                  
                  {/* Social Icons Overlay */}
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-center gap-3 bg-gradient-to-t from-black/80 via-black/20 to-transparent pb-6 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    {member.socials?.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${member.name} on LinkedIn`}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#4DA8FF]/30 bg-black/60 text-[#4DA8FF] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4DA8FF]/10 hover:shadow-[0_0_15px_rgba(77,168,255,0.3)]"
                      >
                        <Linkedin size={15} />
                      </a>
                    )}
                    {member.socials?.instagram && (
                      <a
                        href={member.socials.instagram}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${member.name} on Instagram`}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#4DA8FF]/30 bg-black/60 text-[#4DA8FF] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4DA8FF]/10 hover:shadow-[0_0_15px_rgba(77,168,255,0.3)]"
                      >
                        <Instagram size={15} />
                      </a>
                    )}
                    {member.socials?.twitter && (
                      <a
                        href={member.socials.twitter}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${member.name} on Twitter`}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#4DA8FF]/30 bg-black/60 text-[#4DA8FF] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4DA8FF]/10 hover:shadow-[0_0_15px_rgba(77,168,255,0.3)]"
                      >
                        <Globe size={15} /> {/* Using Globe as a generic fallback for Twitter/X */}
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="mt-4 font-display text-base font-bold text-white md:text-lg">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-[#A1A1AA]">{member.role}</p>
                
                {/* Optional: Show bio if it exists */}
                {member.bio && (
                  <p className="mt-2 text-xs text-[#71717A] line-clamp-2">{member.bio}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}