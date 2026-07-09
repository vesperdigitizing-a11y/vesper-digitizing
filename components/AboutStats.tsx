import { Trophy, Users, Globe, Clock, Target } from "./icons";
import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";

const STATS = [
  { icon: Trophy, value: 5000, suffix: "+", label: "Projects Completed" },
  { icon: Users, value: 2500, suffix: "+", label: "Happy Clients" },
  { icon: Globe, value: 45, suffix: "+", label: "Countries Served" },
  { icon: Clock, value: 24, suffix: "H", label: "Fast Turnaround" },
  { icon: Target, value: 99, suffix: "%", label: "Client Satisfaction" },
];

export default function AboutStats() {
  return (
    <section className="bg-white px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl bg-[#1a1a1a] px-6 py-10 sm:px-10 dark-mesh noise-overlay">
            <div className="dark-dots pointer-events-none absolute inset-0 opacity-50" />
            <ScrollReveal stagger className="relative grid grid-cols-2 gap-8 sm:grid-cols-5">
              {STATS.map((s) => (
                <div key={s.label} className="group flex flex-col items-center text-center">
                  <span className="pointer-events-none absolute -inset-4 rounded-2xl bg-[#c8102e]/0 blur-2xl transition-all duration-500 group-hover:bg-[#c8102e]/15" />
                  <span className="relative mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#c8102e]/15 text-[#c8102e] ring-1 ring-[#c8102e]/30 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#c8102e] group-hover:text-white">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <div className="relative font-display text-2xl font-extrabold text-white sm:text-3xl">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="relative mt-1 text-xs font-medium uppercase tracking-wider text-white/60 sm:text-sm">
                    {s.label}
                  </div>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
