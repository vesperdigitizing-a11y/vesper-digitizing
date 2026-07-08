import { ArrowRight, Clock, Headset, ShieldCheck } from "./icons";

const BADGES = [
  { icon: Clock, title: "Fast Response", sub: "We reply within 1 hour" },
  { icon: Headset, title: "Expert Support", sub: "Get help from our experts" },
  { icon: ShieldCheck, title: "100% Satisfaction", sub: "Your satisfaction is our priority" },
];

export default function ContactHero() {
  return (
    <section
      className="relative overflow-hidden bg-white"
      style={{
        backgroundImage: 'url("/images/HeroContact.png")',
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
            "linear-gradient(90deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.85) 40%, rgba(255,255,255,0.55) 65%, rgba(255,255,255,0.35) 100%)",
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
        className="pointer-events-none absolute -top-32 -right-32 z-0 h-96 w-96 rounded-full bg-[#c8102e]/5 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-12 sm:px-6 lg:px-8 lg:pt-32 lg:pb-16">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6b7280]">
            Home &rsaquo; Contact Us
          </span>

          <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#1a1a1a] text-balance sm:text-5xl lg:text-6xl">
            Let&rsquo;s Create Something <br className="hidden sm:block" />
            <span className="text-[#c8102e]">Amazing Together</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#1a1a1a]/75 sm:text-lg">
            Have a question, need a quote, or want to discuss your project?
            We&rsquo;re here to help you with the best embroidery digitizing
            solutions.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact-form"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#c8102e] px-6 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-[#a30d24]"
            >
              Send Message
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="tel:+12134567890"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-[#c8102e] bg-white px-6 text-sm font-semibold uppercase tracking-wide text-[#c8102e] transition-colors hover:bg-[#c8102e]/5"
            >
              Call Now
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Feature badges */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {BADGES.map((b) => (
              <div
                key={b.title}
                className="flex items-center gap-3 rounded-lg border border-[#e5e7eb] bg-white/90 px-4 py-3 backdrop-blur-sm"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c8102e]/10 text-[#c8102e]">
                  <b.icon className="h-5 w-5" />
                </span>
                <div className="leading-tight">
                  <div className="text-xs font-bold text-[#1a1a1a]">{b.title}</div>
                  <div className="text-[11px] text-[#6b7280]">{b.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
