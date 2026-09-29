import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Infinite horizontal/vertical scroller. The children are repeated
 * `repeat` times so the loop has no visible seam.
 */
export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: React.ComponentProps<"div"> & {
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  repeat?: number;
}) {
  return (
    <div
      {...props}
      className={cn(
        "group flex gap-(--gap) p-2 [--duration:40s] [--gap:1rem]",
        vertical ? "flex-col" : "flex-row",
        "motion-reduce:[&>div]:animate-none",
        className,
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          aria-hidden={i > 0 ? true : undefined}
          className={cn("flex shrink-0 justify-around gap-(--gap)", {
            "animate-marquee flex-row": !vertical,
            "animate-marquee-vertical flex-col": vertical,
            "group-hover:[animation-play-state:paused]": pauseOnHover,
            "[animation-direction:reverse]": reverse,
          })}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
