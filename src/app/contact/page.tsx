import type { Metadata } from "next";

import { ContactAside } from "@/components/sections/contact-aside";
import { ContactSteps } from "@/components/sections/contact-steps";
import { LeadForm } from "@/components/lead-form";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "Contact Fetchly | One Call, No Strings Attached" },
  description:
    "Bring the problem, we'll bring the solution. Tell us a few details and we'll come prepared to a no-strings-attached strategy call. It takes less than a minute.",
};

export default function ContactPage() {
  return (
    <main id="main" tabIndex={-1} className="outline-none">
      <Section className="flex min-w-0 flex-col gap-10 overflow-x-hidden">
        <div className="flex flex-col items-center gap-6">
          <ContactSteps current={1} />
          <div className="flex max-w-site-sm flex-col items-center gap-4 text-center">
            <Heading
              as="h1"
              lines={["A full team on your roadmap", "inside a week."]}
              className="text-h1 text-balance"
            />
            <p className="text-body-lg text-pretty text-muted-foreground">
              No scope of work, no discovery phase, no six-week ramp. One call,
              no strings attached — bring the problem, we&apos;ll bring the
              solution.
            </p>
          </div>
        </div>

        <div className="grid min-w-0 items-start gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-16">
          <div className="flex min-w-0 flex-col gap-6 rounded-3xl border border-border bg-card p-6 md:p-8">
            <div className="flex flex-col gap-1">
              <p className="font-mono text-tagline text-muted-foreground uppercase">
                Let&apos;s talk shop.
              </p>
              <h2 className="text-h3 text-balance text-foreground">
                Tell us what you&apos;re building
              </h2>
            </div>
            <LeadForm submitLabel="Continue" />
          </div>

          <ContactAside />
        </div>
      </Section>
    </main>
  );
}
