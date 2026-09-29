import { Section } from "@/components/ui/section";

export type ArticleItem = { p: string } | { list: string[] };

export type ArticleBlock =
  | { type: "divider" }
  | {
      type: "prose";
      heading?: string;
      level?: 2 | 3;
      items: ArticleItem[];
    };

/**
 * Long-form body shared by blog posts and case studies: a stack of narrow
 * sections, each an optional heading followed by paragraphs and bullet lists.
 */
export function ArticleBody({ blocks }: { blocks: readonly ArticleBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.type === "divider") {
          return (
            <Section
              key={i}
              width="md"
              spacing="sm"
              className="py-2 md:py-12 xl:py-section-sm"
            >
              <div role="separator" className="flex items-center justify-center">
                <span
                  aria-hidden
                  className="font-display text-h5 text-(--accent-figure) select-none"
                >
                  ⁂
                </span>
              </div>
            </Section>
          );
        }

        const Tag = block.level === 3 ? "h3" : "h2";

        return (
          <Section key={i} width="md" spacing="sm" className="flex flex-col gap-4">
            {block.heading ? (
              <Tag
                aria-label={block.heading}
                className={
                  block.level === 3
                    ? "font-display text-h5 text-balance text-foreground"
                    : "font-display text-h3 text-balance text-foreground"
                }
              >
                <span className="block">{block.heading}</span>
              </Tag>
            ) : null}

            {block.items.map((item, j) =>
              "p" in item ? (
                <p key={j} className="text-body text-pretty text-muted-foreground">
                  {item.p}
                </p>
              ) : (
                <ul key={j} className="flex list-disc flex-col gap-2 pl-5">
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
            )}
          </Section>
        );
      })}
    </>
  );
}
