import Image from "next/image";
import { Target, Eye, Diamond } from "./icons";
import ScrollReveal from "./ScrollReveal";

const PILLARS = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To deliver premium quality digitizing with fast turnaround and exceptional customer service.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To be a global leader in embroidery digitizing, trusted by businesses of all sizes.",
  },
  {
    icon: Diamond,
    title: "Our Values",
    desc: "Quality, Integrity, Innovation, and Customer Satisfaction are at the heart of everything we do.",
  },
];

export default function AboutStory() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left: Team photo - zoomed to cover border */}
          <ScrollReveal variant="left">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-[#e5e7eb] transition-all duration-500 hover:ring-[#c8102e]/30 hover:shadow-2xl translate-y-0 hover:-translate-y-2">
              <Image
                src="/images/aboutTeam.webp"
                alt="Vesper Digitizing Team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-all duration-700 ease-out scale-110 group-hover:scale-125"
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-xl bg-[#1a1a1a]/90 px-4 py-3 backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:bg-[#c8102e]">
                <span className="font-display text-xl font-extrabold text-[#c8102e] group-hover:text-white transition-colors duration-300">10+</span>
                <span className="text-[11px] font-semibold uppercase leading-tight tracking-wider text-white">
                  Years of
                  <br />
                  Excellence
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: copy + pillars */}
          <ScrollReveal variant="right">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#c8102e]">
                <span className="h-px w-6 bg-current opacity-60" />
                Who We Are
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
                A Team of Passionate Digitizers Committed to{" "}
                <span className="text-gradient">Excellence</span>
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-[#1a1a1a]/70">
                Vesper Digitizing was founded with a simple mission — to provide
                world-class embroidery digitizing with unmatched quality and
                service. We combine expert digitizers, advanced technology, and
                a customer-first approach to deliver perfect files every time.
              </p>

              <div className="mt-8 flex flex-col gap-6">
                {PILLARS.map((p) => (
                  <div
                    key={p.title}
                    className="group flex items-start gap-4 rounded-xl p-3 transition-all duration-300 hover:bg-[#f5f5f5]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#c8102e]/10 text-[#c8102e] ring-1 ring-[#c8102e]/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#c8102e] group-hover:text-white">
                      <p.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-bold text-[#1a1a1a]">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#6b7280]">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
