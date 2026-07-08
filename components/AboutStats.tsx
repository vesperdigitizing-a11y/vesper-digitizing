import { Trophy, Users, Globe, Clock, Target } from "./icons";

const STATS = [
  { icon: Trophy, value: "5000+", label: "Projects Completed" },
  { icon: Users, value: "2500+", label: "Happy Clients" },
  { icon: Globe, value: "45+", label: "Countries Served" },
  { icon: Clock, value: "24H", label: "Fast Turnaround" },
  { icon: Target, value: "99%", label: "Client Satisfaction" },
];

export default function AboutStats() {
  return (
    <section className="bg-white px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-2xl bg-[#1a1a1a] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-5">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center">
              <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#c8102e]/15 text-[#c8102e] ring-1 ring-[#c8102e]/30">
                <s.icon className="h-6 w-6" />
              </span>
              <div className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-white/60 sm:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
