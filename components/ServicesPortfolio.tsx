"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { ArrowRight } from "./icons";
import ScrollReveal from "./ScrollReveal";

type Category = {
  id: string;
  label: string;
  tag: string;
  image: string;
  description: string;
};

const CATEGORIES: Category[] = [
  {
    id: "jacket-back",
    label: "Jacket Back",
    tag: "Jacket Back Embroidery",
    image: "/images/products/jacket-back/jacket-back-1.webp",
    description:
      "Large-format jacket back designs with high stitch count and intricate detail work.",
  },
  {
    id: "cap-digitizing",
    label: "Cap Digitizing",
    tag: "Cap Digitizing",
    image: "/images/products/cap-digitizing/cap-embroidery-1.webp",
    description:
      "Precision cap digitizing with clean stitch-out on curved surfaces.",
  },
  {
    id: "patch-digitizing",
    label: "Custom Patches",
    tag: "Custom Patches",
    image: "/images/products/patch-digitizing/patch-squirtle-squad.webp",
    description: "Custom embroidered patches with merrowed or laser-cut edges.",
  },
  {
    id: "left-chest",
    label: "Left Chest",
    tag: "Left Chest Logo",
    image: "/images/products/left-chest/left-chest-1.webp",
    description:
      "Compact left chest logos optimized for small embroidery areas.",
  },
  {
    id: "sleeve-logos",
    label: "Sleeve Logos",
    tag: "Sleeve Logo Digitizing",
    image: "/images/products/sleeve-logos/shirt-sleeve-1.webp",
    description: "Sleeve logo digitizing with proper density and underlay.",
  },
  {
    id: "3d-puff",
    label: "3D Puff",
    tag: "3D Puff Embroidery",
    image: "/images/products/3d-puff/acdc-pwr-up-tour-3d-puff.webp",
    description: "Raised 3D puff embroidery with dimensional effects.",
  },
  {
    id: "chenille",
    label: "Chenille",
    tag: "Chenille Patches",
    image: "/images/products/Chenille/chenille-christin-cruz.webp",
    description: "Classic chenille patches for varsity jackets and branding.",
  },
  {
    id: "towel-digitizing",
    label: "Towel Digitizing",
    tag: "Towel Digitizing",
    image:
      "/images/products/towel-digitizing/towel-embroidery-don-crudo-seafood.webp",
    description: "Professional towel embroidery digitizing for terry cloth.",
  },
  {
    id: "vector-conversion",
    label: "Vector Art",
    tag: "Vector Art",
    image:
      "/images/products/vector-conversion/vector-cartoon-character-art.webp",
    description: "Convert raster artwork into clean print-ready vectors.",
  },
  {
    id: "applique",
    label: "Applique",
    tag: "Applique Digitizing",
    image: "/images/products/applique/applique-letter-m.webp",
    description: "Precision applique digitizing with layered fabric effects.",
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
      className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 sm:px-5 sm:text-sm ${
        active
          ? "bg-[#c8102e] text-white shadow-[0_6px_18px_-6px_rgba(200,16,46,.45)]"
          : "bg-white text-[#6b7280] ring-1 ring-[#e5e7eb] hover:text-[#c8102e] hover:ring-[#c8102e]"
      }`}
    >
      {label}
    </button>
  );
}

export default function ServicesPortfolio() {
  const searchParams = useSearchParams();

  const categoryParam = searchParams.get("category");

  const validIds = useMemo(() => new Set(CATEGORIES.map((c) => c.id)), []);

  const [activeTab, setActiveTab] = useState<string | null>(null);

  useEffect(() => {
    if (categoryParam && validIds.has(categoryParam)) {
      setActiveTab(categoryParam);
      // Scroll to portfolio section when category is specified in URL
      // Use offset to account for fixed/sticky header + extra spacing
      setTimeout(() => {
        const element = document.getElementById("portfolio");
        if (element) {
          const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          });
        }
      }, 250);
    } else {
      setActiveTab(null);
    }
  }, [categoryParam, validIds]);

  const filtered = useMemo(() => {
    return activeTab
      ? CATEGORIES.filter((c) => c.id === activeTab)
      : CATEGORIES;
  }, [activeTab]);

  return (
    <section className="bg-[#f5f5f5] py-16 sm:py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our Portfolio"
            title="Featured Digitizing Work"
            subtitle="Explore some of our recent digitizing projects. Quality speaks for itself."
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div
            id="portfolio"
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
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
                  setActiveTab((prev) => (prev === cat.id ? null : cat.id))
                }
              />
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal
          stagger
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((cat, index) => (
            <article
              key={cat.id}
              className={`group relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#e5e7eb] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
                filtered.length % 3 === 1 && index === filtered.length - 1
                  ? "lg:col-start-2"
                  : ""
              }`}
            >
              <Image
                src={cat.image}
                alt={cat.tag}
                fill
                sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="rounded-full bg-[#c8102e] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                  {cat.label}
                </span>

                <h3 className="mt-2 text-lg font-bold text-white">{cat.tag}</h3>

                <p className="mt-1 line-clamp-2 text-sm text-white/75">
                  {cat.description}
                </p>
              </div>

              <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur transition-all duration-500 group-hover:opacity-100">
                <ArrowRight className="h-4 w-4" />
              </span>

              <div className="absolute left-0 right-0 top-0 h-1 origin-left scale-x-0 bg-[#c8102e] transition-transform duration-500 group-hover:scale-x-100" />
            </article>
          ))}
        </ScrollReveal>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-[#6b7280]">
            No portfolio found.
          </p>
        )}

        <ScrollReveal delay={200}>
          <div className="mt-12 flex justify-center">
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 rounded-lg bg-[#c8102e] px-6 py-3 font-semibold text-white transition hover:bg-[#a30d24]"
            >
              View Full Portfolio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
