"use client";

// Client portion of the product detail page.
//
// Receives the product as a plain serializable prop from the server
// component (app/product/[slug]/page.tsx), owns the local quantity state,
// and renders the qty stepper + Add to Cart button.

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  formatPrice,
  getDiscountPercent,
  BADGE_STYLES,
  BADGE_LABELS,
  getRelatedProducts,
  type Product,
} from "@/lib/products";
import QtyStepper from "@/components/QtyStepper";
import AddToCartButton from "@/components/AddToCartButton";
import {
  ArrowRight,
  BadgeCheck,
  Download,
  Lock,
  Refresh,
  ShieldCheck,
  Star,
} from "@/components/icons";

const TRUST_ICONS = [
  { icon: Download, label: "Instant Download" },
  { icon: BadgeCheck, label: "Commercial License" },
  { icon: ShieldCheck, label: "Tested Quality" },
  { icon: Lock, label: "Secure Payment" },
  { icon: Refresh, label: "Free Updates" },
];

export default function ProductDetailClient({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const discount = getDiscountPercent(product);
  const related = getRelatedProducts(product.slug, 4);

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-[#e5e7eb] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 text-xs text-[#6b7280] sm:px-6 lg:px-8">
          <Link href="/" className="hover:text-[#c8102e]">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/store#products" className="hover:text-[#c8102e]">Store</Link>
          <span className="mx-2">/</span>
          <span className="text-[#1a1a1a]">{product.name}</span>
        </div>
      </div>

      {/* Main detail */}
      <section className="bg-white py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#f5f5f5] ring-1 ring-[#e5e7eb]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {product.badge && (
                <span
                  className={`absolute left-4 top-4 z-10 rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wider ${BADGE_STYLES[product.badge]}`}
                >
                  {BADGE_LABELS[product.badge]}
                </span>
              )}
              {discount && (
                <span className="absolute right-4 top-4 z-10 rounded-md bg-[#1a1a1a] px-3 py-1 text-xs font-bold text-white">
                  -{discount}%
                </span>
              )}
            </div>

            {/* Info */}
            <div className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c8102e]">
                {product.categoryLabel}
              </span>
              <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="mt-3 flex items-center gap-2">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.round(product.rating)
                          ? "text-[#f5a623]"
                          : "text-[#e5e7eb]"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-bold text-[#1a1a1a]">
                  {product.rating.toFixed(1)}
                </span>
                <span className="text-sm text-[#6b7280]">
                  ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mt-5 flex items-baseline gap-3">
                <span className="font-display text-4xl font-extrabold text-[#c8102e]">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-[#9ca3af] line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                {discount && (
                  <span className="rounded-md bg-[#c8102e]/10 px-2 py-1 text-xs font-bold text-[#c8102e]">
                    Save {discount}%
                  </span>
                )}
              </div>

              <p className="mt-5 text-sm leading-relaxed text-[#1a1a1a]/80 sm:text-base">
                {product.description}
              </p>

              {/* Quick stats */}
              <div className="mt-6 grid grid-cols-3 gap-3 rounded-xl border border-[#e5e7eb] bg-[#f5f5f5] p-4 text-center">
                <div>
                  <div className="font-display text-xl font-extrabold text-[#1a1a1a]">
                    {product.designs}+
                  </div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-[#6b7280]">
                    Designs
                  </div>
                </div>
                <div>
                  <div className="font-display text-xl font-extrabold text-[#1a1a1a]">
                    {product.formats.length}
                  </div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-[#6b7280]">
                    Formats
                  </div>
                </div>
                <div>
                  <div className="font-display text-xl font-extrabold text-[#1a1a1a]">
                    {product.fileSize}
                  </div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-[#6b7280]">
                    File Size
                  </div>
                </div>
              </div>

              {/* Qty + Add to cart */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <QtyStepper
                  value={qty}
                  onDecrement={() => setQty((q) => Math.max(1, q - 1))}
                  onIncrement={() => setQty((q) => q + 1)}
                />
                <AddToCartButton
                  slug={product.slug}
                  quantity={qty}
                  fullWidth
                  label={`Add ${qty > 1 ? `${qty} to Cart` : "to Cart"}`}
                  className="h-10 flex-1"
                />
              </div>

              {/* Trust badges */}
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-[#e5e7eb] pt-5">
                {TRUST_ICONS.map((t) => (
                  <div
                    key={t.label}
                    className="flex items-center gap-1.5 text-xs font-medium text-[#6b7280]"
                  >
                    <t.icon className="h-4 w-4 text-[#c8102e]" />
                    {t.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features + Includes */}
          <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-display text-xl font-bold text-[#1a1a1a]">
                Key Features
              </h2>
              <ul className="mt-4 space-y-3">
                {product.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-[#1a1a1a]/80"
                  >
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c8102e]/10 text-[#c8102e]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-[#1a1a1a]">
                What&apos;s Included
              </h2>
              <ul className="mt-4 space-y-3">
                {product.includes.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-[#1a1a1a]/80"
                  >
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] text-white">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Formats */}
              <div className="mt-6 rounded-xl border border-[#e5e7eb] bg-[#f5f5f5] p-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#1a1a1a]">
                  Available Formats
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.formats.map((fmt) => (
                    <span
                      key={fmt}
                      className="rounded-md border border-[#e5e7eb] bg-white px-2.5 py-1 text-xs font-bold text-[#1a1a1a]"
                    >
                      {fmt}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="border-t border-[#e5e7eb] bg-[#f5f5f5] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#c8102e]">
                  <span className="h-px w-6 bg-current opacity-60" />
                  You Might Also Like
                </span>
                <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
                  Related Designs
                </h2>
              </div>
              <Link
                href="/store#products"
                className="group hidden items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#c8102e] hover:underline sm:inline-flex"
              >
                View All
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
              {related.map((p) => (
                <article
                  key={p.slug}
                  className="group flex flex-col overflow-hidden rounded-xl border border-[#e5e7eb] bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <Link
                    href={`/product/${p.slug}`}
                    className="relative aspect-square w-full overflow-hidden bg-[#f5f5f5]"
                  >
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col p-4">
                    <Link
                      href={`/product/${p.slug}`}
                      className="font-display text-sm font-bold text-[#1a1a1a] transition-colors hover:text-[#c8102e]"
                    >
                      {p.name}
                    </Link>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="font-display text-base font-extrabold text-[#c8102e]">
                        {formatPrice(p.price)}
                      </span>
                      {p.originalPrice && (
                        <span className="text-xs text-[#9ca3af] line-through">
                          {formatPrice(p.originalPrice)}
                        </span>
                      )}
                    </div>
                    <div className="mt-3">
                      <AddToCartButton slug={p.slug} size="sm" fullWidth label="Add" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
