import { IconByName, type IconName } from "./icons";
import ScrollReveal from "./ScrollReveal";

type Feature = { icon: IconName; title: string; desc: string };

const FEATURES: Feature[] = [
  {
    icon: "diamond",
    title: "Premium Quality",
    desc: "Ultra clean and precise stitching",
  },
  {
    icon: "zap",
    title: "Fast Delivery",
    desc: "Same day & 24 hours turnaround",
  },
  {
    icon: "target",
    title: "100% Accuracy",
    desc: "Perfect stitch path optimization",
  },
  {
    icon: "globe",
    title: "Worldwide Clients",
    desc: "Proudly serving clients across the globe",
  },
  {
    icon: "refresh",
    title: "Unlimited Revisions",
    desc: "Until you are 100% satisfied",
  },
  {
    icon: "headset",
    title: "24/7 Support",
    desc: "We are always here to help you",
  },
];

export default function Features() {
  return (
    <section
      aria-label="Key features"
      className="relative z-20 bg-[#1a1a1a] py-10 shadow-2xl sm:py-14 dark-mesh"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal stagger>
          <div className="grid grid-cols-2 divide-x divide-white/20 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {FEATURES.map((f) => {
              const Icon = IconByName[f.icon];
              return (
                <div
                  key={f.title}
                  className="group relative flex flex-col items-center justify-center text-center px-3 sm:px-5 py-4"
                >
                  <span className="pointer-events-none absolute -inset-2 rounded-2xl bg-[#c8102e]/0 blur-xl transition-all duration-500 group-hover:bg-[#c8102e]/20" />

                  <span className="relative mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#c8102e]/15 text-[#c8102e] ring-1 ring-[#c8102e]/30 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#c8102e] group-hover:text-white group-hover:ring-[#c8102e]">
                    <Icon className="h-6 w-6 transition-transform duration-500 group-hover:scale-110" />
                  </span>
                  
                  <div className="relative w-full text-center">
                    <div className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">
                      {f.title}
                    </div>
                    <div className="mt-1 text-[11px] leading-snug text-white/60 sm:text-xs">
                      {f.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
