import { IconByName, type IconName } from "./icons";

type Feature = { icon: IconName; title: string; desc: string };

const FEATURES: Feature[] = [
  { icon: "download", title: "Instant Download", desc: "Get your files immediately after purchase" },
  { icon: "badge-check", title: "Commercial License", desc: "Use designs commercially with every purchase" },
  { icon: "diamond", title: "Premium Quality", desc: "Ultra-clean stitching with perfect results" },
  { icon: "lock", title: "Secure Payment", desc: "Safe and encrypted checkout process" },
  { icon: "headset", title: "Dedicated Support", desc: "We are here to help you 24/7 anytime" },
  { icon: "refresh", title: "Lifetime Updates", desc: "Free updates on all purchased designs" },
];

export default function StoreWhyShop() {
  return (
    <section aria-label="Why shop with Vesper" className="bg-[#1a1a1a] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
            <span className="h-px w-6 bg-current opacity-60" />
            Why Shop With Vesper?
            <span className="h-px w-6 bg-current opacity-60" />
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            The Vesper Advantage
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => {
            const Icon = IconByName[f.icon];
            return (
              <div
                key={f.title}
                className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-[#c8102e]/30 hover:bg-white/[0.06]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#c8102e]/15 text-[#c8102e] ring-1 ring-[#c8102e]/30">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-white">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">
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
