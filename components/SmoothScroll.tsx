"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function SmoothScroll() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    }
  }, [pathname, searchParams]);

  return null;
}
