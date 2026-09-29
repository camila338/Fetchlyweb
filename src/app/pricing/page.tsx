import type { Metadata } from "next";
import Link from "next/link";

import { ClosingCta } from "@/components/sections/closing-cta";
import { FaqSection } from "@/components/sections/faq-section";
import { Hero } from "@/components/sections/hero";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { PlanTabs } from "@/components/sections/plan-tabs";
import { TestimonialMarquee } from "@/components/sections/testimonial-marquee";
import { ActionLink } from "@/components/ui/action-link";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { PRICING_FAQS } from "@/content/faqs";
import { TRUSTED_LOGOS } from "@/content/stack";

export const metadata: Metadata = {
  title: { absolute: "Dev Team Pricing | Flat Monthly Plans That Flex" },
  description:
    "Flat monthly plans covering engineering, design, QA and project management. Move between tiers as your roadmap changes, with no renegotiation.",
};

export default function PricingPage() {
  return (
    <main id="main" tabIndex={-1} className="outline-none">
      <Hero>
        <Heading
          as="h1"
          italicFirst
          lines={["A full product team", "inside a week, at one rate"]}
          className="text-display-1 text-balance text-foreground"
        />
        <p className="max-w-site-sm text-body-lg text-pretty text-muted-foreground">
          Engineering, design, QA and project management at one flat monthly
          rate — for less than staffing those roles yourself, and without a
          hiring cycle.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link href="/contact" className={buttonVariants()}>
            Let&apos;s Talk
          </Link>
          <ActionLink href="/pricing#plans">See Plans</ActionLink>
        </div>
      </Hero>

      <div className="reveal">
        <LogoMarquee title="Trusted by brands you know" logos={TRUSTED_LOGOS} />
      </div>

      <div className="reveal-left">
        <div id="plans" className="scroll-mt-24">
          <Section className="flex flex-col gap-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <Heading
                lines={["One plan. The whole team."]}
                className="text-h2 text-foreground"
              />
            </div>
            <PlanTabs />
          </Section>
        </div>
      </div>

      <TestimonialMarquee />

      <div className="bg-muted">
        <FaqSection faqs={PRICING_FAQS} />
      </div>

      <ClosingCta cta="Get started" />
    </main>
  );
}
