"use client";

// Enhanced Testimonials — 3-card grid matching the Services card style.
// Stars turn yellow on hover AND on the active card.

import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { Quote, Star } from "./icons";

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

        {/* All 3 cards — same style as Services cards */}
        <ScrollReveal stagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, idx) => {
            const isActive = idx === active;
            return (
              <article
                key={t.name}
                className={`group relative flex h-full flex-col items-start overflow-hidden rounded-xl border bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
                  isActive
                    ? "border-[#c8102e]/40 ring-1 ring-[#c8102e]/10"
                    : "border-[#e5e7eb] hover:border-[#c8102e]/40"
                }`}
                aria-hidden={!isActive ? "true" : undefined}
              >
                {/* Gradient bg appears on hover — same as Services */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#c8102e]/0 to-[#c8102e]/0 transition-all duration-500 group-hover:from-[#c8102e]/5 group-hover:to-transparent"
                />

                {/* Quote icon — same treatment as the Services icon */}
                <span className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#c8102e]/10 text-[#c8102e] ring-1 ring-[#c8102e]/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#c8102e] group-hover:text-white group-hover:ring-[#c8102e] group-hover:shadow-[0_8px_20px_-6px_rgba(200,16,46,0.5)]">
                  <Quote className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
                </span>

                {/* Stars — yellow on hover AND on active card */}
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
                    isActive ? "text-[#1a1a1a]" : "text-[#1a1a1a]/80 group-hover:text-[#1a1a1a]"
                  }`}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="relative mt-6 flex w-full items-center gap-3 border-t border-[#f5f5f5] pt-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#c8102e] to-[#a30d24] text-sm font-bold text-white shadow-md transition-transform duration-500 group-hover:scale-110">
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-[#1a1a1a]">{t.name}</div>
                    <div className="text-xs text-[#6b7280]">{t.country}</div>
                  </div>
                </div>
              </article>
            );
          })}
        </ScrollReveal>

        {/* Dots — click to select which card is "active" (stars go yellow) */}
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
