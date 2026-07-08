import SectionHeading from "./SectionHeading";
import { IconByName, type IconName } from "./icons";

type Step = {
  num: string;
  icon: IconName;
  title: string;
  desc: string;
};

const STEPS: Step[] = [
  { num: "01", icon: "upload", title: "Upload Artwork", desc: "Send us your logo or design in any format" },
  { num: "02", icon: "penTool", title: "We Digitize", desc: "Our experts digitize with precision and care" },
  { num: "03", icon: "shieldCheck", title: "Quality Check", desc: "Every file goes through strict quality control" },
  { num: "04", icon: "send", title: "Delivery", desc: "Receive your files in your desired format" },
  { num: "05", icon: "smile", title: "Happy Client", desc: "You achieve your goals and build long-term trust" },
];

export default function Process() {
  return (
    <section id="process" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Process"
          title="From Artwork to Perfection"
          subtitle="A streamlined five-step workflow that turns your artwork into production-ready embroidery files."
        />

        <div className="relative mt-14">
          {/* Horizontal connector line */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8102e]/30 to-transparent"
          />

          <ol className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
            {STEPS.map((step) => {
              const Icon = IconByName[step.icon];
              return (
                <li
                  key={step.num}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Numbered circle */}
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white ring-2 ring-[#c8102e] shadow-sm">
                    <Icon className="h-6 w-6 text-[#c8102e]" />
                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#c8102e] text-[10px] font-bold text-white">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-base font-bold text-[#1a1a1a]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#6b7280] sm:text-sm">
                    {step.desc}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
