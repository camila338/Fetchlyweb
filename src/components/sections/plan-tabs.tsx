"use client";

import {
  BuildingIcon,
  CheckIcon,
  HandshakeIcon,
  LayersIcon,
  UserSearchIcon,
} from "lucide-react";
import Link from "next/link";
import * as React from "react";

import { buttonVariants } from "@/components/ui/button";
import { PlanCard } from "@/components/ui/plan-card";
import { PLAN_TABS } from "@/content/plans";
import { cn } from "@/lib/utils";

const ROUTE_ICONS = {
  "building-2": BuildingIcon,
  layers: LayersIcon,
  "user-search": UserSearchIcon,
  handshake: HandshakeIcon,
} as const;

/** Plan cards, switched between the eCommerce and Web/Mobile line-ups. */
export function PlanTabs() {
  const [active, setActive] = React.useState(0);
  const id = React.useId();

  return (
    <div className="flex flex-col gap-8">
      <div role="tablist" aria-label="Plan type" className="flex flex-wrap gap-2 self-start">
        {PLAN_TABS.map((item, i) => (
          <button
            key={item.label}
            type="button"
            role="tab"
            id={`${id}-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`${id}-panel-${i}`}
            onClick={() => setActive(i)}
            className={cn(
              "rounded-full px-4 py-2 text-body-sm transition-colors",
              i === active
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      {PLAN_TABS.map((tab, i) => (
        <div
          key={tab.label}
          role="tabpanel"
          id={`${id}-panel-${i}`}
          aria-labelledby={`${id}-tab-${i}`}
          // Both panels are rendered so the copy is in the HTML; only the
          // selected one is shown.
          hidden={i !== active}
        >
          <div className="flex flex-col gap-12 md:gap-16">
            <ul className="grid gap-6 lg:grid-cols-3">
              {tab.plans.map((plan) => (
                <PlanCard key={plan.name} {...plan} />
              ))}
            </ul>

            <div className="flex flex-col gap-10 border-t border-border pt-12 md:pt-16">
              <h3 className="text-h3 text-balance text-foreground">
                {tab.comparison.title}
              </h3>
              <div className="grid gap-6 lg:grid-cols-3">
                <ul className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
                  {tab.comparison.routes.map((route) => {
                    const Icon = ROUTE_ICONS[route.icon];
                    return (
                      <li
                        key={route.title}
                        className="flex h-full flex-col gap-3 rounded-3xl border border-border bg-card p-6 md:p-8"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-danger-dark/12">
                            <Icon className="size-4.5 text-danger-dark" aria-hidden />
                          </span>
                          <h4 className="font-mono text-tagline text-foreground uppercase">
                            {route.title}
                          </h4>
                        </div>
                        <p className="text-body-sm text-pretty text-muted-foreground">
                          {route.description}
                        </p>
                        <ul className="flex flex-col gap-2">
                          {route.points.map((point) => (
                            <li key={point} className="flex items-start gap-2.5">
                              <span
                                aria-hidden
                                className="mt-2 h-px w-2.5 shrink-0 bg-danger-dark"
                              />
                              <span className="text-body-sm text-pretty text-muted-foreground">
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  })}
                </ul>

                <div className="flex flex-col gap-5 rounded-3xl bg-malibu-lightest p-6 md:p-8">
                  <h4 className="font-mono text-tagline text-malibu-darkest uppercase">
                    {tab.comparison.aside.title}
                  </h4>
                  <p className="text-body-sm text-pretty text-malibu-darkest">
                    {tab.comparison.aside.description}
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {tab.comparison.aside.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <CheckIcon
                          aria-hidden
                          className="mt-0.5 size-4 shrink-0 text-malibu-darker"
                        />
                        <span className="text-body-sm text-pretty text-malibu-darkest">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={cn(buttonVariants(), "text-malibu-darkest")}
                  >
                    {tab.comparison.aside.cta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
