"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Star, Quote } from "./icons";
import ScrollReveal from "./ScrollReveal";

type Testimonial = {
  quote: string;
  name: string;
  country: string;
  initials: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Vesper Digitizing delivered outstanding quality and super fast turnaround. Highly recommended!",
    name: "Michael T.",
    country: "USA",
    initials: "MT",
  },
  {
    quote: "The stitch quality is perfect every time. Absolutely love their work.",
    name: "Sarah J.",
    country: "UK",
    initials: "SJ",
  },
  {
    quote: "Professional, reliable and always exceed my expectations.",
    name: "James R.",
    country: "Canada",
    initials: "JR",
  },
];

export default function AboutTestimonials() {
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
      className="bg-white py-16 sm:py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#c8102e]">
              <span className="h-px w-6 bg-current opacity-60" />
              Our Happy Customers
              <span className="h-px w-6 bg-current opacity-60" />
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What Our Clients Say
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger className="mt-12 relative">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => setActive((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
            className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-x-5 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#1a1a1a] shadow-sm transition-all hover:scale-110 hover:border-[#c8102e] hover:text-[#c8102e] lg:flex"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
          </button>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, idx) => {
              const isActive = idx === active;
              return (
                <article
                  key={t.name}
                  className={`relative flex flex-col rounded-2xl border bg-white p-7 shadow-sm transition-all duration-500 hover:shadow-xl ${
                    isActive
                      ? "border-[#c8102e]/40 shadow-lg ring-1 ring-[#c8102e]/10 md:scale-105"
                      : "border-[#e5e7eb]"
                  }`}
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

                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-[#1a1a1a] sm:text-base">
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

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => setActive((i) => (i + 1) % TESTIMONIALS.length)}
            className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 translate-x-5 items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#1a1a1a] shadow-sm transition-all hover:scale-110 hover:border-[#c8102e] hover:text-[#c8102e] lg:flex"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </ScrollReveal>

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
