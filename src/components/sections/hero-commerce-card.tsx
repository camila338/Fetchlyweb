"use client";

import { CheckIcon, ShoppingBagIcon, StarIcon, TruckIcon } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import * as React from "react";

const PRODUCTS = [
  { name: "Aria Chair", price: "$248", img: "from-malibu-lighter to-malibu-light" },
  { name: "Linen Throw", price: "$64", img: "from-spring-green-lightest to-spring-green-lighter" },
  { name: "Clay Vase", price: "$38", img: "from-[#f6e7d8] to-[#f0d9c0]", sale: true },
  { name: "Oak Stool", price: "$112", img: "from-[#efe6da] to-[#e2d3bf]" },
];

const SCROLL_Y = [0, -120, -250];
const EASE = [0.22, 1, 0.36, 1] as const;

function Cursor({ className }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      className={`pointer-events-none absolute z-30 size-5 drop-shadow-md ${className ?? ""}`}
      initial={{ x: 90, y: 70, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
    >
      <path
        d="M5 3l14 7.5-6.2 1.9L9.9 19z"
        fill="#050b0d"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

function Landing({
  scroll,
  cursor,
  press,
}: {
  scroll: number;
  cursor: boolean;
  press: boolean;
}) {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: SCROLL_Y[scroll], opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
      transition={{
        y: { duration: 1.2, ease: [0.45, 0, 0.2, 1] },
        opacity: { duration: 0.4 },
      }}
      className="absolute inset-x-0 top-0 flex flex-col gap-4 p-5"
    >
      {/* hero banner */}
      <div className="relative flex h-36 items-center overflow-hidden rounded-md bg-gradient-to-r from-malibu-dark to-malibu-darker p-6">
        <div className="flex flex-1 flex-col gap-2.5">
          <span className="h-2.5 w-44 rounded-sm bg-white/75" />
          <span className="h-2.5 w-32 rounded-sm bg-white/75" />
          <span className="h-1.5 w-40 rounded-sm bg-white/40" />
          <span className="mt-1 flex h-7 w-24 items-center justify-center rounded-md bg-neutral-lightest text-[0.6rem] font-semibold text-foreground">
            Shop the edit
          </span>
        </div>
        <div className="h-24 w-40 shrink-0 rounded-md bg-white/15" />
      </div>

      {/* categories */}
      <div className="grid grid-cols-4 gap-2.5">
        {["Living", "Dining", "Decor", "Outdoor"].map((c) => (
          <div
            key={c}
            className="flex h-12 items-center justify-center rounded-md border border-border bg-card text-[0.6rem] font-medium text-foreground"
          >
            {c}
          </div>
        ))}
      </div>

      {/* label */}
      <div className="flex items-center justify-between">
        <span className="text-[0.7rem] font-semibold text-foreground">
          New arrivals
        </span>
        <span className="text-[0.6rem] text-malibu-darker">View all</span>
      </div>

      {/* product grid */}
      <div className="grid grid-cols-4 gap-2.5">
        {PRODUCTS.map((p, i) => (
          <motion.div
            key={p.name}
            animate={{ scale: i === 0 && press ? 0.95 : 1 }}
            transition={{ duration: 0.2 }}
            className="relative flex flex-col gap-1.5 rounded-md border border-border bg-card p-2"
          >
            <div
              className={`relative aspect-square w-full rounded-sm bg-gradient-to-br ${p.img}`}
            >
              {p.sale ? (
                <span className="absolute top-1 left-1 rounded-sm bg-danger px-1.5 py-0.5 text-[0.45rem] font-bold text-neutral-lightest">
                  SALE
                </span>
              ) : null}
            </div>
            <span className="truncate text-[0.6rem] font-medium text-foreground">
              {p.name}
            </span>
            <span className="text-[0.65rem] font-semibold text-foreground">
              {p.price}
            </span>
            {i === 0 && cursor ? <Cursor className="top-1/2 left-1/2" /> : null}
          </motion.div>
        ))}
      </div>

      {/* lower promo + second row so the page feels long */}
      <div className="flex h-16 items-center justify-between rounded-md bg-malibu-lightest px-5">
        <div className="flex flex-col gap-1.5">
          <span className="h-2 w-36 rounded-sm bg-malibu-darker/70" />
          <span className="h-1.5 w-24 rounded-sm bg-malibu-darker/30" />
        </div>
        <span className="h-6 w-20 rounded-md bg-malibu" />
      </div>
      <div className="grid grid-cols-4 gap-2.5">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-24 rounded-md border border-border bg-card" />
        ))}
      </div>
    </motion.div>
  );
}

function ProductPage({
  cursor,
  press,
  added,
}: {
  cursor: boolean;
  press: boolean;
  added: boolean;
}) {
  const bits = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  };
  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
      className="absolute inset-0 grid grid-cols-[1.05fr_1fr] gap-6 p-5"
    >
      {/* gallery */}
      <motion.div variants={bits} className="flex flex-col gap-2.5">
        <div className="relative flex-1 rounded-md bg-gradient-to-br from-malibu-lighter to-malibu-light">
          <span className="absolute top-2.5 left-2.5 rounded-sm bg-neutral-lightest/90 px-2 py-0.5 text-[0.5rem] font-semibold text-foreground">
            New
          </span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`aspect-square rounded-sm bg-gradient-to-br from-malibu-lighter to-malibu-light ${
                i === 0 ? "ring-2 ring-malibu-darker" : "opacity-60"
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* details */}
      <div className="flex flex-col gap-3 pt-1">
        <motion.span variants={bits} className="text-[0.55rem] text-muted-foreground">
          Living / Chairs
        </motion.span>
        <motion.h3
          variants={bits}
          className="font-display text-lg font-semibold tracking-tight text-foreground"
        >
          Aria Chair
        </motion.h3>
        <motion.div variants={bits} className="flex items-center gap-1.5">
          <span className="flex">
            {[0, 1, 2, 3, 4].map((i) => (
              <StarIcon key={i} className="size-2.5 fill-star text-star" />
            ))}
          </span>
          <span className="text-[0.55rem] text-muted-foreground">128 reviews</span>
        </motion.div>
        <motion.span variants={bits} className="text-base font-bold text-foreground">
          $248
        </motion.span>
        <motion.div variants={bits} className="flex flex-col gap-1.5">
          <span className="h-1.5 w-full rounded-sm bg-muted" />
          <span className="h-1.5 w-11/12 rounded-sm bg-muted" />
          <span className="h-1.5 w-2/3 rounded-sm bg-muted" />
        </motion.div>
        <motion.div variants={bits} className="flex items-center gap-2">
          <span className="text-[0.55rem] text-muted-foreground">Color</span>
          <span className="size-4 rounded-full bg-malibu ring-2 ring-foreground ring-offset-1" />
          <span className="size-4 rounded-full bg-[#e2d3bf]" />
          <span className="size-4 rounded-full bg-neutral-darkest" />
        </motion.div>
        <motion.div variants={bits} className="flex items-center gap-2">
          <span className="flex h-7 w-20 items-center justify-between rounded-md border border-border px-2 text-[0.6rem] text-foreground">
            <span>-</span>
            <span className="font-semibold">1</span>
            <span>+</span>
          </span>
          <span className="flex items-center gap-1 text-[0.55rem] text-muted-foreground">
            <TruckIcon className="size-3" /> Free shipping
          </span>
        </motion.div>
        <motion.div variants={bits} className="relative mt-auto">
          <motion.span
            animate={{ scale: press ? 0.96 : 1 }}
            transition={{ duration: 0.2 }}
            className={`flex h-9 w-full items-center justify-center gap-1.5 rounded-md text-[0.7rem] font-semibold transition-colors duration-300 ${
              added
                ? "bg-spring-green text-spring-green-darkest"
                : "bg-foreground text-neutral-lightest"
            }`}
          >
            {added ? (
              <>
                <CheckIcon className="size-3.5" /> Added to cart
              </>
            ) : (
              "Add to cart"
            )}
          </motion.span>
          {cursor ? <Cursor className="top-1/2 left-[60%]" /> : null}
        </motion.div>
      </div>
    </motion.div>
  );
}

/**
 * Hero visual for the eCommerce page: a desktop browser that scrolls a store
 * landing page, clicks into a product, then adds it to the cart — looped.
 * Static (landing page, no motion) under reduced motion.
 */
export function HeroCommerceCard() {
  const reduced = useReducedMotion();
  const [phase, setPhase] = React.useState<"landing" | "product">("landing");
  const [scroll, setScroll] = React.useState(reduced ? 2 : 0);
  const [cursor, setCursor] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const [added, setAdded] = React.useState(false);
  const [cart, setCart] = React.useState(2);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (reduced) return;
    let timers: ReturnType<typeof setTimeout>[] = [];
    const at = (ms: number, fn: () => void) => timers.push(setTimeout(fn, ms));

    function run() {
      setPhase("landing");
      setScroll(0);
      setCursor(false);
      setPress(false);
      setAdded(false);
      setCart(2);
      at(600, () => setScroll(1));
      at(1900, () => setScroll(2));
      at(3300, () => setCursor(true));
      at(4400, () => setPress(true));
      at(4650, () => {
        setPress(false);
        setCursor(false);
        setLoading(true);
        setPhase("product");
      });
      at(5300, () => setLoading(false));
      at(5900, () => setCursor(true));
      at(7000, () => setPress(true));
      at(7250, () => {
        setPress(false);
        setAdded(true);
        setCart(3);
      });
      at(9800, () => {
        setCursor(false);
        run();
      });
    }

    run();
    return () => timers.forEach(clearTimeout);
  }, [reduced]);

  return (
    <div aria-hidden className="relative mx-auto w-full max-w-[42rem] text-left">
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-2xl bg-[radial-gradient(circle_at_50%_35%,var(--color-malibu-light),transparent_70%)] opacity-70 blur-2xl" />

      <div className="overflow-hidden rounded-lg border border-black/5 bg-neutral-lightest shadow-[0_30px_60px_-25px_rgba(5,11,13,0.45)] ring-1 ring-black/5">
        {/* browser chrome */}
        <div className="relative flex items-center gap-2 border-b border-border bg-card px-3.5 py-2.5">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
          <span className="mx-auto flex w-2/3 items-center gap-1.5 rounded-md bg-muted px-3 py-1 text-[0.6rem] text-muted-foreground">
            <span className="size-1.5 shrink-0 rounded-full bg-spring-green-dark" />
            <span className="truncate">
              shop.lumen.co{phase === "product" ? "/products/aria-chair" : ""}
            </span>
          </span>
          <AnimatePresence>
            {loading ? (
              <motion.span
                initial={{ scaleX: 0, opacity: 1 }}
                animate={{ scaleX: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-x-0 -bottom-px h-0.5 origin-left bg-malibu-darker"
              />
            ) : null}
          </AnimatePresence>
        </div>

        {/* store header */}
        <div className="flex items-center justify-between border-b border-border bg-card px-5 py-2.5">
          <span className="font-display text-body-md font-semibold tracking-tight text-foreground">
            LUMEN
          </span>
          <span className="flex gap-4">
            <span className="h-1.5 w-10 rounded-sm bg-muted" />
            <span className="h-1.5 w-10 rounded-sm bg-muted" />
            <span className="h-1.5 w-10 rounded-sm bg-muted" />
            <span className="h-1.5 w-10 rounded-sm bg-muted" />
          </span>
          <span className="relative flex size-7 items-center justify-center rounded-md bg-muted">
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

        {/* viewport */}
        <div className="relative h-[22rem] overflow-hidden bg-neutral-lightest sm:h-[25rem]">
          <AnimatePresence mode="wait">
            {phase === "landing" ? (
              <Landing key="landing" scroll={scroll} cursor={cursor} press={press} />
            ) : (
              <ProductPage key="product" cursor={cursor} press={press} added={added} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
