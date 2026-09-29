import * as React from "react";

import { cn } from "@/lib/utils";

const WIDTHS = {
  sm: "max-w-site-sm",
  md: "max-w-site-md",
  lg: "max-w-site-lg",
} as const;

const SPACING = {
  none: "",
  sm: "py-8 md:py-12 xl:py-section-sm",
  md: "py-12 md:py-16 xl:py-section-md",
  lg: "py-16 md:py-20 xl:py-section-lg",
} as const;

/**
 * The site's one horizontal rhythm: page gutters, a max width and vertical
 * spacing that steps up at the md and xl breakpoints.
 */
export function Section({
  className,
  width = "lg",
  spacing = "lg",
  ...props
}: React.ComponentProps<"section"> & {
  width?: keyof typeof WIDTHS;
  spacing?: keyof typeof SPACING;
}) {
  return (
    <section
      className={cn(
        "mx-auto px-4 sm:px-5 md:px-10 xl:px-page",
        WIDTHS[width],
        SPACING[spacing],
        className,
      )}
      {...props}
    />
  );
}
