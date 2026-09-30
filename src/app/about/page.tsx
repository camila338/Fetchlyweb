import {
  BrainIcon,
  ClipboardListIcon,
  CodeXmlIcon,
  DatabaseIcon,
  EyeIcon,
  GemIcon,
  HandshakeIcon,
  PenToolIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TrendingUpIcon,
  WrenchIcon,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { InkSection } from "@/components/ink-section";
import { ClosingCta } from "@/components/sections/closing-cta";
import { Hero } from "@/components/sections/hero";
import { StackMarquee } from "@/components/sections/stack-marquee";
import { StatBand } from "@/components/sections/stat-band";
import { ActionLink } from "@/components/ui/action-link";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { IconBadge, IconCard } from "@/components/ui/icon-card";
import { RingWordmark } from "@/components/ui/ring-wordmark";
import { Section } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/ui/stagger";
import {
  ABOUT_STATS,
  ALTERNATIVES,
  CAPABILITIES,
  VALUES,
} from "@/content/about";

export const metadata: Metadata = {
  title: { absolute: "About Fetchly | Built Differently, On Purpose Since 2016" },
  description:
    "An Austin-based team serving the full US. We build and scale eCommerce stores, SaaS products and mobile apps with embedded teams on a flat retainer.",
};

const ICONS = {
  handshake: HandshakeIcon,
  eye: EyeIcon,
  gem: GemIcon,
  sparkles: SparklesIcon,
  "code-xml": CodeXmlIcon,
  brain: BrainIcon,
  "pen-tool": PenToolIcon,
  "clipboard-list": ClipboardListIcon,
  "shield-check": ShieldCheckIcon,
  wrench: WrenchIcon,
  "trending-up": TrendingUpIcon,
  database: DatabaseIcon,
} as const;

export default function AboutPage() {
  return (
    <main id="main" tabIndex={-1} className="outline-none">
      <Hero>
        <Heading
          as="h1"
          italicFirst
          lines={["We build the team", "behind your product"]}
          className="text-display-1 text-balance text-foreground"
        />
        <p className="max-w-site-sm text-body-lg text-pretty text-muted-foreground">
          Engineers, designers, PMs, QA and DevOps who work inside your team —
          not a vendor you brief and wait on.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link href="/contact" className={buttonVariants()}>
            Talk to us
          </Link>
          <ActionLink href="/pricing">See pricing</ActionLink>
        </div>
      </Hero>

      <InkSection>
        <StatBand
          fill
          lines={["We pick the stack that fits your product"]}
          intro="We don't push a single framework. We pick the right tools for your product, your scale, and your timeline."
          stats={ABOUT_STATS}
        />
        <StackMarquee />
      </InkSection>

      <div className="bg-muted">
        <div className="reveal-left">
          <Section className="flex flex-col gap-12 lg:gap-16">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div className="relative isolate aspect-square rounded-3xl bg-neutral-lighter [mask-image:radial-gradient(white,white)] [mask-size:100%_100%]">
                <Image
                  src="/images/decor/austin-street.avif"
                  alt=""
                  aria-hidden
                  width={2400}
                  height={1283}
                  sizes="(min-width: 1024px) 44vw, 88vw"
                  className="absolute inset-x-0 bottom-0 h-3/5 w-full object-cover object-top"
                />
                <RingWordmark
                  id="about-ring-path"
                  className="absolute inset-0 size-full"
                />
              </div>

              <div className="flex flex-col gap-6">
                <Heading
                  lines={["Built differently", "on purpose"]}
                  className="text-h2 text-balance text-foreground"
                />
                <p className="text-body text-pretty text-muted-foreground">
                  Fetchly was founded in 2016 in Denver, Colorado. We&apos;ve
                  since moved our headquarters to Austin, Texas, but the mission
                  hasn&apos;t moved an inch.
                </p>
                <p className="text-body text-pretty text-muted-foreground">
                  Nearly a decade in, we&apos;ve embedded cross-functional teams
                  inside startups and technology companies across dozens of
                  industries. We show up invested in the roadmap, not just the
                  sprint.
                </p>
                <div className="flex flex-col gap-4">
                  <p className="text-body text-pretty text-muted-foreground">
                    The two models most companies default to come with a catch.
                  </p>
                  <ul className="flex flex-col gap-4">
                    {ALTERNATIVES.map((item) => (
                      <li
                        key={item.title}
                        className="border-l-2 border-malibu-darker/60 pl-4"
                      >
                        <h3 className="text-body-sm font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-body-sm text-pretty text-muted-foreground">
                          {item.body}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {VALUES.map((value) => (
                <li
                  key={value.title}
                  className="flex flex-col gap-3 border-t-2 border-malibu-darker/60 pt-6"
                >
                  <div className="flex items-center gap-3">
                    <IconBadge icon={ICONS[value.icon]} tint={value.tint} />
                    <h3 className="font-mono text-tagline text-foreground uppercase">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-body-sm text-pretty text-muted-foreground">
                    {value.body}
                  </p>
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </div>

      <Section className="flex flex-col items-center gap-10 lg:gap-16">
        <div className="reveal-right flex max-w-site-md flex-col items-center gap-6 text-center">
          <Heading
            lines={["Everything you need. Nothing you don't."]}
            className="text-h2 text-balance text-foreground"
          />
        </div>
        <Stagger
          as="ul"
          className="grid w-full auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          {CAPABILITIES.map((item) => (
            <StaggerItem as="li" key={item.title} className="flex">
              <IconCard
                icon={ICONS[item.icon]}
                tint={item.tint}
                title={item.title}
              >
                {item.body}
              </IconCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <ClosingCta cta="Book a free strategy call" />
    </main>
  );
}
