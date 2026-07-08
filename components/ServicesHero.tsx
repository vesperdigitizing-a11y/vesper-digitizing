import { ArrowRight, Clock, Refresh, ShieldCheck, Globe, Star } from "./icons";

const BADGES = [
  { icon: Clock, title: "24 Hours Delivery", sub: "Fast Turnaround" },
  { icon: ShieldCheck, title: "100% Quality Guaranteed", sub: "Premium Stitching" },
  { icon: Refresh, title: "Unlimited Revisions", sub: "Until You're Satisfied" },
  { icon: Globe, title: "Worldwide Support", sub: "Global Clients" },
];

export default function ServicesHero() {
  return (
    <section
      className="relative overflow-hidden bg-white"
      style={{
        backgroundImage: 'url("/images/serviceHero.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Readability overlay: white on the left where text sits */}
      <div
        aria-hidden
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.93) 25%, rgba(255,255,255,0.55) 42%, rgba(255,255,255,0.0) 55%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 z-0 lg:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.6) 60%, rgba(255,255,255,0.85) 100%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 z-0 h-96 w-96 rounded-full bg-[#c8102e]/5 blur-3xl"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-4 pt-28 pb-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:pt-32 lg:pb-24 lg:px-8">
        {/* Left: copy + CTAs + badges */}
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#c8102e]/20 bg-[#c8102e]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#c8102e]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c8102e]" />
            Professional Digitizing Services
          </span>

          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#1a1a1a] text-balance sm:text-5xl lg:text-6xl">
            Precision That Every <br className="hidden sm:block" />
            <span className="text-[#c8102e]">Stitch Deserves</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#1a1a1a]/80 sm:text-lg">
            We deliver exceptional embroidery digitizing with perfect stitch
            quality, fast turnaround and unmatched customer support trusted by
            clients worldwide.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#quote"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#c8102e] px-6 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-[#a30d24]"
            >
              Get Free Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-[#1a1a1a] bg-white px-6 text-sm font-semibold uppercase tracking-wide text-[#1a1a1a] transition-colors hover:bg-[#1a1a1a] hover:text-white"
            >
              View Pricing
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Badges row — grid-cols-4 keeps all four in a single line at every width */}
          <div className="mt-8 grid w-full grid-cols-4 gap-x-3 gap-y-2 sm:gap-x-5">
            {BADGES.map((b) => (
              <div key={b.title} className="flex min-w-0 items-center gap-1.5 sm:gap-2">
                <b.icon className="h-4 w-4 shrink-0 text-[#c8102e] sm:h-5 sm:w-5" />
                <div className="min-w-0 leading-tight">
                  <div className="truncate text-[10px] font-bold text-[#1a1a1a] sm:text-xs">
                    {b.title}
                  </div>
                  <div className="truncate text-[9px] text-[#6b7280] sm:text-[11px]">
                    {b.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — floating "5000+ Completed Projects" stat badge */}
        <div className="relative hidden lg:block">
          <div className="absolute bottom-0 right-0 z-20 flex items-center gap-3 rounded-xl bg-white px-5 py-4 shadow-lg ring-1 ring-[#e5e7eb]">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c8102e]/10 text-[#c8102e]">
              <Star className="h-6 w-6" />
            </span>
            <div>
              <div className="text-2xl font-extrabold text-[#c8102e] font-display">5000+</div>
              <div className="text-[10px] font-medium uppercase tracking-wider text-[#6b7280]">
                Completed Projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
