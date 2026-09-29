import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ClosingCta } from "@/components/sections/closing-cta";
import { Hero } from "@/components/sections/hero";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { CASE_STUDIES, formatDate } from "@/content/case-studies";

export const metadata: Metadata = {
  title: { absolute: "Case Studies | Real Growth for Brands You Know" },
  description:
    "Real results from our work with Casper, Oats Overnight, Pet Releaf and more: conversion lifts, subscription growth and platforms rebuilt to scale.",
};

export default function WorkPage() {
  return (
    <main id="main" tabIndex={-1} className="outline-none">
      <Hero collage="collage-mint" rayColor="spring-green-light">
        <Heading
          as="h1"
          italicFirst
          lines={["+10.7% conversion.", "250k subscribers."]}
          className="text-display-1 text-balance text-foreground"
        />
        <p className="max-w-site-sm text-body-lg text-pretty text-muted-foreground">
          Six engagements, what we changed, and the numbers that came out of
          them.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link href="/contact" className={buttonVariants()}>
            Talk to Sales
          </Link>
        </div>
      </Hero>

      <div className="reveal">
        <Section>
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.map((study) => (
              <li key={study.slug}>
                <Link
                  href={`/work/${study.slug}`}
                  className="group flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-4 transition-colors hover:border-foreground"
                >
                  <Image
                    src={study.cover.src}
                    alt=""
                    width={study.cover.width}
                    height={study.cover.height}
                    className="aspect-[3/2] w-full rounded-2xl object-cover"
                  />
                  <h2 className="font-display text-h5 text-balance text-foreground">
                    {study.title}
                  </h2>
                  <p className="text-body-sm text-pretty text-muted-foreground">
                    {study.excerpt}
                  </p>
                  <p className="mt-auto text-body-xs text-muted-foreground">
                    Fetchly ·{" "}
                    <time dateTime={study.date}>{formatDate(study.date)}</time>
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      <ClosingCta />
    </main>
  );
}
