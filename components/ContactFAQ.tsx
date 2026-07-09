"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const FAQS = [
  {
    q: "How fast is your delivery?",
    a: "Standard orders are delivered within 12-24 hours. Rush orders can be delivered in as fast as 2 hours. We offer same-day, 4-hour, and weekend rush options for urgent projects.",
  },
  {
    q: "Do you offer unlimited revisions?",
    a: "Yes! We offer unlimited revisions on all orders until you are 100% satisfied with the result. Your satisfaction is our top priority.",
  },
  {
    q: "Which file formats do you provide?",
    a: "We deliver in all major embroidery formats including DST, PES, EXP, JEF, VP3, XXX, and more. Just let us know your preferred format and we'll deliver accordingly.",
  },
  {
    q: "What if I'm not satisfied with the design?",
    a: "We guarantee 100% satisfaction. If you're not happy with the design, we'll redo it until you are. If we still can't meet your expectations, we offer a full refund.",
  },
];

export default function ContactFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#f5f5f5] py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#c8102e]">
              <span className="h-px w-6 bg-current opacity-60" />
              Quick Answers
              <span className="h-px w-6 bg-current opacity-60" />
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-16 rounded-full bg-[#c8102e]" />
          </div>
        </ScrollReveal>

        <ScrollReveal stagger className="mt-10 flex flex-col gap-4">
          {FAQS.map((faq, i) => (
            <div
              key={faq.q}
              className={`group overflow-hidden rounded-xl border bg-white transition-all duration-300 hover:shadow-lg ${
                open === i
                  ? "border-[#c8102e]/40 shadow-md"
                  : "border-[#e5e7eb] hover:border-[#c8102e]/30"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm font-semibold text-[#1a1a1a] transition-colors group-hover:text-[#c8102e]"
              >
                {faq.q}
                <svg
                  className={`h-5 w-5 shrink-0 text-[#c8102e] transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className="grid transition-all duration-300 ease-out"
                style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}
              >
                <p className="overflow-hidden px-5 text-sm leading-relaxed text-[#6b7280]">
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
