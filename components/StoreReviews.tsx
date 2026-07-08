import { Quote, Star } from "./icons";

type Review = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

const REVIEWS: Review[] = [
  {
    quote: "Amazing quality designs and instant download. My go-to store for all embroidery files!",
    name: "Michael T.",
    role: "USA",
    initials: "MT",
  },
  {
    quote: "The font packs are incredible value. Commercial license included is a huge bonus!",
    name: "Sarah K.",
    role: "UK",
    initials: "SK",
  },
  {
    quote: "Best embroidery design store I've used. Premium quality at fair prices.",
    name: "James R.",
    role: "Canada",
    initials: "JR",
  },
];

export default function StoreReviews() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#c8102e]">
            <span className="h-px w-6 bg-current opacity-60" />
            Testimonials
            <span className="h-px w-6 bg-current opacity-60" />
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
            Our Happy Customers
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <article
              key={r.name}
              className="flex flex-col rounded-2xl border border-[#e5e7eb] bg-white p-7 shadow-sm transition-shadow hover:shadow-lg"
            >
              <Quote className="h-9 w-9 text-[#c8102e]/30" />

              <div className="mt-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-[#c8102e]" />
                ))}
              </div>

              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-[#1a1a1a] sm:text-base">
                "{r.quote}"
              </blockquote>

              <div className="mt-6 flex items-center gap-3 border-t border-[#f5f5f5] pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#c8102e] text-sm font-bold text-white">
                  {r.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#1a1a1a]">{r.name}</div>
                  <div className="text-xs text-[#6b7280]">{r.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
