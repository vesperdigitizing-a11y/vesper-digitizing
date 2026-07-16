"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "./icons";
import ScrollReveal from "./ScrollReveal";

type PortfolioItem = {
  title: string;
  category: string;
  image: string;
};

const ITEMS: PortfolioItem[] = [
  // { title: "Cap Digitizing",        category: "caps",     image: "/images/portfolio/cap.jpg" },
  // { title: "Left Chest Logo",       category: "left-chest", image: "/images/portfolio/polo.jpg" },
  // { title: "Jacket Back",           category: "jacket",   image: "/images/portfolio/jacket.jpg" },
  // { title: "Patches",      category: "patches",  image: "/images/portfolio/patch.jpg" },
  // { title: "3D Puff Digitizing",    category: "3d-puff",  image: "/images/portfolio/puff.jpg" },
  // { title: "Embroidery Patch",      category: "patches",  image: "/images/portfolio/tiger.jpg" },
  // { title: "Applique Digitizing",   category: "applique", image: "/images/portfolio/applique.jpg" },
  // { title: "Applique Logo",         category: "applique", image: "/images/portfolio/original.jpg" },
  // {
  //   title: "Flat Embroidery",
  //   category: "left-chest",
  //   image: "/images/portfolio/text.jpg",
  // },
  // {
  //   title: "Chenille Digitizing",
  //   category: "patches",
  //   image: "/images/portfolio/chenille.png",
  // },
  // {
  //   title: "Towel Embroidery",
  //   category: "left-chest",
  //   image: "/images/portfolio/crown.jpg",
  // },
  // {
  //   title: "Mascot Digitizing",
  //   category: "patches",
  //   image: "/images/portfolio/shark.jpg",
  // },

  // Real client work
  // {
  //   title: "Cap Digitizing — Perco Worldwide",
  //   category: "caps",
  //   image: "/images/products/digitizing/cap-embroidery-perco-worldwide.jpg",
  // },
  // {
  //   title: "Cap Digitizing — Transmateriales",
  //   category: "caps",
  //   image: "/images/products/digitizing/cap-embroidery-transmateriales.jpg",
  // },
  // {
  //   title: "Left Chest Logo — Servicios Automotrices",
  //   category: "left-chest",
  //   image: "/images/products/digitizing/left-chest-servicios-automotrices.jpg",
  // },
  // {
  //   title: "Towel Embroidery — Don Crudo Seafood",
  //   category: "left-chest",
  //   image: "/images/products/digitizing/towel-embroidery-don-crudo-seafood.jpg",
  // },
    {
    title: "3D Puff — Sox Flame",
    category: "3d-puff",
    image: "/images/products/3dArt/sox-flame-3d-puff.jpg",
  },
  {
    title: "3D Puff — AC/DC PWR UP Tour",
    category: "3d-puff",
    image: "/images/products/3dArt/acdc-pwr-up-tour-3d-puff.jpg",
  },
  {
    title: "3D Puff — NY Monogram Wings",
    category: "3d-puff",
    image: "/images/products/3dArt/ny-monogram-wings-3d-puff.jpg",
  },

  {
    title: "Patch — Don't Hassle Me With Shuckle",
    category: "patches",
    image: "/images/products/customPatches/patch-dont-hassle-me-shuckle.jpg",
  },
  {
    title: "Patch — Squirtle Squad",
    category: "patches",
    image: "/images/products/customPatches/patch-squirtle-squad.jpg",
  },
  {
    title: "Patch — Classic Pikachu",
    category: "patches",
    image: "/images/products/customPatches/patch-classic-pikachu-1996.jpg",
  },
  {
    title: "Patch — Nursing Assistant",
    category: "patches",
    image:
      "/images/products/customPatches/patch-licensed-nursing-assistant.jpg",
  },
  {
    title: "Patch — Error 404",
    category: "patches",
    image: "/images/products/customPatches/patch-error-404.jpg",
  },
  {
    title: "Patch — Fire Department",
    category: "patches",
    image: "/images/products/customPatches/patch-kanto-fire-department.jpg",
  },
  {
    title: "Patch — Delivery Service",
    category: "patches",
    image:
      "/images/products/customPatches/patch-dragonite-delivery-service.jpg",
  },
  {
    title: "Patch — Bean of the Year",
    category: "patches",
    image: "/images/products/customPatches/patch-official-bean-of-the-year.jpg",
  },
  {
    title: "Patch — Certified Locally Grown",
    category: "patches",
    image: "/images/products/customPatches/patch-certified-locally-grown.jpg",
  },
  {
    title: "Patch — Dragon Slayer",
    category: "patches",
    image:
      "/images/products/customPatches/patch-professional-dragon-slayer.jpg",
  },
  {
    title: "Patch — Dog Mascot",
    category: "patches",
    image: "/images/products/Chenille/patch-dog-mascot.jpg",
  },

  {
    title: "Chenille — Christin Cruz",
    category: "patches",
    image: "/images/products/Chenille/chenille-christin-cruz.jpg",
  },
  {
    title: "Chenille — Rabbits",
    category: "patches",
    image: "/images/products/Chenille/chenille-rabbits.jpg",
  },
  // {
  //   title: "Chenille — Varsity Letters",
  //   category: "patches",
  //   image: "/images/products/Chenille/chenille-king-varsity-letters.jpg",
  // },
  {
    title: "Chenille — Team Names",
    category: "patches",
    image: "/images/products/Chenille/chenille-team-name-patches.jpg",
  },
  {
    title: "Chenille — Luigi",
    category: "patches",
    image: "/images/products/Chenille/chenille-luigi.jpg",
  },
  {
    title: "Chenille — Left Heart",
    category: "patches",
    image: "/images/products/Chenille/chenille-left-heart.jpg",
  },

  // {
  //   title: "Vector Art — Pop Art Illustration",
  //   category: "vector",
  //   image: "/images/products/vectorArt/vector-pop-art-illustration.jpg",
  // },
  {
    title: "Vector Art — Cartoon Character",
    category: "vector",
    image: "/images/products/vectorArt/vector-cartoon-character-art.jpg",
  },
  {
    title: "Vector Art — Wolf Illustration",
    category: "vector",
    image: "/images/products/vectorArt/vector-wolf-illustration.jpg",
  },
  {
    title: "Vector Art — Pikachu Dragon",
    category: "vector",
    image: "/images/products/vectorArt/vector-pikachu-dragon-art.jpg",
  },
  {
    title: "Vector Art — Snack Bandit",
    category: "vector",
    image: "/images/products/vectorArt/vector-snack-bandit-art.jpg",
  },
];

const FILTERS = [
  { label: "All", value: "all" },
  // { label: "Caps", value: "caps" },
  // { label: "Left Chest Logo", value: "left-chest" },
  // { label: "Jacket Back", value: "jacket" },
  { label: "Patches", value: "patches" },
  { label: "3D Puff", value: "3d-puff" },
  { label: "Applique", value: "applique" },
  { label: "Polo", value: "polo" },
  { label: "Vector Art", value: "vector" },
];

export default function PortfolioGallery() {
  const [active, setActive] = useState("all");

  const items =
    active === "all" ? ITEMS : ITEMS.filter((i) => i.category === active);

  return (
    <section id="portfolio-gallery" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#c8102e]">
              <span className="h-px w-6 bg-current opacity-60" />
              Browse Our Work
              <span className="h-px w-6 bg-current opacity-60" />
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Our <span className="text-gradient">Portfolio</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Filter tabs */}
        <ScrollReveal>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`relative overflow-hidden rounded-md px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-all duration-300 sm:text-sm ${
                  active === f.value
                    ? "bg-[#c8102e] text-white shadow-[0_8px_20px_-6px_rgba(200,16,46,0.5)]"
                    : "border border-[#e5e7eb] bg-white text-[#6b7280] hover:border-[#c8102e] hover:text-[#c8102e]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Portfolio grid */}
        <ScrollReveal
          stagger
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-[#e5e7eb] transition-all duration-500 hover:shadow-2xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f5f5f5]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#c8102e]/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                {/* Top accent border */}
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[#c8102e] transition-transform duration-500 group-hover:scale-x-100" />
              </div>

              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1a1a1a] sm:text-sm">
                  {item.title}
                </span>
                <a
                  href="#portfolio-gallery"
                  aria-label={`View ${item.title} project`}
                  className="inline-flex -translate-x-2 items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-[#c8102e] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:text-xs"
                >
                  View
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </article>
          ))}
        </ScrollReveal>

        {items.length === 0 && (
          <p className="mt-10 text-center text-sm text-[#6b7280]">
            No items in this category.
          </p>
        )}

        <ScrollReveal>
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#c8102e] px-6 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_8px_20px_-6px_rgba(200,16,46,0.5)] transition-all hover:bg-[#a30d24] hover:shadow-[0_12px_28px_-6px_rgba(200,16,46,0.6)]"
            >
              Load More Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
