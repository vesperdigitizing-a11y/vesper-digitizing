import SectionHeading from "./SectionHeading";
import { ArrowRight } from "./icons";

const ITEMS = [
  { label: "CAP", tag: "Cap Digitizing" },
  { label: "POLO", tag: "Left Chest Logo" },
  { label: "JACKET BACK", tag: "Jacket Back" },
  { label: "3D PUFF", tag: "3D Puff Digitizing" },
  { label: "PATCH", tag: "Patch Digitizing" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#f5f5f5] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Portfolio"
          title="Featured Work"
          subtitle="Explore some of our recent digitizing projects. Quality speaks for itself."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-5">
          {ITEMS.map((item, idx) => (
            <article
              key={item.label}
              className={`group relative overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-[#e5e7eb] transition-all hover:shadow-lg ${
                idx === 0 ? "md:col-span-1 lg:col-span-1" : ""
              }`}
            >
              {/* Empty placeholder box — image not available in public folder */}
              <div className="placeholder-grid relative aspect-[4/5] w-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="rounded-md bg-white/80 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-[#6b7280]">
                    Image
                  </span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a]/0 transition-colors group-hover:bg-[#1a1a1a]/40">
                  <span className="translate-y-2 text-xs font-semibold uppercase tracking-wider text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    {item.tag}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1a1a1a]">
                  {item.label}
                </span>
                <ArrowRight className="h-4 w-4 text-[#c8102e] opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#portfolio"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#c8102e] px-6 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-[#a30d24]"
          >
            Explore Portfolio
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
