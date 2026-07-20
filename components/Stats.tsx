import { IconByName, type IconName } from "./icons";
import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";

type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  icon: IconName;
};

const STATS: Stat[] = [
  {
    value: 5000,
    suffix: "+",
    label: "Projects Completed",
    icon: "shieldCheck",
  },
  { value: 2500, suffix: "+", label: "Happy Clients", icon: "smile" },
  { value: 45, suffix: "+", label: "Countries Served", icon: "globe" },
  { value: 99, suffix: "%", label: "Client Satisfaction", icon: "target" },
];

export default function Stats() {
  return (
    <section
      aria-label="Company statistics"
      className="relative w-full bg-[#1a1a1a] py-6 sm:py-8 shadow-2xl dark-mesh noise-overlay"
    >
      <div className="w-full">
        {/* Responsive grid with compact divide lines and auto-reset logic */}
        <ScrollReveal
          stagger
          className="grid w-full grid-cols-2 gap-y-8 divide-x divide-white/10 lg:grid-cols-4 lg:[&>*:nth-child(4n+1)]:border-l-0"
        >
          {STATS.map((s, index) => {
            const Icon = IconByName[s.icon];
            const isFirstInRowMobile = index % 2 === 0;

            return (
              <div
                key={s.label}
                className={`group relative flex flex-col items-center text-center px-4 py-1 ${
                  isFirstInRowMobile ? "border-l-0" : "border-l border-white/15"
                }`}
              >
                {/* Subtle Glow background */}
                <span className="pointer-events-none absolute -inset-2 rounded-xl bg-[#c8102e]/0 blur-xl transition-all duration-500 group-hover:bg-[#c8102e]/10" />

                {/* Compact Icon Container */}
                <span className="relative mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#c8102e]/15 text-[#c8102e] ring-1 ring-[#c8102e]/30 transition-all duration-500 group-hover:scale-105 group-hover:bg-[#c8102e] group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>

                {/* Scaled-down Counter text */}
                <div className="relative font-display text-2xl font-black text-white sm:text-3xl tracking-tight">
                  <AnimatedCounter
                    value={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    decimals={s.decimals ?? 0}
                  />
                </div>

                {/* Compact Label */}
                <div className="relative mt-0.5 text-[10px] font-bold uppercase tracking-widest text-white/60 sm:text-xs">
                  {s.label}
                </div>
              </div>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
