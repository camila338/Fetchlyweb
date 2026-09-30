"use client";

import { usePathname } from "next/navigation";
import * as React from "react";

/**
 * Drives every `.reveal` block: each one starts hidden (via CSS) and gets
 * `is-revealed` whenever it scrolls into view, then loses it again once it
 * scrolls back out — so the rise-and-fade replays every time the block
 * re-enters, not just the first time. Uses IntersectionObserver, so it works
 * in every browser (a CSS scroll timeline does not). Re-scans on route change
 * for the new page's blocks.
 */
export function RevealController() {
  const pathname = usePathname();

  React.useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".reveal, .reveal-left, .reveal-right",
      ),
    );
    if (els.length === 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.classList.toggle("is-revealed", entry.isIntersecting);
        }
      },
      { rootMargin: "0px 0px -18% 0px", threshold: 0 },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
