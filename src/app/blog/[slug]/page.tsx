import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleBody } from "@/components/article";
import { Section } from "@/components/ui/section";
import { formatDate } from "@/content/case-studies";
import { getPost, POSTS } from "@/content/posts";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: { absolute: post.seoTitle },
    description: post.seoDescription,
    openGraph: {
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.cover.src }],
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main id="main" tabIndex={-1} className="outline-none">
      <article>
        <Section width="md" spacing="sm" className="flex flex-col gap-6">
          <Link
            href="/blog"
            className="text-body-sm text-malibu-darker hover:text-foreground"
          >
            Return to blog
          </Link>
          <h1 className="font-display text-h1 text-balance text-foreground">
            {post.title}
          </h1>
          <p className="text-body-lg text-pretty text-muted-foreground">
            {post.lead}
          </p>
          <p className="text-body-sm text-muted-foreground">
            {post.author} ·{" "}
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </p>
          <Image
            src={post.cover.src}
            alt={post.coverAlt}
            width={post.cover.width}
            height={post.cover.height}
            priority
            className="w-full rounded-3xl object-cover"
          />
        </Section>

        <ArticleBody blocks={post.blocks} />
      </article>
    </main>
  );
}
