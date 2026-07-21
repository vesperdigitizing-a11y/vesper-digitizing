"use client";

// Unified Testimonials component — reusable across ALL pages.
// Accepts optional testimonials data + heading props so each page
// can show its own relevant quotes while the component stays identical.

import { useEffect, useState } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";
import { Quote, Star } from "./icons";

export type Testimonial = {
  quote: string;
  name: string;
  country: string;
  avatar: string;
};

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Vesper Digitizing delivered outstanding quality and super fast turnaround. My go-to digitizing partner!",
    name: "Michael T.",
    country: "USA",
    avatar: "/images/testimonials/michael-t.webp",
  },
  {
    quote:
      "Professional, reliable and always exceed my expectations. Highly recommended!",
    name: "James R.",
    country: "Canada",
    avatar: "/images/testimonials/james-r.webp",
  },
  {
    quote:
      "The stitch quality is perfect every time. Absolutely love their work.",
    name: "Jessica.",
    country: "UK",
    avatar: "/images/testimonials/jessica.webp",
  },
];

export type TestimonialsProps = {
  /** Section eyebrow text */
  eyebrow?: string;
  /** Section heading title */
  title?: string;
  /** Section subtitle */
  subtitle?: string;
  /** Custom testimonial data — defaults to the home-page set */
  testimonials?: Testimonial[];
  /** Optional extra class on the outer <section> */
  className?: string;
};

export default function Testimonials({
  eyebrow = "Testimonials",
  title = "What Clients Say",
  subtitle = "Real feedback from real clients who trust Vesper Digitizing with their embroidery work.",
  testimonials = DEFAULT_TESTIMONIALS,
  className = "",
}: TestimonialsProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [paused, testimonials.length]);

  return (
    <section
      id="testimonials"
      className={`relative bg-white py-16 sm:py-24 ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            subtitle={subtitle}
          />
        </ScrollReveal>

        {/* Cards */}
        <ScrollReveal
          stagger
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t, idx) => {
            const isActive = idx === active;
            return (
              <TiltCard key={t.name} max={10}>
                <article
                  className={`group relative flex h-full flex-col items-start overflow-hidden rounded-xl border bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
                    isActive
                      ? "border-[#c8102e]/40 ring-1 ring-[#c8102e]/10"
                      : "border-[#e5e7eb] hover:border-[#c8102e]/40"
                  }`}
                  aria-hidden={!isActive ? "true" : undefined}
                >
                  {/* Gradient bg on hover */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#c8102e]/0 to-[#c8102e]/0 transition-all duration-500 group-hover:from-[#c8102e]/5 group-hover:to-transparent"
                  />

                  {/* Quote icon */}
                  <span className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#c8102e]/10 text-[#c8102e] ring-1 ring-[#c8102e]/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#c8102e] group-hover:text-white group-hover:ring-[#c8102e] group-hover:shadow-[0_8px_20px_-6px_rgba(200,16,46,0.5)]">
                    <Quote className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
                  </span>

                  {/* Stars */}
                  <div className="relative mt-1 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className={`h-4 w-4 transition-all duration-500 group-hover:scale-110 ${
                          isActive
                            ? "fill-[#f5a623] text-[#f5a623]"
                            : "fill-[#d1d5db] text-[#d1d5db] group-hover:fill-[#f5a623] group-hover:text-[#f5a623]"
                        }`}
                      />
                    ))}
                  </div>

                  <blockquote
                    className={`relative mt-4 flex-1 text-sm leading-relaxed transition-colors duration-500 sm:text-base ${
                      isActive
                        ? "text-[#1a1a1a]"
                        : "text-[#1a1a1a]/80 group-hover:text-[#1a1a1a]"
                    }`}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <div className="relative mt-6 flex w-full items-center gap-3 border-t border-[#f5f5f5] pt-5">
                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-[#c8102e]/20 shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:ring-[#c8102e]/40">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-bold text-[#1a1a1a]">
                        {t.name}
                      </div>
                      <div className="text-xs text-[#6b7280]">{t.country}</div>
                    </div>
                  </div>
                </article>
              </TiltCard>
            );
          })}
        </ScrollReveal>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-8 bg-[#c8102e]"
                  : "w-2 bg-[#d1d5db] hover:bg-[#c8102e]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
