"use client";

import { useState } from "react";
import Logo from "./Logo";
import { ArrowRight, Cart, Menu } from "./icons";

const NAV = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Store", href: "#store" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e5e7eb] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 md:h-20">
        {/* Logo */}
        <a href="#" aria-label="Vesper Digitizing home" className="flex items-center">
          <Logo size={40} />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[#1a1a1a] transition-colors hover:text-[#c8102e]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#quote"
            className="group inline-flex h-10 items-center gap-2 rounded-md bg-[#c8102e] px-4 sm:px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#a30d24]"
          >
            GET A QUOTE
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <button
            type="button"
            aria-label="Cart"
            className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#e5e7eb] text-[#1a1a1a] transition-colors hover:border-[#1a1a1a] hover:bg-[#f5f5f5]"
          >
            <Cart className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#e5e7eb] text-[#1a1a1a]"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="lg:hidden border-t border-[#e5e7eb] bg-white">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6" aria-label="Mobile">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-[#1a1a1a] border-b border-[#f5f5f5] last:border-0 hover:text-[#c8102e]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
