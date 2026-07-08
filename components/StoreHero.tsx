import { ArrowRight, Star, Download, BadgeCheck, ShieldCheck, Lock } from "./icons";

const FEATURE_BADGES = [
  { icon: Download, label: "Instant Download" },
  { icon: BadgeCheck, label: "Commercial Use" },
  { icon: ShieldCheck, label: "Premium Quality" },
  { icon: Lock, label: "Secure Payment" },
];

export default function StoreHero() {
  return (
    <section
      className="relative overflow-hidden bg-white"
      style={{
        backgroundImage: 'url("/images/storeHeroRating.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Readability overlay: strong white wash on the left where text sits,
          softer fade to the right so the product image shows through as a
          cohesive background rather than a separate box. */}
      <div
        aria-hidden
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.85) 40%, rgba(255,255,255,0.55) 65%, rgba(255,255,255,0.35) 100%)",
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
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6b7280]">
            Premium Embroidery Design Store
          </span>

          <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#1a1a1a] text-balance sm:text-5xl lg:text-6xl">
            Premium Designs for <br className="hidden sm:block" />
            Every <span className="text-[#c8102e]">Stitch & Style</span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-[#1a1a1a]/75 sm:text-lg">
            Explore our exclusive collection of embroidery designs, fonts, and
            patch packs. Perfect quality, instant download and commercial use
            included.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#products"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#c8102e] px-6 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-[#a30d24]"
            >
              Shop Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#categories"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-[#c8102e] bg-white px-6 text-sm font-semibold uppercase tracking-wide text-[#c8102e] transition-colors hover:bg-[#c8102e]/5"
            >
              Browse Categories
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Feature badges */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {FEATURE_BADGES.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-2 rounded-lg border border-[#e5e7eb] bg-white/90 px-3 py-2.5 backdrop-blur-sm"
              >
                <b.icon className="h-5 w-5 shrink-0 text-[#c8102e]" />
                <span className="text-[11px] font-semibold text-[#1a1a1a]">
                  {b.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Rating badge — floating over the right side of the background image */}
        <div className="mt-8 flex justify-start lg:absolute lg:bottom-16 lg:right-12 lg:mt-0">
          <div className="flex items-center gap-3 rounded-xl bg-white/95 px-5 py-4 shadow-lg ring-1 ring-[#e5e7eb] backdrop-blur-sm">
            <div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-[#c8102e]" />
                ))}
              </div>
              <div className="mt-1 text-xs font-semibold text-[#1a1a1a]">
                4.9/5 Rating
              </div>
            </div>
            <div className="h-10 w-px bg-[#e5e7eb]" />
            <div>
              <div className="font-display text-2xl font-extrabold text-[#c8102e]">
                5000+
              </div>
              <div className="text-[10px] font-medium uppercase tracking-wider text-[#6b7280]">
                Happy Customers
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
