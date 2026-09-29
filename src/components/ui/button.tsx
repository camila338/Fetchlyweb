import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonStyles = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
      },
      size: {
        sm: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        md: "h-10 gap-1.5 rounded-full px-5 text-body-sm has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        lg: "h-11 gap-1.5 rounded-full px-5 text-body-sm has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        block: "h-12 w-full gap-1.5 px-2.5 text-body has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-11 rounded-full",
        "icon-sm": "size-8 rounded-full",
      },
    },
    defaultVariants: { variant: "primary", size: "lg" },
  },
);

/**
 * Spread `buttonVariants({ variant, size })` onto a link instead of wrapping it —
 * that is what the design system does everywhere. It merges the variants so a
 * size's `rounded-full` replaces the base `rounded-lg` rather than stacking.
 */
function buttonVariants(props?: VariantProps<typeof buttonStyles>) {
  return cn(buttonStyles(props));
}


function Button({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      data-slot="button"
      className={cn(buttonStyles({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
