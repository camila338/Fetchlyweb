"use client";

import { useEffect } from "react";

export function ButtonRippleController() {
  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      const el = (e.target as Element | null)?.closest<HTMLElement>(".btn-fx");
      if (!el || el.matches(":disabled, [aria-disabled='true']")) return;

      const rect = el.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      const ripple = document.createElement("span");
      ripple.className = "btn-ripple";
      ripple.setAttribute("aria-hidden", "true");
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      el.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove(), {
        once: true,
      });
    }

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return null;
}
