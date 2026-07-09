import { IconByName, type IconName } from "./icons";

type Feature = { icon: IconName; title: string; desc: string };

const FEATURES: Feature[] = [
  { icon: "diamond", title: "Premium Quality", desc: "Top-notch digitizing with perfect stitches." },
  { icon: "zap", title: "Fast Delivery", desc: "Same day & 24 hours turnaround available." },
  { icon: "refresh", title: "Unlimited Revisions", desc: "We work until you are 100% satisfied." },
  { icon: "headset", title: "24/7 Support", desc: "Our team is always here to help you." },
  { icon: "shieldCheck", title: "Secure & Safe", desc: "Your data and designs are 100% secure." },
  { icon: "tag", title: "Affordable Pricing", desc: "Best quality at competitive prices." },
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
            Quality That Makes the <span className="text-[#c8102e]">Difference</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {FEATURES.map((f) => {
            const Icon = IconByName[f.icon];
            return (
              <div
                key={f.title}
                className="flex flex-col items-center rounded-xl border border-[#e5e7eb] bg-white p-5 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#c8102e]/10 text-[#c8102e] ring-1 ring-[#c8102e]/20">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-sm font-bold text-[#1a1a1a] sm:text-base">
                  {f.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-[#6b7280] sm:text-sm">
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
