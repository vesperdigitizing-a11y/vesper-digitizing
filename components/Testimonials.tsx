"use client";

// Enhanced Testimonials — auto-rotating carousel with manual controls.

import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { Quote, Star, ArrowRight } from "./icons";

type Testimonial = {
  quote: string;
  name: string;
  country: string;
  initials: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Vesper Digitizing delivered outstanding quality and super fast turnaround. My go-to digitizing partner!",
    name: "Michael T.",
    country: "USA",
    initials: "MT",
  },
  {
    quote:
      "Professional, reliable and always exceed my expectations. Highly recommended!",
    name: "James R.",
    country: "Canada",
    initials: "JR",
  },
  {
    quote:
      "The stitch quality is perfect every time. Absolutely love their work.",
    name: "Sarah K.",
    country: "UK",
    initials: "SK",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section
      id="testimonials"
      className="relative bg-white py-16 sm:py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="What Clients Say"
            subtitle="Real feedback from real clients who trust Vesper Digitizing with their embroidery work."
          />
        </ScrollReveal>

        {/* Carousel — shows one card prominently on mobile, all three on desktop */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, idx) => {
            const isActive = idx === active;
            return (
              <article
                key={t.name}
                className={`relative flex flex-col rounded-2xl border bg-white p-7 shadow-sm transition-all duration-500 hover:shadow-xl ${
                  isActive
                    ? "border-[#c8102e]/40 shadow-lg ring-1 ring-[#c8102e]/10 md:scale-105"
                    : "border-[#e5e7eb] md:scale-100"
                }`}
                aria-hidden={!isActive ? "true" : undefined}
              >
                <Quote className="h-9 w-9 text-[#c8102e]/30" />

                <div className="mt-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 transition-colors ${
                        isActive ? "text-[#f5a623]" : "text-[#c8102e]"
                      }`}
                    />
                  ))}
                </div>

                <blockquote
                  className={`mt-4 flex-1 text-sm leading-relaxed transition-colors sm:text-base ${
                    isActive ? "text-[#1a1a1a]" : "text-[#1a1a1a]/80"
                  }`}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="mt-6 flex items-center gap-3 border-t border-[#f5f5f5] pt-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#c8102e] to-[#a30d24] text-sm font-bold text-white shadow-md">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#1a1a1a]">{t.name}</div>
                    <div className="text-xs text-[#6b7280]">{t.country}</div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Carousel dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
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
