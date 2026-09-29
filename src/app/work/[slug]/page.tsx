import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleBody } from "@/components/article";
import { Section } from "@/components/ui/section";
import { CASE_STUDIES, formatDate, getCaseStudy } from "@/content/case-studies";
import { CASE_STUDY_BODIES } from "@/content/case-study-bodies";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return {
    title: { absolute: study.title },
    description: study.seoDescription,
    openGraph: { images: [{ url: study.cover.src }] },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  const body = CASE_STUDY_BODIES[slug];
  if (!study || !body) notFound();

  return (
    <main id="main" tabIndex={-1} className="outline-none">
      <article>
        <Section width="md" spacing="sm" className="flex flex-col gap-6">
          <Link
            href="/work"
            className="text-body-sm text-malibu-darker hover:text-foreground"
          >
            Return to case studies
          </Link>
          <h1 className="font-display text-h1 text-balance text-foreground">
            {study.title}
          </h1>
          <p className="text-body-lg text-pretty text-muted-foreground">
            {body.lead}
          </p>
          <p className="text-body-sm text-muted-foreground">
            Fetchly ·{" "}
            <time dateTime={study.date}>{formatDate(study.date)}</time>
          </p>
          <Image
            src={study.cover.src}
            alt={body.coverAlt}
            width={study.cover.width}
            height={study.cover.height}
            priority
            className="w-full rounded-3xl object-cover"
          />
        </Section>

        <Section width="md" spacing="sm" className="flex flex-col gap-8">
          <dl className="glass grid gap-6 rounded-3xl p-6 md:grid-cols-3 md:p-8">
            {body.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1.5">
                <dd className="font-display text-h4 text-(--accent-figure)">
                  <span>{stat.value}</span>
                </dd>
                <dt className="text-body-sm text-pretty text-muted-foreground">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>

          <dl className="grid gap-6 sm:grid-cols-2">
            {body.meta.map((item) => (
              <div
                key={item.term}
                className="flex flex-col gap-2 border-t border-border pt-4"
              >
                <dt className="font-mono text-tagline text-muted-foreground uppercase">
                  {item.term}
                </dt>
                {"tags" in item ? (
                  <dd className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-malibu-darker/40 bg-malibu-lightest px-3 py-1 text-body-xs font-medium text-malibu-darkest"
                      >
                        {tag}
                      </span>
                    ))}
                  </dd>
                ) : (
                  <dd className="text-body-sm text-pretty text-foreground">
                    {item.value}
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </Section>

        {body.layout === "prose" ? (
          <ArticleBody
            blocks={body.sections.map((section) => ({
              type: "prose" as const,
              ...(section.heading ? { heading: section.heading, level: 2 as const } : {}),
              items: [
                ...section.paras.map((p) => ({ p })),
                ...(section.list ? [{ list: section.list }] : []),
              ],
            }))}
          />
        ) : (
          <Section width="md" spacing="sm">
            <ol className="flex flex-col gap-px overflow-hidden rounded-3xl bg-border">
              {body.steps.map((step, i) => (
                <li
                  key={step.title}
                  className={
                    step.highlight
                      ? "flex gap-5 bg-malibu-lightest p-6 md:gap-6 md:p-8"
                      : "flex gap-5 bg-background p-6 md:gap-6 md:p-8"
                  }
                >
                  <span
                    aria-hidden
                    className={
                      step.highlight
                        ? "font-display text-h5 tabular-nums text-malibu-darker"
                        : "font-display text-h5 tabular-nums text-(--accent-figure)"
                    }
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h2
                      className={
                        step.highlight
                          ? "text-h6 text-balance text-malibu-darkest"
                          : "text-h6 text-balance text-foreground"
                      }
                    >
                      {step.title}
                    </h2>
                    <p
                      className={
                        step.highlight
                          ? "text-body text-pretty text-malibu-darkest"
                          : "text-body text-pretty text-muted-foreground"
                      }
                    >
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Section>
        )}
      </article>
    </main>
  );
}
