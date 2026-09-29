import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";

/** Underline-on-hover text link with a trailing north-east arrow. */
export function ActionLink({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        "group/action inline-flex items-center gap-1.5 text-body-sm font-semibold text-foreground underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/50",
        className,
      )}
      {...props}
    >
      {children}
      <ArrowUpRightIcon className="size-4 shrink-0" aria-hidden />
    </Link>
  );
}
