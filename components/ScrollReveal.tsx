"use client";

// Scroll-triggered reveal animation wrapper.
//
// Usage:
//   <ScrollReveal>...</ScrollReveal>                        // fade up
//   <ScrollReveal variant="left">...</ScrollReveal>         // slide from left
//   <ScrollReveal variant="right">...</ScrollReveal>        // slide from right
//   <ScrollReveal variant="scale">...</ScrollReveal>        // scale + fade
//   <ScrollReveal stagger>...</ScrollReveal>                // stagger children
//   <ScrollReveal delay={200}>...</ScrollReveal>            // ms delay
//   <ScrollReveal as="li">...</ScrollReveal>                // change element
//   <ScrollReveal once={false}>...</ScrollReveal>           // re-animate on scroll back
//
// Uses IntersectionObserver — no animation library, no layout cost.
// The corresponding CSS lives in globals.css (.reveal, .reveal-left, etc.).

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

type Variant = "up" | "left" | "right" | "scale";

type Props = {
  children: ReactNode;
  variant?: Variant;
  stagger?: boolean;
  delay?: number; // milliseconds
  once?: boolean; // default true
  as?: ElementType;
  className?: string;
  threshold?: number; // 0-1, default 0.15
};

const VARIANT_CLASS: Record<Variant, string> = {
  up: "reveal",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
};

export default function ScrollReveal({
  children,
  variant = "up",
  stagger = false,
  delay = 0,
  once = true,
  as,
  className = "",
  threshold = 0.15,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const Tag = (as ?? "div") as ElementType;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion — just show
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold]);

  const baseClass = stagger ? "reveal-stagger" : VARIANT_CLASS[variant];
  const visibleClass = visible ? " is-visible" : "";

  return (
    <Tag
      ref={ref}
      className={`${baseClass}${visibleClass} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
