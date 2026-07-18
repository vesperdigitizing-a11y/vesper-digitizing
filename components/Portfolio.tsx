"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { ArrowRight } from "./icons";
import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";

type Category = {
  id: string;
  /** Maps to PortfolioGallery FILTER value for /portfolio?category= */
  filterSlug: string;
  label: string;
  tag: string;
  image: string;
  description: string;
};

const CATEGORIES: Category[] = [
  {
    id: "jacket-back",
    filterSlug: "jacket-back",
    label: "Jacket Back",
    tag: "Jacket Back Embroidery",
    image: "/images/products/jacket-back/jacket-back-1.jpeg",
    description:
      "Large-format jacket back designs with high stitch count and intricate detail work.",
  },
  {
    id: "cap-digitizing",
    filterSlug: "cap",
    label: "Cap Digitizing",
    tag: "Cap Digitizing",
    image: "/images/products/cap-digitizing/cap-embroidery-1.jpeg",
    description:
      "Precision cap digitizing with clean stitch-out on curved surfaces.",
  },
  {
    id: "patch-digitizing",
    filterSlug: "patches",
    label: "Patch Digitizing",
    tag: "Patch Digitizing",
    image: "/images/products/patch-digitizing/patch-squirtle-squad.jpg",
    description:
      "Custom embroidered patches with merrowed or laser-cut edges for any application.",
  },
  {
    id: "left-chest",
    filterSlug: "left-chest",
    label: "Left Chest",
    tag: "Left Chest Logo",
    image: "/images/products/left-chest/left-chest-1.jpeg",
    description:
      "Small, clean left chest logos perfect for corporate and casual wear.",
  },
  {
    id: "3d-puff",
    filterSlug: "3d-puff",
    label: "3D Puff",
    tag: "3D Puff Embroidery",
    image: "/images/products/3d-puff/acdc-pwr-up-tour-3d-puff.jpg",
    description:
      "Eye-catching raised 3D puff embroidery that adds dimension to caps and apparel.",
  },
  {
    id: "applique",
    filterSlug: "applique",
    label: "Applique",
    tag: "Applique Digitizing",
    image: "/images/products/applique/applique-letter-m.jpg",
    description:
      "Creative applique designs with layered fabric and precise stitching.",
  },
  {
    id: "chenille",
    filterSlug: "chenille",
    label: "Chenille",
    tag: "Chenille Patches",
    image: "/images/products/Chenille/chenille-christin-cruz.jpg",
    description:
      "Classic chenille patches for letterman jackets, varsity wear and retro branding.",
  },
  {
    id: "towel-digitizing",
    filterSlug: "towel",
    label: "Towel Digitizing",
    tag: "Towel Embroidery",
    image:
      "/images/products/towel-digitizing/towel-embroidery-don-crudo-seafood.jpg",
    description:
      "Premium towel embroidery for hotels, spas, resorts and hospitality branding.",
  },
  {
    id: "sleeve-logos",
    filterSlug: "shirt-sleeve",
    label: "Sleeve Logos",
    tag: "Sleeve Logo Digitizing",
    image: "/images/products/sleeve-logos/shirt-sleeve-1.jpeg",
    description:
      "Compact sleeve logo digitizing optimized for small embroidery areas.",
  },
  {
    id: "vector-conversion",
    filterSlug: "vector",
    label: "Vector Art",
    tag: "Vector Art",
    image:
      "/images/products/vector-conversion/vector-cartoon-character-art.jpg",
    description: "Professional raster-to-vector art for print-ready artwork.",
  },
];

function Tab({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative px-4 py-2 text-xs font-semibold transition-all duration-300 rounded-full sm:px-5 sm:py-2.5 sm:text-sm ${
        active
          ? "text-white bg-[#c8102e] shadow-[0_4px_14px_-4px_rgba(200,16,46,0.5)]"
          : "text-[#6b7280] hover:text-[#1a1a1a] hover:bg-[#f5f5f5]"
      }`}
    >
      {label}
      {!active && (
        <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#c8102e] transition-all duration-300 group-hover:w-4" />
      )}
    </button>
  );
}

function CategoryCard({
  category,
  index,
}: {
  category: Category;
  index: number;
}) {
  return (
    <ScrollReveal delay={index * 100}>
      <Link href={`/portfolio?category=${category.filterSlug}`} scroll={false}>
        <article className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#e5e7eb] transition-all duration-500 hover:shadow-2xl cursor-pointer">
          <div className="absolute inset-0">
            <Image
              src={category.image}
              alt={category.tag}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          </div>

          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <span className="inline-block rounded-full bg-[#c8102e]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
              {category.label}
            </span>
            <h3 className="mt-2 font-display text-lg font-bold text-white sm:text-xl">
              {category.tag}
            </h3>
            <p className="mt-1 line-clamp-2 text-sm text-white/70">
              {category.description}
            </p>
          </div>

          <span className="absolute top-4 right-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-[#c8102e]">
            <ArrowRight className="h-4 w-4" />
          </span>

          <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[#c8102e] transition-transform duration-500 group-hover:scale-x-100" />
        </article>
      </Link>
    </ScrollReveal>
  );
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const filtered = activeTab
    ? CATEGORIES.filter((c) => c.id === activeTab)
    : CATEGORIES;

  return (
    <section id="portfolio" className="relative bg-[#f5f5f5] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            align="center"
            eyebrow="Our Portfolio"
            title="Featured Digitizing Work"
            subtitle="Explore some of our recent digitizing projects. Quality speaks for itself."
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <Tab
              label="All"
              active={activeTab === null}
              onClick={() => setActiveTab(null)}
            />
            {CATEGORIES.map((cat) => (
              <Tab
                key={cat.id}
                label={cat.label}
                active={activeTab === cat.id}
                onClick={() =>
                  setActiveTab(activeTab === cat.id ? null : cat.id)
                }
              />
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((cat, i) => {
            const isLast = i === filtered.length - 1;
            const isSingleLastRow = filtered.length % 3 === 1;

            return (
              <div
                key={cat.id}
                className={isLast && isSingleLastRow ? "lg:col-start-2" : ""}
              >
                <CategoryCard category={cat} index={i} />
              </div>
            );
          })}
        </div>
        <ScrollReveal delay={300}>
          <div className="mt-10 flex justify-center">
            <MagneticButton href="/portfolio" size="md" variant="solid">
              Explore Portfolio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
