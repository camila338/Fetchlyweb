"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Counts a numeric figure up from zero to its value every time it scrolls
 * into view. Keeps any prefix/suffix around the number ("+", "%", "k", "300,000+")
 * and preserves its decimals and thousands grouping. Static under reduced motion.
 */
export function CountUp({
  value,
  className,
  duration = 1.8,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.6 });
  const reduced = useReducedMotion();

  const parts = React.useMemo(
    () => value.match(/^(\D*?)([\d,]*\.?\d+)(.*)$/),
    [value],
  );

  const target = parts ? parseFloat(parts[2].replace(/,/g, "")) : 0;
  const decimals = parts && parts[2].includes(".") ? parts[2].split(".")[1].length : 0;
  const grouped = parts ? parts[2].includes(",") : false;
  const valid = Boolean(parts);

  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    if (!valid || reduced) {
      setDisplay(target);
      return;
    }
    if (!inView) return;
    const controls = animate(0, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, target, duration, reduced, valid]);

  if (!parts) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  const formatted = grouped
    ? display.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })
    : display.toFixed(decimals);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {parts[1]}
      {formatted}
      {parts[3]}
    </span>
  );
}
