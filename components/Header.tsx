"use client";

// Enhanced Header — features:
//   • Glass / blur backdrop
//   • Hides on scroll down, shows on scroll up (more screen real estate)
//   • Subtle shadow appears only after scrolling
//   • Magnetic "Get a Quote" CTA
//   • Live cart badge with count
//   • Animated active underline that draws in (disabled for Services)
//   • Mobile menu slides in with stagger animation
//   • Services dropdown (All Services / Patches / Vectors)

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Cart, Menu } from "./icons";
import { useCart } from "@/lib/cart-context";
import CartCount from "./CartCount";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; desc: string }[];
};

const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    // Services dropdown with sub-pages
    children: [
      {
        label: "Digitizing Services",
        href: "/services",
        desc: "Full digitizing catalog",
      },
      {
        label: "Patch Services",
        href: "/patches",
        desc: "Merrow, laser cut, woven, chenille",
      },
      {
        label: "Vector Services",
        href: "/vectors",
        desc: "Raster to vector, logo vectorization",
      },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Store", href: "/store" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const { openCart } = useCart();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Close dropdown on route change
  useEffect(() => {
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Scroll behavior: detect direction + scrolled state
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
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

  // Close mobile menu on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

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
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled
            ? "border-b border-[#e5e7eb] bg-white/80 shadow-sm backdrop-blur-xl supports-[backdrop-filter]:bg-white/70"
            : "border-b border-transparent bg-white/95 backdrop-blur"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-3 sm:h-20 sm:gap-4 sm:px-6 lg:px-8 md:h-24">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Vesper Digitizing home"
            className="group flex shrink-0 items-center transition-transform hover:scale-105"
          >
            <Image
              src="/images/LogoTransparent.png"
              alt="Vesper Digitizing"
              width={805}
              height={310}
              priority
              className="h-10 w-auto sm:h-14 md:h-18"
            />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Primary"
          >
            {NAV.map((item) => {
              // Services item with dropdown (NO hover line effect)
              if (item.children) {
                const active =
                  isActive(item.href) ||
                  pathname === "/patches" ||
                  pathname === "/vectors";
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setServicesOpen((v) => !v)}
                      className={`group relative flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#c8102e] ${
                        active ? "text-[#c8102e]" : "text-[#1a1a1a]"
                      }`}
                    >
                      {item.label}
                      {/* Chevron */}
                      <svg
                        className={`h-3 w-3 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>{" "}
                    </button>

                    {/* Dropdown */}
                    {servicesOpen && (
                      <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
                        <div className="w-72 overflow-hidden rounded-xl border border-[#e5e7eb] bg-white shadow-2xl">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="group/item block border-b border-[#f5f5f5] px-4 py-3 transition-colors last:border-0 hover:bg-[#c8102e]/5"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-semibold text-[#1a1a1a] transition-colors group-hover/item:text-[#c8102e]">
                                  {child.label}
                                </span>
                                <ArrowRight className="h-3.5 w-3.5 text-[#9ca3af] opacity-0 transition-all group-hover/item:translate-x-0.5 group-hover/item:opacity-100 group-hover/item:text-[#c8102e]" />
                              </div>
                              <p className="mt-0.5 text-xs text-[#6b7280]">
                                {child.desc}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // Regular nav item WITH hover line effect
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`group relative text-sm font-medium transition-colors hover:text-[#c8102e] ${
                    isActive(item.href) ? "text-[#c8102e]" : "text-[#1a1a1a]"
                  }`}
                >
                  {item.label}
                  {/* Animated underline - NOT applied to Services */}
                  <span
                    className={`absolute -bottom-1.5 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-[#c8102e] transition-all duration-300 ${
                      isActive(item.href) ? "w-5" : "w-0 group-hover:w-5"
                    }`}
                    style={{
                      transformOrigin: "center",
                    }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
            <Link
              href="/contact"
              className="group relative inline-flex h-9 shrink-0 items-center gap-1 overflow-hidden rounded-md bg-[#c8102e] px-2.5 text-xs font-semibold text-white shadow-[0_8px_20px_-6px_rgba(200,16,46,0.5)] transition-all hover:bg-[#a30d24] hover:shadow-[0_12px_28px_-6px_rgba(200,16,46,0.6)] sm:h-10 sm:gap-2 sm:px-5 sm:text-sm"
            >
              {/* Shine sweep */}
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative whitespace-nowrap">
                <span className="sm:hidden">Quote</span>
                <span className="hidden sm:inline">GET A QUOTE</span>
              </span>
              <ArrowRight className="relative h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5 sm:h-4 sm:w-4" />
            </Link>

            <button
              type="button"
              aria-label="Open cart"
              onClick={openCart}
              className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#e5e7eb] text-[#1a1a1a] transition-all hover:border-[#c8102e] hover:bg-[#c8102e] hover:text-white sm:h-10 sm:w-10"
            >
              <Cart className="h-4 w-4 sm:h-5 sm:w-5" />
              <CartCount />
            </button>

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#e5e7eb] text-[#1a1a1a] transition-colors hover:border-[#c8102e] hover:text-[#c8102e] sm:h-10 sm:w-10"
            >
              <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav backdrop */}
      <div
        aria-hidden
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile nav — slides in from the left */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed left-0 top-0 z-50 flex h-full w-full max-w-xs flex-col bg-white shadow-2xl transition-transform duration-500 lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#e5e7eb] px-5 py-4">
          <Image
            src="/images/LogoTransparent.png"
            alt="Vesper Digitizing"
            width={805}
            height={310}
            className="h-10 w-auto"
          />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
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

        <nav
          className="flex flex-1 flex-col overflow-y-auto px-5 py-3"
          aria-label="Mobile"
        >
          {NAV.map((item, idx) => {
            if (item.children) {
              const active =
                isActive(item.href) ||
                pathname === "/patches" ||
                pathname === "/vectors";
              return (
                <div key={item.label} className="border-b border-[#f5f5f5]">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className={`flex w-full items-center justify-between py-3 text-sm font-medium transition-all ${
                      active
                        ? "text-[#c8102e]"
                        : "text-[#1a1a1a] hover:text-[#c8102e]"
                    } ${open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
                    style={{ transitionDelay: open ? `${idx * 60}ms` : "0ms" }}
                  >
                    {item.label}
                    <svg
                      className={`h-4 w-4 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  {/* Expandable sub-items */}
                  {mobileServicesOpen && (
                    <div className="pb-2 pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className={`block py-2.5 text-sm transition-colors ${
                            pathname === child.href
                              ? "font-semibold text-[#c8102e]"
                              : "text-[#6b7280] hover:text-[#c8102e]"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`py-3 text-sm font-medium border-b border-[#f5f5f5] transition-all hover:text-[#c8102e] ${
                  isActive(item.href) ? "text-[#c8102e]" : "text-[#1a1a1a]"
                } ${open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
                style={{ transitionDelay: open ? `${idx * 60}ms` : "0ms" }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
