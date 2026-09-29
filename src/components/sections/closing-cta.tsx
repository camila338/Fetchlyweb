import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Stars } from "@/components/ui/stars";
import { SITE } from "@/content/site";

const PROOF = [
  {
    quote:
      "I was, without exaggerating, blown away by the quality, appearance, and functionality of the app.",
    source: "Douglas H. Clements, Ph.D., University of Denver",
  },
  {
    quote:
      "The process feels much more like their team is an extension of your own.",
    source: "Spencer Steffen, VP of Engineering, Oats Overnight",
  },
];

/** The closing panel that ends every page: CTA on the left, proof on the right. */
export function ClosingCta({
  lines = ["Start inside a week,", "not inside a scope of work"],
  lead,
  cta = "Talk to Sales Rep",
}: {
  lines?: readonly string[];
  /** Optional standfirst between the heading and the button. */
  lead?: string;
  cta?: string;
}) {
  return (
    <div className="reveal">
      <Section>
        <div className="grid gap-0 overflow-hidden rounded-3xl border border-border bg-muted md:grid-cols-2">
          <div className="flex flex-col items-start gap-6 p-8 md:p-12 lg:p-16">
            <Heading
              lines={lines}
              className="max-w-site-sm text-h2 text-balance text-foreground"
            />
            {lead ? (
              <p className="max-w-site-sm text-body-lg text-pretty text-muted-foreground">
                {lead}
              </p>
            ) : null}
            <Link href="/contact" className={buttonVariants()}>
              {cta}
            </Link>
            <p className="text-body-sm text-muted-foreground">
              Or reach us directly at{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="rounded-sm text-malibu-darker underline underline-offset-4 outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                {SITE.email}
              </a>
            </p>
          </div>

          <div className="flex h-full flex-col gap-6 bg-malibu-lightest p-8 md:p-12 lg:p-16">
            <p className="flex items-baseline gap-3">
              <span className="font-display text-h2 text-malibu-darkest">4.9</span>
              <Stars className="text-lg" />
              <span className="sr-only">out of 5</span>
              <span className="text-body-sm text-malibu-darker">
                average across 30+ engagements
              </span>
            </p>
            <ul className="flex flex-col gap-5">
              {PROOF.map((item) => (
                <li key={item.source} className="flex flex-col gap-1.5">
                  <blockquote className="text-body-sm text-pretty text-malibu-darkest">
                    {item.quote}
                  </blockquote>
                  <p className="text-body-xs text-malibu-darker">{item.source}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
