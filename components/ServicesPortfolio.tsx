"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { ArrowRight } from "./icons";
import ScrollReveal from "./ScrollReveal";

type PortfolioItem = {
  title: string;
  category: string;
  image: string;
};

const ITEMS: PortfolioItem[] = [
  { title: "Cap Digitizing",      category: "caps",     image: "/images/portfolio/cap.jpg" },
  { title: "Left Chest Logo",     category: "polo",     image: "/images/portfolio/polo.jpg" },
  { title: "Jacket Back",         category: "jacket",   image: "/images/portfolio/jacket.jpg" },
  { title: "Patch Digitizing",    category: "patch",    image: "/images/portfolio/patch.jpg" },
  { title: "3D Puff Digitizing",  category: "puff",     image: "/images/portfolio/puff.jpg" },
  { title: "Applique Digitizing", category: "applique", image: "/images/portfolio/applique.jpg" },

  // Real client work
  { title: "Cap Digitizing — Perco Worldwide", category: "caps", image: "/images/products/digitizing/cap-embroidery-perco-worldwide.jpg" },
  { title: "Cap Digitizing — Transmateriales", category: "caps", image: "/images/products/digitizing/cap-embroidery-transmateriales.jpg" },
  { title: "Left Chest Logo — Servicios Automotrices", category: "polo", image: "/images/products/digitizing/left-chest-servicios-automotrices.jpg" },
  { title: "Applique Letter",     category: "applique", image: "/images/products/digitizing/applique-letter-m.jpg" },
];

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Caps", value: "caps" },
  { label: "Polo", value: "polo" },
  { label: "Jacket", value: "jacket" },
  { label: "Patch", value: "patch" },
  { label: "3D Puff", value: "puff" },
  { label: "Applique", value: "applique" },
];

export default function ServicesPortfolio() {
  const [active, setActive] = useState("all");

  const items =
    active === "all"
      ? ITEMS
      : ITEMS.filter((i) => i.category === active);

  return (
    <section id="portfolio" className="bg-[#f5f5f5] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our Portfolio"
            title="Featured Digitizing Work"
            subtitle="Explore some of our recent digitizing projects. Quality speaks for itself."
          />
        </ScrollReveal>

        <ScrollReveal>
          {/* Filter tabs */}
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

        <ScrollReveal stagger className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-[#e5e7eb] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f5f5f5]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a]/0 transition-colors duration-500 group-hover:bg-[#1a1a1a]/50">
                  <span className="translate-y-3 text-xs font-semibold uppercase tracking-wider text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {item.title}
                  </span>
                </div>
                {/* Top accent border */}
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[#c8102e] transition-transform duration-500 group-hover:scale-x-100" />
              </div>

              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1a1a1a]">
                  {item.title}
                </span>
                <ArrowRight className="h-4 w-4 -translate-x-2 text-[#c8102e] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
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
            <a
              href="#portfolio"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#c8102e] px-6 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_8px_20px_-6px_rgba(200,16,46,0.5)] transition-all hover:bg-[#a30d24] hover:shadow-[0_12px_28px_-6px_rgba(200,16,46,0.6)]"
            >
              View Full Portfolio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
