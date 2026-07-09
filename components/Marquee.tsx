"use client";

// Infinite horizontal marquee.
//
// Usage:
//   <Marquee>
//     <Logo1 /> <Logo2 /> <Logo3 />
//   </Marquee>
//
//   <Marquee speed="slow" reverse pauseOnHover>
//     ...items...
//   </Marquee>
//
// Implementation: renders the children TWICE in a flex row and translates the
// row by -50%. Combined with the marquee keyframe (also -50%) this creates a
// seamless loop with no visible seam.

import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  speed?: "slow" | "normal" | "fast";
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
};

const SPEED_CLASS: Record<NonNullable<Props["speed"]>, string> = {
  slow: "animate-marquee",
  normal: "animate-marquee",
  fast: "animate-marquee-fast",
};

export default function Marquee({
  children,
  speed = "normal",
  reverse = false,
  pauseOnHover = true,
  className = "",
}: Props) {
  const animClass = reverse ? "animate-marquee-reverse" : SPEED_CLASS[speed];

  return (
    <div className={`marquee-mask overflow-hidden ${className}`}>
      <div
        className={`flex w-max ${animClass} ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
      >
        {/* Render children twice for seamless loop */}
        <div className="flex shrink-0 items-center" aria-hidden={false}>
          {children}
        </div>
        <div
          className="flex shrink-0 items-center"
          aria-hidden={true}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
