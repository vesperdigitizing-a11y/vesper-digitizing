import { IconByName, type IconName } from "./icons";

type Feature = { icon: IconName; title: string; desc: string };

const FEATURES: Feature[] = [
  { icon: "diamond", title: "Premium Quality", desc: "Ultra-clean and precise stitching for perfect results every time" },
  { icon: "zap", title: "Fast Turnaround", desc: "Same day & 24 hours delivery available for most orders" },
  { icon: "users", title: "Expert Digitizers", desc: "10+ years experienced professionals in every stitch" },
  { icon: "refresh", title: "Unlimited Revisions", desc: "We work until you are 100% satisfied with the result" },
  { icon: "headset", title: "24/7 Support", desc: "We are always here to help you anytime, anywhere" },
  { icon: "shieldCheck", title: "100% Guaranteed", desc: "Your satisfaction is guaranteed or your money back" },
];

export default function AboutWhyChoose() {
  return (
    <section className="bg-[#f5f5f5] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#c8102e]">
            <span className="h-px w-6 bg-current opacity-60" />
            Why Choose Vesper?
            <span className="h-px w-6 bg-current opacity-60" />
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
            The Vesper Advantage
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[#6b7280] sm:text-base">
            We combine craftsmanship, technology and dedication to deliver digitizing
            that exceeds expectations every single time.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => {
            const Icon = IconByName[f.icon];
            return (
              <div
                key={f.title}
                className="flex items-start gap-4 rounded-xl border border-[#e5e7eb] bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#c8102e]/10 text-[#c8102e] ring-1 ring-[#c8102e]/20">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-[#1a1a1a]">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#6b7280]">
                    {f.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
