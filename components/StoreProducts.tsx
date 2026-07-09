"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Search } from "./icons";
import AddToCartButton from "./AddToCartButton";
import {
  PRODUCTS,
  BADGE_STYLES,
  BADGE_LABELS,
  formatPrice,
  type ProductBadge,
} from "@/lib/products";

type Tab = "all" | ProductBadge;

const TABS: { label: string; value: Tab }[] = [
  { label: "All Products", value: "all" },
  { label: "Best Seller", value: "best" },
  { label: "New Arrivals", value: "new" },
  { label: "On Sale", value: "sale" },
];

export default function StoreProducts() {
  const [activeTab, setActiveTab] = useState<Tab>("all");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(50);

  const filtered = PRODUCTS.filter((p) => {
    if (activeTab !== "all" && p.badge !== activeTab) return false;
    if (query && !p.name.toLowerCase().includes(query.toLowerCase())) return false;
    if (category !== "all" && p.category !== category) return false;
    if (p.price > maxPrice) return false;
    return true;
  });

  return (
    <section id="products" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#c8102e]">
            <span className="h-px w-6 bg-current opacity-60" />
            Featured Products
            <span className="h-px w-6 bg-current opacity-60" />
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
            Explore Our Designs
          </h2>
        </div>

        {/* Product tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`rounded-md px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors sm:text-sm ${
                activeTab === tab.value
                  ? "bg-[#c8102e] text-white"
                  : "border border-[#e5e7eb] bg-white text-[#6b7280] hover:border-[#c8102e] hover:text-[#c8102e]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Layout: filters sidebar + product grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[240px_1fr]">
          {/* Filters sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-xl border border-[#e5e7eb] bg-white p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#1a1a1a]">
                Filters
              </h3>

              {/* Search */}
              <div className="relative mt-4">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7280]" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products..."
                  className="h-10 w-full rounded-md border border-[#e5e7eb] pl-9 pr-3 text-sm outline-none focus:border-[#c8102e]"
                />
              </div>

              {/* Category */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1a1a1a]">
                  Category
                </h4>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mt-2 h-10 w-full rounded-md border border-[#e5e7eb] px-3 text-sm text-[#6b7280] outline-none focus:border-[#c8102e]"
                >
                  <option value="all">All Categories</option>
                  <option value="fonts">Embroidery Fonts</option>
                  <option value="animal">Animal Designs</option>
                  <option value="patches">Patch Collections</option>
                  <option value="sports">Sports Logos</option>
                  <option value="floral">Floral Designs</option>
                  <option value="mascot">Mascot Characters</option>
                  <option value="vintage">Vintage Logos</option>
                  <option value="monogram">Monogram Sets</option>
                </select>
              </div>

              {/* Price range */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1a1a1a]">
                  Price Range
                </h4>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="mt-3 w-full accent-[#c8102e]"
                />
                <div className="mt-1 flex justify-between text-xs text-[#6b7280]">
                  <span>$0</span>
                  <span className="font-bold text-[#c8102e]">Up to ${maxPrice}</span>
                  <span>$50+</span>
                </div>
              </div>

              {/* Embroidery type */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1a1a1a]">
                  Embroidery Type
                </h4>
                <div className="mt-2 flex flex-col gap-2">
                  {["Flat", "3D Puff", "Applique", "Chenille"].map((t) => (
                    <label key={t} className="flex items-center gap-2 text-sm text-[#6b7280]">
                      <input type="checkbox" className="h-4 w-4 accent-[#c8102e]" />
                      {t}
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear filters */}
              <button
                onClick={() => {
                  setActiveTab("all");
                  setQuery("");
                  setCategory("all");
                  setMaxPrice(50);
                }}
                className="mt-6 w-full rounded-md border border-[#c8102e] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#c8102e] transition-colors hover:bg-[#c8102e]/5"
              >
                Clear Filters
              </button>
            </div>
          </aside>

          {/* Product grid */}
          <div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((p) => (
                <article
                  key={p.slug}
                  className="group flex flex-col overflow-hidden rounded-xl border border-[#e5e7eb] bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Image */}
                  <Link
                    href={`/product/${p.slug}`}
                    className="relative aspect-square w-full overflow-hidden bg-[#f5f5f5]"
                    aria-label={p.name}
                  >
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {p.badge && (
                      <span className={`absolute left-3 top-3 z-10 rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-wider ${BADGE_STYLES[p.badge]}`}>
                        {BADGE_LABELS[p.badge]}
                      </span>
                    )}
                    <button
                      type="button"
                      aria-label="Add to wishlist"
                      onClick={(e) => e.preventDefault()}
                      className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#6b7280] shadow-sm transition-colors hover:text-[#c8102e]"
                    >
                      <Heart className="h-4 w-4" />
                    </button>
                  </Link>

                  {/* Info */}
                  <div className="flex flex-1 flex-col p-4">
                    <Link
                      href={`/product/${p.slug}`}
                      className="font-display text-sm font-bold text-[#1a1a1a] transition-colors hover:text-[#c8102e] sm:text-base"
                    >
                      {p.name}
                    </Link>
                    <p className="mt-1 text-xs text-[#6b7280] line-clamp-1">
                      {p.tagline}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="font-display text-lg font-extrabold text-[#c8102e]">
                        {formatPrice(p.price)}
                      </span>
                      {p.originalPrice && (
                        <span className="text-xs text-[#9ca3af] line-through">
                          {formatPrice(p.originalPrice)}
                        </span>
                      )}
                    </div>
                    <div className="mt-3">
                      <AddToCartButton slug={p.slug} size="sm" fullWidth />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="py-10 text-center text-sm text-[#6b7280]">
                No products match your filters. Try clearing them.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
