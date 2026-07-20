"use client";

// Slide-out cart drawer.
//
// Mounted once in app/layout.tsx (inside <CartProvider>). Reads isOpen,
// items, subtotal from the cart context. Each line has a QtyStepper so the
// user can + / - quantities directly in the cart and the count in the
// header updates immediately because it derives from the same store.

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/products";
import QtyStepper from "./QtyStepper";
import { ArrowRight, Cart } from "./icons";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    subtotal,
    itemCount,
    hydrated,
    closeCart,
    increment,
    decrement,
    removeItem,
    clear,
  } = useCart();

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden
        onClick={closeCart}
        className={`fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`fixed right-0 top-0 z-[101] flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#e5e7eb] px-5 py-4">
          <div className="flex items-center gap-2">
            <Cart className="h-5 w-5 text-[#c8102e]" />
            <h2 className="font-display text-base font-bold text-[#1a1a1a]">
              Your Cart
            </h2>
            {hydrated && itemCount > 0 && (
              <span className="rounded-full bg-[#c8102e]/10 px-2 py-0.5 text-xs font-bold text-[#c8102e]">
                {itemCount}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="flex h-9 w-9 items-center justify-center rounded-md text-[#1a1a1a] transition-colors hover:bg-[#f5f5f5]"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto">
          {!hydrated ? (
            <div className="flex h-full items-center justify-center px-6 text-center text-sm text-[#6b7280]">
              Loading cartâ¦
            </div>
          ) : items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f5f5f5] text-[#9ca3af]">
                <Cart className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-[#1a1a1a]">
                  Your cart is empty
                </h3>
                <p className="mt-1 text-sm text-[#6b7280]">
                  Browse the store and add some designs to get started.
                </p>
              </div>
              <Link
                href="/store#products"
                onClick={closeCart}
                className="group inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#c8102e] px-5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#a30d24]"
              >
                Shop Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-[#f5f5f5]">
              {items.map((item) => (
                <li key={item.slug} className="flex gap-4 px-5 py-4">
                  {/* Thumbnail */}
                  <Link
                    href={`/product/${item.slug}`}
                    onClick={closeCart}
                    className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md bg-[#f5f5f5] ring-1 ring-[#e5e7eb]"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </Link>

                  {/* Details */}
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        href={`/product/${item.slug}`}
                        onClick={closeCart}
                        className="line-clamp-2 font-display text-sm font-bold text-[#1a1a1a] transition-colors hover:text-[#c8102e]"
                      >
                        {item.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => removeItem(item.slug)}
                        aria-label={`Remove ${item.name} from cart`}
                        className="shrink-0 text-xs text-[#9ca3af] underline-offset-2 transition-colors hover:text-[#c8102e] hover:underline"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="mt-1 text-xs text-[#6b7280]">
                      {formatPrice(item.price)} each
                    </div>

                    <div className="mt-auto flex items-center justify-between gap-3 pt-2">
                      <QtyStepper
                        value={item.quantity}
                        onDecrement={() => decrement(item.slug)}
                        onIncrement={() => increment(item.slug)}
                        size="sm"
                      />
                      <div className="font-display text-sm font-extrabold text-[#c8102e]">
                        {formatPrice(item.price * item.quantity)}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {hydrated && items.length > 0 && (
          <div className="border-t border-[#e5e7eb] bg-[#f5f5f5] px-5 py-4">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-[#6b7280]">Subtotal</span>
              <span className="font-display text-xl font-extrabold text-[#1a1a1a]">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="mt-1 text-xs text-[#6b7280]">
              Shipping &amp; taxes calculated at checkout.
            </p>

            <a
              href="/contact"
              className="group mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#c8102e] px-6 text-sm font-semibold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-[#a30d24]"
            >
              Checkout
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <div className="mt-3 flex items-center justify-between">
              <button
                type="button"
                onClick={clear}
                className="text-xs text-[#9ca3af] underline-offset-2 transition-colors hover:text-[#c8102e] hover:underline"
              >
                Clear cart
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="text-xs font-semibold text-[#1a1a1a] underline-offset-2 hover:text-[#c8102e] hover:underline"
              >
                Continue shopping
              </button>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
