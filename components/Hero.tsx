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
  badge?: string;
  badgeType?: "dot" | "line" | "breadcrumb" | "plain";
  title: string;
  titleHighlight?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  useBackgroundImage?: boolean;
  ctaButtons?: CTAButton[];
  badges?: Array<{ icon: any; title: string; sub: string }>;
  stats?: Array<{ icon: any; value: number; suffix: string; label: string }>;
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
  if (useBackgroundImage) {
    return (
      <section
        className="relative overflow-visible bg-white bg-right bg-cover bg-no-repeat hero-mesh lg:bg-center min-h-[600px] lg:min-h-[650px]"
        style={{ backgroundImage: `url("${image}")` }}
      >
        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 lg:px-8 lg:pt-20 lg:pb-16">
          <div className={stats || showStatsCard ? "max-w-xl" : ""}>
            {renderContent()}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-white pb-0 hero-mesh">
      {/* CRISP SHARP IMAGE */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-right z-0"
      />

      <div className="relative z-20 mx-auto grid max-w-7xl items-center gap-8 pt-10 pb-16 lg:grid-cols-2 lg:gap-8 lg:pt-16 lg:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start max-w-xl">
          {renderContent()}
        </div>

        {showStatsCard && (
          <div className="relative hidden lg:block z-20">
            <ScrollReveal variant="scale" delay={500}>
              <div className="absolute bottom-4 right-0 flex items-center gap-4 rounded-2xl bg-white px-6 py-4 shadow-2xl ring-1 ring-[#e5e7eb] animate-float">
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

  function renderContent() {
    return (
      <>
        {/* BADGE */}
        <ScrollReveal>
          {badgeType === "dot" && (
            <span className="inline-flex items-center gap-2 rounded-full border border-[#c8102e]/20 bg-[#c8102e]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#c8102e]">
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
                {i > 0 && <br className="hidden sm:block" />}
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

        {/* BADGES - PURE TRANSPARENT WITH HIGH-CONTRAST TEXT SHADOWS */}
        {/* BADGES - PURE TRANSPARENT WITH MAXIMUM TEXT VISIBILITY */}
        {!stats && badges && badges.length > 0 && (
          <ScrollReveal delay={400} className="mt-8 w-full max-w-xl">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {badges.map((b) => (
                <div
                  key={b.title}
                  className="group flex flex-col items-center justify-center p-2 text-center rounded-xl transition-all duration-300 hover:scale-105"
                >
                  {/* Top Red Icon with Solid Red Background Badge for Instant Eye-Catching Look */}
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-[#c8102e] text-white shadow-md shadow-[#c8102e]/20 transition-transform duration-300 group-hover:scale-110">
                    <b.icon className="h-4 w-4" />
                  </div>

                  {/* High Visibility Title */}
                  <div
                    className="text-xs font-black tracking-tight text-[#0f172a] leading-tight"
                    style={{
                      textShadow:
                        "0 2px 4px rgba(255, 255, 255, 1), 0 -1px 4px rgba(255, 255, 255, 1), 2px 0 4px rgba(255, 255, 255, 1), -2px 0 4px rgba(255, 255, 255, 1)",
                      filter: "drop-shadow(0 1px 2px rgba(255, 255, 255, 0.8))",
                    }}
                  >
                    {b.title}
                  </div>

                  {/* High Visibility Subtitle */}
                  <div
                    className="mt-1 text-[10px] font-bold text-[#334155] leading-tight break-words max-w-full"
                    style={{
                      textShadow:
                        "0 1px 3px rgba(255, 255, 255, 1), 0 -1px 3px rgba(255, 255, 255, 1), 1px 0 3px rgba(255, 255, 255, 1), -1px 0 3px rgba(255, 255, 255, 1)",
                    }}
                  >
                    {b.sub}
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
