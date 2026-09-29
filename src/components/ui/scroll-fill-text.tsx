"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import * as React from "react";

import { cn } from "@/lib/utils";

const BASE_OPACITY = 0.18;

function FillWord({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [BASE_OPACITY, 1]);
  return (
    <motion.span aria-hidden style={{ opacity }}>
      {children}{" "}
    </motion.span>
  );
}

/**
 * Display heading whose words fill from faint to full as the block scrolls
 * through the viewport (Aeline-style). Progress is tied to scroll position, so
 * it reverses when you scroll back up. Renders static under reduced motion.
 */
export function ScrollFillText({
  as = "h2",
  lines,
  className,
}: {
  as?: "h1" | "h2" | "h3" | "p";
  lines: readonly string[];
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.5"],
  });

  const label = lines.join(" ");
  const total = lines.reduce((n, line) => n + line.split(" ").length, 0);

  if (reduced) {
    const Tag = as;
    return (
      <Tag aria-label={label} className={cn("font-display", className)}>
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </Tag>
    );
  }

  let counter = 0;

  return (
    <div ref={ref}>
      {React.createElement(
        as,
        { "aria-label": label, className: cn("font-display", className) },
        lines.map((line, li) => (
          <span key={li} className="block">
            {line.split(" ").map((word, wi) => {
              const i = counter++;
              return (
                <FillWord
                  key={wi}
                  progress={scrollYProgress}
                  range={[i / total, (i + 1) / total]}
                >
                  {word}
                </FillWord>
              );
            })}
          </span>
        )),
      )}
    </div>
  );
}
