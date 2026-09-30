import type { Metadata } from "next";

import { InkSection } from "@/components/ink-section";
import { ClosingCta } from "@/components/sections/closing-cta";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroCommerceCard } from "@/components/sections/hero-commerce-card";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { Reasons } from "@/components/sections/reasons";
import { SplitHero } from "@/components/sections/split-hero";
import { SprintSection } from "@/components/sections/sprint-section";
import { StatBand } from "@/components/sections/stat-band";
import { TestimonialMarquee } from "@/components/sections/testimonial-marquee";
import { ECOMMERCE_FAQS } from "@/content/faqs";
import {
  ECOMMERCE_HERO,
  ECOMMERCE_REASONS,
  ECOMMERCE_STACK,
  ECOMMERCE_STATS,
  HERO_LOGOS,
  SPRINT_STEPS,
} from "@/content/services";

export const metadata: Metadata = {
  title: { absolute: "ECommerce Development | Shopify Stores Built to Grow" },
  description:
    "Storefront design, development, integrations and conversion work on a flat monthly plan. Shopify, BigCommerce, WooCommerce and headless builds.",
};

export default function EcommercePage() {
  return (
    <main id="main" tabIndex={-1} className="outline-none">
      <SplitHero
        collage="collage-mint"
        rayColor="spring-green-light"
        logos={HERO_LOGOS.ecommerce}
        {...ECOMMERCE_HERO}
        visual={<HeroCommerceCard />}
      />

      <div className="reveal">
        <LogoMarquee
          title="The eCommerce stack we work in"
          logos={ECOMMERCE_STACK}
        />
      </div>

      <InkSection>
        <StatBand
          lines={["Stores we grew, and by how much"]}
          intro="Both figures are ours, not category averages."
          stats={ECOMMERCE_STATS}
        />
      </InkSection>

      <SprintSection
        steps={SPRINT_STEPS}
        asideBody="We'll look at where your store is and what it needs next, then recommend the right plan."
      />

      <div className="bg-muted">
        <Reasons
          lines={["Why clients work with us", "on eCommerce"]}
          reasons={ECOMMERCE_REASONS}
        />
      </div>

      <TestimonialMarquee />

      <div className="bg-muted">
        <FaqSection faqs={ECOMMERCE_FAQS} />
      </div>

      <ClosingCta lines={["Ready to", "get started?"]} />
    </main>
  );
}
