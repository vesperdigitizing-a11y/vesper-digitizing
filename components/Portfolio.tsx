import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { ArrowRight } from "./icons";
import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";

const ITEMS = [
  { label: "CAP", tag: "Cap Digitizing", image: "/images/portfolio/cap.jpg" },
  { label: "POLO", tag: "Left Chest Logo", image: "/images/portfolio/polo.jpg" },
  { label: "JACKET BACK", tag: "Jacket Back", image: "/images/portfolio/jacket.jpg" },
  { label: "3D PUFF", tag: "3D Puff Digitizing", image: "/images/portfolio/puff.jpg" },
  { label: "PATCH", tag: "Patch Digitizing", image: "/images/portfolio/patch.jpg" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-[#f5f5f5] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[280px_1fr] lg:gap-8">
          <ScrollReveal variant="left">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Our Portfolio"
                title="Featured Work"
                subtitle="Explore some of our recent digitizing projects. Quality speaks for itself."
              />
              <MagneticButton
                href="/portfolio"
                size="md"
                variant="solid"
                className="mt-6"
              >
                Explore Portfolio
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </MagneticButton>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger variant="right" className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
            {ITEMS.map((item) => (
              <article
                key={item.label}
                className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-[#e5e7eb] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <Image
                  src={item.image}
                  alt={item.tag}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Label slides up on hover */}
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <span className="block text-xs font-bold uppercase tracking-wider text-white">
                    {item.label}
                  </span>
                  <span className="mt-1 block text-[10px] font-medium uppercase tracking-wider text-white/70 transition-all duration-500 group-hover:text-[#c8102e]">
                    {item.tag}
                  </span>
                </div>

                {/* Arrow button appears on hover */}
                <span className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-[#c8102e] text-white opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowRight className="h-4 w-4" />
                </span>

                {/* Top border accent on hover */}
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[#c8102e] transition-transform duration-500 group-hover:scale-x-100" />
              </article>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
