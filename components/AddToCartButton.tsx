"use client";

// Reusable "Add to Cart" button — now with toast feedback.
//
// Calls useCart().addItem(slug, qty) — which also opens the cart drawer so
// the user sees the count update immediately. Also fires a toast notification
// via useToast() so the click is acknowledged even when the drawer is open.

import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { useToast } from "@/lib/toast-context";
import { ALL_PRODUCTS, formatPrice } from "@/lib/products";
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
  const { toast } = useToast();
  const [justAdded, setJustAdded] = useState(false);

  const handleClick = () => {
    addItem(slug, quantity);

    // Fire a toast with the product thumbnail
    const product = ALL_PRODUCTS.find((p) => p.slug === slug);
    toast({
      title: "Added to cart!",
      description: product
        ? `${quantity > 1 ? `${quantity} × ` : ""}${product.name} — ${formatPrice(
            product.price * quantity
          )}`
        : undefined,
      variant: "cart",
      image: product?.image,
      duration: 3000,
    });

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
        : "bg-[#c8102e] text-white hover:bg-[#a30d24] shadow-[0_8px_20px_-6px_rgba(200,16,46,0.5)] hover:shadow-[0_12px_28px_-6px_rgba(200,16,46,0.6)]"
      : justAdded
        ? "border-[#16a34a] bg-[#16a34a] text-white"
        : "border-[#e5e7eb] bg-white text-[#1a1a1a] hover:border-[#c8102e] hover:bg-[#c8102e] hover:text-white";

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Add ${quantity > 1 ? `${quantity} × ` : ""}to cart`}
      className={`group inline-flex ${sizeCls} ${widthCls} items-center justify-center gap-2 rounded-md font-semibold uppercase tracking-wider transition-all duration-300 ripple-container shine ${variantCls} ${className}`}
    >
      <Cart className={`${size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} transition-transform group-hover:scale-110`} />
      {justAdded ? "Added!" : label}
    </button>
  );
}
