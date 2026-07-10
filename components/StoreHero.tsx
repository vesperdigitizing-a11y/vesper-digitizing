import {
  ArrowRight,
  Download,
  BadgeCheck,
  ShieldCheck,
  Lock,
  Star,
  User,
} from "./icons";

const FEATURE_BADGES = [
  { icon: Download, label: "Instant", sub: "Download" },
  { icon: BadgeCheck, label: "Commercial", sub: "Use" },
  { icon: ShieldCheck, label: "Premium", sub: "Quality" },
  { icon: Lock, label: "Secure", sub: "Payment" },
];

const AVATAR_COLORS = [
  "bg-[#9ca3af]",
  "bg-[#6b7280]",
  "bg-[#1a1a1a]",
  "bg-[#c8102e]",
];

export default function StoreHero() {
  return (
    <section
      className="relative overflow-hidden bg-white bg-right bg-cover bg-no-repeat lg:bg-center"
      style={{
        backgroundImage: 'url("/images/storeHero.png")',
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

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 lg:px-8 lg:pt-20 lg:pb-16">
        <div className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6b7280]">
            Premium Embroidery Design Store
          </span>

          <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#1a1a1a] text-balance sm:text-5xl lg:text-5xl">
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

          {/* Feature badges — grid-cols-4 keeps all four in a single line at
              every width; short, nowrap label/sub text guarantees icon and
              text always align across badges (no wrap-count drift). */}
          <div className="mt-8 grid grid-cols-4 gap-x-3 sm:gap-x-5">
            {FEATURE_BADGES.map((b) => (
              <div
                key={b.label}
                className="flex min-w-0 items-start gap-1.5 sm:gap-2.5"
              >
                <b.icon className="mt-0.5 h-4 w-4 shrink-0 text-[#c8102e] sm:h-5 sm:w-5" />
                <div className="min-w-0 leading-tight">
                  <div className="whitespace-nowrap text-[10px] font-bold text-[#1a1a1a] sm:text-xs">
                    {b.label}
                  </div>
                  <div className="whitespace-nowrap text-[10px] leading-snug text-[#6b7280] sm:text-xs">
                    {b.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Happy customers badge — floats over the right side of the background image */}
        <div className="mt-8 flex justify-start lg:absolute lg:right-[-20px] lg:top-1/2 lg:mt-0 lg:-translate-y-1/2">
          <div className="w-56 rounded-xl bg-white/95 px-5 py-4 shadow-lg ring-1 ring-[#e5e7eb] backdrop-blur-sm">
            <div className="font-display text-2xl font-extrabold text-[#c8102e]">
              5000+
            </div>
            <div className="text-sm font-medium text-[#1a1a1a]">
              Happy Customers
            </div>

            <div className="mt-3 flex -space-x-2">
              {AVATAR_COLORS.map((c, i) => (
                <span
                  key={i}
                  className={`flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-white ${c}`}
                >
                  <User className="h-4 w-4 text-white" />
                </span>
              ))}
            </div>

            <div className="mt-3 text-sm font-bold text-[#1a1a1a]">
              4.9/5 Rating
            </div>
            <div className="mt-1 flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 text-[#f5a623]" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
