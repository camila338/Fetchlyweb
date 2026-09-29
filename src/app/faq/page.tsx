import type { Metadata } from "next";
import Link from "next/link";

import { ClosingCta } from "@/components/sections/closing-cta";
import { FaqSection } from "@/components/sections/faq-section";
import { Hero } from "@/components/sections/hero";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { FAQ_PAGE_FAQS } from "@/content/faqs";

export const metadata: Metadata = {
  title: { absolute: "Web & Mobile App Development Cost, Processes & More | FAQs" },
  description:
    "Answers on what Fetchly builds, how to get started, how pricing works, the technologies we specialize in, and what working with an embedded team looks like.",
};

export default function FaqPage() {
  return (
    <main id="main" tabIndex={-1} className="outline-none">
      <Hero collage="collage-mint" rayColor="spring-green-light">
        <Heading
          as="h1"
          italicFirst
          lines={["Frequently asked questions"]}
          className="text-display-1 text-balance text-foreground"
        />
        <p className="max-w-site-sm text-body-lg text-pretty text-muted-foreground">
          What we build, how we work, and what it costs. If your question is not
          here, our team is one call away.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link href="/contact" className={buttonVariants()}>
            Book a discovery call
          </Link>
        </div>
      </Hero>

      <FaqSection
        title="What we build, how we work, what it costs"
        ctaLabel="Book a discovery call"
        faqs={FAQ_PAGE_FAQS}
      />

      <ClosingCta />
    </main>
  );
}
