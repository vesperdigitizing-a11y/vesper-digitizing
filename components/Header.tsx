"use client";

// Enhanced Header — features:
//   • Glass / blur backdrop
//   • Hides on scroll down, shows on scroll up (more screen real estate)
//   • Subtle shadow appears only after scrolling
//   • Magnetic "Get a Quote" CTA
//   • Live cart badge with count
//   • Animated active underline that draws in
//   • Mobile menu slides in with stagger animation

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { ArrowRight, Cart, Menu } from "./icons";
import { useCart } from "@/lib/cart-context";
import CartCount from "./CartCount";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Store", href: "/store" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const { openCart } = useCart();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Scroll behavior: detect direction + scrolled state
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      // Hide on scroll-down past 200px, show on scroll-up
      if (y > 200 && y > lastY + 8) {
        setHidden(true);
      } else if (y < lastY - 8 || y < 100) {
        setHidden(false);
      }
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
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

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled
          ? "border-b border-[#e5e7eb] bg-white/80 shadow-sm backdrop-blur-xl supports-[backdrop-filter]:bg-white/70"
          : "border-b border-transparent bg-white/95 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 md:h-20">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Vesper Digitizing home"
          className="group flex items-center transition-transform hover:scale-105"
        >
          <Logo size={40} />
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden lg:flex items-center gap-8"
          aria-label="Primary"
        >
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`group relative text-sm font-medium transition-colors hover:text-[#c8102e] ${
                isActive(item.href) ? "text-[#c8102e]" : "text-[#1a1a1a]"
              }`}
            >
              {item.label}
              {/* Animated underline */}
              <span
                className={`absolute -bottom-1.5 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-[#c8102e] transition-all duration-300 ${
                  isActive(item.href)
                    ? "w-5"
                    : "w-0 group-hover:w-5"
                }`}
                style={{
                  transformOrigin: "center",
                }}
              />
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/contact"
            className="group relative inline-flex h-10 items-center gap-2 overflow-hidden rounded-md bg-[#c8102e] px-4 sm:px-5 text-sm font-semibold text-white shadow-[0_8px_20px_-6px_rgba(200,16,46,0.5)] transition-all hover:bg-[#a30d24] hover:shadow-[0_12px_28px_-6px_rgba(200,16,46,0.6)] sm:gap-2"
          >
            {/* Shine sweep */}
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">GET A QUOTE</span>
            <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <button
            type="button"
            aria-label="Open cart"
            onClick={openCart}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#e5e7eb] text-[#1a1a1a] transition-all hover:border-[#c8102e] hover:bg-[#c8102e] hover:text-white"
          >
            <Cart className="h-5 w-5" />
            <CartCount />
          </button>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#e5e7eb] text-[#1a1a1a] transition-colors hover:border-[#c8102e] hover:text-[#c8102e]"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile nav — slides down */}
      <div
        className={`lg:hidden overflow-hidden border-t border-[#e5e7eb] bg-white transition-all duration-500 ${
          open ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6"
          aria-label="Mobile"
        >
          {NAV.map((item, idx) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`py-3 text-sm font-medium border-b border-[#f5f5f5] last:border-0 transition-all hover:text-[#c8102e] ${
                isActive(item.href) ? "text-[#c8102e]" : "text-[#1a1a1a]"
              } ${open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}`}
              style={{ transitionDelay: open ? `${idx * 60}ms` : "0ms" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
