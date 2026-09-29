import Image from "next/image";
import Link from "next/link";

import { FetchlyLogo } from "@/components/fetchly-logo";
import { Marquee } from "@/components/ui/marquee";
import { RingWordmark } from "@/components/ui/ring-wordmark";
import { Section } from "@/components/ui/section";
import { CLIENT_LOGOS, FOOTER_NAV, SITE } from "@/content/site";

const footerLink =
  "inline-flex min-h-11 items-center rounded-sm font-mono text-tagline text-neutral uppercase transition-colors outline-none hover:text-neutral-lightest focus-visible:ring-3 focus-visible:ring-malibu/50 motion-reduce:transition-none";

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-x-clip bg-neutral-darkest text-neutral-lightest">
      <Image
        src="/images/decor/athletes-hurdles.avif"
        alt=""
        aria-hidden
        width={1440}
        height={709}
        sizes="100vw"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-full w-full object-cover opacity-15"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]"
      >
        <RingWordmark className="absolute -top-28 -right-52 w-[26rem] opacity-15 md:-right-40 md:w-[34rem]" />
      </div>

      <Section spacing="md" className="relative z-0 flex flex-col gap-10">
        <FetchlyLogo className="h-8 self-start text-neutral-lightest md:h-9" />

        <nav aria-label="Footer">
          <div className="grid gap-x-10 gap-y-6 sm:grid-cols-3">
            {FOOTER_NAV.map((column, i) => (
              <ul key={i} className="flex flex-col gap-1">
                {column.map((item) => (
                  <li key={item.href + item.label}>
                    <Link href={item.href} className={footerLink}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </nav>

        <div className="flex flex-col gap-3 border-t border-neutral-lightest/15 pt-8 text-body-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-neutral">
            Need help? Email us at{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="rounded-sm text-malibu underline underline-offset-4 outline-none hover:text-malibu-light focus-visible:ring-3 focus-visible:ring-malibu/50"
            >
              {SITE.email}
            </a>
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <Link
              href="/privacy-policy"
              className="rounded-sm text-neutral underline underline-offset-4 transition-colors outline-none hover:text-neutral-lightest focus-visible:ring-3 focus-visible:ring-malibu/50 motion-reduce:transition-none"
            >
              Privacy Policy
            </Link>
            <p className="text-neutral">
              © {new Date().getFullYear()} Fetchly. All rights reserved.
            </p>
          </div>
        </div>
      </Section>

      <div className="overflow-hidden border-t border-neutral-lightest/15 py-8">
        <ul className="sr-only">
          {CLIENT_LOGOS.map((logo) => (
            <li key={logo.slug}>{logo.name}</li>
          ))}
        </ul>
        <div aria-hidden className="[--duration:40s] [--gap:4rem]">
          <Marquee>
            {CLIENT_LOGOS.map((logo) => (
              <div
                key={logo.slug}
                className="flex h-8 w-28 items-center justify-center md:w-32"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/logos-white/${logo.slug}.png`}
                  alt=""
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </footer>
  );
}
