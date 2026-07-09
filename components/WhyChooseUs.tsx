import SectionHeading from "./SectionHeading";
import { IconByName, type IconName } from "./icons";
import ScrollReveal from "./ScrollReveal";

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
      className="relative bg-[#1a1a1a] py-16 sm:py-20 dark-mesh noise-overlay"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Why Choose Vesper?"
            title="The Vesper Advantage"
            subtitle="We combine craftsmanship, technology and dedication to deliver digitizing that exceeds expectations every single time."
            light
          />
        </ScrollReveal>

        <ScrollReveal stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {FEATURES.map((f) => {
            const Icon = IconByName[f.icon];
            return (
              <div
                key={f.title}
                className="group relative flex flex-col items-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] px-5 py-8 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#c8102e]/40 hover:bg-white/[0.06] hover:shadow-[0_20px_40px_-15px_rgba(200,16,46,0.3)]"
              >
                {/* Gradient glow on hover */}
                <span className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-br from-[#c8102e]/0 to-[#c8102e]/0 opacity-0 blur-md transition-opacity duration-500 group-hover:from-[#c8102e]/15 group-hover:to-transparent group-hover:opacity-100" />

                <span className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#c8102e]/15 text-[#c8102e] ring-1 ring-[#c8102e]/30 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#c8102e] group-hover:text-white group-hover:shadow-[0_0_30px_-5px_rgba(200,16,46,0.7)]">
                  <Icon className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
                </span>
                <div className="relative text-sm font-bold uppercase tracking-wider text-white">
                  {f.title}
                </div>
                <div className="relative mt-2 text-xs leading-relaxed text-white/60">
                  {f.desc}
                </div>
              </div>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
