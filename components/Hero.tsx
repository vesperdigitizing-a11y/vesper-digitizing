import { ArrowRight, Clock, Refresh, ShieldCheck, Globe } from "./icons";

const BADGES = [
  { icon: Clock, title: "24/7 Support", sub: "Always Available" },
  { icon: ShieldCheck, title: "100% Quality", sub: "Guaranteed" },
  { icon: Globe, title: "Fast Delivery", sub: "On Time, Every Time" },
  { icon: Refresh, title: "Unlimited Revisions", sub: "Until You're Satisfied" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white hero-radial">
      {/* Subtle red corner glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#c8102e]/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#c8102e]/5 blur-3xl"
      />

      {/* Extra bottom padding (pb-40 lg:pb-48) so the Features bar can overlap into it without covering badges */}
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pt-16 pb-40 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:pt-24 lg:pb-48 lg:px-8">
        {/* Left: copy + CTAs + badges */}
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#c8102e]/20 bg-[#c8102e]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#c8102e]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c8102e]" />
            Premium Digitizing Services
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#1a1a1a] text-balance sm:text-5xl lg:text-6xl">
            Precision Digitizing <br className="hidden sm:block" />
            <span className="text-[#c8102e]">Crafted for Premium Embroidery</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#6b7280] sm:text-lg">
            We transform artwork into flawless embroidery files with exceptional
            stitch quality, fast turnaround and professional support trusted by
            clients worldwide.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
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
          <div className="mt-10 grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
            {BADGES.map((b) => (
              <div
                key={b.title}
                className="flex items-start gap-3 rounded-lg border border-[#e5e7eb] bg-white p-3 shadow-sm"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#c8102e]/10 text-[#c8102e]">
                  <b.icon className="h-5 w-5" />
                </span>
                <div className="leading-tight">
                  <div className="text-xs font-bold text-[#1a1a1a]">{b.title}</div>
                  <div className="text-[10px] text-[#6b7280]">{b.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: hero image as CSS background (full image visible, no cropping) */}
        <div className="relative order-first lg:order-last">
          <div
            className="relative w-full overflow-hidden rounded-2xl border border-[#e5e7eb] bg-[#f5f5f5] shadow-xl"
            style={{
              backgroundImage: 'url("/images/HeroMain.png")',
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              /* Use the image's natural aspect ratio (1271x832) so it fills the box perfectly */
              aspectRatio: "1271 / 832",
            }}
          >
            {/* Floating "5000+ Completed Projects" badge — lifted above so the overlap doesn't cover it */}
            <div className="absolute -bottom-5 -left-3 sm:left-6 z-30 rounded-xl bg-white px-5 py-3 shadow-lg ring-1 ring-[#e5e7eb]">
              <div className="text-2xl font-extrabold text-[#c8102e] font-display">5000+</div>
              <div className="text-[10px] font-medium uppercase tracking-wider text-[#6b7280]">
                Completed Projects
              </div>
            </div>

            {/* Decorative red dot top-right */}
            <div
              aria-hidden
              className="absolute -top-4 -right-4 z-30 h-16 w-16 rounded-2xl bg-[#c8102e] shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
