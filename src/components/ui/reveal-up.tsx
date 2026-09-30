"use client";

import { motion, useReducedMotion } from "motion/react";
import * as React from "react";

/**
 * Slides a block into place from a given offset with a fade as it scrolls into
 * view (Aeline-style entrance). Defaults to rising from below; pass `x` for a
 * side entrance. Replays every time it re-enters the viewport. Renders a
 * plain block under reduced motion.
 */
export function RevealUp({
  children,
  className,
  amount = 0.2,
  x = 0,
  y = 56,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  amount?: number;
  x?: number;
  y?: number;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, amount }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
