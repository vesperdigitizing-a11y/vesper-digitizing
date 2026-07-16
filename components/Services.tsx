import SectionHeading from "./SectionHeading";
import { IconByName, type IconName, Plus } from "./icons";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";

type Service = {
  icon: IconName;
  title: string;
  desc: string;
};

const SERVICES: Service[] = [
  {
    icon: "shirt",
    title: "Left Chest Logos",
    desc: "Perfect for shirts, uniforms & caps",
  },
  {
    icon: "cap",
    title: "Cap Digitizing",
    desc: "Specialized in cap logo digitizing",
  },
  {
    icon: "jacket",
    title: "Jacket Back",
    desc: "Large and complex back designs",
  },
  {
    icon: "cube",
    title: "3D Puff Digitizing",
    desc: "High quality 3D puff effects",
  },
  {
    icon: "layers",
    title: "Applique Digitizing",
    desc: "Fabric applique with precise stitching",
  },
  {
    icon: "patch",
    title: "Patches",
    desc: "Custom patches in any shape or size",
  },
  {
    icon: "penTool",
    title: "Vector Conversion",
    desc: "Convert any image to vector art",
  },
  {
    icon: "sparkles",
    title: "Custom Embroidery",
    desc: "Bring your ideas to life with thread",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="What We Offer"
            title="Professional Digitizing Services"
            subtitle="From left chest logos to 3D puff and custom patches, we cover every embroidery digitizing need with precision and care."
          />
        </ScrollReveal>

        <ScrollReveal
          stagger
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map((s) => {
            const Icon = IconByName[s.icon];
            return (
              <TiltCard key={s.title} max={10}>
                <article className="group relative flex h-full flex-col items-start overflow-hidden rounded-xl border border-[#e5e7eb] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#c8102e]/40 hover:shadow-2xl">
                  {/* Gradient bg appears on hover */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#c8102e]/0 to-[#c8102e]/0 transition-all duration-500 group-hover:from-[#c8102e]/5 group-hover:to-transparent"
                  />

                  <span className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#c8102e]/10 text-[#c8102e] ring-1 ring-[#c8102e]/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#c8102e] group-hover:text-white group-hover:ring-[#c8102e] group-hover:shadow-[0_8px_20px_-6px_rgba(200,16,46,0.5)]">
                    <Icon className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
                  </span>
                  <h3 className="relative font-display text-lg font-bold text-[#1a1a1a]">
                    {s.title}
                  </h3>
                  <p className="relative mt-2 flex-1 text-sm leading-relaxed text-[#6b7280]">
                    {s.desc}
                  </p>
                  <a
                    href="#quote"
                    aria-label={`Learn more about ${s.title}`}
                    className="relative mt-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#e5e7eb] text-[#1a1a1a] transition-all duration-300 hover:border-[#c8102e] hover:bg-[#c8102e] hover:text-white hover:rotate-90"
                  >
                    <Plus className="h-4 w-4" />
                  </a>
                </article>
              </TiltCard>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
