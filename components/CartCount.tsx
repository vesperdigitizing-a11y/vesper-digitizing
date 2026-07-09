"use client";

// Live cart count badge for the Header.
//
// Renders nothing until the cart has hydrated from localStorage AND the
// count is greater than zero — that way the badge never flickers in during
// SSR.

import { useCart } from "@/lib/cart-context";

export default function CartCount() {
  const { itemCount, hydrated } = useCart();

  if (!hydrated || itemCount === 0) return null;

  return (
    <span
      aria-label={`${itemCount} item${itemCount === 1 ? "" : "s"} in cart`}
      className="absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#c8102e] px-1 text-[10px] font-bold text-white ring-2 ring-white"
    >
      {itemCount > 99 ? "99+" : itemCount}
    </span>
  );
}
