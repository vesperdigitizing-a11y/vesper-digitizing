import { IconByName, type IconName } from "./icons";

type Stat = { value: string; label: string; icon: IconName };

const STATS: Stat[] = [
  { value: "5000+", label: "Projects Completed", icon: "shieldCheck" },
  { value: "2500+", label: "Happy Clients", icon: "smile" },
  { value: "45+", label: "Countries Served", icon: "globe" },
  { value: "99%", label: "Client Satisfaction", icon: "target" },
];

export default function Stats() {
  return (
    <section aria-label="Company statistics" className="bg-[#1a1a1a] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {STATS.map((s) => {
            const Icon = IconByName[s.icon];
            return (
              <div
                key={s.label}
                className="flex flex-col items-center text-center"
              >
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#c8102e]/15 text-[#c8102e] ring-1 ring-[#c8102e]/30">
                  <Icon className="h-7 w-7" />
                </span>
                <div className="font-display text-4xl font-extrabold text-white sm:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/70 sm:text-sm">
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
