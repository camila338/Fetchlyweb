import {
  CodeXmlIcon,
  CompassIcon,
  type LucideIcon,
  PenToolIcon,
  RocketIcon,
  SparklesIcon,
  TrendingUpIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { RevealUp } from "@/components/ui/reveal-up";
import { Section } from "@/components/ui/section";

export type SprintStep = { title: string; body: string };

const STEP_ICONS: LucideIcon[] = [
  CompassIcon,
  PenToolIcon,
  CodeXmlIcon,
  TrendingUpIcon,
  RocketIcon,
  SparklesIcon,
];

function Feature({ step, index }: { step: SprintStep; index: number }) {
  const Icon = STEP_ICONS[index % STEP_ICONS.length];
  return (
    <li className="flex flex-col gap-3">
      <span
        aria-hidden
        className="flex size-11 items-center justify-center rounded-xl bg-muted text-foreground"
      >
        <Icon className="size-5" />
      </span>
      <h3 className="font-display text-h6 font-semibold text-foreground">
        {step.title}
      </h3>
      <p className="text-body-sm text-pretty text-muted-foreground">
        {step.body}
      </p>
    </li>
  );
}

/**
 * Delivery steps laid out as two feature columns flanking a central visual,
 * with the section heading and a primary CTA sharing the top row.
 */
export function SprintSection({
  title = "How a sprint actually runs",
  steps,
  asideCta = "Talk to Sales",
}: {
  title?: string;
  steps: readonly SprintStep[];
  asideTitle?: string;
  asideBody?: string;
  asideCta?: string;
}) {
  const mid = Math.ceil(steps.length / 2);
  const left = steps.slice(0, mid);
  const right = steps.slice(mid);

  return (
    <Section className="flex flex-col gap-12 lg:gap-16">
      <div className="reveal flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <Heading
          lines={[title]}
          className="max-w-xl text-h2 text-balance text-foreground"
        />
        <Link href="/contact" className={buttonVariants()}>
          {asideCta}
        </Link>
      </div>

      <div className="grid items-center gap-10 overflow-x-clip lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)_minmax(0,1fr)] lg:gap-14">
        <RevealUp x={-72} y={0}>
          <ul className="flex flex-col gap-10">
            {left.map((step, i) => (
              <Feature key={step.title} step={step} index={i} />
            ))}
          </ul>
        </RevealUp>

        <RevealUp
          y={64}
          className="order-first mx-auto w-full max-w-sm overflow-hidden rounded-3xl lg:order-none"
        >
          <Image
            src="/images/home/sprint-visual.jpg"
            alt=""
            aria-hidden
            width={641}
            height={721}
            sizes="(min-width: 1024px) 24rem, 100vw"
            className="aspect-[641/721] w-full object-cover"
          />
        </RevealUp>

        <RevealUp x={72} y={0}>
          <ul className="flex flex-col gap-10">
            {right.map((step, i) => (
              <Feature key={step.title} step={step} index={mid + i} />
            ))}
          </ul>
        </RevealUp>
      </div>
    </Section>
  );
}
