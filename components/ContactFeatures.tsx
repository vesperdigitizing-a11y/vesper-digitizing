import { IconByName, type IconName } from "./icons";

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
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {FEATURES.map((f) => {
            const Icon = IconByName[f.icon];
            return (
              <div
                key={f.title}
                className="flex flex-col items-center rounded-xl border border-[#e5e7eb] bg-white p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#c8102e]/10 text-[#c8102e] ring-1 ring-[#c8102e]/20">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-sm font-bold text-[#1a1a1a]">{f.title}</h3>
                <p className="mt-1 text-xs text-[#6b7280]">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
