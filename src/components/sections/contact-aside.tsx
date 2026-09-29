import { CheckIcon, StarIcon } from "lucide-react";
import Image from "next/image";

import { CountUp } from "@/components/ui/count-up";
import { Marquee } from "@/components/ui/marquee";
import { ABOUT_STATS } from "@/content/about";
import { TESTIMONIALS } from "@/content/testimonials";

const NEXT_STEPS = [
  "Pick a time on the next screen — no back-and-forth email",
  "Thirty minutes, free, and you keep whatever we work out",
  "We read what you wrote first, so you are not starting over",
  "Most teams start inside a week of that call",
  "If we're not the right fit, we'll say so and point you somewhere better",
];

const LOGOS = [
  { name: "Casper", src: "/images/logos/casper.png", width: 450 },
  { name: "Lowe's", src: "/images/logos/lowes.png", width: 450 },
  { name: "Oats Overnight", src: "/images/logos/oats-overnight.png", width: 160 },
  { name: "Golden Globes", src: "/images/logos/golden-globes.png", width: 450 },
  { name: "Winc", src: "/images/logos/winc.png", width: 450 },
];

/** Reassurance column beside the contact form: rating, next steps, proof. */
export function ContactAside() {
  const quotes = TESTIMONIALS.slice(0, 2);

  return (
    <aside className="flex min-w-0 flex-col gap-8">
      <div className="flex flex-col gap-4 rounded-3xl bg-malibu-lightest p-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
          <Image
            src="/images/decor/hero-avatars.webp"
            alt="Avatars of Fetchly clients"
            width={366}
            height={128}
            sizes="132px"
            className="h-9 w-auto"
          />
          <div className="flex flex-col gap-1">
            <span aria-hidden className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon
                  key={i}
                  className="size-4 fill-(--color-star) text-(--color-star)"
                />
              ))}
            </span>
            <p className="text-body-sm text-malibu-darkest">
              <span className="sr-only">Rated</span>
              <span className="font-semibold">5.0</span> on Clutch, across 30+
              engagements
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-h4 text-balance text-foreground">
          What happens after you hit send
        </h2>
        <ul className="flex flex-col gap-3">
          {NEXT_STEPS.map((step) => (
            <li key={step} className="flex items-start gap-3">
              <span
                aria-hidden
                className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-malibu-lighter"
              >
                <CheckIcon className="size-3 text-malibu-darkest" />
              </span>
              <span className="text-body text-pretty text-foreground">
                {step}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <ul className="flex flex-col gap-4">
        {quotes.map((quote) => (
          <li key={quote.name}>
            <figure className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-6">
              <blockquote className="text-body text-pretty text-foreground">
                “{quote.quote}”
              </blockquote>
              <figcaption className="flex items-center gap-3">
                {quote.avatar ? (
                  <Image
                    src={quote.avatar}
                    alt={quote.name}
                    width={400}
                    height={400}
                    sizes="40px"
                    className="size-10 shrink-0 rounded-full object-cover"
                  />
                ) : null}
                <span className="text-body-sm text-muted-foreground">
                  <span className="block font-semibold text-foreground">
                    {quote.name}
                  </span>
                  {quote.role}
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <dl className="grid grid-cols-3 gap-4 border-t border-border pt-6">
        {ABOUT_STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1">
            <dd className="order-1 font-display text-h4 text-foreground">
              <CountUp value={stat.value} />
            </dd>
            <dt className="order-2 text-body-sm text-pretty text-muted-foreground">
              {stat.label}
            </dt>
          </div>
        ))}
      </dl>

      <div className="flex min-w-0 flex-col gap-4 overflow-hidden">
        <h2 className="font-mono text-tagline text-muted-foreground uppercase">
          Trusted by brands you know
        </h2>
        <ul className="sr-only">
          {LOGOS.map((logo) => (
            <li key={logo.name}>{logo.name}</li>
          ))}
        </ul>
        <div aria-hidden className="min-w-0 overflow-hidden">
          <Marquee
            pauseOnHover
            className="overflow-hidden p-0 [--duration:36s] [--gap:2.5rem]"
          >
            {LOGOS.map((logo) => (
              <div
                key={logo.name}
                className="flex h-12 w-28 items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt=""
                  width={logo.width}
                  height={160}
                  sizes="112px"
                  className="max-h-full max-w-full object-contain opacity-70"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </aside>
  );
}
