"use client";

import {
  CircleCheckIcon,
  CircleDashedIcon,
  CircleIcon,
  InboxIcon,
  LayoutListIcon,
  MapIcon,
  PlusIcon,
  SearchIcon,
  SquareKanbanIcon,
} from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import * as React from "react";

import { CodeBackdrop } from "@/components/sections/code-backdrop";

const NAV = [
  { icon: InboxIcon, label: "Inbox" },
  { icon: LayoutListIcon, label: "My Issues", active: true },
  { icon: SquareKanbanIcon, label: "Projects" },
  { icon: MapIcon, label: "Roadmap" },
];

type Status = "todo" | "progress" | "done";
const STATUS: Record<Status, { Icon: typeof CircleIcon; cls: string }> = {
  todo: { Icon: CircleIcon, cls: "text-neutral-dark" },
  progress: { Icon: CircleDashedIcon, cls: "text-star" },
  done: { Icon: CircleCheckIcon, cls: "text-spring-green-dark" },
};

const ISSUES: { title: string; tag: string; status: Status; who: string }[] = [
  { title: "Checkout flow refactor", tag: "web", status: "todo", who: "AM" },
  { title: "Push notifications", tag: "iOS", status: "progress", who: "JD" },
  { title: "Dark mode tokens", tag: "design", status: "done", who: "SN" },
  { title: "Offline cache sync", tag: "android", status: "progress", who: "RK" },
  { title: "Onboarding polish", tag: "web", status: "todo", who: "AM" },
  { title: "Payments webhook", tag: "api", status: "done", who: "JD" },
];

const container: Variants = {
  hidden: {},
  show: { transition: { delayChildren: 0.2, staggerChildren: 0.08 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

function StatusIcon({ status, reduced }: { status: Status; reduced: boolean }) {
  const { Icon, cls } = STATUS[status];
  if (status === "progress" && !reduced) {
    return (
      <motion.span
        className={`shrink-0 ${cls}`}
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      >
        <Icon className="size-4" />
      </motion.span>
    );
  }
  return <Icon className={`size-4 shrink-0 ${cls}`} />;
}

/**
 * Hero visual for the web + mobile page: a real, restrained product UI (an issue
 * tracker) on a desktop browser and a tall phone. Rows appear in sequence, the
 * top issue cycles through its status, and in-progress spinners rotate. Muted
 * palette. Static under reduced motion.
 */
export function HeroServiceCards() {
  const reduced = useReducedMotion();
  const [topStatus, setTopStatus] = React.useState<Status>("todo");
  const [phoneStage, setPhoneStage] = React.useState<
    "hidden" | "entering" | "scrolled"
  >(reduced ? "scrolled" : "hidden");

  // Phone: slide up from below the desktop card, then scroll its list to
  // reveal the rows below the fold, then hand off to the looping status
  // interactions once it has settled.
  React.useEffect(() => {
    if (reduced) return;
    const t1 = setTimeout(() => setPhoneStage("entering"), 900);
    const t2 = setTimeout(() => setPhoneStage("scrolled"), 2000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [reduced]);

  React.useEffect(() => {
    if (reduced) return;
    const order: Status[] = ["todo", "progress", "done"];
    let i = 0;
    let intervalId: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(() => {
      intervalId = setInterval(() => {
        i = (i + 1) % order.length;
        setTopStatus(order[i]);
      }, 1800);
    }, 2600);
    return () => {
      clearTimeout(start);
      if (intervalId) clearInterval(intervalId);
    };
  }, [reduced]);

  const rows = ISSUES.map((issue, i) =>
    i === 0 ? { ...issue, status: topStatus } : issue,
  );

  return (
    <div
      aria-hidden
      className="relative isolate mx-auto w-full max-w-[40rem] text-left"
    >
      <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] bg-[radial-gradient(circle_at_45%_35%,var(--color-malibu-light),transparent_75%)] opacity-40 blur-2xl" />
      <CodeBackdrop className="absolute -top-24 -bottom-24 -left-16 -right-4 -z-10" />

      {/* Desktop — browser window */}
      <motion.div
        variants={container}
        initial={reduced ? false : "hidden"}
        animate="show"
        className="w-full overflow-hidden rounded-[14px] border border-black/10 bg-neutral-lightest shadow-[0_40px_70px_-30px_rgba(5,11,13,0.45)] ring-1 ring-black/5"
      >
        {/* chrome */}
        <div className="flex items-center gap-2 border-b border-border bg-neutral-lighter px-4 py-3">
          <span className="size-3 rounded-full bg-neutral" />
          <span className="size-3 rounded-full bg-neutral" />
          <span className="size-3 rounded-full bg-neutral" />
          <span className="mx-auto flex items-center gap-2 rounded-md bg-neutral-lightest px-4 py-1.5 text-[0.7rem] text-muted-foreground ring-1 ring-border">
            app.fetchly.com
          </span>
        </div>

        <div className="flex">
          {/* sidebar */}
          <div className="hidden w-[30%] flex-col gap-1 border-r border-border bg-neutral-lighter/60 p-4 sm:flex">
            <div className="mb-3 flex items-center gap-2.5">
              <span className="size-6 rounded-lg bg-foreground" />
              <span className="text-body-sm font-semibold text-foreground">
                Fetchly
              </span>
            </div>
            {NAV.map((n) => (
              <motion.span
                key={n.label}
                variants={item}
                className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[0.78rem] ${
                  n.active
                    ? "bg-neutral-lightest font-medium text-foreground shadow-sm ring-1 ring-border"
                    : "text-muted-foreground"
                }`}
              >
                <n.icon className="size-4" />
                {n.label}
              </motion.span>
            ))}
          </div>

          {/* main */}
          <div className="flex-1 p-5">
            <motion.div
              variants={item}
              className="mb-3 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <span className="text-body-md font-semibold text-foreground">
                  My Issues
                </span>
                <span className="rounded-full bg-muted px-2 py-0.5 text-[0.6rem] font-medium text-muted-foreground">
                  {rows.length}
                </span>
              </div>
              <span className="flex size-7 items-center justify-center rounded-md ring-1 ring-border">
                <SearchIcon className="size-4 text-muted-foreground" />
              </span>
            </motion.div>

            <div className="flex flex-col">
              {rows.slice(0, 5).map((issue) => (
                <motion.div
                  key={issue.title}
                  variants={item}
                  className="flex items-center gap-3 border-b border-border/70 py-2.5 last:border-0"
                >
                  <StatusIcon status={issue.status} reduced={!!reduced} />
                  <span className="min-w-0 flex-1 truncate text-[0.8rem] text-foreground">
                    {issue.title}
                  </span>
                  <span className="hidden rounded bg-muted px-2 py-0.5 text-[0.6rem] font-medium text-muted-foreground sm:inline">
                    {issue.tag}
                  </span>
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-[0.55rem] font-semibold text-muted-foreground ring-1 ring-border">
                    {issue.who}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile — a real iPhone silhouette (Dynamic Island, side buttons, tall
          screen ratio): slides up from under the desktop card, scrolls its
          own list, then hands off to the status interactions. */}
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 260, scale: 0.92 }}
        animate={
          phoneStage === "hidden"
            ? { opacity: 0, y: 260, scale: 0.92 }
            : { opacity: 1, y: 0, scale: 1 }
        }
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -right-6 -bottom-16 z-10 aspect-[9/19.5] w-[36%] min-w-[13rem] rounded-[2.75rem] border-[10px] border-neutral-darkest bg-neutral-darkest shadow-2xl"
      >
        {/* side buttons */}
        <span className="absolute top-[13%] -left-[13px] h-4 w-[3px] rounded-l-sm bg-neutral-darkest" />
        <span className="absolute top-[19%] -left-[13px] h-8 w-[3px] rounded-l-sm bg-neutral-darkest" />
        <span className="absolute top-[28%] -left-[13px] h-8 w-[3px] rounded-l-sm bg-neutral-darkest" />
        <span className="absolute top-[20%] -right-[13px] h-12 w-[3px] rounded-r-sm bg-neutral-darkest" />

        <div className="relative flex h-full flex-col overflow-hidden rounded-[1.9rem] bg-neutral-lightest">
          {/* dynamic island */}
          <div className="absolute top-3 left-1/2 z-20 h-6 w-[34%] -translate-x-1/2 rounded-full bg-neutral-darkest" />

          <div className="flex flex-1 flex-col gap-4 px-4 pt-10 pb-3">
            <div className="flex items-center justify-between">
              <span className="text-[0.95rem] font-semibold text-foreground">
                Issues
              </span>
              <span className="flex size-8 items-center justify-center rounded-full bg-foreground text-neutral-lightest">
                <PlusIcon className="size-4.5" />
              </span>
            </div>

            <div className="relative flex-1 overflow-hidden">
              <motion.div
                className="flex flex-col gap-4"
                animate={{ y: phoneStage === "scrolled" ? -104 : 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {rows.map((issue, i) => (
                  <motion.div
                    key={issue.title}
                    initial={reduced ? false : { opacity: 0, x: 10 }}
                    animate={
                      phoneStage === "hidden"
                        ? { opacity: 0, x: 10 }
                        : { opacity: 1, x: 0 }
                    }
                    transition={{
                      delay: reduced ? 0 : 0.1 + i * 0.06,
                      duration: 0.4,
                    }}
                    className="flex items-center gap-2.5"
                  >
                    <StatusIcon status={issue.status} reduced={!!reduced} />
                    <span className="min-w-0 flex-1 truncate text-[0.8rem] text-foreground">
                      {issue.title}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
          {/* bottom nav */}
          <div className="flex items-center justify-around border-t border-border py-3.5">
            {[InboxIcon, LayoutListIcon, SquareKanbanIcon].map((Icon, i) => (
              <Icon
                key={i}
                className={`size-5 ${i === 1 ? "text-foreground" : "text-neutral"}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
