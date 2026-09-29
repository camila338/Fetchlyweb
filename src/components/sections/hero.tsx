import * as React from "react";

import { HeroContent } from "@/components/ui/hero-content";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

const RAYS = [
  { left: "18%", width: "11rem", rotate: "-22deg", duration: "19s", delay: "0s" },
  { left: "38%", width: "15rem", rotate: "-8deg", duration: "24s", delay: "-6s" },
  { left: "58%", width: "9rem", rotate: "9deg", duration: "21s", delay: "-11s" },
  { left: "76%", width: "13rem", rotate: "24deg", duration: "27s", delay: "-3s" },
];

/**
 * Shared hero backdrop: a drifting colour plate plus four blurred light rays.
 * The plate and the ray colour change per section of the site.
 */
const RAY_COLOR = {
  malibu: "[--ray-color:var(--color-malibu)]",
  "malibu-light": "[--ray-color:var(--color-malibu-light)]",
  "spring-green-light": "[--ray-color:var(--color-spring-green-light)]",
} as const;

export type RayColor = keyof typeof RAY_COLOR;
export type Collage = "collage-mint" | "collage-cyan" | "collage-warm";

export function HeroBackdrop({
  collage = "collage-cyan",
  rayColor = "malibu",
}: {
  collage?: Collage;
  rayColor?: RayColor;
}) {
  return (
    <>
      <div
        aria-hidden
        data-hero-plate="true"
        className={cn(
          "hero-plate pointer-events-none absolute -top-16 right-0 -bottom-32 left-0 -z-10",
          collage,
        )}
      />
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 -top-16 -z-10 h-[240%] overflow-x-clip [mask-image:linear-gradient(to_bottom,black_0%,transparent_88%)]",
          RAY_COLOR[rayColor],
        )}
      >
        {RAYS.map((ray) => (
          <span
            key={ray.left}
            className="light-ray"
            style={
              {
                left: ray.left,
                width: ray.width,
                "--ray-rotate": ray.rotate,
                "--ray-duration": ray.duration,
                "--ray-delay": ray.delay,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </>
  );
}

/** Centred hero: the backdrop plus a narrow, centred column of content. */
export function Hero({
  collage = "collage-cyan",
  rayColor = "malibu",
  className,
  animate = true,
  children,
}: {
  collage?: Collage;
  rayColor?: RayColor;
  className?: string;
  /** Set false when the children animate themselves (e.g. the home hero). */
  animate?: boolean;
  children: React.ReactNode;
}) {
  const layout = cn(
    "flex flex-col items-center gap-5 text-center md:gap-6",
    className,
  );

  return (
    <div className="relative isolate">
      <HeroBackdrop collage={collage} rayColor={rayColor} />
      <Section width="md" spacing="sm" className="relative z-0">
        {animate ? (
          <HeroContent className={layout}>{children}</HeroContent>
        ) : (
          <div className={layout}>{children}</div>
        )}
      </Section>
    </div>
  );
}
