"use client";

import { PlusIcon, ShoppingBagIcon, StarIcon } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import * as React from "react";

const PRODUCTS = [
  { name: "Aria Chair", price: "$248", img: "from-malibu-lighter to-malibu-light" },
  { name: "Linen Throw", price: "$64", img: "from-spring-green-lightest to-spring-green-lighter" },
  { name: "Clay Vase", price: "$38", img: "from-[#f6e7d8] to-[#f0d9c0]", sale: true },
];

const container: Variants = {
  hidden: {},
  show: { transition: { delayChildren: 0.15, staggerChildren: 0.12 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};
const card: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Hero visual for the eCommerce page: a storefront rendered on desktop (a
 * browser window) and mobile (a phone), with components appearing in sequence —
 * nav, banner, then product cards, plus an add-to-cart badge bump. Static under
 * reduced motion.
 */
export function HeroCommerceCard() {
  const reduced = useReducedMotion();
  const [cart, setCart] = React.useState(reduced ? 3 : 2);

  React.useEffect(() => {
    if (reduced) return;
    const t = setTimeout(() => setCart(3), 2200);
    return () => clearTimeout(t);
  }, [reduced]);

  return (
    <div aria-hidden className="relative mx-auto w-full max-w-[30rem] text-left">
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_50%_35%,var(--color-malibu-light),transparent_70%)] opacity-70 blur-2xl" />

      {/* Desktop — browser window */}
      <motion.div
        variants={container}
        initial={reduced ? false : "hidden"}
        animate="show"
        className="w-[90%] overflow-hidden rounded-2xl border border-black/5 bg-neutral-lightest shadow-[0_30px_60px_-25px_rgba(5,11,13,0.45)] ring-1 ring-black/5"
      >
        {/* browser chrome */}
        <div className="flex items-center gap-2 border-b border-border bg-card px-3 py-2.5">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
          <span className="mx-auto flex items-center gap-1.5 rounded-md bg-muted px-3 py-1 text-[0.55rem] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-spring-green-dark" />
            shop.lumen.co
          </span>
        </div>

        <div className="flex flex-col gap-3 p-4">
          {/* store nav */}
          <motion.div variants={item} className="flex items-center justify-between">
            <span className="font-display text-body-md font-semibold tracking-tight text-foreground">
              LUMEN
            </span>
            <div className="flex items-center gap-3">
              <span className="hidden gap-3 sm:flex">
                <span className="h-1.5 w-8 rounded-full bg-muted" />
                <span className="h-1.5 w-8 rounded-full bg-muted" />
                <span className="h-1.5 w-8 rounded-full bg-muted" />
              </span>
              <span className="relative flex size-7 items-center justify-center rounded-full bg-muted">
                <ShoppingBagIcon className="size-3.5 text-foreground" />
                <motion.span
                  key={cart}
                  initial={reduced ? false : { scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  className="absolute -top-1 -right-1 flex size-3.5 items-center justify-center rounded-full bg-malibu text-[0.5rem] font-bold text-malibu-darkest"
                >
                  {cart}
                </motion.span>
              </span>
            </div>
          </motion.div>

          {/* promo banner */}
          <motion.div
            variants={item}
            className="relative flex items-center overflow-hidden rounded-xl bg-gradient-to-r from-malibu-dark to-malibu-darker p-4"
          >
            <div className="flex flex-1 flex-col gap-2">
              <span className="h-2 w-24 rounded-full bg-white/70" />
              <span className="h-1.5 w-16 rounded-full bg-white/40" />
              <span className="mt-1 flex h-6 w-20 items-center justify-center rounded-full bg-neutral-lightest text-[0.55rem] font-semibold text-foreground">
                Shop now
              </span>
            </div>
            <div className="size-16 shrink-0 rounded-lg bg-white/15" />
          </motion.div>

          {/* section label */}
          <motion.div variants={item} className="flex items-center justify-between">
            <span className="text-[0.65rem] font-semibold text-foreground">
              New arrivals
            </span>
            <span className="text-[0.55rem] text-malibu-darker">View all</span>
          </motion.div>

          {/* product grid */}
          <div className="grid grid-cols-3 gap-2.5">
            {PRODUCTS.map((p) => (
              <motion.div
                key={p.name}
                variants={card}
                className="flex flex-col gap-1.5 rounded-xl border border-border bg-card p-2"
              >
                <div
                  className={`relative aspect-square w-full rounded-lg bg-gradient-to-br ${p.img}`}
                >
                  {p.sale ? (
                    <span className="absolute top-1 left-1 rounded-full bg-danger px-1.5 py-0.5 text-[0.45rem] font-bold text-neutral-lightest">
                      SALE
                    </span>
                  ) : null}
                </div>
                <span className="truncate text-[0.55rem] font-medium text-foreground">
                  {p.name}
                </span>
                <span className="text-[0.6rem] font-semibold text-foreground">
                  {p.price}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mobile — phone with a product detail */}
      <motion.div
        initial={reduced ? false : { opacity: 0, x: 24, y: 10, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
        transition={{ delay: reduced ? 0 : 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -right-1 -bottom-4 z-10 w-[30%] overflow-hidden rounded-[1.5rem] border-[5px] border-neutral-darkest bg-neutral-darkest shadow-2xl"
      >
        <div className="rounded-[1.1rem] bg-neutral-lightest">
          <span className="mx-auto mt-2 block h-1 w-8 rounded-full bg-neutral-darkest/70" />
          <div className="flex flex-col gap-2 p-2.5">
            <div className="relative aspect-[4/5] w-full rounded-xl bg-gradient-to-br from-malibu-lighter to-malibu-light">
              <span className="absolute top-1.5 right-1.5 flex size-5 items-center justify-center rounded-full bg-neutral-lightest/90 shadow">
                <StarIcon className="size-2.5 fill-star text-star" />
              </span>
            </div>
            <span className="text-[0.6rem] font-semibold text-foreground">
              Aria Chair
            </span>
            <div className="flex items-center justify-between">
              <span className="text-[0.65rem] font-bold text-foreground">$248</span>
              <span className="flex size-6 items-center justify-center rounded-full bg-malibu text-malibu-darkest">
                <PlusIcon className="size-3.5" />
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
