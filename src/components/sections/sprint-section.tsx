import { ActionLink } from "@/components/ui/action-link";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export type SprintStep = { title: string; body: string };

/** Numbered delivery steps beside a "not sure where to start" prompt. */
export function SprintSection({
  title = "How a sprint actually runs",
  steps,
  asideTitle = "Not sure where to start?",
  asideBody,
  asideCta = "Talk to Sales",
}: {
  title?: string;
  steps: readonly SprintStep[];
  asideTitle?: string;
  asideBody: string;
  asideCta?: string;
}) {
  return (
    <div className="reveal">
      <div className="relative isolate">
        <Section className="relative z-0 grid gap-10 lg:grid-cols-2 lg:gap-x-16">
          <Heading
            lines={[title]}
            className="text-h2 text-foreground lg:col-start-1"
          />

          <ol className="flex flex-col lg:col-start-2 lg:row-span-2 lg:row-start-1">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="flex gap-4 border-t border-border py-6 first:border-t-0 first:pt-0 sm:gap-6"
              >
                <span
                  aria-hidden
                  className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-body-sm font-semibold text-muted-foreground"
                >
                  {i + 1}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-body-md font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-body-sm text-muted-foreground">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="flex max-w-site-sm flex-col items-start gap-3 rounded-3xl bg-malibu-lightest p-6 text-malibu-darkest md:p-8 lg:col-start-1 lg:self-start">
            <h3 className="font-display text-body-md font-semibold">
              {asideTitle}
            </h3>
            <p className="text-body-sm">{asideBody}</p>
            <ActionLink href="/contact" className="mt-1">
              {asideCta}
            </ActionLink>
          </div>
        </Section>
      </div>
    </div>
  );
}
