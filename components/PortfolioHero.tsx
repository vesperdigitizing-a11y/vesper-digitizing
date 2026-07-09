import { ArrowRight, Trophy, User, Globe, BadgeCheck } from "./icons";

const STATS = [
  { icon: Trophy, value: "5000+", label: "Projects Completed" },
  { icon: User, value: "2500+", label: "Happy Customers" },
  { icon: Globe, value: "45+", label: "Countries Served" },
  { icon: BadgeCheck, value: "99%", label: "Customer Satisfaction" },
];

export default function PortfolioHero() {
  return (
    <section
      className="relative overflow-hidden bg-white"
      style={{
        backgroundImage: 'url("/images/HeroPorfolio.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Readability overlay: strong white wash across the full hero so text
          is fully legible, with a softer fade so the image still shows through
          as a cohesive background rather than a separate box. */}
      <div
        aria-hidden
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.93) 25%, rgba(255,255,255,0.55) 42%, rgba(255,255,255,0.0) 55%)",
        }}
      />
      {/* Mobile: stronger vertical wash */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 lg:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.88) 100%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 z-0 h-96 w-96 rounded-full bg-[#c8102e]/5 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-12 sm:px-6 lg:px-8 lg:pt-32 lg:pb-16">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#c8102e]">
            Our Portfolio
            <span className="h-px w-6 bg-current opacity-60" />
          </span>

          <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#1a1a1a] text-balance sm:text-5xl lg:text-6xl">
            Stitching Your Ideas <br className="hidden sm:block" />
            Into <span className="text-[#c8102e]">Perfection</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#1a1a1a]/75 sm:text-lg">
            Explore our recent digitizing projects. Every design is crafted with
            precision, passion and perfection to make your brand stand out.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/contact"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#c8102e] px-6 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-[#a30d24]"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/services"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-[#1a1a1a]/15 bg-white px-6 text-sm font-semibold uppercase tracking-wide text-[#1a1a1a] transition-colors hover:border-[#1a1a1a]/40 hover:bg-[#f5f5f5]"
            >
              View Services
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Stats row — grid-cols-4 keeps all four in a single line at every width */}
          <div className="mt-10 grid grid-cols-4 gap-x-3 sm:gap-x-5">
            {STATS.map((s) => (
              <div key={s.label} className="flex min-w-0 items-start gap-1.5 sm:gap-2.5">
                <s.icon className="mt-0.5 h-4 w-4 shrink-0 text-[#c8102e] sm:h-5 sm:w-5" strokeWidth={1.75} />
                <div className="min-w-0 leading-tight">
                  <div className="font-display text-sm font-extrabold text-[#1a1a1a] sm:text-xl">
                    {s.value}
                  </div>
                  <div className="text-[10px] font-medium leading-snug text-[#6b7280] sm:text-sm">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
