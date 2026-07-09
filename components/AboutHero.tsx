import { ArrowRight, Clock, Trophy, Globe, BadgeCheck } from "./icons";
import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";

const STATS = [
  { icon: Clock, value: 10, suffix: "+", label: "Years of Experience" },
  { icon: Trophy, value: 5000, suffix: "+", label: "Projects Completed" },
  { icon: Globe, value: 45, suffix: "+", label: "Countries Served" },
  { icon: BadgeCheck, value: 99, suffix: "%", label: "Client Satisfaction" },
];

export default function AboutHero() {
  return (
    <section
      className="relative overflow-hidden bg-white hero-mesh noise-overlay"
      style={{
        backgroundImage: 'url("/images/aboutHero.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Readability overlay */}
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
            "linear-gradient(180deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.88) 100%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 z-0 h-96 w-96 rounded-full bg-[#c8102e]/10 blur-3xl animate-float"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-12 sm:px-6 lg:px-8 lg:pt-32 lg:pb-16">
        <div className="max-w-xl">
          <ScrollReveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6b7280]">
              About Vesper Digitizing
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#1a1a1a] text-balance sm:text-5xl lg:text-5xl">
              Crafting Perfection <br className="hidden sm:block" />
              One <span className="text-gradient">Stitch</span> at a Time
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#1a1a1a]/75 sm:text-lg">
              At Vesper Digitizing, we turn your ideas into flawless embroidery.
              With precision, passion, and technology, we deliver digitizing
              solutions that help your brand stand out.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/services"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#c8102e] px-6 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_8px_20px_-6px_rgba(200,16,46,0.5)] transition-all hover:bg-[#a30d24] hover:shadow-[0_12px_28px_-6px_rgba(200,16,46,0.6)]"
              >
                Our Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="/portfolio"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border-2 border-[#c8102e] bg-white px-6 text-sm font-semibold uppercase tracking-wide text-[#c8102e] transition-all hover:bg-[#c8102e] hover:text-white"
              >
                View Portfolio
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </ScrollReveal>

          {/* Stats row with animated counters */}
          <ScrollReveal stagger delay={400} className="mt-8 grid grid-cols-4 gap-x-3 sm:gap-x-6">
            {STATS.map((s) => (
              <div key={s.label} className="group flex min-w-0 items-start gap-1.5 sm:gap-2">
                <s.icon className="mt-0.5 h-4 w-4 shrink-0 text-[#c8102e] transition-transform group-hover:scale-110 sm:h-5 sm:w-5" />
                <div className="min-w-0 leading-tight">
                  <div className="font-display text-sm font-extrabold text-[#1a1a1a] sm:text-lg">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-[10px] leading-snug text-[#6b7280] sm:text-xs">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
