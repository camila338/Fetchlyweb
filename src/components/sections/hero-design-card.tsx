"use client";

import { motion, useReducedMotion } from "motion/react";

const TABS = ["Wireframe", "UI", "Tokens"];

/**
 * Hero visual for the DesignOps / product-design page: a dark, tabbed design-tool
 * frame (Wireframe / UI / Tokens) showing a wireframe with a selected button and
 * resize handles, fetchweb-style. Static under reduced motion.
 */
export function HeroDesignCard() {
  const reduced = useReducedMotion();

  const rise = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: {
            delay,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        };

  const bar = "rounded-full bg-white/10";

  return (
    <div aria-hidden className="relative mx-auto w-full max-w-[27rem] text-left">
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_50%_35%,var(--color-malibu-light),transparent_70%)] opacity-70 blur-2xl" />

      <motion.div
        initial={reduced ? false : { opacity: 0, y: 26, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0f] shadow-[0_40px_80px_-30px_rgba(5,11,13,0.75)] ring-1 ring-black/30"
      >
        {/* Tabs */}
        <div className="flex items-center gap-6 border-b border-white/10 px-5">
          {TABS.map((t, i) => (
            <span
              key={t}
              className={
                i === 0
                  ? "relative py-3.5 text-body-md font-semibold text-neutral-lightest"
                  : "py-3.5 text-body-md text-neutral-500"
              }
            >
              {t}
              {i === 0 ? (
                <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-malibu" />
              ) : null}
            </span>
          ))}
        </div>

        {/* Wireframe canvas */}
        <div className="flex flex-col gap-3.5 px-6 py-6">
          {/* heading skeleton */}
          <motion.span {...rise(0.15)} className={`h-2.5 w-[42%] ${bar}`} />

          {/* profile card */}
          <motion.div
            {...rise(0.25)}
            className="flex items-center gap-3 rounded-xl bg-white/[0.04] p-4"
          >
            <span className="size-9 shrink-0 rounded-full bg-white/10" />
            <span className="flex flex-1 flex-col gap-2">
              <span className={`h-2 w-[70%] ${bar}`} />
              <span className={`h-2 w-[45%] ${bar}`} />
            </span>
          </motion.div>

          {/* two-up cards */}
          <motion.div {...rise(0.35)} className="grid grid-cols-2 gap-3">
            {[0, 1].map((i) => (
              <span
                key={i}
                className="flex flex-col gap-2 rounded-xl bg-white/[0.04] p-3.5"
              >
                <span className={`h-2 w-[40%] ${bar}`} />
                <span className={`h-2 w-[75%] ${bar}`} />
              </span>
            ))}
          </motion.div>

          {/* long line */}
          <motion.span {...rise(0.45)} className={`h-2 w-[80%] ${bar}`} />

          {/* selected button with resize handles */}
          <motion.div {...rise(0.55)} className="relative mt-1 w-[52%]">
            <span className="flex h-9 items-center rounded-full bg-malibu" />

            {/* selection outline + handles */}
            <motion.div
              className="pointer-events-none absolute -inset-1.5 rounded-[1.25rem] border border-malibu"
              animate={reduced ? {} : { opacity: [1, 0.55, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              {[
                "-left-1 -top-1",
                "-right-1 -top-1",
                "-left-1 -bottom-1",
                "-right-1 -bottom-1",
              ].map((pos) => (
                <span
                  key={pos}
                  className={`absolute ${pos} size-2 rounded-[2px] border border-malibu bg-[#0d0d0f]`}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
