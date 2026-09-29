import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { ContactSteps } from "@/components/sections/contact-steps";
import { SlotPicker } from "@/components/slot-picker";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { availableSlots, getLead } from "@/lib/leads";

export const metadata: Metadata = {
  title: "Schedule your call",
  description: "Pick a 30-minute slot to talk through your project with Fetchly.",
  robots: { index: false },
};

export const dynamic = "force-dynamic";

export default async function SchedulePage({
  searchParams,
}: {
  searchParams: Promise<{ l?: string }>;
}) {
  const { l: leadId } = await searchParams;
  // Reaching this page without a live lead means the form was never filled in.
  if (!leadId || !getLead(leadId)) redirect("/contact");

  return (
    <main id="main" tabIndex={-1} className="outline-none">
      <Section className="flex min-w-0 flex-col gap-10 overflow-x-hidden">
        <div className="flex flex-col items-center gap-6">
          <ContactSteps current={2} />
          <div className="flex max-w-site-sm flex-col items-center gap-4 text-center">
            <Heading
              as="h1"
              lines={["Pick a time that works", "for you."]}
              className="text-h1 text-balance"
            />
            <p className="text-body-lg text-pretty text-muted-foreground">
              Thirty minutes with someone who can answer technical questions. We
              read your message before the call, so you are not starting over.
            </p>
          </div>
        </div>

        <SlotPicker slots={availableSlots()} leadId={leadId} />
      </Section>
    </main>
  );
}
