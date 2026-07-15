"use client";

// Floating action button — bottom-right of every page.
// Shows a small expandable set of quick actions: WhatsApp, Get a Quote,
// Scroll to top. Appears after the user scrolls down 400px.

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "./icons";

export default function FloatingCTA() {
  const [show, setShow] = useState(true);
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-5 right-5 z-[80] flex flex-col items-end gap-3 transition-all duration-500 ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-16 opacity-0"
      }`}
    >
      {/* Expanded actions */}
      <div
        className={`flex flex-col items-end gap-2 transition-all duration-300 ${
          expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Link
          href="/contact"
          onClick={() => setExpanded(false)}
          className="group flex items-center gap-2 rounded-full bg-[#c8102e] py-3 pl-5 pr-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:scale-105 hover:bg-[#a30d24]"
        >
          Get a Quote
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>

        <a
          href="https://wa.me/11234567890"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setExpanded(false)}
          className="group flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-5 pr-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:scale-105"
        >
          WhatsApp
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>

        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="group flex items-center gap-2 rounded-full bg-[#1a1a1a] py-3 pl-5 pr-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:scale-105"
        >
          Top
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      </div>

      {/* Toggle FAB */}
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-label={expanded ? "Close quick actions" : "Open quick actions"}
        aria-expanded={expanded}
        className={`flex h-14 w-14 items-center justify-center rounded-full bg-[#c8102e] text-white shadow-xl shadow-[#c8102e]/40 transition-all duration-300 hover:scale-110 ${
          expanded ? "rotate-45" : ""
        }`}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
    </div>
  );
}
