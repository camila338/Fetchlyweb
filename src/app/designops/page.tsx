import {
  CompassIcon,
  FileCheck2Icon,
  GiftIcon,
  Layers3Icon,
  TelescopeIcon,
  UsersIcon,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

import { InkSection } from "@/components/ink-section";
import { ClosingCta } from "@/components/sections/closing-cta";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroDesignCard } from "@/components/sections/hero-design-card";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { QuoteCarousel } from "@/components/sections/quote-carousel";
import { SplitHero } from "@/components/sections/split-hero";
import { SprintSection } from "@/components/sections/sprint-section";
import { StatBand } from "@/components/sections/stat-band";
import { Heading } from "@/components/ui/heading";
import { IconBadge } from "@/components/ui/icon-card";
import { PlanCard } from "@/components/ui/plan-card";
import { Section } from "@/components/ui/section";
import { DESIGNOPS_FAQS } from "@/content/faqs";
import {
  DESIGN_SPRINT_STEPS,
  DESIGNOPS_HERO,
  DESIGNOPS_PLANS,
  DESIGNOPS_QUOTES,
  DESIGNOPS_RIGOR,
  DESIGNOPS_STATS,
  DESIGNOPS_TEAM,
  DESIGNOPS_WORK_LOGOS,
  HERO_LOGOS,
} from "@/content/services";

export const metadata: Metadata = {
  title: { absolute: "DesignOps: A Product Designer Embedded in Your Team" },
  description:
    "A dedicated senior product designer at a flat monthly rate, working inside your team and your tools. Research, design and shipped interfaces, month to month.",
};

const RIGOR_ICONS = {
  telescope: TelescopeIcon,
  compass: CompassIcon,
  "file-check-2": FileCheck2Icon,
  "layers-3": Layers3Icon,
  users: UsersIcon,
  gift: GiftIcon,
} as const;

export default function DesignOpsPage() {
  return (
    <main id="main" tabIndex={-1} className="outline-none">
      <SplitHero
        collage="collage-mint"
        rayColor="spring-green-light"
        logos={HERO_LOGOS.product}
        {...DESIGNOPS_HERO}
        visual={<HeroDesignCard />}
      />

      <InkSection>
        <StatBand
          lines={["100+ projects shipped.", "10+ years in the field."]}
          intro="A senior product designer integrated into your team, supported by Fetchly's engineering, data and project management when the work calls for it."
          stats={DESIGNOPS_STATS}
        />
      </InkSection>

      <div className="reveal">
        <LogoMarquee
          title="Design work we shipped, and what it moved"
          logos={DESIGNOPS_WORK_LOGOS}
        />
      </div>

      <SprintSection
        title="How a design sprint actually runs"
        steps={DESIGN_SPRINT_STEPS}
        asideBody="We'll look at where your product is and what it needs next, then recommend the right plan."
        asideCta="Schedule a strategy call"
      />

      <div className="reveal-left">
        <Section className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16">
          <div className="flex flex-col gap-8">
            <h2 className="text-h2 text-balance text-foreground">
              The rigor behind the work
            </h2>
            <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {DESIGNOPS_RIGOR.map((item) => (
                <li
                  key={item.title}
                  className="flex flex-col gap-2 border-t-2 border-malibu-darker/60 pt-4"
                >
                  <div className="flex items-center gap-2.5">
                    <IconBadge icon={RIGOR_ICONS[item.icon]} tint={item.tint} size="sm" />
                    <h3 className="text-body-md font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-body-sm text-pretty text-muted-foreground">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6 rounded-3xl border border-border bg-muted p-6 md:p-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-body-md font-semibold text-foreground">
                Who you work with
              </h3>
              <p className="text-body-sm text-pretty text-muted-foreground">
                Design leadership and a project manager on your account from day
                one.
              </p>
            </div>
            <ul className="flex flex-col gap-5">
              {DESIGNOPS_TEAM.map((person) => (
                <li key={person.name} className="flex items-start gap-4">
                  <Image
                    src={person.avatar}
                    alt=""
                    width={288}
                    height={288}
                    sizes="48px"
                    className="size-12 shrink-0 rounded-full object-cover"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-body-sm font-semibold text-foreground">
                      {person.name}
                    </p>
                    <p className="text-body-xs text-pretty text-muted-foreground">
                      {person.bio}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </div>

      <div className="reveal-right">
        <div className="scroll-mt-24" id="pricing">
          <Section className="flex flex-col gap-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <Heading lines={["Pricing"]} className="text-h2 text-foreground" />
            </div>
            <div className="flex flex-col gap-8">
              {/* A single, always-on pill: the same row the /pricing tabs use. */}
              <div className="flex flex-wrap gap-2 self-start">
                <button
                  type="button"
                  className="rounded-full bg-primary px-4 py-2 text-body-sm text-primary-foreground transition-colors"
                >
                  Move between part-time and full-time as your needs change.
                </button>
              </div>
              <div>
                <div className="flex flex-col gap-12 md:gap-16">
                  <ul className="grid gap-6 lg:grid-cols-2">
                    {DESIGNOPS_PLANS.map((plan) => (
                      <PlanCard key={plan.name} {...plan} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>

      <div className="bg-[radial-gradient(ellipse_80%_60%_at_20%_0%,var(--color-malibu-lighter),transparent_70%),radial-gradient(ellipse_70%_70%_at_85%_100%,var(--color-spring-green-lightest),transparent_72%),linear-gradient(var(--color-malibu-lightest),var(--color-malibu-lightest))]">
        <div className="reveal">
          <QuoteCarousel
            heading="What it is like to work with us"
            quotes={DESIGNOPS_QUOTES}
          />
        </div>
      </div>

      <FaqSection faqs={DESIGNOPS_FAQS} ctaLabel="Get Started" />

      <ClosingCta
        lines={["Ready to", "get started?"]}
        lead="Schedule a call or tell us about your project. We'll walk through your roadmap together and show you what we would ship first."
        cta="Schedule a strategy call"
      />
    </main>
  );
}
