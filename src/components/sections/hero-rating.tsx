"use client";

import { StarIcon } from "lucide-react";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";

const container: Variants = {
  hidden: {},
  show: {
    transition: { delayChildren: 0.2, staggerChildren: 0.14 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 10, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const starsGroup: Variants = {
  hidden: {},
  show: { transition: { delayChildren: 0.05, staggerChildren: 0.09 } },
};

const star: Variants = {
  hidden: { opacity: 0, scale: 0, rotate: -120 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 500, damping: 12 },
  },
};

/**
 * Homepage / service-hero rating pill. The avatars, score, stars and label
 * fade in one after another; each star then pops with a springy overshoot and
 * keeps a slow twinkle. Falls back to a static pill under reduced motion.
 */
export function HeroRating({ label = "Clutch" }: { label?: string }) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <p className="inline-flex items-center gap-3 rounded-full border border-border bg-background py-1.5 pr-4 pl-1.5 text-body-sm shadow-sm">
        <Image
          src="/images/decor/hero-avatars.webp"
          alt="Avatars of Fetchly clients"
          width={366}
          height={128}
          sizes="72px"
          className="h-7 w-auto"
        />
        <span className="font-semibold">5.0</span>
        <span
          aria-hidden
          className="inline-flex items-center gap-0.5 text-(--color-star)"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} className="size-3.5 fill-current" />
          ))}
        </span>
        <span className="sr-only">out of 5</span>
        <span className="text-muted-foreground">{label}</span>
      </p>
    );
  }

  return (
    <motion.p
      variants={container}
      initial="hidden"
      animate="show"
      className="inline-flex items-center gap-3 rounded-full border border-border bg-background py-1.5 pr-4 pl-1.5 text-body-sm shadow-sm"
    >
      <motion.span variants={item} className="inline-flex">
        <Image
          src="/images/decor/hero-avatars.webp"
          alt="Avatars of Fetchly clients"
          width={366}
          height={128}
          sizes="72px"
          className="h-7 w-auto"
        />
      </motion.span>

      <motion.span variants={item} className="font-semibold">
        5.0
      </motion.span>

      <motion.span
        variants={starsGroup}
        aria-hidden
        className="inline-flex items-center gap-0.5 text-(--color-star)"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.span key={i} variants={star} className="inline-flex">
            <motion.span
              className="inline-flex"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                delay: 1.4 + i * 0.18,
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 3.2,
                ease: "easeInOut",
              }}
            >
              <StarIcon className="size-3.5 fill-current" />
            </motion.span>
          </motion.span>
        ))}
      </motion.span>

      <span className="sr-only">out of 5</span>

      <motion.span variants={item} className="text-muted-foreground">
        {label}
      </motion.span>
    </motion.p>
  );
}
