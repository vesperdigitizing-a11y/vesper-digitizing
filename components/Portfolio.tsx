import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { ArrowRight } from "./icons";

const ITEMS = [
  { label: "CAP", tag: "Cap Digitizing", image: "/images/portfolio/cap.jpg" },
  { label: "POLO", tag: "Left Chest Logo", image: "/images/portfolio/polo.jpg" },
  { label: "JACKET BACK", tag: "Jacket Back", image: "/images/portfolio/jacket.jpg" },
  { label: "3D PUFF", tag: "3D Puff Digitizing", image: "/images/portfolio/puff.jpg" },
  { label: "PATCH", tag: "Patch Digitizing", image: "/images/portfolio/patch.jpg" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#f5f5f5] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[280px_1fr] lg:gap-8">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Portfolio"
              title="Featured Work"
              subtitle="Explore some of our recent digitizing projects. Quality speaks for itself."
            />
            <a
              href="#portfolio"
              className="group mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#c8102e] px-6 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-[#a30d24]"
            >
              Explore Portfolio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
            {ITEMS.map((item) => (
              <article
                key={item.label}
                className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-[#e5e7eb] transition-all hover:shadow-lg"
              >
                <Image
                  src={item.image}
                  alt={item.tag}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                <span className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-wider text-white">
                  {item.label}
                </span>

                <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#c8102e] shadow-md transition-transform group-hover:scale-110">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
