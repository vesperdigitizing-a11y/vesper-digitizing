"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { ArrowRight } from "./icons";
import ScrollReveal from "./ScrollReveal";

import { ITEMS, type PortfolioItem } from "@/lib/portfolio";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "3D Puff", value: "3d-puff" },
  { label: "Cap Digitizing", value: "cap" },
  { label: "Chenille", value: "chenille" },
  { label: "Applique", value: "applique" },
  { label: "Custom Patches", value: "patches" },
  { label: "Left Chest", value: "left-chest" },
  { label: "Jacket Back", value: "jacket-back" },
  { label: "Sleeve Logos", value: "shirt-sleeve" },
  { label: "Towel Digitizing", value: "towel" },
  { label: "Vector Art", value: "vector" },
];

const INITIAL_COUNT = 12;
const LOAD_MORE_COUNT = 12;

export default function PortfolioGallery() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const validFilters = new Set(FILTERS.map((f) => f.value));
  const initialFilter =
    categoryParam && validFilters.has(categoryParam) ? categoryParam : "all";

  const [active, setActive] = useState(initialFilter);
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const hasScrolledFromUrl = useRef(false);
  const sectionRef = useRef<HTMLElement>(null);

  // On mount (or param change), if we have a valid category, scroll to gallery
  useEffect(() => {
    if (
      categoryParam &&
      validFilters.has(categoryParam) &&
      !hasScrolledFromUrl.current
    ) {
      hasScrolledFromUrl.current = true;
      setActive(categoryParam);
      setVisibleCount(INITIAL_COUNT);
      // Wait for layout to settle, then scroll so section top is 80px below viewport top
      const scroll = () => {
        if (!sectionRef.current) return;
        const y =
          sectionRef.current.getBoundingClientRect().top + window.scrollY - 20;
        window.scrollTo({ top: y, behavior: "smooth" });
      };
      // Use requestAnimationFrame to ensure DOM has painted
      const raf1 = requestAnimationFrame(() => {
        const raf2 = requestAnimationFrame(() => {
          scroll();
        });
        return () => cancelAnimationFrame(raf2);
      });
      return () => cancelAnimationFrame(raf1);
    }
  }, [categoryParam, validFilters]);

  const handleFilterChange = useCallback((value: string) => {
    setActive(value);
    setVisibleCount(INITIAL_COUNT);
    hasScrolledFromUrl.current = true; // prevent re-scroll after manual switch
  }, []);

  const filtered =
    active === "all" ? ITEMS : ITEMS.filter((i) => i.category === active);

  const visibleItems = filtered.slice(0, visibleCount);
  const hasMore = filtered.length > visibleCount;

  return (
    <section
      id="portfolio-gallery"
      ref={sectionRef}
      className="bg-white py-16 sm:py-24"
    >
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

        <ScrollReveal>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => handleFilterChange(f.value)}
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

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visibleItems.map((item, i) => (
            <article
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-[#e5e7eb] transition-all duration-500 hover:shadow-2xl animate-in fade-in slide-in-from-bottom-3 duration-500"
              style={{
                animationDelay: `${(i % LOAD_MORE_COUNT) * 60}ms`,
                animationFillMode: "backwards",
              }}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f5f5f5]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#c8102e]/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[#c8102e] transition-transform duration-500 group-hover:scale-x-100" />
              </div>

              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1a1a1a] sm:text-sm">
                  {item.title}
                </span>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-sm text-[#6b7280]">
            No items in this category.
          </p>
        )}

        {hasMore && (
          <div className="mt-12 flex flex-col items-center gap-2">
            <button
              type="button"
              onClick={() => setVisibleCount((c) => c + LOAD_MORE_COUNT)}
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#c8102e] px-6 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_8px_20px_-6px_rgba(200,16,46,0.5)] transition-all hover:bg-[#a30d24] hover:shadow-[0_12px_28px_-6px_rgba(200,16,46,0.6)]"
            >
              Load More Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <p className="text-xs text-[#6b7280]">
              Showing {visibleItems.length} of {filtered.length} items
            </p>
          </div>
        )}

        {!hasMore && filtered.length > INITIAL_COUNT && (
          <p className="mt-12 text-center text-xs text-[#9ca3af]">
            All {filtered.length} items displayed
          </p>
        )}
      </div>
    </section>
  );
}
