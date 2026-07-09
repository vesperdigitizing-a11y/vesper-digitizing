"use client";

// 3D Tilt card — the card subtly tilts toward the cursor on hover, with a
// glare/highlight that follows the cursor. Falls back to a static card on
// touch devices.
//
// Usage:
//   <TiltCard>
//     <div className="card content here" />
//   </TiltCard>
//
//   <TiltCard max={15} glare>
//     ...children...
//   </TiltCard>

import {
  useRef,
  useState,
  type ReactNode,
  type MouseEvent,
} from "react";

type Props = {
  children: ReactNode;
  max?: number; // max tilt in degrees, default 12
  glare?: boolean; // default true
  className?: string;
};

export default function TiltCard({
  children,
  max = 12,
  glare = true,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState("");
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width; // 0-1
    const py = y / rect.height; // 0-1
    const tiltX = (py - 0.5) * -2 * max; // -max to +max
    const tiltY = (px - 0.5) * 2 * max;
    setTransform(
      `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`
    );
    setGlarePos({ x: px * 100, y: py * 100, opacity: 0.25 });
  };

  const handleLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
    setGlarePos((g) => ({ ...g, opacity: 0 }));
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`relative tilt-card ${className}`}
      style={{
        transform,
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.5), transparent 50%)`,
          }}
        />
      )}
    </div>
  );
}
