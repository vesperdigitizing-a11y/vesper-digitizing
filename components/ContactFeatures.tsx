import { IconByName, type IconName } from "./icons";
import ScrollReveal from "./ScrollReveal";

type Feature = { icon: IconName; title: string; desc: string };

const FEATURES: Feature[] = [
  { icon: "headset", title: "24/7 Support", desc: "We are always here to help" },
  { icon: "clock", title: "Quick Response", desc: "We reply within 1 hour" },
  { icon: "shieldCheck", title: "100% Secure", desc: "Your information is always safe" },
  { icon: "users", title: "Expert Team", desc: "Professional digitizers at your service" },
  { icon: "globe", title: "Global Clients", desc: "Trusted by clients worldwide" },
];

export default function ContactFeatures() {
  return (
    <section className="bg-[#f5f5f5] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal stagger>
          <div className="grid grid-cols-1 gap-6 rounded-xl border border-[#e5e7eb] bg-white p-6 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 lg:p-8">
            {FEATURES.map((f) => {
              const Icon = IconByName[f.icon];
              return (
                <div key={f.title} className="group flex items-center gap-3 transition-transform duration-300 hover:scale-105">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#c8102e]/10 text-[#c8102e] ring-1 ring-[#c8102e]/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#c8102e] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="leading-tight">
                    <h3 className="text-sm font-bold text-[#1a1a1a]">{f.title}</h3>
                    <p className="mt-0.5 text-xs text-[#6b7280]">{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
