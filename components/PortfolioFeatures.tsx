import { IconByName, type IconName } from "./icons";
import ScrollReveal from "./ScrollReveal";

type Feature = { icon: IconName; title: string; desc: string };

const FEATURES: Feature[] = [
  {
    icon: "diamond",
    title: "Premium Quality",
    desc: "Top-notch quality with perfect stitching",
  },
  {
    icon: "clock",
    title: "Fast Delivery",
    desc: "24 hours turnaround available",
  },
  {
    icon: "refresh",
    title: "Unlimited Revisions",
    desc: "We work until you are 100% satisfied",
  },
  {
    icon: "users",
    title: "Expert Digitizers",
    desc: "Professional digitizers with 10+ years experience",
  },
];

export default function PortfolioFeatures() {
  return (
    <section aria-label="Why choose us" className="relative bg-[#1a1a1a] py-16 sm:py-20 dark-mesh noise-overlay">
      <div className="dark-dots pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => {
            const Icon = IconByName[f.icon];
            return (
              <div
                key={f.title}
                className="group relative flex flex-col items-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#c8102e]/40 hover:bg-white/[0.06] hover:shadow-[0_20px_40px_-15px_rgba(200,16,46,0.3)]"
              >
                <span className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-br from-[#c8102e]/0 to-[#c8102e]/0 opacity-0 blur-md transition-opacity duration-500 group-hover:from-[#c8102e]/15 group-hover:to-transparent group-hover:opacity-100" />
                <span className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#c8102e]/15 text-[#c8102e] ring-1 ring-[#c8102e]/30 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#c8102e] group-hover:text-white group-hover:shadow-[0_0_30px_-5px_rgba(200,16,46,0.7)]">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="relative font-display text-base font-bold text-white">
                  {f.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-white/60">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
