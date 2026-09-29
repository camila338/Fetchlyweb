import * as React from "react";

import { cn } from "@/lib/utils";

/** Vertical stack of fields with the form's own rhythm. */
function FieldGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-group"
      className={cn(
        "group/field-group @container/field-group flex w-full flex-col gap-5 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4",
        className,
      )}
      {...props}
    />
  );
}

function Field({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation="vertical"
      className={cn(
        "group/field flex w-full flex-col gap-2 *:w-full data-[invalid=true]:text-destructive [&>.sr-only]:w-auto",
        className,
      )}
      {...props}
    />
  );
}

function FieldLabel({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="field-label"
      className={cn(
        "group/field-label peer/field-label flex w-fit items-center gap-2 text-sm leading-snug font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 group-data-[disabled=true]/field:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        "has-data-checked:border-primary/30 has-data-checked:bg-primary/5 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-lg has-[>[data-slot=field]]:border has-[>[data-slot=field]]:not-has-[:disabled,[data-disabled]]:hover:bg-muted/50 has-[>[data-slot=field]]:has-[:focus-visible]:border-ring has-[>[data-slot=field]]:has-[:focus-visible]:ring-3 has-[>[data-slot=field]]:has-[:focus-visible]:ring-ring/50 *:data-[slot=field]:p-2.5",
        className,
      )}
      {...props}
    />
  );
}

function FieldDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="field-description"
      className={cn(
        "text-left text-sm leading-normal font-normal text-muted-foreground group-has-data-horizontal/field:text-balance [[data-variant=legend]+&]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        className,
      )}
      {...props}
    />
  );
}

function FieldError({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="field-error"
      role="alert"
      className={cn("text-body-sm text-destructive", className)}
      {...props}
    />
  );
}

export { Field, FieldDescription, FieldError, FieldGroup, FieldLabel };
