"use client";

import { useState } from "react";
import Image from "next/image";
import { Cart, Heart, Search } from "./icons";

type Product = {
  name: string;
  category: string;
  price: string;
  original?: string;
  image: string;
  badge?: "sale" | "best" | "new";
};

const PRODUCTS: Product[] = [
  { name: "Classic Font Pack",        category: "fonts",     price: "$25.99", original: "$49.99", image: "/images/store/fonts.jpg",        badge: "sale" },
  { name: "Animal Embroidery Pack",   category: "animal",    price: "$14.99", original: "$24.99", image: "/images/store/animal.jpg",       badge: "best" },
  { name: "Patch Bundle Pack",        category: "patches",   price: "$19.99", original: "$34.99", image: "/images/store/patch_bundle.jpg", badge: "sale" },
  { name: "Sports Logo Pack",         category: "sports",    price: "$24.99", original: "$39.99", image: "/images/store/sports.png",       badge: "new" },
  { name: "Floral Design Collection", category: "floral",    price: "$12.99", image: "/images/store/floral.jpg" },
  { name: "Mascot Character Pack",    category: "mascot",    price: "$18.99", original: "$29.99", image: "/images/store/mascot.jpg",       badge: "sale" },
  { name: "Vintage Logo Bundle",      category: "vintage",   price: "$16.99", image: "/images/store/vintage.jpg" },
  { name: "Monogram Initials Set",    category: "monogram",  price: "$9.99",  image: "/images/store/monogram.jpg",      badge: "new" },
];

const TABS = [
  { label: "All Products", value: "all" },
  { label: "Best Seller", value: "best" },
  { label: "New Arrivals", value: "new" },
  { label: "On Sale", value: "sale" },
];

const BADGE_STYLES: Record<string, string> = {
  sale: "bg-[#c8102e] text-white",
  best: "bg-[#16a34a] text-white",
  new: "bg-[#16a34a] text-white",
};

const BADGE_LABELS: Record<string, string> = {
  sale: "SALE",
  best: "BEST SELLER",
  new: "NEW",
};

export default function StoreProducts() {
  const [activeTab, setActiveTab] = useState("all");

  const products =
    activeTab === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.badge === activeTab);

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
                  placeholder="Search products..."
                  className="h-10 w-full rounded-md border border-[#e5e7eb] pl-9 pr-3 text-sm outline-none focus:border-[#c8102e]"
                />
              </div>

              {/* Category */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1a1a1a]">
                  Category
                </h4>
                <select className="mt-2 h-10 w-full rounded-md border border-[#e5e7eb] px-3 text-sm text-[#6b7280] outline-none focus:border-[#c8102e]">
                  <option>All Categories</option>
                  <option>Embroidery Fonts</option>
                  <option>Logo Designs</option>
                  <option>Patch Collections</option>
                  <option>Mascot Designs</option>
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
                  defaultValue="25"
                  className="mt-3 w-full accent-[#c8102e]"
                />
                <div className="mt-1 flex justify-between text-xs text-[#6b7280]">
                  <span>$0</span>
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
              <button className="mt-6 w-full rounded-md border border-[#c8102e] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#c8102e] transition-colors hover:bg-[#c8102e]/5">
                Clear Filters
              </button>
            </div>
          </aside>

          {/* Product grid */}
          <div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((p) => (
                <article
                  key={p.name}
                  className="group flex flex-col overflow-hidden rounded-xl border border-[#e5e7eb] bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Image */}
                  <div className="relative aspect-square w-full overflow-hidden bg-[#f5f5f5]">
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
                      aria-label="Add to wishlist"
                      className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#6b7280] shadow-sm transition-colors hover:text-[#c8102e]"
                    >
                      <Heart className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Info */}
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="font-display text-sm font-bold text-[#1a1a1a]">
                      {p.name}
                    </h3>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="font-display text-lg font-extrabold text-[#c8102e]">
                        {p.price}
                      </span>
                      {p.original && (
                        <span className="text-xs text-[#9ca3af] line-through">
                          {p.original}
                        </span>
                      )}
                    </div>
                    <button className="mt-3 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md border border-[#e5e7eb] bg-white text-xs font-semibold uppercase tracking-wider text-[#1a1a1a] transition-colors hover:border-[#c8102e] hover:bg-[#c8102e] hover:text-white">
                      <Cart className="h-4 w-4" />
                      Add to Cart
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {products.length === 0 && (
              <p className="py-10 text-center text-sm text-[#6b7280]">
                No products in this category.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
