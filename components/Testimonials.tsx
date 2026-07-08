import SectionHeading from "./SectionHeading";
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
  return (
    <section id="testimonials" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Clients Say"
          subtitle="Real feedback from real clients who trust Vesper Digitizing with their embroidery work."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
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
                "{t.quote}"
              </blockquote>

              <div className="mt-6 flex items-center gap-3 border-t border-[#f5f5f5] pt-5">
                {/* Avatar placeholder */}
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
      </div>
    </section>
  );
}
