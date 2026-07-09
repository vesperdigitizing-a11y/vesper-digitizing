"use client";

// Reusable "Add to Cart" button.
//
// Calls useCart().addItem(slug, qty) — which also opens the cart drawer so
// the user sees the count update immediately. Optional `variant` controls
// the look ("solid" for primary spots, "outline" for secondary spots).
// Optional `quantity` is used by the Product Detail page where the user has
// already picked a quantity in a separate stepper.

import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { Cart } from "./icons";

type Props = {
  slug: string;
  quantity?: number;
  variant?: "solid" | "outline";
  size?: "sm" | "md";
  fullWidth?: boolean;
  label?: string;
  className?: string;
};

export default function AddToCartButton({
  slug,
  quantity = 1,
  variant = "solid",
  size = "md",
  fullWidth = false,
  label = "Add to Cart",
  className = "",
}: Props) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleClick = () => {
    addItem(slug, quantity);
    // Brief visual confirmation — the drawer opening is the primary feedback,
    // but the button also flashes "Added!" so the click is acknowledged even
    // if the drawer is somehow already open.
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1200);
  };

  const sizeCls =
    size === "sm"
      ? "h-9 px-3 text-xs"
      : "h-10 px-4 text-xs sm:text-sm";
  const widthCls = fullWidth ? "w-full" : "";
  const variantCls =
    variant === "solid"
      ? justAdded
        ? "bg-[#16a34a] text-white"
        : "bg-[#c8102e] text-white hover:bg-[#a30d24]"
      : justAdded
        ? "border-[#16a34a] bg-[#16a34a] text-white"
        : "border-[#e5e7eb] bg-white text-[#1a1a1a] hover:border-[#c8102e] hover:bg-[#c8102e] hover:text-white";

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Add ${quantity > 1 ? `${quantity} × ` : ""}to cart`}
      className={`inline-flex ${sizeCls} ${widthCls} items-center justify-center gap-2 rounded-md font-semibold uppercase tracking-wider transition-colors ${variantCls} ${className}`}
    >
      <Cart className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} />
      {justAdded ? "Added!" : label}
    </button>
  );
}
