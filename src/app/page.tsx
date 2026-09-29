import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { InkSection } from "@/components/ink-section";
import { Bento } from "@/components/sections/bento";
import { ClosingCta } from "@/components/sections/closing-cta";
import { FaqSection } from "@/components/sections/faq-section";
import { Hero } from "@/components/sections/hero";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { SprintSection } from "@/components/sections/sprint-section";
import { ActionLink } from "@/components/ui/action-link";
import { StatBand } from "@/components/sections/stat-band";
import { TestimonialMarquee } from "@/components/sections/testimonial-marquee";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { StarIcons } from "@/components/ui/stars";
import { CASE_STUDIES } from "@/content/case-studies";
import { HOME_FAQS } from "@/content/faqs";
import { TECH_STACK, TRUSTED_LOGOS } from "@/content/stack";

const STATS = [
  { value: "300,000+", label: "Oats Overnight active subscribers" },
  { value: "40%", label: "Longer average subscription" },
  { value: "10.7%", label: "Conversion lift" },
];

const PROCESS = [
  {
    title: "Define",
    body: "A week of questions, not a discovery phase. You get a written view of what we are building, what is in the way, and what it costs — before anyone writes code.",
  },
  {
    title: "Shape",
    body: "You see the thing before it is built. Design and engineering agree on each screen as it is drawn, so nothing is designed that cannot ship.",
  },
  {
    title: "Build",
    body: "Working software every two weeks, and you can change what is next without renegotiating anything. Tested as it is built, not at the end.",
  },
  {
    title: "Launch and Grow",
    body: "We stay on after launch, watching conversion, retention and order value — and what we learn sets the next sprint, so the numbers keep moving.",
  },
];

export default function HomePage() {
  return (
    <main id="main" tabIndex={-1} className="outline-none">
      <Hero>
        <p className="inline-flex items-center gap-3 rounded-full border border-border bg-background py-1.5 pr-4 pl-1.5 text-body-sm shadow-sm">
          <Image
            src="/images/decor/hero-avatars.webp"
            alt="Avatars of Fetchly clients"
            width={366}
            height={128}
            sizes="72px"
            className="h-7 w-auto"
          />
          <span className="font-semibold">5.0</span>
          <StarIcons />
          <span className="sr-only">out of 5</span>
          <span className="text-muted-foreground">Clutch</span>
        </p>

        <Heading
          as="h1"
          italicFirst
          lines={["The team behind", "best-selling brands"]}
          className="text-display-1 text-balance text-foreground"
        />

        <p className="max-w-site-sm text-body-lg text-pretty text-muted-foreground">
          A full product team — engineering, design, QA and project management —
          on one flat monthly plan. No scope of work, no hiring cycle, and it
          flexes as your roadmap does.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link href="/work" className={buttonVariants()}>
            See what we built
          </Link>
          <ActionLink href="/contact">Talk to Sales</ActionLink>
        </div>
      </Hero>

      <Bento logos={TRUSTED_LOGOS} />

      <InkSection>
        <StatBand
          lines={["10.7% more conversion. 40% longer subscriptions."]}
          intro="Every figure below is from a case study on this site, not a rounded-up claim."
          stats={STATS}
        />
      </InkSection>

      <div className="bg-muted">
        <div className="reveal">
          <Section className="flex flex-col gap-8 lg:gap-12">
            <div className="flex flex-col gap-4">
              <Heading
                lines={["The work behind those numbers"]}
                className="text-h2 text-foreground"
              />
              <p className="max-w-site-sm text-body-lg text-pretty text-muted-foreground">
                Six engagements, and what changed for each.
              </p>
            </div>
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {CASE_STUDIES.map((study) => (
                <li key={study.slug}>
                  <Link
                    href={`/work/${study.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-colors hover:border-foreground"
                  >
                    <Image
                      src={study.thumb.src}
                      alt=""
                      aria-hidden
                      width={study.thumb.width}
                      height={study.thumb.height}
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="aspect-[3/2] w-full object-cover"
                    />
                    <div className="flex flex-1 flex-col gap-3 p-6">
                      <p className="font-display text-h5 text-(--accent-figure)">
                        {study.headline}
                      </p>
                      <h3 className="flex items-center gap-1.5 text-body-md font-semibold text-foreground">
                        {study.client}
                        <ArrowUpRightIcon
                          aria-hidden
                          className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </h3>
                      <p className="text-body-sm text-pretty text-muted-foreground">
                        {study.summary}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </div>

      <div className="reveal">
        <LogoMarquee title="The stacks we build on" logos={TECH_STACK} />
      </div>

      <SprintSection
        steps={PROCESS}
        asideBody="We'll look at where your product is and what it needs next, then recommend the right plan."
      />

      <TestimonialMarquee full />

      <div className="bg-muted">
        <FaqSection ctaLabel="Get in Touch" faqs={HOME_FAQS} />
      </div>

      <ClosingCta />
    </main>
  );
}
