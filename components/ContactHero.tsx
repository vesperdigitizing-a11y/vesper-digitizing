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
        className="pointer-events-none absolute -top-32 -right-32 z-0 h-96 w-96 rounded-full bg-[#c8102e]/5 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-12 sm:px-6 lg:px-8 lg:pt-32 lg:pb-16">
        <div className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6b7280]">
            Home &rsaquo; Contact Us
          </span>

          <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#1a1a1a] text-balance sm:text-5xl lg:text-5xl">
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

          {/* Feature badges — single line, no boxes */}
          <div className="mt-8 grid grid-cols-3 gap-x-3 sm:gap-x-6">
            {BADGES.map((b) => (
              <div key={b.title} className="flex min-w-0 items-start gap-1.5 sm:gap-2.5">
                <b.icon className="mt-0.5 h-4 w-4 shrink-0 text-[#c8102e] sm:h-5 sm:w-5" />
                <div className="min-w-0 leading-tight">
                  <div className="text-[10px] font-bold text-[#1a1a1a] sm:text-xs">{b.title}</div>
                  <div className="text-[10px] leading-snug text-[#6b7280] sm:text-xs">{b.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
