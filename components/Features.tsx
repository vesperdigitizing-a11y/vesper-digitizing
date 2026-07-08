import { IconByName, type IconName } from "./icons";

type Feature = { icon: IconName; title: string; desc: string };

const FEATURES: Feature[] = [
  { icon: "diamond", title: "Premium Quality", desc: "Ultra clean and precise stitching" },
  { icon: "zap", title: "Fast Delivery", desc: "Same day & 24 hours turnaround" },
  { icon: "target", title: "100% Accuracy", desc: "Perfect stitch path optimization" },
  { icon: "globe", title: "Worldwide Clients", desc: "Proudly serving clients across the globe" },
  { icon: "refresh", title: "Unlimited Revisions", desc: "Until you are 100% satisfied" },
  { icon: "headset", title: "24/7 Support", desc: "We are always here to help you" },
];

export default function Features() {
  return (
    <section
      aria-label="Key features"
      /* Pull up so this dark bar overlaps the bottom of the Hero section.
         -mt-24 = -96px on desktop, -mt-16 = -64px on tablet, -mt-12 = -48px on mobile.
         z-20 ensures it stacks above the hero's whitespace. shadow-2xl makes the overlap look intentional. */
      className="relative z-20 -mt-12 sm:-mt-16 lg:-mt-24 bg-[#1a1a1a] py-10 shadow-2xl sm:py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {FEATURES.map((f) => {
            const Icon = IconByName[f.icon];
            return (
              <div key={f.title} className="flex flex-col items-center text-center">
                <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#c8102e]/15 text-[#c8102e] ring-1 ring-[#c8102e]/30">
                  <Icon className="h-6 w-6" />
                </span>
                <div className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">
                  {f.title}
                </div>
                <div className="mt-1 text-[11px] leading-snug text-white/60 sm:text-xs">
                  {f.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
