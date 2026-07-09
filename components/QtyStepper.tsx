"use client";

// Reusable + / - quantity stepper.
// Used in the CartDrawer (per line) and on the Product Detail page.

type Props = {
  value: number;
  onDecrement: () => void;
  onIncrement: () => void;
  min?: number;
  size?: "sm" | "md";
  className?: string;
};

export default function QtyStepper({
  value,
  onDecrement,
  onIncrement,
  min = 1,
  size = "md",
  className = "",
}: Props) {
  const btn =
    size === "sm"
      ? "h-7 w-7 text-base"
      : "h-10 w-10 text-lg";
  const display =
    size === "sm"
      ? "h-7 w-9 text-sm"
      : "h-10 w-14 text-base";

  return (
    <div
      className={`inline-flex items-center rounded-md border border-[#e5e7eb] bg-white ${className}`}
      role="group"
      aria-label="Quantity selector"
    >
      <button
        type="button"
        onClick={onDecrement}
        disabled={value <= min}
        aria-label="Decrease quantity"
        className={`flex ${btn} items-center justify-center rounded-l-md text-[#1a1a1a] transition-colors hover:bg-[#f5f5f5] disabled:cursor-not-allowed disabled:opacity-40`}
      >
        <span aria-hidden>−</span>
      </button>
      <span
        className={`flex ${display} items-center justify-center border-x border-[#e5e7eb] font-display font-bold text-[#1a1a1a]`}
        aria-live="polite"
      >
        {value}
      </span>
      <button
        type="button"
        onClick={onIncrement}
        aria-label="Increase quantity"
        className={`flex ${btn} items-center justify-center rounded-r-md text-[#1a1a1a] transition-colors hover:bg-[#f5f5f5]`}
      >
        <span aria-hidden>+</span>
      </button>
    </div>
  );
}
