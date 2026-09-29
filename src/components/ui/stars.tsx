import { StarIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Five star glyphs, decorative — pair with an sr-only rating sentence. Rendered
 * as a `<p>` when it stands alone in a card, a `<span>` when it sits inline.
 */
export function Stars({
  as: Tag = "span",
  className,
}: {
  as?: "p" | "span";
  className?: string;
}) {
  return (
    <Tag aria-hidden className={cn("flex gap-0.5 text-(--color-star)", className)}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </Tag>
  );
}

/** Lucide star glyphs, used in the hero rating pill. */
export function StarIcons({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("inline-flex items-center gap-0.5 text-(--color-star)", className)}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className="size-3.5 fill-current" />
      ))}
    </span>
  );
}
