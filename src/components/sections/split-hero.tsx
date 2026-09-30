import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import {
  HeroBackdrop,
  type Collage,
  type RayColor,
} from "@/components/sections/hero";
import { ActionLink } from "@/components/ui/action-link";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { HeroContent } from "@/components/ui/hero-content";
import { Marquee } from "@/components/ui/marquee";
import { Section } from "@/components/ui/section";
import { StarIcons } from "@/components/ui/stars";

export type HeroTile = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** The first tile spans two rows; the rest sit in a 4:3 crop. */
  tall?: boolean;
};

export type HeroLink = { text: string; href: string; primary?: boolean };

/**
 * Service-page hero: copy on the left, a small collage of product shots on the
 * right, and a client-logo strip running under both.
 */
export function SplitHero({
  collage = "collage-cyan",
  rayColor = "malibu",
  eyebrow,
  lines,
  lead,
  links,
  tiles,
  visual,
  logos,
}: {
  collage?: Collage;
  rayColor?: RayColor;
  eyebrow: string;
  lines: readonly string[];
  lead: string;
  links: readonly HeroLink[];
  tiles?: readonly HeroTile[];
  /** Custom right-hand visual; replaces the image tiles when provided. */
  visual?: React.ReactNode;
  logos: readonly { name: string; src: string; width?: number }[];
}) {
  return (
    <div className="relative isolate">
      <HeroBackdrop collage={collage} rayColor={rayColor} />

      <Section
        spacing="sm"
        className="relative z-0 grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14"
      >
        <HeroContent className="flex flex-col items-start gap-5 text-left md:gap-6">
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
            <span className="text-muted-foreground">on Clutch</span>
          </p>

          <p className="font-mono text-tagline text-muted-foreground uppercase">
            {eyebrow}
          </p>

          <Heading
            as="h1"
            italicFirst
            lines={lines}
            className="text-h1 text-balance text-foreground"
          />

          <p className="max-w-site-sm text-body-lg text-pretty text-muted-foreground">
            {lead}
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            {links.map((link) =>
              link.primary ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className={buttonVariants()}
                >
                  {link.text}
                </Link>
              ) : (
                <ActionLink key={link.href} href={link.href}>
                  {link.text}
                </ActionLink>
              ),
            )}
          </div>
        </HeroContent>

        {visual ? (
          visual
        ) : (
          <div className="grid w-full grid-cols-2 gap-3 lg:gap-4">
            {tiles?.map((tile) => (
              <div
                key={tile.src}
                className={
                  tile.tall
                    ? "glass col-span-1 row-span-2 overflow-hidden rounded-2xl p-2"
                    : "glass overflow-hidden rounded-2xl p-2"
                }
              >
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  width={tile.width}
                  height={tile.height}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className={
                    tile.tall
                      ? "h-full w-full rounded-xl object-cover"
                      : "aspect-[4/3] w-full rounded-xl object-cover"
                  }
                />
              </div>
            ))}
          </div>
        )}
      </Section>

      <div className="overflow-hidden">
        <div className="py-5 [--duration:44s] [--gap:3.5rem] md:py-7">
          <Marquee>
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="flex h-12 w-28 items-center justify-center md:w-32"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width ?? 450}
                  height={160}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
