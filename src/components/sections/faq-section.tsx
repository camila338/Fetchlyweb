import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ActionLink } from "@/components/ui/action-link";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import type { Faq } from "@/content/faqs";

/** Two-column FAQ: a contact card on the left, an accordion on the right. */
export function FaqSection({
  title = "FAQ",
  ctaLabel = "Get Started",
  faqs,
}: {
  title?: string;
  ctaLabel?: string;
  faqs: readonly Faq[];
}) {
  return (
    <div className="reveal-right">
      <Section className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-16">
        <div className="flex flex-col gap-8">
          <Heading lines={[title]} className="text-h2 text-foreground" />
          <div className="flex flex-col items-start gap-5">
            <div className="flex items-center gap-4">
              <Image
                src="/images/avatars/rhys-davis.avif"
                alt=""
                aria-hidden
                width={288}
                height={288}
                sizes="72px"
                className="size-16 shrink-0 rounded-full object-cover md:size-18"
              />
              <div className="flex flex-col gap-0.5">
                <span className="text-body-sm font-semibold text-foreground">
                  Rhys Davis
                </span>
                <span className="text-body-xs text-muted-foreground">
                  Director of Partnerships
                </span>
              </div>
            </div>
            <ActionLink href="/contact">{ctaLabel}</ActionLink>
          </div>
        </div>

        <Accordion>
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="gap-6 py-5 hover:no-underline">
                <span className="font-display text-body-md font-semibold text-foreground">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <span className="text-body-sm text-muted-foreground">
                  {faq.answer}
                </span>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </div>
  );
}
