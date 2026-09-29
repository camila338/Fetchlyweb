import Image from "next/image";

import { SHORT_TESTIMONIALS, TESTIMONIALS } from "@/content/testimonials";
import { Heading } from "@/components/ui/heading";
import { Marquee } from "@/components/ui/marquee";
import { Section } from "@/components/ui/section";
import { Stars } from "@/components/ui/stars";
import { cn } from "@/lib/utils";

/**
 * Pastel band with a hover-pausing marquee of review cards. The quotes are
 * duplicated into an `sr-only` list so the content is readable without the
 * animation.
 */
export function TestimonialMarquee({ full = false }: { full?: boolean } = {}) {
  const quotes = full ? TESTIMONIALS : SHORT_TESTIMONIALS;

  return (
    <div className="bg-[radial-gradient(ellipse_80%_60%_at_20%_0%,var(--color-malibu-lighter),transparent_70%),radial-gradient(ellipse_70%_70%_at_85%_100%,var(--color-spring-green-lightest),transparent_72%),linear-gradient(var(--color-malibu-lightest),var(--color-malibu-lightest))]">
      <div className="reveal">
        <div className="overflow-hidden py-14 md:py-16">
          <Section spacing="none">
            <Heading
              lines={["What it is like to work with us"]}
              className="text-h2 text-foreground"
            />
          </Section>

          <ul className="sr-only">
            {quotes.map((t) => (
              <li key={t.name}>
                &quot;{t.quote}&quot; — {t.name}, {t.role}
              </li>
            ))}
          </ul>

          <div aria-hidden className="mt-8 [--duration:52s] [--gap:1rem] lg:mt-12">
            <Marquee pauseOnHover repeat={2}>
              {quotes.map((t) => (
                <figure
                  key={t.name}
                  className="glass relative flex w-80 shrink-0 flex-col gap-4 rounded-2xl p-6"
                >
                  {t.logo ? (
                    <span className="absolute top-5 right-5 flex h-12 w-28 items-center justify-end">
                      {t.logo.src.endsWith(".svg") ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={t.logo.src}
                          alt={t.logo.alt}
                          className="max-h-full max-w-full object-contain"
                        />
                      ) : (
                        <Image
                          src={t.logo.src}
                          alt={t.logo.alt}
                          width={t.logo.width ?? 450}
                          height={t.logo.height ?? 160}
                          className="max-h-full max-w-full object-contain"
                        />
                      )}
                    </span>
                  ) : null}

                  <Stars as="p" />

                  <blockquote
                    className={cn(
                      "text-body text-pretty text-foreground",
                      t.logo && "pr-28",
                    )}
                  >
                    {t.quote}
                  </blockquote>

                  <figcaption className="mt-auto flex items-center gap-3">
                    {t.avatar ? (
                      <Image
                        src={t.avatar}
                        alt=""
                        aria-hidden
                        width={400}
                        height={400}
                        sizes="40px"
                        className="size-10 rounded-full object-cover"
                      />
                    ) : null}
                    <span className="text-body-sm text-muted-foreground">
                      <span className="block font-semibold text-foreground">
                        {t.name}
                      </span>
                      {t.role}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}
