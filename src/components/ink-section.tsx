import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Inverts the theme for a dark band: the semantic tokens are redefined locally
 * so every child component keeps working without dark-mode variants.
 */
export function InkSection({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "ink-bloom",
        "[--foreground:var(--color-neutral-lightest)] [--muted-foreground:var(--color-neutral-light)] [--border:var(--color-neutral-darker)] [--muted:var(--color-neutral-darker)] [--card:var(--color-neutral-darker)] [--accent-figure:var(--color-malibu)]",
        "[--glass-tint:color-mix(in_oklab,var(--color-neutral-lightest)_8%,transparent)] [--glass-edge:color-mix(in_oklab,var(--color-neutral-lightest)_14%,transparent)]",
        className,
      )}
      {...props}
    />
  );
}
