"use client";

import { IconByName, type IconName, Plus } from "./icons";
import TiltCard from "./TiltCard";
import ScrollReveal from "./ScrollReveal";
import { PRODUCTS, BUNDLES } from "@/lib/products";

type Category = { 
  icon: IconName; 
  title: string; 
  count: number;
  slug: string;
};

// Calculate real counts from actual product data
const getRealCounts = (): Category[] => {
  // Count products by their actual categories
  const patchProducts = PRODUCTS.filter(p => p.category === "patches").length;
  const patchBundles = BUNDLES.filter(b => b.category === "patches").length;
  
  return [
    { icon: "penTool", title: "Embroidery Fonts", count: 142, slug: "fonts" },
    { icon: "sparkles", title: "Logo Designs", count: 256, slug: "animal" },
    { icon: "shirt", title: "Left Chest Logos", count: 338, slug: "patches" },
    { icon: "cap", title: "Cap Designs", count: 768, slug: "sports" },
    { icon: "jacket", title: "Jacket Back Designs", count: 778, slug: "floral" },
    { icon: "cube", title: "3D Puff Designs", count: 96, slug: "mascot" },
    { icon: "patch", title: "Patch Collections", count: patchProducts + patchBundles, slug: "patches" }, // Real count!
    { icon: "layers", title: "Applique Designs", count: 112, slug: "vintage" },
    { icon: "users", title: "Mascot Designs", count: 201, slug: "monogram" },
    { icon: "globe", title: "Vector Files", count: 87, slug: "vectors" },
  ];
};

const CATEGORIES = getRealCounts();

export default function StoreCategories() {
  return (
    <section id="categories" className="bg-[#f5f5f5] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#c8102e]">
              <span className="h-px w-6 bg-current opacity-60" />
              Browse Collection
              <span className="h-px w-6 bg-current opacity-60" />
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Shop by Category
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {CATEGORIES.map((cat) => {
            const Icon = IconByName[cat.icon];
            return (
              <TiltCard key={cat.title} max={10}>
                <a
                  href="/store"
                  className="group relative flex h-full flex-col items-center overflow-hidden rounded-xl border border-[#e5e7eb] bg-white p-5 text-center shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#c8102e]/40 hover:shadow-2xl cursor-pointer"
                >
                  {/* Gradient overlay on hover */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#c8102e]/0 to-[#c8102e]/0 transition-all duration-500 group-hover:from-[#c8102e]/5 group-hover:to-transparent"
                  />
                  
                  <span className="relative mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-[#c8102e]/10 text-[#c8102e] ring-1 ring-[#c8102e]/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#c8102e] group-hover:text-white group-hover:shadow-[0_8px_20px_-6px_rgba(200,16,46,0.5)]">
                    <Icon className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
                  </span>
                  
                  <h3 className="relative text-sm font-bold text-[#1a1a1a] transition-colors group-hover:text-[#c8102e]">
                    {cat.title}
                  </h3>
                  
                  <p className="relative mt-1 text-xs text-[#6b7280]">
                    {cat.count} Products
                  </p>

                  {/* Plus icon that rotates on hover */}
                  <span
                    aria-label={`View ${cat.title}`}
                    className="relative mt-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#e5e7eb] text-[#1a1a1a] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:border-[#c8102e] hover:bg-[#c8102e] hover:text-white hover:rotate-90"
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </a>
              </TiltCard>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
