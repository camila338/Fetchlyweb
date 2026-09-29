import { cn } from "@/lib/utils";

const STEPS = ["Your details", "Pick a time"] as const;

/** The two-step progress row above the contact heading. */
export function ContactSteps({ current }: { current: 1 | 2 }) {
  return (
    <ol className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
      {STEPS.map((label, i) => {
        const step = i + 1;
        const active = step === current;

        return (
          <li key={label} className="flex items-center gap-3">
            <span
              aria-current={active ? "step" : undefined}
              className={cn(
                "flex items-center gap-2 text-body-sm",
                active
                  ? "font-semibold text-foreground"
                  : "text-muted-foreground",
              )}
            >
              <span
                aria-hidden
                className={cn(
                  "flex size-5 shrink-0 items-center justify-center rounded-full text-body-xs",
                  active
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground",
                )}
              >
                {step}
              </span>
              {label}
            </span>
            {step < STEPS.length ? (
              <span aria-hidden className="hidden h-px w-6 bg-border sm:block" />
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
