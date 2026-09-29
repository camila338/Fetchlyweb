"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import * as React from "react";

const container: Variants = {
  hidden: {},
  show: { transition: { delayChildren: 0.05, staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 24 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Container that reveals its <StaggerItem> children one after another when it
 * scrolls into view. Pair the two. Static under reduced motion.
 */
export function Stagger({
  as = "div",
  className,
  amount = 0.15,
  children,
}: {
  as?: "div" | "ul" | "ol";
  className?: string;
  amount?: number;
  children: React.ReactNode;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  const Comp = as === "ul" ? motion.ul : as === "ol" ? motion.ol : motion.div;

  return (
    <Comp
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </Comp>
  );
}

/** A child of <Stagger>: scales up from small to full as its turn comes. */
export function StaggerItem({
  as = "div",
  className,
  children,
}: {
  as?: "div" | "li";
  className?: string;
  children: React.ReactNode;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  const Comp = as === "li" ? motion.li : motion.div;

  return (
    <Comp className={className} variants={item}>
      {children}
    </Comp>
  );
}
