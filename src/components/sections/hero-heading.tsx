"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

import { cn } from "@/lib/utils";

const container: Variants = {
  hidden: {},
  show: { transition: { delayChildren: 0.15, staggerChildren: 0.06 } },
};

const word: Variants = {
  hidden: { opacity: 0, y: "0.5em", filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Display H1 for heroes, revealed word by word with a blur-up. Each line is a
 * block; the first line can be italicised. Reduced motion renders it static.
 */
export function HeroHeading({
  lines,
  italicFirst = false,
  className,
}: {
  lines: readonly string[];
  italicFirst?: boolean;
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <h1 aria-label={lines.join(" ")} className={cn("font-display", className)}>
        {lines.map((line, i) => (
          <span key={i} className={cn("block", italicFirst && "first:italic")}>
            {line}
          </span>
        ))}
      </h1>
    );
  }

  return (
    <motion.h1
      aria-label={lines.join(" ")}
      variants={container}
      initial="hidden"
      animate="show"
      className={cn("font-display", className)}
    >
      {lines.map((line, i) => (
        <span
          key={i}
          aria-hidden
          className={cn("block", italicFirst && i === 0 && "italic")}
        >
          {line.split(" ").map((w, j) => (
            <motion.span
              key={j}
              variants={word}
              className="inline-block whitespace-pre"
              style={{ willChange: "transform, filter, opacity" }}
            >
              {w}
              {j < line.split(" ").length - 1 ? " " : ""}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  );
}
