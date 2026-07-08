import { MapPin } from "./icons";

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
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#c8102e]">
            <span className="h-px w-6 bg-current opacity-60" />
            Our Offices
            <span className="h-px w-6 bg-current opacity-60" />
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
            Where to Find Us
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Office cards */}
          <div className="flex flex-col gap-6">
            {OFFICES.map((office) => (
              <div
                key={office.type}
                className="flex items-start gap-4 rounded-xl border border-[#e5e7eb] bg-white p-6 transition-all hover:shadow-lg"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#c8102e]/10 text-[#c8102e] ring-1 ring-[#c8102e]/20">
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
          </div>

          {/* Map placeholder */}
          <div className="relative min-h-[300px] overflow-hidden rounded-xl border border-[#e5e7eb] bg-[#f5f5f5]">
            <iframe
              title="Vesper Digitizing office location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-118.4211%2C34.0573%2C-118.4051%2C34.0653&layer=mapnik&marker=34.0613%2C-118.4131"
              className="h-full w-full"
              style={{ border: 0, minHeight: "300px" }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
