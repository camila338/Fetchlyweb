"use client";

import { motion, useReducedMotion } from "motion/react";
import * as React from "react";

type PieceState = "hidden" | "draw" | "built";

const EASE = [0.22, 1, 0.36, 1] as const;
const STEP_MS = 950;
const PIECES = 6;
const HOLD_MS = 3200;

/**
 * One wireframe element. While it is being "drawn" it shows as a dashed
 * outline with a size tag and corner handles; once built it fills in.
 */
function Piece({
  state,
  selected,
  label,
  className,
  fillClassName,
  children,
}: {
  state: PieceState;
  selected: boolean;
  label: string;
  className?: string;
  fillClassName: string;
  children?: React.ReactNode;
}) {
  const built = state === "built";
  return (
    <div className={`relative ${className ?? ""}`}>
      {/* filled content */}
      <motion.div
        initial={false}
        animate={{ opacity: built ? 1 : 0, scale: built ? 1 : 0.985 }}
        transition={{ duration: 0.5, ease: EASE }}
        className={`h-full w-full ${fillClassName}`}
      >
        {children}
      </motion.div>

      {/* dashed draw-in outline */}
      <motion.div
        initial={false}
        animate={{
          scaleX: state === "hidden" ? 0 : 1,
          opacity: state === "hidden" ? 0 : built && !selected ? 0 : 1,
        }}
        transition={{
          scaleX: { duration: 0.55, ease: EASE },
          opacity: { duration: 0.35 },
        }}
        className={`pointer-events-none absolute -inset-1 origin-left rounded-md border ${
          selected ? "border-malibu" : "border-dashed border-malibu/60"
        }`}
      >
        {selected ? (
          <>
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
            <span className="absolute -top-6 left-0 rounded-sm bg-malibu px-1.5 py-0.5 font-mono text-[0.55rem] leading-none whitespace-nowrap text-malibu-darkest">
              {label}
            </span>
          </>
        ) : null}
      </motion.div>
    </div>
  );
}

/**
 * Hero visual for the DesignOps page: a dark design-tool canvas that builds a
 * wireframe piece by piece (dashed outline, then fill), ends on a selected
 * button with resize handles, then loops. Static under reduced motion.
 */
export function HeroDesignCard() {
  const reduced = useReducedMotion();
  const [step, setStep] = React.useState(reduced ? PIECES : -1);
  const [fade, setFade] = React.useState(false);

  React.useEffect(() => {
    if (reduced) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const at = (ms: number, fn: () => void) => timers.push(setTimeout(fn, ms));

    function run() {
      setFade(false);
      setStep(-1);
      for (let i = 0; i <= PIECES; i++) {
        at(500 + i * STEP_MS, () => setStep(i));
      }
      const end = 500 + PIECES * STEP_MS + HOLD_MS;
      at(end, () => setFade(true));
      at(end + 500, run);
    }

    run();
    return () => timers.forEach(clearTimeout);
  }, [reduced]);

  const stateOf = (i: number): PieceState =>
    step < i ? "hidden" : step === i ? "draw" : "built";
  const selectedOf = (i: number) =>
    step === i || (i === PIECES - 1 && step >= PIECES);

  const bar = "rounded-sm bg-white/10";

  return (
    <div aria-hidden className="relative mx-auto w-full max-w-[36rem] text-left">
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-2xl bg-[radial-gradient(circle_at_50%_35%,var(--color-malibu-light),transparent_70%)] opacity-70 blur-2xl" />

      <motion.div
        initial={reduced ? false : { opacity: 0, y: 26, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="overflow-hidden rounded-lg border border-white/10 bg-[#0d0d0f] shadow-[0_40px_80px_-30px_rgba(5,11,13,0.75)] ring-1 ring-black/30"
      >
        <motion.div
          animate={{ opacity: fade ? 0 : 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-5 bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:18px_18px] px-9 py-11"
        >
          {/* heading */}
          <Piece
            state={stateOf(0)}
            selected={selectedOf(0)}
            label="Heading · 220 × 12"
            className="h-3 w-[42%]"
            fillClassName={`${bar} bg-white/15`}
          />

          {/* profile card */}
          <Piece
            state={stateOf(1)}
            selected={selectedOf(1)}
            label="Card · 480 × 72"
            fillClassName="rounded-md bg-white/[0.05]"
          >
            <div className="flex items-center gap-4 p-5">
              <span className="size-12 shrink-0 rounded-md bg-white/10" />
              <span className="flex flex-1 flex-col gap-2.5">
                <span className={`h-2.5 w-[70%] ${bar}`} />
                <span className={`h-2.5 w-[45%] ${bar}`} />
              </span>
            </div>
          </Piece>

          {/* two-up cards */}
          <div className="grid grid-cols-2 gap-4">
            {[2, 3].map((i) => (
              <Piece
                key={i}
                state={stateOf(i)}
                selected={selectedOf(i)}
                label="Card · 232 × 64"
                fillClassName="rounded-md bg-white/[0.05]"
              >
                <div className="flex flex-col gap-2.5 p-4">
                  <span className={`h-2.5 w-[40%] ${bar}`} />
                  <span className={`h-2.5 w-[75%] ${bar}`} />
                </div>
              </Piece>
            ))}
          </div>

          {/* long line */}
          <Piece
            state={stateOf(4)}
            selected={selectedOf(4)}
            label="Text · 384 × 10"
            className="h-2.5 w-[80%]"
            fillClassName={`${bar} bg-white/15`}
          />

          {/* button */}
          <Piece
            state={stateOf(5)}
            selected={selectedOf(5)}
            label="Button · 248 × 44"
            className="mt-2 h-11 w-[52%]"
            fillClassName="rounded-md bg-malibu"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
