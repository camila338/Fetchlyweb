import Link from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Pill link with a blurred, slowly rotating brand-gradient blob behind the
 * label. The blob shrinks on hover and the pill picks up a light malibu wash.
 * Adapted from a Uiverse effect to Fetchly's palette; pure CSS, no JS.
 */
export function GlowButton({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group/glow relative z-0 inline-flex h-11 items-center justify-center overflow-hidden rounded-full bg-neutral-darkest px-6 text-body-sm font-semibold text-neutral-lightest shadow-[0_10px_24px_-12px_rgba(5,11,13,0.7)] transition-transform duration-200 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.97] motion-reduce:transition-none",
        className,
      )}
    >
      <span className="relative z-10 inline-flex items-center gap-1.5">
        {children}
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
      >
        <span className="size-40 rounded-full bg-[linear-gradient(90deg,var(--color-malibu)_0%,var(--color-spring-green)_49%,var(--color-info)_100%)] opacity-70 blur-[18px] animate-button-glow transition-[width,height,opacity] duration-500 group-hover/glow:size-28 group-hover/glow:opacity-90" />
      </span>
    </Link>
  );
}
