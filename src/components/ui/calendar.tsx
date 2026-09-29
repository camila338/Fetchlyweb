"use client";

import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import * as React from "react";
import {
  DayButton,
  DayPicker,
  getDefaultClassNames,
  type DayPickerProps,
} from "react-day-picker";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  components,
  ...props
}: DayPickerProps & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
}) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      captionLayout={captionLayout}
      className={cn(
        "group/calendar bg-background p-3 [--cell-size:--spacing(8)] [[data-slot=popover-content]_&]:bg-transparent",
        className,
      )}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          defaultClassNames.nav,
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) rounded-lg p-0 aria-disabled:opacity-50 select-none",
          defaultClassNames.button_previous,
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) rounded-lg p-0 aria-disabled:opacity-50 select-none",
          defaultClassNames.button_next,
        ),
        month_caption: cn(
          "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
          defaultClassNames.month_caption,
        ),
        caption_label: cn(
          "text-body-sm font-medium select-none",
          defaultClassNames.caption_label,
        ),
        month_grid: cn("w-full border-collapse", defaultClassNames.month_grid),
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "flex-1 rounded-md text-body-xs font-normal text-muted-foreground select-none",
          defaultClassNames.weekday,
        ),
        week: cn("mt-2 flex w-full", defaultClassNames.week),
        day: cn(
          "group/day relative aspect-square h-full w-full p-0 text-center select-none [&:first-child[data-selected=true]_button]:rounded-l-lg [&:last-child[data-selected=true]_button]:rounded-r-lg",
          defaultClassNames.day,
        ),
        today: cn(
          "rounded-lg bg-accent text-accent-foreground data-[selected=true]:rounded-none",
          defaultClassNames.today,
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside,
        ),
        disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Chevron: ({ className: chevronClass, orientation, ...rest }) => {
          if (orientation === "left") {
            return <ChevronLeftIcon className={cn("size-4", chevronClass)} {...rest} />;
          }
          if (orientation === "right") {
            return <ChevronRightIcon className={cn("size-4", chevronClass)} {...rest} />;
          }
          return <ChevronDownIcon className={cn("size-4", chevronClass)} {...rest} />;
        },
        DayButton: CalendarDayButton,
        ...components,
      }}
      {...props}
    />
  );
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames();
  const ref = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={modifiers.selected || undefined}
      className={cn(
        "relative isolate z-10 flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 rounded-lg border-0 leading-none font-normal group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-3 group-data-[focused=true]/day:ring-ring/50 data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground",
        defaultClassNames.day,
        className,
      )}
      {...props}
    />
  );
}

export { Calendar, CalendarDayButton };
