import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * The four accent washes behind feature-card icons, in the rotation the site
 * uses. Each pairs a tinted plate with a matching darker glyph.
 */
export const ICON_TINTS = ["malibu", "info", "spring-green", "danger"] as const;

export type IconTint = (typeof ICON_TINTS)[number];

const PLATE: Record<IconTint, string> = {
  malibu: "bg-malibu/12",
  info: "bg-info/12",
  "spring-green": "bg-spring-green/15",
  danger: "bg-danger/12",
};

const GLYPH: Record<IconTint, string> = {
  malibu: "text-malibu-darker",
  info: "text-info-dark",
  "spring-green": "text-spring-green-darker",
  danger: "text-danger-dark",
};

export function IconBadge({
  icon: Icon,
  tint,
  size = "md",
}: {
  icon: LucideIcon;
  tint: IconTint;
  size?: "sm" | "md";
}) {
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-lg",
        size === "sm" ? "size-8" : "size-9",
        PLATE[tint],
      )}
    >
      <Icon
        className={cn(size === "sm" ? "size-4" : "size-4.5", GLYPH[tint])}
        aria-hidden
      />
    </span>
  );
}

/** Bordered card: tinted icon, mono uppercase title, one line of copy. */
export function IconCard({
  icon,
  tint,
  title,
  children,
}: {
  icon: LucideIcon;
  tint: IconTint;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col gap-3 rounded-2xl border border-border bg-background p-6">
      <div className="flex items-center gap-3">
        <IconBadge icon={icon} tint={tint} />
        <h3 className="font-mono text-tagline text-foreground uppercase">
          {title}
        </h3>
      </div>
      <p className="text-body-sm text-muted-foreground">{children}</p>
    </div>
  );
}
