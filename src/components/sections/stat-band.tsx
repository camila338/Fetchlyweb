import { CountUp } from "@/components/ui/count-up";
import { Heading } from "@/components/ui/heading";
import { RevealUp } from "@/components/ui/reveal-up";
import { ScrollFillText } from "@/components/ui/scroll-fill-text";
import { Section } from "@/components/ui/section";

export type Stat = { value: string; label: string };

/** Headline and intro over a three-up rule-separated figure row. */
export function StatBand({
  lines,
  intro,
  stats,
  fill = false,
}: {
  lines: readonly string[];
  intro: string;
  stats: readonly Stat[];
  /** Fill the headline word by word on scroll instead of a plain heading. */
  fill?: boolean;
}) {
  return (
    <RevealUp>
      <Section className="flex flex-col gap-10 lg:gap-16">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
          {fill ? (
            <ScrollFillText
              lines={lines}
              className="text-h2 text-balance text-foreground"
            />
          ) : (
            <Heading
              lines={lines}
              className="text-h2 text-balance text-foreground"
            />
          )}
          <p className="text-body-lg text-pretty text-muted-foreground lg:pt-2">
            {intro}
          </p>
        </div>
        <dl className="grid divide-y divide-border border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-2 px-0 py-6 sm:px-6 sm:first:pl-0"
            >
              <dd className="font-display text-h3 text-(--accent-figure)">
                <CountUp value={stat.value} />
              </dd>
              <dt className="font-mono text-tagline text-muted-foreground uppercase">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </Section>
    </RevealUp>
  );
}
