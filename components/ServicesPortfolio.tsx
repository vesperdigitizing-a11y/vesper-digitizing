"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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
    image: "/images/products/jacket-back/jacket-back-1.jpeg",
    description:
      "Large-format jacket back designs with high stitch count and intricate detail work.",
  },
  {
    id: "cap-digitizing",
    label: "Cap Digitizing",
    tag: "Cap Digitizing",
    image: "/images/products/cap-digitizing/cap-embroidery-1.jpeg",
    description:
      "Precision cap digitizing with clean stitch-out on curved surfaces.",
  },
  {
    id: "patch-digitizing",
    label: "Patch Digitizing",
    tag: "Patch Digitizing",
    image: "/images/products/patch-digitizing/patch-squirtle-squad.jpg",
    description:
      "Custom embroidered patches with merrowed or laser-cut edges for any application.",
  },
  {
    id: "left-chest",
    label: "Left Chest",
    tag: "Left Chest Logo",
    image: "/images/products/left-chest/left-chest-1.jpeg",
    description:
      "Compact left chest logos optimized for small-area embroidery with clean edges.",
  },
  {
    id: "sleeve-logos",
    label: "Sleeve Logos",
    tag: "Sleeve Logo Digitizing",
    image: "/images/products/sleeve-logos/shirt-sleeve-1.jpeg",
    description:
      "Sleeve-specific digitizing with proper density and underlay for tubular surfaces.",
  },
  {
    id: "3d-puff",
    label: "3D Puff",
    tag: "3D Puff Embroidery",
    image: "/images/products/3d-puff/acdc-pwr-up-tour-3d-puff.jpg",
    description:
      "Raised 3D puff embroidery with foam underlay for bold, dimensional designs.",
  },
  {
    id: "chenille",
    label: "Chenille",
    tag: "Chenille Patches",
    image: "/images/products/Chenille/chenille-christin-cruz.jpg",
    description:
      "Custom chenille letterman patches and varsity-style embroidery designs.",
  },
  {
    id: "towel-digitizing",
    label: "Towel Digitizing",
    tag: "Towel Digitizing",
    image: "/images/products/towel-digitizing/towel-embroidery-don-crudo-seafood.jpg",
    description:
      "Specialized towel embroidery digitizing with proper density for terry cloth fabrics.",
  },
  {
    id: "vector-conversion",
    label: "Vector Conversion",
    tag: "Vector Conversion",
    image: "/images/products/vector-conversion/vector-cartoon-character-art.jpg",
    description:
      "High-quality vector artwork conversion for print and embroidery readiness.",
  },
  {
    id: "applique",
    label: "Applique",
    tag: "Applique Digitizing",
    image: "/images/products/applique/applique-letter-m.jpg",
    description:
      "Applique digitizing with fabric layering for bold, multi-texture designs.",
  },
];

export default function ServicesPortfolio() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const validIds = new Set(CATEGORIES.map((c) => c.id));
  const initialTab =
    categoryParam && validIds.has(categoryParam) ? categoryParam : null;

  const [activeTab, setActiveTab] = useState<string | null>(initialTab);
  const hasScrolledFromUrl = useRef(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (categoryParam && validIds.has(categoryParam) && !hasScrolledFromUrl.current) {
      hasScrolledFromUrl.current = true;
      setActiveTab(categoryParam);
      const scroll = () => {
        if (!sectionRef.current) return;
        const y = sectionRef.current.getBoundingClientRect().top + window.scrollY - 20;
        window.scrollTo({ top: y, behavior: "smooth" });
      };
      const raf1 = requestAnimationFrame(() => {
        const raf2 = requestAnimationFrame(() => {
          scroll();
        });
        return () => cancelAnimationFrame(raf2);
      });
      return () => cancelAnimationFrame(raf1);
    }
  }, [categoryParam, validIds]);

  const handleTabChange = useCallback((id: string | null) => {
    setActiveTab((prev) => (prev === id ? null : id));
    hasScrolledFromUrl.current = true;
  }, []);

  const filtered = activeTab
    ? CATEGORIES.filter((c) => c.id === activeTab)
    : CATEGORIES;

  return (
    <section id="portfolio" ref={sectionRef} className="bg-[#f5f5f5] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our Portfolio"
            title="Featured Digitizing Work"
            subtitle="Explore some of our recent digitizing projects. Quality speaks for itself."
          />
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => handleTabChange(null)}
              className={`relative overflow-hidden rounded-md px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-all duration-300 sm:text-sm ${
                activeTab === null
                  ? "bg-[#c8102e] text-white shadow-[0_8px_20px_-6px_rgba(200,16,46,0.5)]"
                  : "border border-[#e5e7eb] bg-white text-[#6b7280] hover:border-[#c8102e] hover:text-[#c8102e]"
              }`}
            >
              All
            </button>

            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleTabChange(cat.id)}
                className={`relative overflow-hidden rounded-md px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-all duration-300 sm:text-sm ${
                  activeTab === cat.id
                    ? "bg-[#c8102e] text-white shadow-[0_8px_20px_-6px_rgba(200,16,46,0.5)]"
                    : "border border-[#e5e7eb] bg-white text-[#6b7280] hover:border-[#c8102e] hover:text-[#c8102e]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal
          stagger
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((cat) => (
            <article
              key={cat.id}
              className="group relative aspect-4/3 w-full overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-[#e5e7eb] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <Image
                src={cat.image}
                alt={cat.tag}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <span className="inline-block rounded-full bg-[#c8102e]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                  {cat.label}
                </span>
                <h3 className="mt-2 text-base font-bold text-white sm:text-lg">
                  {cat.tag}
                </h3>
                <p className="mt-1 line-clamp-2 text-xs text-white/70 sm:text-sm">
                  {cat.description}
                </p>
              </div>

              <span className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-[#c8102e] text-white opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowRight className="h-4 w-4" />
              </span>

              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[#c8102e] transition-transform duration-500 group-hover:scale-x-100" />
            </article>
          ))}
        </ScrollReveal>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-sm text-[#6b7280]">
            No items in this category.
          </p>
        )}

        <ScrollReveal>
          <div className="mt-12 flex justify-center">
            <a
              href="/portfolio"
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
