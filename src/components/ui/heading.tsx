import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Display headings are set line by line so each line can be balanced and the
 * first one italicised. `aria-label` keeps the accessible name a single string.
 */
export function Heading({
  as: Tag = "h2",
  lines,
  italicFirst = false,
  className,
  ...props
}: Omit<React.ComponentProps<"h2">, "children"> & {
  as?: "h1" | "h2" | "h3" | "p";
  lines: readonly string[];
  italicFirst?: boolean;
}) {
  return (
    <Tag
      aria-label={lines.join(" ")}
      className={cn("font-display", className)}
      {...props}
    >
      {lines.map((line, i) => (
        <span key={i} className={cn("block", italicFirst && "first:italic")}>
          {line}
        </span>
      ))}
    </Tag>
  );
}
