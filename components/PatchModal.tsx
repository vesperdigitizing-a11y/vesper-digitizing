"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, formatPrice, getDiscountPercent } from "@/lib/products";

export default function PatchModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  // Filter only patch products
  const patchProducts = PRODUCTS.filter((p) => p.category === "patches");

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      />

      {/* Modal panel */}
      <div className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl animate-in fade-in zoom-in-95 slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#e5e7eb] bg-[#f5f5f5] px-5 py-4 sm:px-6">
          <div>
            <h2 className="font-display text-lg font-bold text-[#1a1a1a] sm:text-xl">
              Custom Patches
            </h2>
            <p className="mt-0.5 text-xs text-[#6b7280] sm:text-sm">
              Browse our ready-to-stitch patch designs — click any to view details
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#1a1a1a] transition-all hover:scale-110 hover:border-[#c8102e] hover:text-[#c8102e]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Product grid — scrollable */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {patchProducts.map((p) => {
              const discount = getDiscountPercent(p);
              return (
                <Link
                  key={p.slug}
                  href={`/product/${p.slug}`}
                  onClick={onClose}
                  className="group relative flex flex-col overflow-hidden rounded-xl border border-[#e5e7eb] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#c8102e]/40 hover:shadow-lg"
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden bg-[#f5f5f5]">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Badge */}
                    {p.badge && (
                      <span className="absolute left-2 top-2 rounded-full bg-[#c8102e] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
                        {p.badge === "sale"
                          ? "SALE"
                          : p.badge === "best"
                            ? "BEST"
                            : "NEW"}
                      </span>
                    )}
                    {discount && (
                      <span className="absolute right-2 top-2 rounded-full bg-[#1a1a1a] px-2 py-0.5 text-[9px] font-bold text-white">
                        -{discount}%
                      </span>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex flex-1 flex-col p-2.5 sm:p-3">
                    <h3 className="line-clamp-2 text-[11px] font-semibold leading-tight text-[#1a1a1a] sm:text-xs">
                      {p.name}
                    </h3>
                    <div className="mt-auto flex items-baseline gap-1.5 pt-2">
                      <span className="text-xs font-bold text-[#c8102e] sm:text-sm">
                        {formatPrice(p.price)}
                      </span>
                      {p.originalPrice && (
                        <span className="text-[10px] text-[#9ca3af] line-through sm:text-xs">
                          {formatPrice(p.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#e5e7eb] bg-[#f5f5f5] px-5 py-3 sm:px-6">
          <div className="flex items-center justify-between">
            <p className="text-xs text-[#6b7280]">
              {patchProducts.length} patch designs available
            </p>
            <Link
              href="/store#products"
              onClick={onClose}
              className="text-xs font-semibold text-[#c8102e] transition-colors hover:text-[#a30d24]"
            >
              View all in store →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
