"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";
import { BUNDLES, formatPrice } from "@/lib/products";
import { ArrowRight, ChevronLeft, ChevronRight } from "./icons";

export default function StoreBundles() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    const observer = new ResizeObserver(checkScroll);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      observer.disconnect();
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("article");
    const cardWidth = card?.offsetWidth ?? 300;
    const gap = 20;
    const visible = el.clientWidth >= 1024 ? 4 : el.clientWidth >= 640 ? 2 : 1;
    const amount = (cardWidth + gap) * visible;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="relative bg-[#f5f5f5] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#c8102e]">
            <span className="h-px w-6 bg-current opacity-60" />
            Special Offers
            <span className="h-px w-6 bg-current opacity-60" />
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
            Bundle Offers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[#6b7280] sm:text-base">
            Save big with our curated bundle packs. Get more designs for less.
          </p>
        </div>

        {/* Carousel with arrows OUTSIDE overflow-hidden */}
        <div className="relative mt-12">
          {/* Left Arrow — always rendered, visibility controlled by state */}
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 z-20 -translate-y-1/2 -translate-x-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-[#e5e7eb] text-[#1a1a1a] transition-all duration-300 hover:bg-[#c8102e] hover:text-white hover:shadow-xl sm:h-12 sm:w-12 ${
              canScrollLeft ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 z-20 -translate-y-1/2 translate-x-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-[#e5e7eb] text-[#1a1a1a] transition-all duration-300 hover:bg-[#c8102e] hover:text-white hover:shadow-xl sm:h-12 sm:w-12 ${
              canScrollRight ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Scrollable Track — overflow hidden is HERE, not on section */}
          <div className="overflow-hidden rounded-xl">
            <div
              ref={scrollRef}
              className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory px-1 py-1"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {BUNDLES.map((b) => (
                <article
                  key={b.slug}
                  className="group flex w-[260px] flex-shrink-0 flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-[#e5e7eb] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl snap-start sm:w-[280px] md:w-[300px] lg:w-[calc(25%-15px)]"
                >
                  <Link
                    href={`/product/${b.slug}`}
                    className="relative aspect-[4/3] w-full overflow-hidden bg-[#f5f5f5]"
                    aria-label={b.name}
                  >
                    <Image
                      src={b.image}
                      alt={b.name}
                      fill
                      sizes="(max-width: 640px) 260px, (max-width: 768px) 280px, (max-width: 1024px) 300px, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {b.bundleDiscount && (
                      <span className="absolute left-3 top-3 z-10 flex items-center justify-center whitespace-nowrap rounded-full bg-[#c8102e] px-3 py-1.5 text-xs font-bold text-white shadow-lg ring-4 ring-white/30">
                        {b.bundleDiscount}% OFF
                      </span>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </Link>

                  <div className="flex flex-1 flex-col p-4">
                    <Link
                      href={`/product/${b.slug}`}
                      className="font-display text-base font-bold text-[#1a1a1a] transition-colors hover:text-[#c8102e]"
                    >
                      {b.name}
                    </Link>
                    <p className="mt-1 text-xs text-[#6b7280] line-clamp-2">{b.tagline}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="font-display text-xl font-extrabold text-[#c8102e]">
                        {formatPrice(b.price)}
                      </span>
                      {b.originalPrice && (
                        <span className="text-xs text-[#9ca3af] line-through">
                          {formatPrice(b.originalPrice)}
                        </span>
                      )}
                    </div>
                    <div className="mt-auto pt-4">
                      <AddToCartButton slug={b.slug} fullWidth label="Add to Cart" />
                    </div>
                    <Link
                      href={`/product/${b.slug}`}
                      className="mt-2 inline-flex items-center justify-center gap-1 text-xs font-semibold text-[#6b7280] transition-colors hover:text-[#c8102e]"
                    >
                      View details
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Scroll indicator dots */}
          <div className="mt-6 flex justify-center gap-1.5">
            {BUNDLES.map((_, i) => (
              <span
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-[#d1d5db] transition-colors"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Global style to hide webkit scrollbar for this carousel */}
      <style jsx global>{`
        [data-bundle-carousel]::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
