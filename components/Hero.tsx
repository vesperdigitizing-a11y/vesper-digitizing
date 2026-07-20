import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";
import AnimatedCounter from "./AnimatedCounter";
import { ArrowRight, Clock, Refresh, ShieldCheck, Globe, Star } from "./icons";
import Image from "next/image";

// Default badges data (used by Home page)
const DEFAULT_BADGES = [
  {
    icon: Clock,
    title: "24/7 Support",
    sub: "Always Available Around The Clock",
  },
  {
    icon: ShieldCheck,
    title: "100% Quality",
    sub: "Guaranteed Premium Stitching",
  },
  { icon: Globe, title: "Fast Delivery", sub: "On Time, Every Single Time" },
  {
    icon: Refresh,
    title: "Unlimited Revisions",
    sub: "Until You Are Fully Satisfied",
  },
];

// CTA Button interface
interface CTAButton {
  text: string;
  href: string;
  variant?: "solid" | "outline";
}

interface HeroProps {
  // Badge props
  badge?: string;
  badgeType?: "dot" | "line" | "breadcrumb" | "plain";

  // Heading props
  title: string;
  titleHighlight?: string;

  // Description
  description?: string;

  // Image props
  image?: string;
  imageAlt?: string;
  useBackgroundImage?: boolean; // Use backgroundImage CSS instead of Next/Image

  // CTA buttons (customizable per page)
  ctaButtons?: CTAButton[];

  // Trust badges (the icons grid)
  badges?: Array<{ icon: any; title: string; sub: string }>;

  // Stats row (animated counters below CTA)
  stats?: Array<{ icon: any; value: number; suffix: string; label: string }>;

  // Floating stats card (right side on desktop)
  showStatsCard?: boolean;
  statsCardValue?: number;
  statsCardSuffix?: string;
  statsCardLabel?: string;
}

export default function Hero({
  badge = "Premium Digitizing Services",
  badgeType = "dot",
  title,
  titleHighlight = "",
  description = "We transform artwork into flawless embroidery files with exceptional stitch quality, fast turnaround and professional support trusted by clients worldwide.",
  image = "/images/HeroImg.png",
  imageAlt = "Vesper Digitizing",
  useBackgroundImage = false,
  ctaButtons = [
    { text: "Start Your Project", href: "/contact", variant: "solid" },
    { text: "View Portfolio", href: "/portfolio", variant: "outline" },
  ],
  badges = DEFAULT_BADGES,
  stats,
  showStatsCard = true,
  statsCardValue = 5000,
  statsCardSuffix = "+",
  statsCardLabel = "Completed Projects",
}: HeroProps) {
  // If using background image (CSS), render differently
  if (useBackgroundImage) {
    return (
      <section
        className="relative overflow-visible bg-white bg-right bg-cover bg-no-repeat hero-mesh lg:bg-center min-h-[600px] lg:min-h-[650px]"
        style={{ backgroundImage: `url("${image}")` }}
      >
        {/* Blur orb */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-32 z-0 h-96 w-96 rounded-full bg-[#c8102e]/10 blur-3xl animate-float"
        />

        {/* White overlay mobile/tablet only */}
        <div
          aria-hidden
          className="absolute inset-0 z-0 lg:hidden"
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

        {/* Light overlay desktop - left side */}
        <div
          aria-hidden
          className="absolute inset-0 z-0 hidden lg:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.60) 30%, rgba(255,255,255,0.30) 45%, rgba(255,255,255,0.0) 60%)",
          }}
        />

        {/* BOTTOM CENTER OVERLAY - 25% from bottom going up (for character visibility) */}
        <div
          aria-hidden
          className="absolute inset-0 z-0 hidden lg:block"
          style={{
            background:
              "radial-gradient(ellipse 80% 35% at 50% 100%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.70) 40%, transparent 80%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 lg:px-8 lg:pt-20 lg:pb-16">
          <div className={stats || showStatsCard ? "max-w-xl" : ""}>
            {renderContent()}
          </div>
        </div>
      </section>
    );
  }

  // Default: Using Next.js Image component (like Home page)
  return (
    <section className="relative overflow-hidden bg-white pb-0 hero-mesh">
      {/* Background Product Image */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-right z-0"
      />

      {/* OVERLAYS (CUSTOM BREAKPOINTS FOR 15+ INCH SCREENS) */}

      {/* 1. Mobile & Tablet: Full solid-to-soft white gradient drop */}
      <div
        aria-hidden
        className="absolute inset-0 z-10 lg:hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 60%, rgba(255,255,255,0.85) 100%)",
        }}
      />

      {/* 2. Standard Laptops (13 to 15-inch): Soft aesthetic vignette */}
      <div
        aria-hidden
        className="absolute inset-0 z-10 hidden lg:block 2xl:hidden"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 35%, rgba(255,255,255,0.75) 50%, rgba(255,255,255,0) 70%)",
        }}
      />

      {/* 3. 15-Inch+ Large Laptops & Monitors (2xl & up): 100% Crisp Vector Fade (Zero Blur / Pure Solid White Background for Text) */}
      <div
        aria-hidden
        className="absolute inset-0 z-10 hidden 2xl:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 42%, rgba(255,255,255,0.90) 52%, rgba(255,255,255,0) 75%)",
        }}
      />

      {/* 4. Soft Red Graphic Orb: Only visible on smaller laptops, strictly hidden on 15-inch+ screens */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/4 z-10 hidden h-[400px] w-[400px] -translate-x-1/4 rounded-full bg-[#c8102e]/5 blur-[120px] lg:block 2xl:hidden"
      />

      {/* Content Wrapper */}
      <div className="relative z-20 mx-auto grid max-w-7xl items-center gap-8 pt-10 pb-16 lg:grid-cols-2 lg:gap-8 lg:pt-16 lg:pb-24 px-4 sm:px-6 lg:px-8">
        {/* Left Side Content - Backdrop blur dynamic wrapper */}
        <div className="flex flex-col items-start max-w-xl backdrop-blur-[2px] lg:backdrop-blur-0 2xl:backdrop-filter-none">
          {renderContent()}
        </div>

        {/* Stats Card - Right Side */}
        {showStatsCard && (
          <div className="relative hidden lg:block z-20">
            <ScrollReveal variant="scale" delay={500}>
              <div className="absolute bottom-4 right-0 flex items-center gap-4 rounded-2xl bg-white px-6 py-4 shadow-2xl ring-1 ring-[#e5e7eb] animate-float 2xl:backdrop-filter-none">
                {/* Stats items render here... */}
                <div>
                  <div className="font-display text-3xl font-extrabold text-[#c8102e]">
                    <AnimatedCounter
                      value={statsCardValue}
                      suffix={statsCardSuffix}
                    />
                  </div>
                  <div className="text-[10px] font-medium uppercase tracking-wider text-[#6b7280]">
                    {statsCardLabel}
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
        )}
      </div>
    </section>
  );

  // Helper function to render the content (badge, title, desc, CTA, badges/stats)
  function renderContent() {
    return (
      <>
        {/* BADGE */}
        <ScrollReveal>
          {badgeType === "dot" && (
            <span className="inline-flex items-center gap-2 rounded-full border border-[#c8102e]/20 bg-[#c8102e]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#c8102e] backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c8102e] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#c8102e]" />
              </span>
              {badge}
            </span>
          )}
          {badgeType === "line" && (
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#c8102e]">
              {badge}
              <span className="h-px w-6 bg-current opacity-60" />
            </span>
          )}
          {(badgeType === "breadcrumb" || badgeType === "plain") && (
            <span
              className={`text-xs font-semibold uppercase tracking-[0.25em] ${badgeType === "breadcrumb" ? "text-[#6b7280]" : "text-[#6b7280]"}`}
            >
              {badge}
            </span>
          )}
        </ScrollReveal>

        {/* TITLE/HEADING */}
        <ScrollReveal delay={100}>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#1a1a1a] text-balance sm:text-5xl lg:text-5xl">
            {title.split("<br/>").map((line, i, arr) => (
              <span key={i}>
                {i > 0 && <br className="hidden sm-block" />}
                {i === arr.length - 1 &&
                titleHighlight &&
                line.includes(titleHighlight) ? (
                  <>
                    {line.replace(titleHighlight, "")}{" "}
                    <span className="text-gradient">{titleHighlight}</span>
                  </>
                ) : (
                  line
                )}
                {i === arr.length - 1 &&
                  titleHighlight &&
                  !line.includes(titleHighlight) && (
                    <>
                      {" "}
                      <br className="hidden sm:block" />
                      <span className="text-gradient">{titleHighlight}</span>
                    </>
                  )}
              </span>
            ))}
          </h1>
        </ScrollReveal>

        {/* DESCRIPTION */}
        {description && (
          <ScrollReveal delay={200}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#1a1a1a]/75 sm:text-lg">
              {description}
            </p>
          </ScrollReveal>
        )}

        {/* CTA BUTTONS */}
        {ctaButtons && ctaButtons.length > 0 && (
          <ScrollReveal delay={300}>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              {ctaButtons.map((btn, idx) =>
                btn.variant === "outline" ? (
                  <MagneticButton
                    key={idx}
                    href={btn.href}
                    size="md"
                    variant="outline"
                  >
                    {btn.text}
                    <ArrowRight className="h-4 w-4" />
                  </MagneticButton>
                ) : (
                  <MagneticButton
                    key={idx}
                    href={btn.href}
                    size="md"
                    variant="solid"
                  >
                    {btn.text}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </MagneticButton>
                ),
              )}
            </div>
          </ScrollReveal>
        )}

        {/* STATS ROW (if provided) */}
        {stats && stats.length > 0 && (
          <ScrollReveal stagger delay={400} className="mt-8 w-full">
            <div className="flex flex-wrap gap-x-4 gap-y-2 max-w-md sm:gap-x-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="group flex items-start gap-1.5 sm:gap-2"
                >
                  <s.icon className="mt-0.5 h-4 w-4 shrink-0 text-[#c8102e] transition-transform group-hover:scale-110 sm:h-5 sm:w-5" />
                  <div className="leading-tight">
                    <div className="whitespace-nowrap font-display text-sm font-extrabold text-[#1a1a1a] sm:text-lg">
                      <AnimatedCounter value={s.value} suffix={s.suffix} />
                    </div>
                    <div className="whitespace-nowrap text-[10px] leading-snug text-[#6b7280] sm:text-xs">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}

        {/* BADGES GRID (if provided and no stats) */}
        {!stats && badges && badges.length > 0 && (
          <ScrollReveal stagger delay={400} className="mt-8 w-full">
            <div className="grid grid-cols-2 items-stretch gap-x-5 gap-y-3 sm:grid-cols-4 lg:gap-x-6">
              {badges.map((b) => (
                <div
                  key={b.title}
                  className="group flex h-full items-start gap-1.5 sm:gap-2"
                >
                  <b.icon className="mt-0.5 h-5 w-5 shrink-0 text-[#c8102e] transition-transform group-hover:scale-110 sm:h-6 sm:w-6" />
                  <div className="leading-tight">
                    <div className="text-xs font-bold text-[#1a1a1a] sm:text-sm">
                      {b.title}
                    </div>
                    <div className="mt-0.5 text-[11px] leading-snug text-[#6b7280] sm:text-xs">
                      {b.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}
      </>
    );
  }
}
