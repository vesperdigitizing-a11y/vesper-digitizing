"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { ArrowRight } from "./icons";
import ScrollReveal from "./ScrollReveal";

type PortfolioItem = {
  title: string;
  category: string;
  image: string;
};

const ITEMS: PortfolioItem[] = [
  /* ── 3D Puff ── */
  {
    title: "3D Puff — AC/DC PWR UP Tour",
    category: "3d-puff",
    image: "/images/products/3d-puff/acdc-pwr-up-tour-3d-puff.jpg",
  },
  {
    title: "3D Puff — NY Monogram Wings",
    category: "3d-puff",
    image: "/images/products/3d-puff/ny-monogram-wings-3d-puff.jpg",
  },
  {
    title: "3D Puff — Sox Flame",
    category: "3d-puff",
    image: "/images/products/3d-puff/sox-flame-3d-puff.jpg",
  },

  /* ── Cap Digitizing ── */
  {
    title: "Cap Digitizing — Sample 1",
    category: "cap",
    image: "/images/products/cap-digitizing/cap-embroidery-1.jpeg",
  },
  {
    title: "Cap Digitizing — Sample 2",
    category: "cap",
    image: "/images/products/cap-digitizing/cap-embroidery-2.jpeg",
  },
  {
    title: "Cap Digitizing — Perco Worldwide",
    category: "cap",
    image: "/images/products/cap-digitizing/cap-embroidery-perco-worldwide.jpg",
  },
  {
    title: "Cap Digitizing — Transmateriales",
    category: "cap",
    image: "/images/products/cap-digitizing/cap-embroidery-transmateriales.jpg",
  },

  /* ── Chenille ── */
  {
    title: "Chenille — Christin Cruz",
    category: "chenille",
    image: "/images/products/chenille/chenille-christin-cruz.jpg",
  },
  {
    title: "Chenille — King Varsity Letters",
    category: "chenille",
    image: "/images/products/chenille/chenille-king-varsity-letters.jpg",
  },
  {
    title: "Chenille — Left Heart",
    category: "chenille",
    image: "/images/products/chenille/chenille-left-heart.jpg",
  },
  {
    title: "Chenille — Luigi",
    category: "chenille",
    image: "/images/products/chenille/chenille-luigi.jpg",
  },
  {
    title: "Chenille — Rabbits",
    category: "chenille",
    image: "/images/products/chenille/chenille-rabbits.jpg",
  },
  {
    title: "Chenille — Team Name Patches",
    category: "chenille",
    image: "/images/products/chenille/chenille-team-name-patches.jpg",
  },

  /* ── Applique ── */
  {
    title: "Applique — Letter M",
    category: "applique",
    image: "/images/products/applique/applique-letter-m.jpg",
  },
  {
    title: "Applique — Design 1",
    category: "applique",
    image: "/images/products/applique/applique-design-1.jpeg",
  },
  {
    title: "Applique — Design 2",
    category: "applique",
    image: "/images/products/applique/applique-design-2.jpeg",
  },
  {
    title: "Applique — Design 3",
    category: "applique",
    image: "/images/products/applique/applique-design-3.jpeg",
  },
  {
    title: "Applique — Design 4",
    category: "applique",
    image: "/images/products/applique/applique-design-4.jpeg",
  },

  /* ── Patch Digitizing ── */
  {
    title: "Patch Digitizing — Certified Locally Grown",
    category: "patches",
    image:
      "/images/products/patch-digitizing/patch-certified-locally-grown.jpg",
  },
  {
    title: "Patch Digitizing — Classic Pikachu 1996",
    category: "patches",
    image: "/images/products/patch-digitizing/patch-classic-pikachu-1996.jpg",
  },
  {
    title: "Patch Digitizing — Dog Mascot",
    category: "patches",
    image: "/images/products/patch-digitizing/patch-dog-mascot.jpg",
  },
  {
    title: "Patch Digitizing — Don't Hassle Me Shuckle",
    category: "patches",
    image: "/images/products/patch-digitizing/patch-dont-hassle-me-shuckle.jpg",
  },
  {
    title: "Patch Digitizing — Dragonite Delivery Service",
    category: "patches",
    image:
      "/images/products/patch-digitizing/patch-dragonite-delivery-service.jpg",
  },
  {
    title: "Patch Digitizing — Error 404",
    category: "patches",
    image: "/images/products/patch-digitizing/patch-error-404.jpg",
  },
  {
    title: "Patch Digitizing — Kanto Fire Department",
    category: "patches",
    image: "/images/products/patch-digitizing/patch-kanto-fire-department.jpg",
  },
  {
    title: "Patch Digitizing — Licensed Nursing Assistant",
    category: "patches",
    image:
      "/images/products/patch-digitizing/patch-licensed-nursing-assistant.jpg",
  },
  {
    title: "Patch Digitizing — Official Bean of the Year",
    category: "patches",
    image:
      "/images/products/patch-digitizing/patch-official-bean-of-the-year.jpg",
  },
  {
    title: "Patch Digitizing — Professional Dragon Slayer",
    category: "patches",
    image:
      "/images/products/patch-digitizing/patch-professional-dragon-slayer.jpg",
  },
  {
    title: "Patch Digitizing — Squirtle Squad",
    category: "patches",
    image: "/images/products/patch-digitizing/patch-squirtle-squad.jpg",
  },

  /* ── Left Chest ── */
  {
    title: "Left Chest — Sample 1",
    category: "left-chest",
    image: "/images/products/left-chest/left-chest-1.jpeg",
  },
  {
    title: "Left Chest — Sample 2",
    category: "left-chest",
    image: "/images/products/left-chest/left-chest-2.jpeg",
  },
  {
    title: "Left Chest — Sample 3",
    category: "left-chest",
    image: "/images/products/left-chest/left-chest-3.jpeg",
  },
  {
    title: "Left Chest — Sample 4",
    category: "left-chest",
    image: "/images/products/left-chest/left-chest-4.jpeg",
  },
  {
    title: "Left Chest — Sample 5",
    category: "left-chest",
    image: "/images/products/left-chest/left-chest-5.jpeg",
  },
  {
    title: "Left Chest — Sample 6",
    category: "left-chest",
    image: "/images/products/left-chest/left-chest-6.jpeg",
  },
  {
    title: "Left Chest — Servicios Automotrices",
    category: "left-chest",
    image: "/images/products/left-chest/left-chest-servicios-automotrices.jpg",
  },

  /* ── Jacket Back ── */
  {
    title: "Jacket Back — Sample 1",
    category: "jacket-back",
    image: "/images/products/jacket-back/jacket-back-1.jpeg",
  },
  {
    title: "Jacket Back — Sample 2",
    category: "jacket-back",
    image: "/images/products/jacket-back/jacket-back-2.jpeg",
  },

  /* ── Sleeve Logos ── */
  {
    title: "Sleeve Logos — Sample 1",
    category: "shirt-sleeve",
    image: "/images/products/sleeve-logos/shirt-sleeve-1.jpeg",
  },
  {
    title: "Sleeve Logos — Sample 2",
    category: "shirt-sleeve",
    image: "/images/products/sleeve-logos/shirt-sleeve-2.jpeg",
  },
  {
    title: "Sleeve Logos — Sample 3",
    category: "shirt-sleeve",
    image: "/images/products/sleeve-logos/shirt-sleeve-3.jpeg",
  },
  {
    title: "Sleeve Logos — Sample 4",
    category: "shirt-sleeve",
    image: "/images/products/sleeve-logos/shirt-sleeve-4.jpeg",
  },
  {
    title: "Sleeve Logos — Sample 5",
    category: "shirt-sleeve",
    image: "/images/products/sleeve-logos/shirt-sleeve-5.jpeg",
  },
  {
    title: "Sleeve Logos — Sample 6",
    category: "shirt-sleeve",
    image: "/images/products/sleeve-logos/shirt-sleeve-6.jpeg",
  },

  /* ── Towel Digitizing ── */
  {
    title: "Towel Digitizing — Don Crudo Seafood",
    category: "towel",
    image:
      "/images/products/towel-digitizing/towel-embroidery-don-crudo-seafood.jpg",
  },

  /* ── Vector Conversion ── */
  {
    title: "Vector Conversion — Cartoon Character Art",
    category: "vector",
    image:
      "/images/products/vector-conversion/vector-cartoon-character-art.jpg",
  },
  {
    title: "Vector Conversion — Pikachu Dragon Art",
    category: "vector",
    image: "/images/products/vector-conversion/vector-pikachu-dragon-art.jpg",
  },
  {
    title: "Vector Conversion — Snack Bandit Art",
    category: "vector",
    image: "/images/products/vector-conversion/vector-snack-bandit-art.jpg",
  },
  {
    title: "Vector Conversion — Wolf Illustration",
    category: "vector",
    image: "/images/products/vector-conversion/vector-wolf-illustration.jpg",
  },
];

const FILTERS = [
  { label: "All", value: "all" },
  { label: "3D Puff", value: "3d-puff" },
  { label: "Cap Digitizing", value: "cap" },
  { label: "Chenille", value: "chenille" },
  { label: "Applique", value: "applique" },
  { label: "Patch Digitizing", value: "patches" },
  { label: "Left Chest", value: "left-chest" },
  { label: "Jacket Back", value: "jacket-back" },
  { label: "Sleeve Logos", value: "shirt-sleeve" },
  { label: "Towel Digitizing", value: "towel" },
  { label: "Vector Conversion", value: "vector" },
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
                <span className="inline-flex -translate-x-2 items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-[#c8102e] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:text-xs">
                  View
                  <ArrowRight className="h-3 w-3" />
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
