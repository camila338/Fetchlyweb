"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import * as React from "react";

const container: Variants = {
  hidden: {},
  show: { transition: { delayChildren: 0.1, staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Animates a hero's content in on load: each direct child fades and rises in
 * sequence. Keeps the given flex layout by wrapping each child as a flex item.
 * Static under reduced motion.
 */
export function HeroContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {React.Children.map(children, (child) =>
        child == null || child === false ? (
          child
        ) : (
          <motion.div variants={item}>{child}</motion.div>
        ),
      )}
    </motion.div>
  );
}
