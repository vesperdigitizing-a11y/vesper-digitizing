import { MapPin } from "./icons";
import ScrollReveal from "./ScrollReveal";

const OFFICES = [
  {
    type: "Head Office",
    address: "1901 Avenue of the Stars, Suite 2000, Los Angeles, CA 90067, USA",
    note: "Corporate office & sales",
  },
  {
    type: "Production Unit",
    address: "Plot # 45, Software Technology Park, Lahore, Punjab 54000, Pakistan",
    note: "Design & production facility",
  },
];

export default function ContactOffices() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Office cards */}
          <div className="flex flex-col gap-6">
            <ScrollReveal>
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-3xl">
                Our <span className="text-gradient">Offices</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal stagger>
              {OFFICES.map((office) => (
                <div
                  key={office.type}
                  className="group flex items-start gap-4 rounded-xl border border-[#e5e7eb] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#c8102e]/40 hover:shadow-2xl"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#c8102e]/10 text-[#c8102e] ring-1 ring-[#c8102e]/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#c8102e] group-hover:text-white">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-[#1a1a1a]">
                      {office.type}
                    </h3>
                    <p className="mt-1 text-sm text-[#6b7280]">{office.address}</p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#c8102e]">
                      {office.note}
                    </p>
                  </div>
                </div>
              ))}
            </ScrollReveal>
          </div>

          {/* Map */}
          <ScrollReveal variant="right">
            <div className="relative min-h-[300px] overflow-hidden rounded-xl border border-[#e5e7eb] bg-[#f5f5f5] shadow-sm transition-all duration-500 hover:shadow-2xl">
              <iframe
                title="Vesper Digitizing office location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-118.4211%2C34.0573%2C-118.4051%2C34.0653&layer=mapnik&marker=34.0613%2C-118.4131"
                className="h-full w-full"
                style={{ border: 0, minHeight: "300px" }}
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
