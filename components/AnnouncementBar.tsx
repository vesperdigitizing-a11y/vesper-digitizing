"use client";

// Announcement bar — slim promotional strip above the header.
// Rotates between a few messages on a timer, with a manual close button.
// Reappears 24h after the user closes it (localStorage flag).

import { useEffect, useState } from "react";
import { ArrowRight, Phone, Sparkles, Zap } from "./icons";

const MESSAGES = [
  {
    icon: Zap,
    text: "⚡ 50% OFF on all embroidery font packs — this week only!",
    cta: "Shop Now",
    href: "/store#products",
  },
  {
    icon: Sparkles,
    text: "✨ New: 3D Puff digitizing now available with same-day delivery",
    cta: "Learn More",
    href: "/services",
  },
  {
    icon: Phone,
    text: "📞 Get a free quote in under 5 minutes — 24/7 live support",
    cta: "Get Quote",
    href: "/contact",
  },
];

const DISMISS_KEY = "vesper-announcement-dismissed";
const DISMISS_HOURS = 24;

export default function AnnouncementBar() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(false);

  // Hydrate visibility from localStorage
  useEffect(() => {
    try {
      const dismissedAt = localStorage.getItem(DISMISS_KEY);
      if (dismissedAt) {
        const hoursSince =
          (Date.now() - parseInt(dismissedAt, 10)) / (1000 * 60 * 60);
        if (hoursSince < DISMISS_HOURS) {
          setVisible(false);
          return;
        }
      }
    } catch {
      // ignore
    }
    setVisible(true);
  }, []);

  // Rotate messages every 5s
  useEffect(() => {
    if (!visible) return;
    const id = window.setInterval(() => {
      setIdx((i) => (i + 1) % MESSAGES.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [visible]);

  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem(DISMISS_KEY, Date.now().toString());
    } catch {
      // ignore
    }
  };

  if (!visible) return null;

  const msg = MESSAGES[idx];

  return (
    <div className="relative z-[60] overflow-hidden bg-gradient-to-r from-[#c8102e] via-[#a30d24] to-[#c8102e] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2 sm:px-6 lg:px-8">
        <div
          key={idx}
          className="flex flex-1 animate-fade-in items-center justify-center gap-2 text-center text-xs font-medium sm:text-sm"
        >
          <span className="hidden sm:inline">{/* icon spot */}</span>
          <span>{msg.text}</span>
          <a
            href={msg.href}
            className="group inline-flex shrink-0 items-center gap-1 rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider transition-colors hover:bg-white/25 sm:text-xs"
          >
            {msg.cta}
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Dots */}
        <div className="hidden items-center gap-1 sm:flex">
          {MESSAGES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show announcement ${i + 1}`}
              onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === idx ? "w-4 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss announcement"
          className="ml-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
