"use client";

// Styled button/link — NO magnetic effect, just clean shadow + bg-color hover.
//
// Replaces the old MagneticButton API so existing call sites don't need to
// change. Removed the cursor-follow / ripple / shine effects per user request.
//
// Usage:
//   <MagneticButton href="/contact">Get a Quote</MagneticButton>
//   <MagneticButton onClick={...}>Click Me</MagneticButton>
//   <MagneticButton variant="outline" size="lg">...</MagneticButton>

import { type ReactNode } from "react";
import Link from "next/link";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "outline" | "dark" | "white";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  strength?: number; // kept for API compat, ignored
  className?: string;
  ariaLabel?: string;
};

const VARIANT_CLASS: Record<NonNullable<Props["variant"]>, string> = {
  solid:
    "bg-[#c8102e] text-white hover:bg-[#a30d24] shadow-[0_8px_20px_-6px_rgba(200,16,46,0.5)] hover:shadow-[0_12px_28px_-6px_rgba(200,16,46,0.6)]",
  outline:
    "border-2 border-[#c8102e] bg-transparent text-[#c8102e] hover:bg-[#c8102e] hover:text-white",
  dark: "bg-[#1a1a1a] text-white hover:bg-[#2d2d2d] shadow-lg",
  white: "bg-white text-[#c8102e] hover:bg-white/90 shadow-sm",
};

const SIZE_CLASS: Record<NonNullable<Props["size"]>, string> = {
  sm: "h-10 px-5 text-xs",
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "solid",
  size = "md",
  fullWidth = false,
  className = "",
  ariaLabel,
}: Props) {
  const baseClass = `group inline-flex ${SIZE_CLASS[size]} ${
    fullWidth ? "w-full" : ""
  } items-center justify-center gap-2 rounded-md font-semibold uppercase tracking-wider transition-all duration-300 ${VARIANT_CLASS[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} onClick={onClick} className={baseClass}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={baseClass}
    >
      {children}
    </button>
  );
}
