import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/ui/stagger";

export type Reason = { title: string; body: string };

/** Four rule-topped points under a section heading. */
export function Reasons({
  lines,
  reasons,
}: {
  lines: readonly string[];
  reasons: readonly Reason[];
}) {
  return (
    <Section className="flex flex-col gap-10 lg:gap-16">
      <div className="reveal-left flex max-w-site-md flex-col gap-6">
        <Heading lines={lines} className="text-h2 text-balance text-foreground" />
      </div>
      <Stagger
        as="ul"
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        {reasons.map((reason) => (
          <StaggerItem
            as="li"
            key={reason.title}
            className="flex flex-col gap-3 border-t border-border pt-6"
          >
            <h3 className="font-mono text-tagline text-foreground uppercase">
              {reason.title}
            </h3>
            <p className="text-body-sm text-muted-foreground">{reason.body}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
