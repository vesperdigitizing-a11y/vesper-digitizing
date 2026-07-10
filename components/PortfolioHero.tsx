import { ArrowRight, Trophy, User, Globe, BadgeCheck } from "./icons";
import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";

const STATS = [
  { icon: Trophy, value: 5000, suffix: "+", label: "Projects" },
  { icon: User, value: 2500, suffix: "+", label: "Customers" },
  { icon: Globe, value: 45, suffix: "+", label: "Countries" },
  { icon: BadgeCheck, value: 99, suffix: "%", label: "Satisfaction" },
];

export default function PortfolioHero() {
  return (
    <section
      className="relative overflow-hidden bg-white bg-right bg-cover bg-no-repeat hero-mesh noise-overlay lg:bg-center"
      style={{
        backgroundImage: 'url("/images/HeroPorfolio.png")',
      }}
    >
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

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 lg:px-8 lg:pt-20 lg:pb-16">
        <div className="max-w-xl">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#c8102e]">
              Our Portfolio
              <span className="h-px w-6 bg-current opacity-60" />
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#1a1a1a] text-balance sm:text-5xl lg:text-5xl">
              Stitching Your Ideas <br className="hidden sm:block" />
              Into <span className="text-gradient">Perfection</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#1a1a1a]/75 sm:text-lg">
              Explore our recent digitizing projects. Every design is crafted with
              precision, passion and perfection to make your brand stand out.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/contact"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#c8102e] px-6 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_8px_20px_-6px_rgba(200,16,46,0.5)] transition-all hover:bg-[#a30d24] hover:shadow-[0_12px_28px_-6px_rgba(200,16,46,0.6)]"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="/services"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border-2 border-[#1a1a1a]/15 bg-white px-6 text-sm font-semibold uppercase tracking-wide text-[#1a1a1a] transition-all hover:border-[#1a1a1a]/40 hover:bg-[#f5f5f5]"
              >
                View Services
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </ScrollReveal>

          {/* Stats row with animated counters — equal-width columns + short,
              nowrap labels keep every badge's icon/number/label aligned. */}
          <ScrollReveal stagger delay={400} className="mt-10 w-full">
            <div className="grid grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="group flex items-start gap-1.5 sm:gap-2.5">
                  <s.icon className="mt-0.5 h-4 w-4 shrink-0 text-[#c8102e] transition-transform group-hover:scale-110 sm:h-5 sm:w-5" strokeWidth={1.75} />
                  <div className="leading-tight">
                    <div className="whitespace-nowrap font-display text-sm font-extrabold text-[#1a1a1a] sm:text-xl">
                      <AnimatedCounter value={s.value} suffix={s.suffix} />
                    </div>
                    <div className="whitespace-nowrap text-[10px] font-medium leading-snug text-[#6b7280] sm:text-sm">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
