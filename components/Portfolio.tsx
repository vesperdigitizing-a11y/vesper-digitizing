"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { ArrowRight } from "./icons";
import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";

const ITEMS = [
  {
    label: "CAP",
    tag: "Cap Digitizing",
    images: [
      "/images/portfolio/cap.jpg",
      "/images/products/digitizing/cap-embroidery-perco-worldwide.jpg",
      "/images/products/digitizing/cap-embroidery-transmateriales.jpg",
    ],
  },
  {
    label: "POLO",
    tag: "Left Chest Logo",
    images: [
      "/images/portfolio/polo.jpg",
      "/images/products/digitizing/left-chest-servicios-automotrices.jpg",
      "/images/products/digitizing/towel-embroidery-don-crudo-seafood.jpg",
    ],
  },
  {
    label: "JACKET BACK",
    tag: "Jacket Back",
    images: ["/images/portfolio/jacket.jpg"],
  },
  {
    label: "3D PUFF",
    tag: "3D Puff Digitizing",
    images: ["/images/portfolio/puff.jpg"],
  },
  {
    label: "PATCH",
    tag: "Patches",
    images: [
      "/images/portfolio/patch.jpg",
      "/images/products/customPatches/patch-dont-hassle-me-shuckle.jpg",
      "/images/products/customPatches/patch-squirtle-squad.jpg",
      "/images/products/customPatches/patch-classic-pikachu-1996.jpg",
      "/images/products/customPatches/patch-licensed-nursing-assistant.jpg",
      "/images/products/customPatches/patch-error-404.jpg",
      "/images/products/customPatches/patch-kanto-fire-department.jpg",
      "/images/products/customPatches/patch-dragonite-delivery-service.jpg",
      "/images/products/customPatches/patch-official-bean-of-the-year.jpg",
      "/images/products/customPatches/patch-certified-locally-grown.jpg",
      "/images/products/customPatches/patch-professional-dragon-slayer.jpg",
      "/images/products/Chenille/patch-dog-mascot.jpg",
      "/images/products/Chenille/chenille-christin-cruz.jpg",
      "/images/products/Chenille/chenille-rabbits.jpg",
      "/images/products/Chenille/chenille-king-varsity-letters.jpg",
      "/images/products/Chenille/chenille-team-name-patches.jpg",
      "/images/products/Chenille/chenille-luigi.jpg",
      "/images/products/Chenille/chenille-left-heart.jpg",
    ],
  },
];

// Duplicate the items array so the track can loop seamlessly
const TRACK = [...ITEMS, ...ITEMS];

function PortfolioCard({
  label,
  tag,
  image,
}: {
  label: string;
  tag: string;
  image: string;
}) {
  return (
    <article className="group relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-[#e5e7eb] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={tag}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Label slides up on hover */}
        <div className="absolute inset-x-0 bottom-0 p-4">
          <span className="block text-xs font-bold uppercase tracking-wider text-white">
            {label}
          </span>
          <span className="mt-1 block text-[10px] font-medium uppercase tracking-wider text-white/70 transition-all duration-500 group-hover:text-white">
            {tag}
          </span>
        </div>

        {/* Arrow button appears on hover */}
        <span className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-[#c8102e] text-white opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>

      {/* Top border accent on hover */}
      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[#c8102e] transition-transform duration-500 group-hover:scale-x-100" />
    </article>
  );
}

export default function Portfolio() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Number of cards to show per view (responsive)
  // We detect via window width on mount + resize
  const [perView, setPerView] = useState(5);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setPerView(2);
      else if (w < 1024) setPerView(3);
      else setPerView(5);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const total = ITEMS.length;

  const goNext = () => {
    setIndex((i) => (i + 1) % total);
  };
  const goPrev = () => {
    setIndex((i) => (i - 1 + total) % total);
  };

  // Autoplay
  useEffect(() => {
    if (paused) return;
    const id = setInterval(goNext, 3500);
    return () => clearInterval(id);
  }, [paused]);

  // Calculate translateX — each card takes (100 / perView)% of the container width
  // Moving by `index` cards = translateX(-index * (100 / perView)%)
  const translateX = `-${index * (100 / perView)}%`;

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

          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Carousel nav arrows */}
            <div className="mb-3 flex items-center justify-end gap-2">
              <button
                type="button"
                aria-label="Previous"
                onClick={goPrev}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#1a1a1a] shadow-sm transition-all hover:scale-110 hover:border-[#c8102e] hover:text-[#c8102e]"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={goNext}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#1a1a1a] shadow-sm transition-all hover:scale-110 hover:border-[#c8102e] hover:text-[#c8102e]"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Carousel viewport — overflow hidden, cards slide as a group */}
            <div className="overflow-hidden">
              <div
                ref={trackRef}
                className="flex transition-transform duration-700 ease-out"
                style={{
                  transform: `translateX(${translateX})`,
                }}
              >
                {TRACK.map((item, i) => (
                  <div
                    key={`${item.label}-${i}`}
                    className="shrink-0 px-2"
                    style={{ width: `${100 / perView}%` }}
                  >
                    <PortfolioCard
                      label={item.label}
                      tag={item.tag}
                      image={item.images[i % item.images.length]}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Dots indicator */}
            <div className="mt-4 flex items-center justify-center gap-1.5">
              {ITEMS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-6 bg-[#c8102e]"
                      : "w-1.5 bg-[#d1d5db] hover:bg-[#9ca3af]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
