import type { Metadata } from "next";

import { ArticleBody } from "@/components/article";
import { Section } from "@/components/ui/section";
import { PRIVACY_BLOCKS, PRIVACY_TITLE } from "@/content/privacy";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy: Data Protection & User Rights" },
  description:
    "How Fetchly, LLC collects, stores, uses and shares your information when you use our website and services, and the privacy rights you have over that data.",
};

export default function PrivacyPolicyPage() {
  const [intro, ...rest] = PRIVACY_BLOCKS;

  return (
    <main id="main" tabIndex={-1} className="outline-none">
      <Section width="md" spacing="sm" className="flex flex-col gap-4">
        <h1 className="font-display text-h1 text-balance text-foreground">
          <span className="block">{PRIVACY_TITLE}</span>
        </h1>
        {intro.type === "prose"
          ? intro.items.map((item, i) =>
              "p" in item ? (
                <p key={i} className="text-body text-pretty text-muted-foreground">
                  {item.p}
                </p>
              ) : (
                <ul key={i} className="flex list-disc flex-col gap-2 pl-5">
                  {item.list.map((entry) => (
                    <li
                      key={entry}
                      className="text-body text-pretty text-muted-foreground"
                    >
                      {entry}
                    </li>
                  ))}
                </ul>
              ),
            )
          : null}
      </Section>

      <ArticleBody blocks={rest} />
    </main>
  );
}
