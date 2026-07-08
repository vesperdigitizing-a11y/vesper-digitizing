import { ArrowRight } from "./icons";

const STATS = [
  { value: "5000+", label: "Projects Completed" },
  { value: "2500+", label: "Happy Customers" },
  { value: "45+", label: "Countries Served" },
  { value: "99%", label: "Customer Satisfaction" },
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

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-4 pt-28 pb-12 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:pt-32 lg:pb-16 lg:px-8">
        {/* Left: copy + CTAs */}
        <div className="flex flex-col items-start">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6b7280]">
            Our Portfolio
          </span>

          <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#1a1a1a] text-balance sm:text-5xl lg:text-6xl">
            Stitching Your Ideas <br className="hidden sm:block" />
            <span className="text-[#c8102e]">Into Perfection</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#1a1a1a]/80 sm:text-lg">
            Explore our recent digitizing projects. Every design is crafted with
            precision, passion and perfection to make your brand stand out.
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
              href="/services"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-[#c8102e] bg-white px-6 text-sm font-semibold uppercase tracking-wide text-[#c8102e] transition-colors hover:bg-[#c8102e]/5"
            >
              View Services
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Right column empty — image is the background */}
        <div className="hidden lg:block" />
      </div>

      {/* Stats bar at the bottom of the hero */}
      <div className="relative z-10 border-t border-[#e5e7eb] bg-white/80 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-extrabold text-[#c8102e] sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#6b7280] sm:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
