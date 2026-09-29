"use client";

import { motion, useReducedMotion } from "motion/react";
import * as React from "react";

/**
 * Wraps a bento cell so it zooms up from slightly small + blurred to full and
 * sharp the first time it scrolls into view. `index` staggers sibling cells.
 * Renders a plain element (no animation) under reduced motion.
 */
export function RevealZoom({
  as = "div",
  index = 0,
  className,
  children,
}: {
  as?: "div" | "figure";
  index?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  const MotionComp = as === "figure" ? motion.figure : motion.div;

  return (
    <MotionComp
      className={className}
      initial={{ opacity: 0, scale: 0.88, filter: "blur(14px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{
        duration: 0.7,
        delay: (index % 4) * 0.09,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionComp>
  );
}
