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
    <section aria-label="Why choose us" className="bg-[#1a1a1a] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => {
            const Icon = IconByName[f.icon];
            return (
              <div
                key={f.title}
                className="flex flex-col items-center rounded-xl border border-white/10 bg-white/[0.03] p-6 text-center transition-colors hover:border-[#c8102e]/30 hover:bg-white/[0.06]"
              >
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#c8102e]/15 text-[#c8102e] ring-1 ring-[#c8102e]/30">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="font-display text-base font-bold text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
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
