import { ArrowRight, Clock, Refresh, ShieldCheck, Globe } from "./icons";

const BADGES = [
  { icon: Clock, title: "24/7 Support", sub: "Always Available" },
  { icon: ShieldCheck, title: "100% Quality", sub: "Guaranteed" },
  { icon: Globe, title: "Fast Delivery", sub: "On Time, Every Time" },
  { icon: Refresh, title: "Unlimited Revisions", sub: "Until You're Satisfied" },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-white"
      style={{
        backgroundImage: 'url("/images/HeroMain.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Readability overlay: white ONLY on the left ~45% where text sits.
          Right half shows the image crisp, with no wash. */}
      <div
        aria-hidden
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.93) 25%, rgba(255,255,255,0.55) 42%, rgba(255,255,255,0.0) 55%)",
        }}
      />
      {/* Mobile: text wraps full-width so we need a slightly stronger left wash,
          but keep right side clear. */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 lg:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.6) 60%, rgba(255,255,255,0.85) 100%)",
        }}
      />

      {/* Subtle red corner glow (kept for the premium feel) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 z-0 h-96 w-96 rounded-full bg-[#c8102e]/5 blur-3xl"
      />

      {/* Reduced padding: pt-12 pb-28 on mobile, lg:pt-16 lg:pb-32 on desktop.
          Still leaves room for the Features bar (-mt-24) to overlap the bottom edge. */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-4 pt-12 pb-28 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:pt-16 lg:pb-32 lg:px-8">
        {/* Left: copy + CTAs + badges */}
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#c8102e]/20 bg-[#c8102e]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#c8102e]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c8102e]" />
            Premium Digitizing Services
          </span>

          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#1a1a1a] text-balance sm:text-5xl lg:text-6xl">
            Precision Digitizing <br className="hidden sm:block" />
            <span className="text-[#c8102e]">Crafted for Premium Embroidery</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#1a1a1a]/80 sm:text-lg">
            We transform artwork into flawless embroidery files with exceptional
            stitch quality, fast turnaround and professional support trusted by
            clients worldwide.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#quote"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#c8102e] px-6 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-[#a30d24]"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-[#c8102e] bg-white px-6 text-sm font-semibold uppercase tracking-wide text-[#c8102e] transition-colors hover:bg-[#c8102e]/5"
            >
              View Portfolio
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Badges row */}
          <div className="mt-8 flex w-full flex-wrap gap-x-7 gap-y-4">
            {BADGES.map((b) => (
              <div key={b.title} className="flex items-center gap-2.5">
                <b.icon className="h-5 w-5 shrink-0 text-[#c8102e]" />
                <div className="leading-tight">
                  <div className="text-xs font-bold text-[#1a1a1a] sm:text-sm">{b.title}</div>
                  <div className="text-[11px] text-[#6b7280]">{b.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column is empty — the image is the section background.
            We keep the floating "5000+ Completed Projects" stat badge here so it
            sits over the image area on desktop. */}
        <div className="relative hidden lg:block">
          <div className="absolute bottom-0 right-0 z-20 rounded-xl bg-white px-5 py-3 shadow-lg ring-1 ring-[#e5e7eb]">
            <div className="text-2xl font-extrabold text-[#c8102e] font-display">5000+</div>
            <div className="text-[10px] font-medium uppercase tracking-wider text-[#6b7280]">
              Completed Projects
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
