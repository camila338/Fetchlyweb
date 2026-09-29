import type { IconTint } from "@/components/ui/icon-card";

export const ABOUT_STATS = [
  { value: "10+", label: "Years in business" },
  { value: "102+", label: "Platforms launched" },
  { value: "50%", label: "The cost of agencies" },
] as const;

/** Dark marquee of framework marks. The heights are per-logo optical sizing. */
export const STACK_MARKS = [
  { name: "React", src: "/images/stack/react.webp", height: "h-8" },
  { name: "Next.js", src: "/images/stack/nextjs.webp", height: "h-8" },
  { name: "Vue", src: "/images/stack/vue.svg", height: "h-8" },
  { name: "Ruby on Rails", src: "/images/stack/rails.svg", height: "h-6" },
  { name: "Shopify", src: "/images/stack/shopify.svg", height: "h-8" },
  { name: "Remix", src: "/images/stack/remix.svg", height: "h-6" },
  { name: "Swift", src: "/images/stack/swift.webp", height: "h-6" },
  { name: "Kotlin", src: "/images/stack/kotlin.webp", height: "h-6" },
  { name: "Nuxt", src: "/images/stack/nuxt.webp", height: "h-6" },
  { name: "Hotwire", src: "/images/stack/hotwire.svg", height: "h-8" },
  { name: "Node.js", src: "/images/stack/nodejs.svg", height: "h-8" },
  { name: "Python", src: "/images/stack/python.svg", height: "h-8" },
  { name: "Go", src: "/images/stack/go.svg", height: "h-6" },
  { name: "PHP", src: "/images/stack/php.svg", height: "h-6" },
  { name: "PostgreSQL", src: "/images/stack/postgresql.svg", height: "h-8" },
  { name: "BigCommerce", src: "/images/stack/bigcommerce.svg", height: "h-8" },
  { name: "WooCommerce", src: "/images/stack/woocommerce.svg", height: "h-6" },
] as const;

export const VALUES: {
  icon: "handshake" | "eye" | "gem" | "sparkles";
  tint: IconTint;
  title: string;
  body: string;
}[] = [
  {
    icon: "handshake",
    tint: "malibu",
    title: "Ownership",
    body: "We argue for the decision that is right in a year, not the one that closes the ticket this week.",
  },
  {
    icon: "eye",
    tint: "info",
    title: "Transparency",
    body: "You can see the board any day without asking. When something slips, you hear it from us first.",
  },
  {
    icon: "gem",
    tint: "spring-green",
    title: "Quality",
    body: "QA runs inside the sprint, not after it. Nothing reaches production that has not been tested.",
  },
  {
    icon: "sparkles",
    tint: "danger",
    title: "Innovation",
    body: "We bring the tool that fits the problem, and say so when the newest one is the wrong answer.",
  },
];

export const CAPABILITIES: {
  icon:
    | "code-xml"
    | "brain"
    | "pen-tool"
    | "clipboard-list"
    | "shield-check"
    | "wrench"
    | "trending-up"
    | "database";
  tint: IconTint;
  title: string;
  body: string;
}[] = [
  {
    icon: "code-xml",
    tint: "malibu",
    title: "Software Development",
    body: "Custom web & mobile apps built for scale, from MVPs to enterprise platforms.",
  },
  {
    icon: "brain",
    tint: "info",
    title: "AI & Machine Learning",
    body: "Intelligent features and integrations that make your product smarter.",
  },
  {
    icon: "pen-tool",
    tint: "spring-green",
    title: "Design",
    body: "UI/UX that converts, retains, and delights, not just pretty mockups.",
  },
  {
    icon: "clipboard-list",
    tint: "danger",
    title: "Project Management",
    body: "A dedicated PM keeps every sprint on track and stakeholders aligned.",
  },
  {
    icon: "shield-check",
    tint: "danger",
    title: "Quality Assurance",
    body: "Rigorous testing before anything touches production.",
  },
  {
    icon: "wrench",
    tint: "malibu",
    title: "DevOps",
    body: "CI/CD pipelines, cloud infra, monitoring, the foundation that keeps it running.",
  },
  {
    icon: "trending-up",
    tint: "spring-green",
    title: "Growth",
    body: "SEO, paid media, funnel optimization and A/B testing, so the product you ship gets found.",
  },
  {
    icon: "database",
    tint: "info",
    title: "Data & Analytics",
    body: "Pipelines, warehousing and reporting, so the decisions behind the roadmap rest on real numbers.",
  },
];

export const ALTERNATIVES = [
  {
    title: "Traditional agencies",
    body: "They take over your product and lock you into a scope of work, which creates friction the moment your priorities shift.",
  },
  {
    title: "Hiring or staff aug",
    body: "Both leave you managing individuals with no support structure behind them.",
  },
] as const;
