import { ArrowRight, Star, Quote } from "./icons";

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
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        <div className="relative mt-12">
          <button
            type="button"
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-x-5 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#1a1a1a] shadow-sm transition-colors hover:border-[#c8102e] hover:text-[#c8102e] lg:flex"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
          </button>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <article
                key={t.name}
                className="relative flex flex-col rounded-2xl border border-[#e5e7eb] bg-white p-7 shadow-sm transition-shadow hover:shadow-lg"
              >
                <Quote className="h-9 w-9 text-[#c8102e]/30" />

                <div className="mt-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-[#c8102e]" />
                  ))}
                </div>

                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-[#1a1a1a] sm:text-base">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="mt-6 flex items-center gap-3 border-t border-[#f5f5f5] pt-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#c8102e] text-sm font-bold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#1a1a1a]">{t.name}</div>
                    <div className="text-xs text-[#6b7280]">{t.country}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 translate-x-5 items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#1a1a1a] shadow-sm transition-colors hover:border-[#c8102e] hover:text-[#c8102e] lg:flex"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-1.5">
          {TESTIMONIALS.map((t, i) => (
            <span
              key={t.name}
              className={`h-1.5 rounded-full transition-all ${
                i === 0 ? "w-5 bg-[#c8102e]" : "w-1.5 bg-[#d1d5db]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
