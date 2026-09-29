export type CaseStudy = {
  slug: string;
  /** Long title used on the /work index and the case-study page. */
  title: string;
  /** Search-result description, which differs from the on-page excerpt. */
  seoDescription: string;
  /** Short client name used on the home grid. */
  client: string;
  /** The one-line result shown above the client name on the home grid. */
  headline: string;
  /** Home-grid blurb. */
  summary: string;
  /** /work index blurb. */
  excerpt: string;
  date: string;
  /** Hero/index image (4:3-ish source, cropped to 3:2). */
  cover: { src: string; width: number; height: number };
  /** Home-grid image, a different crop. */
  thumb: { src: string; width: number; height: number };
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "ampure-design-ops",
    seoDescription:
      "How Fetchly's DesignOps designer turned Ampure PosiCharge's legacy field tools into a mobile app foundation: user flows, IA, a design system, and dev-ready…",
    title: "Ampure PosiCharge DesignOps Mobile App Case Study",
    client: "Ampure",
    headline: "Field tools, rebuilt",
    summary: "Legacy hardware-bound tooling turned into a mobile foundation.",
    excerpt:
      "Ampure PosiCharge relied on legacy tools that were tied to extra hardware and hard to use in the field.",
    date: "2026-06-10",
    cover: { src: "/images/case-studies/ampure-design-ops.webp", width: 1920, height: 1440 },
    thumb: { src: "/images/work/ampure.webp", width: 1920, height: 1440 },
  },
  {
    slug: "pet-releaf-shopify-product-page-redesign",
    seoDescription:
      "How a restructured product page, visual swatch selector, and custom subscription widget helped Pet Releaf convert more of the traffic they already had.",
    title: "Pet Releaf Shopify PDP Redesign: 10.7% Conversion Lift",
    client: "Pet Releaf",
    headline: "+10.7% conversion",
    summary: "A restructured product page, with no extra acquisition spend.",
    excerpt:
      "Pet Releaf's Shopify PDP was leaking conversions. We redesigned it around what shoppers actually needed to decide.",
    date: "2026-05-20",
    cover: {
      src: "/images/case-studies/pet-releaf-shopify-product-page-redesign.avif",
      width: 1200,
      height: 900,
    },
    thumb: { src: "/images/work/pet-releaf.avif", width: 1200, height: 900 },
  },
  {
    slug: "casper-sleep-shopify-plus-migration-and-embedded-development-partnership",
    seoDescription:
      "Casper Sleep Shopify Plus migration case study from Fetchly. OMS, POS, and embedded development that replaced a brittle Salesforce Commerce Cloud system.",
    title: "Casper Sleep: Shopify Plus Migration",
    client: "Casper Sleep",
    headline: "Platform de-risked",
    summary: "A Shopify Plus migration any team member can navigate.",
    excerpt:
      "Casper outgrew their platform before it broke. Here's what happened when the infrastructure itself became the bottleneck.",
    date: "2026-04-15",
    cover: {
      src: "/images/case-studies/casper-sleep-shopify-plus-migration-and-embedded-development-partnership.avif",
      width: 1200,
      height: 829,
    },
    thumb: { src: "/images/work/casper-sleep.avif", width: 1200, height: 829 },
  },
  {
    slug: "vrt-sync",
    seoDescription:
      "How Fetchly built VRT Sync's map-driven property management platform. Read our case study on custom business solution development using geolocation.",
    title: "Case Study: Map-Driven Property Management for VRT Sync",
    client: "VRT Sync",
    headline: "Built to scale",
    summary:
      "A map-driven property platform, launched and ready for more communities.",
    excerpt:
      "VRT Sync is a forward-thinking client on a greenfield initiative, building a powerful, fully integrated web platform.",
    date: "2026-03-10",
    cover: { src: "/images/case-studies/vrt-sync.avif", width: 1200, height: 721 },
    thumb: { src: "/images/work/vrt-sync.avif", width: 1200, height: 721 },
  },
  {
    slug: "container-alliance",
    seoDescription:
      "How Fetchly rebuilt the Container Alliance CRM and website. Read our web and application development case study covering architecture, design, and delivery.",
    title: "Case Study: Website Rebuild With A Unified Sales-Cycle CRM",
    client: "Container Alliance",
    headline: "One connected system",
    summary: "CRM, website and quoting unified across the full sales cycle.",
    excerpt:
      "Container Alliance partnered with us for a comprehensive digital transformation, resulting in a completely rebuilt platform.",
    date: "2026-02-18",
    cover: {
      src: "/images/case-studies/container-alliance.avif",
      width: 1200,
      height: 800,
    },
    thumb: {
      src: "/images/work/container-alliance.avif",
      width: 1600,
      height: 1205,
    },
  },
  {
    slug: "oats-over-night",
    seoDescription:
      "How Fetchly built a custom ECommerce subscription platform for Oats Overnight. Read our case study on mobile app development, Shopify & subscription solutions.",
    title: "Case Study: Developing An ECommerce Subscription Platform",
    client: "Oats Overnight",
    headline: "250k subscribers",
    summary:
      "A self-service subscriber portal and automated warehouse tooling.",
    excerpt:
      "From legacy systems to a scalable Shopify subscription platform that boosted loyalty and streamlined operations.",
    date: "2026-01-22",
    cover: {
      src: "/images/case-studies/oats-over-night.avif",
      width: 1200,
      height: 800,
    },
    thumb: { src: "/images/work/oats-overnight.avif", width: 1200, height: 800 },
  },
];

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((study) => study.slug === slug);
}

/** "June 10, 2026" — matches the dates printed across the site. */
export function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
