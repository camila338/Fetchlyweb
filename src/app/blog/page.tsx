import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ClosingCta } from "@/components/sections/closing-cta";
import { Hero } from "@/components/sections/hero";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/ui/stagger";
import { formatDate } from "@/content/case-studies";
import { POSTS } from "@/content/posts";

export const metadata: Metadata = {
  title: { absolute: "Expert Insights on Mobile, Web and ECommerce Development" },
  description:
    "Expert advice, practical guides and industry insights on ECommerce, Web and Mobile app development. Hear from our experienced team of industry leaders.",
};

export default function BlogPage() {
  return (
    <main id="main" tabIndex={-1} className="outline-none">
      <Hero collage="collage-warm" rayColor="malibu-light">
        <Heading
          as="h1"
          italicFirst
          lines={["Written by the engineers", "doing the work"]}
          className="text-display-1 text-balance text-foreground"
        />
        <p className="max-w-site-sm text-body-lg text-pretty text-muted-foreground">
          Practical guides on mobile, web and eCommerce development, from the
          engineers, designers and QA specialists shipping it.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link href="/contact" className={buttonVariants()}>
            Talk to Sales
          </Link>
        </div>
      </Hero>

      <Section>
        <Stagger as="ul" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <StaggerItem as="li" key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-4 transition-colors hover:border-foreground"
              >
                <Image
                  src={post.cover.src}
                  alt=""
                  width={post.cover.width}
                  height={post.cover.height}
                  className="aspect-[3/2] w-full rounded-2xl object-cover"
                />
                <h2 className="font-display text-h5 text-balance text-foreground">
                  {post.title}
                </h2>
                <p className="text-body-sm text-pretty text-muted-foreground">
                  {post.lead}
                </p>
                <p className="mt-auto text-body-xs text-muted-foreground">
                  {post.author} ·{" "}
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <ClosingCta />
    </main>
  );
}
