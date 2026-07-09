"use client";

// Count-up animation when the element scrolls into view.
//
// Usage:
//   <AnimatedCounter value={5000} suffix="+" />              // 0 → 5000+
//   <AnimatedCounter value={99} suffix="%" duration={2000} />
//   <AnimatedCounter value={4.9} decimals={1} />             // 0.0 → 4.9
//
// Respects prefers-reduced-motion (snaps to final value).

import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  duration?: number; // ms, default 2000
  delay?: number; // ms, default 0
  decimals?: number; // default 0
  prefix?: string;
  suffix?: string;
  className?: string;
};

export default function AnimatedCounter({
  value,
  duration = 2000,
  delay = 0,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion — snap to final value
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplay(value);
      setStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started, value]);

  useEffect(() => {
    if (!started) return;

    let raf = 0;
    let startTime = 0;

    const animate = (now: number) => {
      if (!startTime) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out-expo for a satisfying deceleration
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplay(value * eased);

      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      } else {
        setDisplay(value);
      }
    };

    const timer = window.setTimeout(() => {
      raf = requestAnimationFrame(animate);
    }, delay);

    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [started, value, duration, delay]);

  const formatted =
    decimals > 0
      ? display.toFixed(decimals)
      : Math.round(display).toLocaleString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
