import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

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
    <div className="reveal">
      <Section className="flex flex-col gap-10 lg:gap-16">
        <div className="flex max-w-site-md flex-col gap-6">
          <Heading
            lines={lines}
            className="text-h2 text-balance text-foreground"
          />
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <ul className="grid gap-8 sm:col-span-2 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-4">
            {reasons.map((reason) => (
              <li
                key={reason.title}
                className="flex flex-col gap-3 border-t border-border pt-6"
              >
                <h3 className="font-mono text-tagline text-foreground uppercase">
                  {reason.title}
                </h3>
                <p className="text-body-sm text-muted-foreground">
                  {reason.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </div>
  );
}
