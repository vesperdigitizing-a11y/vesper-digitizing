import { ArrowRight } from "./icons";
import ScrollReveal from "./ScrollReveal";

const TEAM = [
  { name: "Arslan Khan", role: "Senior Digitizer", exp: "10+ Years Experience" },
  { name: "Usman Ali", role: "Lead Digitizer", exp: "8+ Years Experience" },
  { name: "Hassan Raza", role: "Quality Analyst", exp: "7+ Years Experience" },
  { name: "Zain Abbas", role: "Support Manager", exp: "6+ Years Experience" },
];

export default function AboutTeam() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="overflow-hidden rounded-2xl bg-[#1a1a1a] dark-mesh noise-overlay">
            <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr]">
              {/* Left: copy panel */}
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c8102e]">
                  Our Team
                </span>
                <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                  The Experts Behind Every{" "}
                  <span className="text-[#c8102e]">Perfect Stitch</span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  Our team of experienced digitizers works with dedication and
                  creativity to bring your designs to life.
                </p>
                <p className="mt-6 font-display text-lg italic text-white/40">
                  Vesper Digitizing
                </p>
                <a
                  href="/contact"
                  className="group mt-6 inline-flex h-11 w-fit items-center justify-center gap-2 rounded-md bg-[#c8102e] px-5 text-xs font-semibold uppercase tracking-wide text-white shadow-[0_8px_20px_-6px_rgba(200,16,46,0.5)] transition-all hover:bg-[#a30d24]"
                >
                  Join Our Team
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>

              {/* Right: team photo placeholders */}
              <ScrollReveal stagger className="grid grid-cols-2 sm:grid-cols-4">
                {TEAM.map((m) => (
                  <div
                    key={m.name}
                    className="group placeholder-grid relative aspect-[3/4] border-l border-white/10 first:border-l-0 sm:first:border-l"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="rounded-md bg-white/80 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-[#6b7280] transition-opacity duration-500 group-hover:opacity-0">
                        Photo
                      </span>
                    </div>
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#c8102e]/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 transition-transform duration-500 group-hover:translate-y-0">
                      <h3 className="font-display text-sm font-bold text-white">
                        {m.name}
                      </h3>
                      <p className="text-[11px] text-white/60">{m.role}</p>
                      <p className="text-[10px] text-[#c8102e]">{m.exp}</p>
                    </div>
                  </div>
                ))}
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
