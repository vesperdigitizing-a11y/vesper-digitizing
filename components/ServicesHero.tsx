import { ArrowRight, Clock, Refresh, ShieldCheck, Globe, Star } from "./icons";
import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";

const BADGES = [
  { icon: Clock, title: "24 Hours Delivery", sub: "Fast Turnaround" },
  { icon: ShieldCheck, title: "100% Quality Guaranteed", sub: "Premium Stitching" },
  { icon: Refresh, title: "Unlimited Revisions", sub: "Until You're Satisfied" },
  { icon: Globe, title: "Worldwide Support", sub: "Global Clients" },
];

export default function ServicesHero() {
  return (
    <section
      className="relative overflow-hidden bg-white hero-mesh noise-overlay"
      style={{
        backgroundImage: 'url("/images/serviceHero.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Stronger readability overlay — covers more area so text is always legible */}
      <div
        aria-hidden
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.96) 30%, rgba(255,255,255,0.80) 50%, rgba(255,255,255,0.40) 65%, rgba(255,255,255,0.0) 80%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 z-0 lg:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.80) 50%, rgba(255,255,255,0.92) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 z-0 h-96 w-96 rounded-full bg-[#c8102e]/10 blur-3xl animate-float"
      />

      {/* FIX: items-start instead of items-center (so left content starts at top,
          not vertically centered against the empty right column).
          Increased bottom padding so badges never feel cramped at the bottom. */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-start gap-8 px-4 pt-28 pb-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:pt-32 lg:pb-28 lg:px-8">
        <div className="flex flex-col items-start">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#c8102e]/20 bg-[#c8102e]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#c8102e] backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c8102e] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#c8102e]" />
              </span>
              Professional Digitizing Services
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#1a1a1a] text-balance sm:text-5xl lg:text-5xl">
              Precision That Every <br className="hidden sm:block" />
              <span className="text-gradient">Stitch Deserves</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#1a1a1a]/80 sm:text-lg">
              We deliver exceptional embroidery digitizing with perfect stitch
              quality, fast turnaround and unmatched customer support trusted by
              clients worldwide.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#quote"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#c8102e] px-6 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_8px_20px_-6px_rgba(200,16,46,0.5)] transition-all hover:bg-[#a30d24] hover:shadow-[0_12px_28px_-6px_rgba(200,16,46,0.6)]"
              >
                Get Free Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border-2 border-[#1a1a1a] bg-white px-6 text-sm font-semibold uppercase tracking-wide text-[#1a1a1a] transition-all hover:bg-[#1a1a1a] hover:text-white"
              >
                View Pricing
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </ScrollReveal>

          {/* Badges — equal-width columns keep icon/text alignment consistent
              regardless of how many lines each title/sub wraps to. */}
          <ScrollReveal stagger delay={400} className="mt-8 w-full">
            <div className="grid grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-4 lg:gap-x-6">
              {BADGES.map((b) => (
                <div key={b.title} className="group flex items-start gap-1.5 sm:gap-2">
                  <b.icon className="mt-0.5 h-4 w-4 shrink-0 text-[#c8102e] transition-transform group-hover:scale-110 sm:h-5 sm:w-5" />
                  <div className="leading-tight">
                    <div className="text-[10px] font-bold text-[#1a1a1a] sm:text-xs">
                      {b.title}
                    </div>
                    <div className="text-[10px] text-[#6b7280] sm:text-xs">
                      {b.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Right column — floating stat badge with animated counter */}
        <ScrollReveal variant="scale" delay={500} className="relative hidden lg:block">
          <div className="absolute bottom-0 right-0 z-20 flex items-center gap-3 rounded-xl bg-white/95 px-5 py-4 shadow-2xl ring-1 ring-[#e5e7eb] backdrop-blur animate-float">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c8102e]/10 text-[#c8102e]">
              <Star className="h-6 w-6" />
            </span>
            <div>
              <div className="text-2xl font-extrabold text-[#c8102e] font-display">
                <AnimatedCounter value={5000} suffix="+" />
              </div>
              <div className="text-[10px] font-medium uppercase tracking-wider text-[#6b7280]">
                Completed Projects
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
