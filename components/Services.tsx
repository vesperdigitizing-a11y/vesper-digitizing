import SectionHeading from "./SectionHeading";
import { IconByName, type IconName, Plus } from "./icons";

type Service = {
  icon: IconName;
  title: string;
  desc: string;
};

const SERVICES: Service[] = [
  { icon: "shirt", title: "Left Chest Logos", desc: "Perfect for shirts, uniforms & caps" },
  { icon: "cap", title: "Cap Digitizing", desc: "Specialized in cap logo digitizing" },
  { icon: "jacket", title: "Jacket Back", desc: "Large and complex back designs" },
  { icon: "cube", title: "3D Puff Digitizing", desc: "High quality 3D puff effects" },
  { icon: "layers", title: "Applique Digitizing", desc: "Fabric applique with precise stitching" },
  { icon: "patch", title: "Patch Digitizing", desc: "Custom patches in any shape or size" },
  { icon: "penTool", title: "Vector Conversion", desc: "Convert any image to vector art" },
  { icon: "sparkles", title: "Custom Embroidery", desc: "Bring your ideas to life with thread" },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Offer"
          title="Professional Digitizing Services"
          subtitle="From left chest logos to 3D puff and custom patches, we cover every embroidery digitizing need with precision and care."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => {
            const Icon = IconByName[s.icon];
            return (
              <article
                key={s.title}
                className="group relative flex flex-col items-start rounded-xl border border-[#e5e7eb] bg-white p-6 transition-all hover:-translate-y-1 hover:border-[#c8102e]/30 hover:shadow-lg"
              >
                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#c8102e]/10 text-[#c8102e] ring-1 ring-[#c8102e]/20 transition-colors group-hover:bg-[#c8102e] group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="font-display text-lg font-bold text-[#1a1a1a]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6b7280]">
                  {s.desc}
                </p>
                <a
                  href="#quote"
                  aria-label={`Learn more about ${s.title}`}
                  className="mt-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#e5e7eb] text-[#1a1a1a] transition-colors hover:border-[#c8102e] hover:bg-[#c8102e] hover:text-white"
                >
                  <Plus className="h-4 w-4" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
