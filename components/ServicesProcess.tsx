import SectionHeading from "./SectionHeading";
import { IconByName, type IconName } from "./icons";
import ScrollReveal from "./ScrollReveal";

type Step = {
  num: string;
  icon: IconName;
  title: string;
  desc: string;
};

const STEPS: Step[] = [
  { num: "01", icon: "upload", title: "Upload Artwork", desc: "Send us your logo or design in any format" },
  { num: "02", icon: "search", title: "Analysis", desc: "Our team analyzes the artwork for best results" },
  { num: "03", icon: "penTool", title: "Digitizing", desc: "We digitize with precision and industry standards" },
  { num: "04", icon: "shieldCheck", title: "Quality Check", desc: "Every file goes through strict quality control" },
  { num: "05", icon: "send", title: "Delivery", desc: "Receive your files in your desired format" },
  { num: "06", icon: "smile", title: "Client Satisfaction", desc: "Your satisfaction is our success" },
];

export default function ServicesProcess() {
  return (
    <section id="process" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our Process"
            title="From Artwork to Perfection"
            subtitle="A streamlined six-step workflow that turns your artwork into production-ready embroidery files."
          />
        </ScrollReveal>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8102e]/40 to-transparent"
          />

          <ScrollReveal stagger>
            <ol className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-4">
              {STEPS.map((step) => {
                const Icon = IconByName[step.icon];
                return (
                  <li
                    key={step.num}
                    className="group relative flex list-none flex-col items-center text-center"
                  >
                    <span className="pointer-events-none absolute top-0 h-14 w-14 rounded-full bg-[#c8102e]/0 blur-md transition-all duration-500 group-hover:bg-[#c8102e]/30 group-hover:scale-150" />
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white ring-2 ring-[#c8102e] shadow-md transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_-5px_rgba(200,16,46,0.6)]">
                      <Icon className="h-6 w-6 text-[#c8102e]" />
                      <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#c8102e] text-[10px] font-bold text-white shadow-md">
                        {step.num}
                      </span>
                    </div>
                    <h3 className="relative mt-5 font-display text-sm font-bold text-[#1a1a1a] sm:text-base">
                      {step.title}
                    </h3>
                    <p className="relative mt-2 text-xs leading-relaxed text-[#6b7280] sm:text-sm">
                      {step.desc}
                    </p>
                  </li>
                );
              })}
            </ol>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
