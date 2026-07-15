import { Clock, MapPin, ArrowRight } from "./icons";
import ScrollReveal from "./ScrollReveal";

const OFFICE = {
  type: "Head Office",
  address: "1901 Avenue of the Stars, Suite 2000, Los Angeles, CA 90067, USA",
  note: "Corporate office & sales",
  hours: "Mon - Sat: 9:00 AM - 7:00 PM",
};

export default function ContactOffices() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-3xl">
            Our <span className="text-gradient">Office</span>
          </h2>
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Office card */}
          <ScrollReveal>
            <div className="group flex flex-col gap-6 rounded-xl border border-[#e5e7eb] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#c8102e]/40 hover:shadow-2xl sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#c8102e]/10 text-[#c8102e] ring-1 ring-[#c8102e]/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#c8102e] group-hover:text-white">
                  <MapPin className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-[#1a1a1a]">
                    {OFFICE.type}
                  </h3>
                  <p className="mt-1 text-sm text-[#6b7280]">{OFFICE.address}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#c8102e]">
                    {OFFICE.note}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 border-t border-[#e5e7eb] pt-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#c8102e]/10 text-[#c8102e] ring-1 ring-[#c8102e]/20">
                  <Clock className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-[#1a1a1a]">
                    Working Hours
                  </h3>
                  <p className="mt-1 text-sm text-[#6b7280]">{OFFICE.hours}</p>
                  <p className="text-sm text-[#6b7280]">Sunday: Closed</p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=1901+Avenue+of+the+Stars,+Suite+2000,+Los+Angeles,+CA+90067"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link mt-2 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#c8102e] transition-colors hover:text-[#a30d24]"
              >
                Get Directions
                <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" />
              </a>
            </div>
          </ScrollReveal>

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
