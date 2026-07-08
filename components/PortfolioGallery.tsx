"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "./icons";

type PortfolioItem = {
  title: string;
  category: string;
  image: string;
};

const ITEMS: PortfolioItem[] = [
  { title: "Cap Digitizing",        category: "caps",     image: "/images/portfolio/cap.jpg" },
  { title: "Left Chest Logo",       category: "left-chest", image: "/images/portfolio/polo.jpg" },
  { title: "Jacket Back",           category: "jacket",   image: "/images/portfolio/jacket.jpg" },
  { title: "Patch Digitizing",      category: "patches",  image: "/images/portfolio/patch.jpg" },
  { title: "3D Puff Digitizing",    category: "3d-puff",  image: "/images/portfolio/puff.jpg" },
  { title: "Embroidery Patch",      category: "patches",  image: "/images/portfolio/tiger.jpg" },
  { title: "Applique Digitizing",   category: "applique", image: "/images/portfolio/applique.jpg" },
  { title: "Applique Logo",         category: "applique", image: "/images/portfolio/original.jpg" },
  { title: "Flat Embroidery",       category: "left-chest", image: "/images/portfolio/text.jpg" },
  { title: "Chenille Digitizing",   category: "patches",  image: "/images/portfolio/chenille.png" },
  { title: "Towel Embroidery",      category: "left-chest", image: "/images/portfolio/crown.jpg" },
  { title: "Mascot Digitizing",     category: "patches",  image: "/images/portfolio/shark.jpg" },
];

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Caps", value: "caps" },
  { label: "Left Chest Logo", value: "left-chest" },
  { label: "Jacket Back", value: "jacket" },
  { label: "Patches", value: "patches" },
  { label: "3D Puff", value: "3d-puff" },
  { label: "Applique", value: "applique" },
  { label: "Polo", value: "polo" },
];

export default function PortfolioGallery() {
  const [active, setActive] = useState("all");

  const items =
    active === "all"
      ? ITEMS
      : ITEMS.filter((i) => i.category === active);

  return (
    <section id="portfolio-gallery" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#c8102e]">
            <span className="h-px w-6 bg-current opacity-60" />
            Browse Our Work
            <span className="h-px w-6 bg-current opacity-60" />
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
            Our Portfolio
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`rounded-md px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors sm:text-sm ${
                active === f.value
                  ? "bg-[#c8102e] text-white"
                  : "border border-[#e5e7eb] bg-white text-[#6b7280] hover:border-[#c8102e] hover:text-[#c8102e]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Portfolio grid — 4 columns on desktop */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-[#e5e7eb] transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f5f5f5]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1a1a1a] sm:text-sm">
                  {item.title}
                </span>
                <a
                  href="#portfolio-gallery"
                  aria-label={`View ${item.title} project`}
                  className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-[#c8102e] opacity-0 transition-opacity group-hover:opacity-100 sm:text-xs"
                >
                  View
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {items.length === 0 && (
          <p className="mt-10 text-center text-sm text-[#6b7280]">
            No items in this category.
          </p>
        )}

        {/* Load more button */}
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#c8102e] px-6 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-[#a30d24]"
          >
            Load More Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
