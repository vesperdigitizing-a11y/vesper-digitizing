import { ArrowRight, Clock, Headset, ShieldCheck } from "./icons";
import ScrollReveal from "./ScrollReveal";

const BADGES = [
  { icon: Clock, title: "Fast Response", sub: "We reply within 1 hour" },
  { icon: Headset, title: "Expert Support", sub: "Get help from our experts" },
  { icon: ShieldCheck, title: "100% Satisfaction", sub: "Your satisfaction is our priority" },
];

export default function ContactHero() {
  return (
    <section
      className="relative overflow-hidden bg-white bg-right bg-cover bg-no-repeat hero-mesh noise-overlay lg:bg-center"
      style={{
        backgroundImage: 'url("/images/HeroContact.png")',
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6b7280]">
              Home &rsaquo; Contact Us
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#1a1a1a] text-balance sm:text-5xl lg:text-5xl">
              Let&rsquo;s Create Something <br className="hidden sm:block" />
              <span className="text-gradient">Amazing Together</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#1a1a1a]/75 sm:text-lg">
              Have a question, need a quote, or want to discuss your project?
              We&rsquo;re here to help you with the best embroidery digitizing
              solutions.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact-form"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#c8102e] px-6 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_8px_20px_-6px_rgba(200,16,46,0.5)] transition-all hover:bg-[#a30d24] hover:shadow-[0_12px_28px_-6px_rgba(200,16,46,0.6)]"
              >
                Send Message
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="tel:+12134567890"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border-2 border-[#c8102e] bg-white px-6 text-sm font-semibold uppercase tracking-wide text-[#c8102e] transition-all hover:bg-[#c8102e] hover:text-white"
              >
                Call Now
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </ScrollReveal>

          {/* Badges — flex-wrap on mobile */}
          <ScrollReveal stagger delay={400} className="mt-8 w-full">
            <div className="flex w-full flex-wrap gap-x-5 gap-y-3 lg:flex-nowrap lg:gap-x-6">
              {BADGES.map((b) => (
                <div key={b.title} className="group flex items-center gap-1.5 sm:gap-2.5">
                  <b.icon className="mt-0.5 h-4 w-4 shrink-0 text-[#c8102e] transition-transform group-hover:scale-110 sm:h-5 sm:w-5" />
                  <div className="leading-tight">
                    <div className="text-[10px] font-bold text-[#1a1a1a] sm:text-xs">{b.title}</div>
                    <div className="text-[10px] leading-snug text-[#6b7280] sm:text-xs">{b.sub}</div>
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
