import type { Metadata } from "next";

import { InkSection } from "@/components/ink-section";
import { ClosingCta } from "@/components/sections/closing-cta";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroServiceCards } from "@/components/sections/hero-service-cards";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { Reasons } from "@/components/sections/reasons";
import { SplitHero } from "@/components/sections/split-hero";
import { SprintSection } from "@/components/sections/sprint-section";
import { TestimonialMarquee } from "@/components/sections/testimonial-marquee";
import { WEB_MOBILE_FAQS } from "@/content/faqs";
import {
  HERO_LOGOS,
  WEB_MOBILE_SPRINT_STEPS,
  WEB_MOBILE_HERO,
  WEB_MOBILE_REASONS,
  WEB_MOBILE_STACK,
} from "@/content/services";

export const metadata: Metadata = {
  title: { absolute: "Web and Mobile Development | One Team, One Flat Plan" },
  description:
    "Web and mobile development from one senior US team on a flat monthly plan, so a feature ships to both surfaces without coordinating two vendors.",
};

export default function WebAndMobilePage() {
  return (
    <main id="main" tabIndex={-1} className="outline-none">
      <SplitHero
        logos={HERO_LOGOS.product}
        {...WEB_MOBILE_HERO}
        visual={<HeroServiceCards />}
      />

      <div className="reveal">
        <LogoMarquee title="The stacks we build on" logos={WEB_MOBILE_STACK} />
      </div>

      <SprintSection
        steps={WEB_MOBILE_SPRINT_STEPS}
        asideBody="We'll look at where your product is and what it needs next, then recommend the right plan."
      />

      <InkSection>
        <Reasons
          lines={["One team, on your roadmap, from day one"]}
          reasons={WEB_MOBILE_REASONS}
        />
      </InkSection>

      <TestimonialMarquee />

      <div className="bg-muted">
        <FaqSection faqs={WEB_MOBILE_FAQS} />
      </div>

      <ClosingCta lines={["Ready to", "get started?"]} />
    </main>
  );
}
