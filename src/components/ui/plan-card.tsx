import { CheckIcon } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type PlanCardProps = {
  name: string;
  /** The dark, emphasised card in a row. */
  featured?: boolean;
  /** e.g. ["From", "$6,400", "/mo"], or a single "Let's talk". */
  priceParts: readonly string[];
  description: string;
  featuresTitle: string;
  features: readonly string[];
  cta: string;
  href?: string;
};

export function PlanCard({
  name,
  featured = false,
  priceParts,
  description,
  featuresTitle,
  features,
  cta,
  href = "/contact",
}: PlanCardProps) {
  return (
    <li
      className={cn(
        "flex flex-col gap-6 rounded-3xl border p-6 md:p-8",
        featured
          ? "border-transparent bg-malibu-darkest text-neutral-lightest"
          : "border-border bg-card",
      )}
    >
      <div className="flex flex-col gap-3">
        <h3
          className={cn(
            "font-mono text-tagline uppercase",
            featured ? "text-malibu-light" : "text-muted-foreground",
          )}
        >
          {name}
        </h3>
        <p className="flex flex-wrap items-baseline gap-2">
          {priceParts.map((part) =>
            // The figure is the display-size part; "From" and "/mo" are labels.
            part.startsWith("$") || priceParts.length === 1 ? (
              <span key={part} className="font-display text-h3">
                {part}
              </span>
            ) : (
              <span
                key={part}
                className={cn(
                  "text-body-sm",
                  featured ? "text-malibu-light" : "text-muted-foreground",
                )}
              >
                {part}
              </span>
            ),
          )}
        </p>
        <p
          className={cn(
            "text-body-sm text-pretty",
            featured ? "text-malibu-light" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      </div>

      <div
        className={cn(
          "flex flex-col gap-3 border-t pt-6",
          featured ? "border-malibu-dark" : "border-border",
        )}
      >
        <h4
          className={cn(
            "font-mono text-tagline uppercase",
            featured ? "text-malibu-light" : "text-foreground",
          )}
        >
          {featuresTitle}
        </h4>
        <ul className="flex flex-col gap-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-body-sm">
              <CheckIcon
                aria-hidden
                className={cn(
                  "mt-0.5 size-4 shrink-0",
                  featured ? "text-malibu" : "text-malibu-darker",
                )}
              />
              <span className={featured ? undefined : "text-muted-foreground"}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href={href}
        className={cn(
          buttonVariants({ variant: featured ? "secondary" : "primary", size: "sm" }),
          "mt-auto self-start",
        )}
      >
        {cta}
      </Link>
    </li>
  );
}
