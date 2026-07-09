"use client";

// Enhanced Hero — parallax REMOVED per user request, image stays static.
// Kept: animated gradient mesh background, floating shapes, scroll reveal,
// magnetic CTAs (now just shadow hover), animated counter stat badge,
// trust keywords marquee at bottom.

import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";
import AnimatedCounter from "./AnimatedCounter";
import { ArrowRight, Clock, Refresh, ShieldCheck, Globe, Star } from "./icons";

const BADGES = [
  { icon: Clock, title: "24/7 Support", sub: "Always Available" },
  { icon: ShieldCheck, title: "100% Quality", sub: "Guaranteed" },
  { icon: Globe, title: "Fast Delivery", sub: "On Time, Every Time" },
  { icon: Refresh, title: "Unlimited Revisions", sub: "Until You're Satisfied" },
];

const TRUST_KEYWORDS = [
  "Left Chest Logos",
  "Cap Digitizing",
  "3D Puff",
  "Jacket Back",
  "Applique",
  "Patches",
  "Vector Art",
  "Chenille",
  "Monograms",
  "Custom Embroidery",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-10 hero-mesh noise-overlay">
      {/* Static background image (no parallax) */}
      <div
        aria-hidden
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/images/HeroMain.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Readability overlay — white wash on left where text sits */}
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

      {/* Floating decorative shapes */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 z-0 h-96 w-96 rounded-full bg-[#c8102e]/10 blur-3xl animate-float"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -left-20 z-0 h-64 w-64 rounded-full bg-[#c8102e]/5 blur-3xl animate-float-slow"
      />

      <div className="relative z-10 mx-auto grid items-center gap-8 px-4 pt-12 pb-28 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:pt-16 lg:pb-32 lg:px-8">
        {/* Left: copy + CTAs + badges */}
        <div className="flex flex-col items-start">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#c8102e]/20 bg-[#c8102e]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#c8102e] backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c8102e] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#c8102e]" />
              </span>
              Premium Digitizing Services
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#1a1a1a] text-balance sm:text-5xl lg:text-6xl">
              Precision Digitizing <br className="hidden sm:block" />
              <span className="text-gradient">
                Crafted for Premium Embroidery
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#1a1a1a]/80 sm:text-lg">
              We transform artwork into flawless embroidery files with
              exceptional stitch quality, fast turnaround and professional
              support trusted by clients worldwide.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <MagneticButton href="#quote" size="md" variant="solid">
                Start Your Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </MagneticButton>
              <MagneticButton href="#portfolio" size="md" variant="outline">
                View Portfolio
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </ScrollReveal>

          {/* Badges — flex-wrap on mobile so they shift to next line;
              single row on desktop so all text is fully visible */}
          <ScrollReveal stagger delay={400} className="mt-8 w-full">
            <div className="flex w-full flex-wrap gap-x-5 gap-y-3 lg:flex-nowrap lg:gap-x-6">
              {BADGES.map((b) => (
                <div
                  key={b.title}
                  className="group flex items-center gap-1.5 sm:gap-2"
                >
                  <b.icon className="h-4 w-4 shrink-0 text-[#c8102e] transition-transform group-hover:scale-110 sm:h-5 sm:w-5" />
                  <div className="leading-tight">
                    <div className="text-[10px] font-bold text-[#1a1a1a] sm:text-xs">
                      {b.title}
                    </div>
                    <div className="text-[9px] text-[#6b7280] sm:text-[11px]">
                      {b.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Right column — floating stat card with animated counter */}
        <div className="relative hidden lg:block">
          <ScrollReveal variant="scale" delay={500}>
            <div className="absolute bottom-0 right-0 z-20 flex items-center gap-4 rounded-2xl bg-white/95 px-6 py-4 shadow-2xl ring-1 ring-[#e5e7eb] backdrop-blur animate-float">
              <div>
                <div className="font-display text-3xl font-extrabold text-[#c8102e]">
                  <AnimatedCounter value={5000} suffix="+" />
                </div>
                <div className="text-[10px] font-medium uppercase tracking-wider text-[#6b7280]">
                  Completed Projects
                </div>
              </div>
              <div className="h-10 w-px bg-[#e5e7eb]" />
              <div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-[#f5a623]" />
                  <span className="font-display text-2xl font-extrabold text-[#1a1a1a]">
                    <AnimatedCounter value={4.9} decimals={1} />
                  </span>
                </div>
                <div className="text-[10px] font-medium uppercase tracking-wider text-[#6b7280]">
                  Client Rating
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Trust keywords marquee at bottom of hero */}
      <div className="relative z-10 border-y border-[#e5e7eb] bg-[#1a1a1a] py-4">
        <div className="marquee-mask overflow-hidden">
          <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
            {[...TRUST_KEYWORDS, ...TRUST_KEYWORDS].map((kw, i) => (
              <div key={i} className="flex items-center gap-8">
                <span className="text-sm font-semibold uppercase tracking-wider text-white/40">
                  {kw}
                </span>
                <span className="text-[#c8102e]">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
