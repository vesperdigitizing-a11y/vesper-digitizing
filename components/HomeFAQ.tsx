"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { ArrowRight } from "./icons";

const FAQS = [
  {
    q: "How long does Vesper's embroidery digitizing usually take?",
    a: "Standard orders are delivered within 12-24 hours, and rush orders can be completed in as fast as 2 hours. Vesper offers same-day, 4-hour, and weekend rush options for urgent projects.",
  },
  {
    q: "What type of files do you accept?",
    a: "We accept AI, EPS, PDF, PNG, JPG, and PSD artwork files. If your logo is in a different format, send it over and our team will still be able to work with it.",
  },
  {
    q: "Can Vesper digitize logos for different fabric types?",
    a: "Yes. Our digitizers adjust stitch density, underlay, and pull compensation for fabrics like cotton, denim, fleece, leather, and performance wear to ensure a clean stitch-out every time.",
  },
  {
    q: "Does Vesper provide free edits after file delivery?",
    a: "Absolutely. Every order includes unlimited free revisions until you're 100% satisfied with the final embroidery file.",
  },
  {
    q: "What embroidery file formats does Vesper deliver in?",
    a: "We deliver in all major formats including DST, PES, EXP, JEF, VP3, and XXX. Just let us know your machine's preferred format when you place your order.",
  },
  {
    q: "How accurate is Vesper's embroidery digitizing process?",
    a: "Every design is hand-digitized and quality-checked by our senior digitizers, ensuring precise stitch placement and a 99%+ first-run accuracy rate.",
  },
];

export default function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#1a1a1a] dark-mesh noise-overlay py-16 sm:py-24">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#c8102e] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-[0_8px_20px_-6px_rgba(200,16,46,0.5)]">
              <ArrowRight className="h-3.5 w-3.5" />
              FAQs
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              Answers To <span className="text-[#c8102e]">Your</span> Most
              Common Questions
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger className="mt-10 flex flex-col gap-4">
          {FAQS.map((faq, i) => (
            <div
              key={faq.q}
              className={`group overflow-hidden rounded-xl border bg-white/[0.03] transition-colors duration-150 ${
                open === i
                  ? "border-[#c8102e]/50"
                  : "border-white/10 hover:border-[#c8102e]/30"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm font-bold text-white transition-colors group-hover:text-[#c8102e] sm:text-base"
              >
                {faq.q}
                <svg
                  className={`h-5 w-5 shrink-0 text-[#c8102e] transition-transform duration-100 ease-out ${
                    open === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className="grid transition-[grid-template-rows] duration-100 ease-out"
                style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}
              >
                <p className="overflow-hidden px-5 text-sm leading-relaxed text-white/60">
                  <span className="block pb-4">{faq.a}</span>
                </p>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
