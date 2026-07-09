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
  { value: 5000, suffix: "+", label: "Projects Completed", icon: "shieldCheck" },
  { value: 2500, suffix: "+", label: "Happy Clients", icon: "smile" },
  { value: 45, suffix: "+", label: "Countries Served", icon: "globe" },
  { value: 99, suffix: "%", label: "Client Satisfaction", icon: "target" },
];

export default function Stats() {
  return (
    <section
      aria-label="Company statistics"
      className="relative bg-[#1a1a1a] py-16 sm:py-20 dark-mesh noise-overlay"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal stagger className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {STATS.map((s) => {
            const Icon = IconByName[s.icon];
            return (
              <div
                key={s.label}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Glow background */}
                <span className="pointer-events-none absolute -inset-4 rounded-2xl bg-[#c8102e]/0 blur-2xl transition-all duration-500 group-hover:bg-[#c8102e]/15" />

                <span className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#c8102e]/15 text-[#c8102e] ring-1 ring-[#c8102e]/30 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#c8102e] group-hover:text-white group-hover:shadow-[0_0_30px_-5px_rgba(200,16,46,0.6)]">
                  <Icon className="h-7 w-7" />
                </span>
                <div className="relative font-display text-4xl font-extrabold text-white sm:text-5xl">
                  <AnimatedCounter
                    value={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    decimals={s.decimals ?? 0}
                  />
                </div>
                <div className="relative mt-2 text-xs font-semibold uppercase tracking-wider text-white/70 sm:text-sm">
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
