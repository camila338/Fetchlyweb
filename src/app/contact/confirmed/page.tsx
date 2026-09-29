import type { Metadata } from "next";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "You're booked",
  description: "Your intro call with Fetchly is confirmed.",
  robots: { index: false },
};

export const dynamic = "force-dynamic";

export default async function ConfirmedPage({
  searchParams,
}: {
  searchParams: Promise<{ t?: string; j?: string; z?: string }>;
}) {
  const { t: startTime, j: joinUrl, z: timezone } = await searchParams;

  const when = startTime
    ? new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        timeZoneName: "short",
        timeZone: timezone || "America/Denver",
      }).format(new Date(startTime))
    : null;

  return (
    <main id="main" tabIndex={-1} className="outline-none">
      <Section width="md" className="flex flex-col items-center gap-6 text-center">
        <Heading
          as="h1"
          lines={["You're booked."]}
          className="text-h1 text-balance text-foreground"
        />

        {when ? (
          <p className="text-body-lg text-pretty text-foreground">
            <time dateTime={startTime}>{when}</time>, for thirty minutes.
          </p>
        ) : null}

        <p className="max-w-site-sm text-body text-pretty text-muted-foreground">
          The invite is on its way to your inbox. We read what you sent us before
          the call, so bring the problem and we will bring the plan.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          {joinUrl ? (
            <a href={joinUrl} className={buttonVariants()}>
              Join the call
            </a>
          ) : null}
          <Link
            href="/work"
            className={buttonVariants({ variant: "secondary", size: "lg" })}
          >
            See what we built
          </Link>
        </div>

        <p className="text-body-sm text-muted-foreground">
          Need to change something? Email{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="rounded-sm text-malibu-darker underline underline-offset-4 hover:text-foreground"
          >
            {SITE.email}
          </a>
          .
        </p>
      </Section>
    </main>
  );
}
