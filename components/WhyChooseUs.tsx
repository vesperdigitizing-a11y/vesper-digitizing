import SectionHeading from "./SectionHeading";
import { IconByName, type IconName } from "./icons";

type Feature = { icon: IconName; title: string; desc: string };

const FEATURES: Feature[] = [
  { icon: "diamond", title: "Premium Quality", desc: "Ultra-clean and precise stitching for perfect results" },
  { icon: "zap", title: "Fast Turnaround", desc: "Same day & 24 hours delivery available for most orders" },
  { icon: "users", title: "Expert Digitizers", desc: "10+ years experienced professionals in every stitch" },
  { icon: "tag", title: "Affordable Pricing", desc: "Premium quality at competitive and fair prices" },
  { icon: "headset", title: "24/7 Support", desc: "We are always here to help you anytime, anywhere" },
];

export default function WhyChooseUs() {
  return (
    <section
      aria-label="Why choose Vesper"
      className="bg-[#1a1a1a] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Vesper?"
          title="The Vesper Advantage"
          subtitle="We combine craftsmanship, technology and dedication to deliver digitizing that exceeds expectations every single time."
          light
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {FEATURES.map((f) => {
            const Icon = IconByName[f.icon];
            return (
              <div
                key={f.title}
                className="flex flex-col items-center rounded-xl border border-white/10 bg-white/[0.03] px-5 py-8 text-center transition-colors hover:border-[#c8102e]/30 hover:bg-white/[0.06]"
              >
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#c8102e]/15 text-[#c8102e] ring-1 ring-[#c8102e]/30">
                  <Icon className="h-7 w-7" />
                </span>
                <div className="text-sm font-bold uppercase tracking-wider text-white sm:text-base">
                  {f.title}
                </div>
                <div className="mt-2 text-xs leading-relaxed text-white/60 sm:text-sm">
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
