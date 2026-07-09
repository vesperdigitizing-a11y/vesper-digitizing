"use client";

// Scroll progress bar — fixed at the top of the viewport, shows how far the
// user has scrolled down the page. Slim red bar with a subtle glow.

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[200] h-1 w-full bg-transparent"
      aria-hidden
    >
      <div
        className="h-full bg-gradient-to-r from-[#c8102e] via-[#e63950] to-[#c8102e] shadow-[0_0_10px_rgba(200,16,46,0.6)] transition-[width] duration-75 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
