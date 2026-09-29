"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Stars } from "@/components/ui/stars";
import { cn } from "@/lib/utils";

export type CarouselQuote = {
  quote: string;
  name: string;
  title: string;
  logo?: { src: string; alt: string };
  avatar?: { src: string; alt: string };
};

/** One large quote at a time, with dots and prev/next controls. */
export function QuoteCarousel({
  heading,
  quotes,
}: {
  heading: string;
  quotes: readonly CarouselQuote[];
}) {
  const [index, setIndex] = React.useState(0);
  const quote = quotes[index];

  const move = (step: number) =>
    setIndex((current) => (current + step + quotes.length) % quotes.length);

  return (
    <Section className="flex flex-col gap-10">
      <h2 className="sr-only">{heading}</h2>

      <p className="flex items-center gap-3">
        <Stars className="text-lg" />
        <span className="font-display text-h4 text-foreground">5.0</span>
        <span className="sr-only">out of 5</span>
      </p>

      <div className="flex min-h-64 flex-col gap-8 md:min-h-56">
        <blockquote className="max-w-site-md text-h4 text-balance text-foreground">
          {quote.quote}
        </blockquote>
        <figcaption className="flex flex-wrap items-center gap-x-6 gap-y-4">
          <span className="flex items-center gap-3">
            {quote.avatar ? (
              <Image
                src={quote.avatar.src}
                alt=""
                width={288}
                height={288}
                sizes="48px"
                className="size-12 shrink-0 rounded-full object-cover"
              />
            ) : null}
            <span className="text-body-sm">
              <span className="block font-semibold text-foreground">
                {quote.name}
              </span>
              <span className="text-muted-foreground">{quote.title}</span>
            </span>
          </span>
          {quote.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={quote.logo.src}
              alt={quote.logo.alt}
              className="max-h-6 w-auto max-w-32 object-contain opacity-70"
            />
          ) : null}
        </figcaption>
      </div>

      <div className="flex items-center justify-between gap-6">
        <ul className="flex items-center gap-2">
          {quotes.map((item, i) => (
            <li key={item.name}>
              <button
                type="button"
                aria-current={i === index ? true : undefined}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-2 rounded-full transition-all outline-none focus-visible:ring-3 focus-visible:ring-ring/50 motion-reduce:transition-none",
                  i === index
                    ? "w-6 bg-foreground"
                    : "w-2 bg-neutral hover:bg-neutral-dark",
                )}
              >
                <span className="sr-only">Show quote {i + 1}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <span aria-hidden className="text-body-sm text-muted-foreground">
            {index + 1} of {quotes.length}
          </span>
          <Button variant="outline" size="icon-sm" onClick={() => move(-1)}>
            <ArrowLeftIcon className="size-4" aria-hidden />
            <span className="sr-only">Previous quote</span>
          </Button>
          <Button variant="outline" size="icon-sm" onClick={() => move(1)}>
            <ArrowRightIcon className="size-4" aria-hidden />
            <span className="sr-only">Next quote</span>
          </Button>
        </div>
      </div>
    </Section>
  );
}
