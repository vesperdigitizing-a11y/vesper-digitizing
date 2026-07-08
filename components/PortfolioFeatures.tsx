import { IconByName, type IconName } from "./icons";

type Feature = { icon: IconName; title: string; desc: string };

const FEATURES: Feature[] = [
  { icon: "diamond", title: "Premium Quality", desc: "Top-notch quality with perfect stitching" },
  { icon: "clock", title: "Fast Delivery", desc: "24 hours turnaround available" },
  { icon: "refresh", title: "Unlimited Revisions", desc: "We work until you are 100% satisfied" },
  { icon: "users", title: "Expert Digitizers", desc: "Professional digitizers with 10+ years experience" },
];

export default function PortfolioFeatures() {
  return (
    <section aria-label="Why choose us" className="bg-[#f5f5f5] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => {
            const Icon = IconByName[f.icon];
            return (
              <div
                key={f.title}
                className="flex flex-col items-center rounded-xl border border-[#e5e7eb] bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#c8102e]/10 text-[#c8102e] ring-1 ring-[#c8102e]/20">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="font-display text-base font-bold text-[#1a1a1a]">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6b7280]">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
