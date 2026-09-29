import type { HeroLink, HeroTile } from "@/components/sections/split-hero";
import type { Reason } from "@/components/sections/reasons";
import type { SprintStep } from "@/components/sections/sprint-section";

/** Client logo strip under every service hero. */
export const HERO_LOGOS = {
  ecommerce: [
    { name: "Casper", src: "/images/logos/casper.png" },
    { name: "Oats Overnight", src: "/images/logos/oats-overnight.png", width: 160 },
    { name: "Winc", src: "/images/logos/winc.png" },
    { name: "Lowe's", src: "/images/logos/lowes.png" },
    { name: "Resident", src: "/images/logos/resident.png" },
    { name: "North Canna Co.", src: "/images/logos/north-canna.png" },
  ],
  product: [
    { name: "Casper", src: "/images/logos/casper.png" },
    { name: "Lowe's", src: "/images/logos/lowes.png" },
    { name: "Container Alliance", src: "/images/logos/container-alliance.png" },
    { name: "VAST", src: "/images/logos/vast.png" },
    { name: "Oats Overnight", src: "/images/logos/oats-overnight.png", width: 160 },
    { name: "North Canna Co.", src: "/images/logos/north-canna.png" },
  ],
} as const;

export const ECOMMERCE_HERO: {
  eyebrow: string;
  lines: string[];
  lead: string;
  links: HeroLink[];
  tiles: HeroTile[];
} = {
  eyebrow: "eCommerce plans, flat monthly rate",
  lines: ["More revenue from the traffic", "you already have"],
  lead: "Pet Releaf's conversion moved 10.7% with no extra ad spend. Oats Overnight now runs 300,000 subscribers. That is the work.",
  links: [
    { text: "Book a discovery call", href: "/contact", primary: true },
    { text: "Our Pricing", href: "/pricing" },
  ],
  tiles: [
    {
      src: "/images/work/store-casper.webp",
      alt: "Casper Dream Hybrid mattress product page showing its layer construction",
      width: 1000,
      height: 786,
      tall: true,
    },
    {
      src: "/images/work/store-oats.webp",
      alt: "Oats Overnight Cookies and Cream subscription product page",
      width: 1000,
      height: 786,
    },
    {
      src: "/images/work/store-winc.webp",
      alt: "Winc wine storefront product page for an organic Monastrell",
      width: 858,
      height: 675,
    },
  ],
};

export const WEB_MOBILE_HERO: typeof ECOMMERCE_HERO = {
  eyebrow: "Web and mobile, one flat monthly rate",
  lines: ["Ship a feature to web and mobile", "without managing two vendors"],
  lead: "Web and mobile under one plan, so a feature ships to both without a second vendor.",
  links: [{ text: "Talk to Sales", href: "/contact", primary: true }],
  tiles: [
    {
      src: "/images/case-studies/container-alliance.avif",
      alt: "Container Alliance CRM dashboard on desktop",
      width: 1200,
      height: 800,
      tall: true,
    },
    {
      src: "/images/work/work-ampure-app.webp",
      alt: "Ampure water heater app on mobile",
      width: 560,
      height: 1325,
    },
    {
      src: "/images/case-studies/vrt-sync.avif",
      alt: "VRT Sync property management platform",
      width: 1200,
      height: 721,
    },
  ],
};

export const DESIGNOPS_HERO: typeof ECOMMERCE_HERO = {
  eyebrow: "DesignOps, one flat monthly rate",
  lines: ["A senior designer in your team", "without a hire or an agency"],
  lead: "One dedicated product designer, embedded in your tools and your standups, at a flat monthly rate.",
  links: [{ text: "Schedule a strategy call", href: "/contact", primary: true }],
  tiles: [
    {
      src: "/images/case-studies/ampure-design-ops.webp",
      alt: "Ampure PosiCharge design system and mobile app screens",
      width: 1920,
      height: 1440,
      tall: true,
    },
    {
      src: "/images/case-studies/vrt-sync.avif",
      alt: "VRT Sync property management platform",
      width: 1200,
      height: 721,
    },
    {
      src: "/images/case-studies/container-alliance.avif",
      alt: "Container Alliance CRM dashboard on desktop",
      width: 1200,
      height: 800,
    },
  ],
};

/** The delivery loop, reworded per service. */
export const SPRINT_STEPS: SprintStep[] = [
  {
    title: "Define",
    body: "A week of questions, not a discovery phase. You get a written view of what we are building, what is in the way, and what it costs — before anyone writes code.",
  },
  {
    title: "Shape",
    body: "You see the thing before it is built. Design and engineering agree on each screen as it is drawn, so nothing is designed that cannot ship.",
  },
  {
    title: "Build",
    body: "Working software every two weeks, and you can change what is next without renegotiating anything. Tested as it is built, not at the end.",
  },
  {
    title: "Launch and Grow",
    body: "We stay on after launch, watching conversion, retention and order value — and what we learn sets the next sprint, so the numbers keep moving.",
  },
];

export const DESIGN_SPRINT_STEPS: SprintStep[] = [
  {
    title: "Research first",
    body: "Discovery and research shape the work from the start. We map the journey, find where users drop off, and design against what we learn.",
  },
  {
    title: "Builds and ships",
    body: "Senior design judgment, built into production interfaces with modern AI tooling. Work moves from concept to shipped product.",
  },
  {
    title: "Works in your medium",
    body: "Web, mobile, Shopify, whatever you're building. Designed in your components and annotated for the build.",
  },
];

/** Web and Mobile reframes the last step around product health, not revenue. */
export const WEB_MOBILE_SPRINT_STEPS: SprintStep[] = [
  ...SPRINT_STEPS.slice(0, 3),
  {
    title: "Launch and Grow",
    body: "We stay on after launch. Performance, engagement and stability are watched, and what we learn sets the next sprint — so the work compounds instead of stopping.",
  },
];

export const ECOMMERCE_STATS = [
  { value: "99%", label: "Client satisfaction" },
  { value: "103+", label: "Platforms launched" },
  { value: "10.7%", label: "Best conversion lift, no extra ad spend" },
] as const;

export const ECOMMERCE_REASONS: Reason[] = [
  {
    title: "Flat monthly pricing",
    body: "Flat monthly pricing with no surprise billing. You know exactly what's covered before the month starts.",
  },
  {
    title: "One plan, every discipline",
    body: "Design, development, QA, and optimization covered under one plan.",
  },
  {
    title: "Move as you grow",
    body: "Move between Maintenance, Growth, and Elite as your store grows. No renegotiation required.",
  },
  {
    title: "Your tools, your schedule",
    body: "We work in your tools, on your schedule.",
  },
];

export const WEB_MOBILE_REASONS: Reason[] = [
  {
    title: "Full visibility",
    body: "You can see exactly what is being worked on, any day, without asking for a status update.",
  },
  {
    title: "Predictable billing",
    body: "One flat monthly rate. No change orders, no surprise invoice at the end of a sprint.",
  },
  {
    title: "Senior specialists",
    body: "The people on your account have shipped products like yours before. No juniors learning on your budget.",
  },
];

export const ECOMMERCE_STACK = [
  { name: "Shopify", src: "/images/tech/shopify.png" },
  { name: "Recharge", src: "/images/shopify-apps/recharge.png" },
  { name: "Klaviyo", src: "/images/shopify-apps/klaviyo.png" },
  { name: "Loop Returns", src: "/images/shopify-apps/loop.png" },
  { name: "Okendo", src: "/images/shopify-apps/okendo.png" },
  { name: "Gorgias", src: "/images/shopify-apps/gorgias.png" },
  { name: "Yotpo", src: "/images/shopify-apps/yotpo.png" },
  { name: "Attentive", src: "/images/shopify-apps/attentive.png" },
  { name: "Searchspring", src: "/images/shopify-apps/searchspring.png" },
  { name: "ShipBob", src: "/images/shopify-apps/shipbob.png" },
  { name: "Stamped", src: "/images/shopify-apps/stamped.png" },
] as const;

export const WEB_MOBILE_STACK = [
  { name: "Next.js", src: "/images/tech/nextjs.png" },
  { name: "React", src: "/images/tech/react.png" },
  { name: "React Native", src: "/images/tech/react-native.png" },
  { name: "Swift", src: "/images/tech/swift.png" },
  { name: "Kotlin", src: "/images/tech/kotlin.png" },
  { name: "Node.js", src: "/images/tech/nodejs.png" },
  { name: "Ruby on Rails", src: "/images/tech/rails.png" },
  { name: "TypeScript", src: "/images/tech/typescript.png" },
  { name: "PostgreSQL", src: "/images/tech/postgresql.png" },
  { name: "Go", src: "/images/tech/go.png" },
] as const;

export const DESIGNOPS_WORK_LOGOS = [
  { name: "Casper", src: "/images/logos/casper.png" },
  { name: "Lowe's", src: "/images/logos/lowes.png" },
  { name: "Oats Overnight", src: "/images/logos/oats-overnight.png", square: true },
  { name: "Winc", src: "/images/logos/winc.png" },
  { name: "VAST", src: "/images/logos/vast.png" },
  { name: "Container Alliance", src: "/images/logos/container-alliance.png" },
  { name: "Resident", src: "/images/logos/resident.png" },
  { name: "Spyderco", src: "/images/logos/spyderco.png" },
  { name: "North Canna Co.", src: "/images/logos/north-canna.png" },
  { name: "Golden Globes", src: "/images/logos/golden-globes.png" },
] as const;

export const DESIGNOPS_STATS = [
  { value: "100+", label: "Projects shipped" },
  { value: "10+", label: "Years in the field" },
  { value: "2", label: "Weeks to start" },
] as const;

export const DESIGNOPS_RIGOR: {
  icon: "telescope" | "compass" | "file-check-2" | "layers-3" | "users" | "gift";
  tint: "malibu" | "info" | "spring-green" | "danger";
  title: string;
  body: string;
}[] = [
  {
    icon: "telescope",
    tint: "info",
    title: "Deep context",
    body: "Learns your business, your users and your stack before design work starts.",
  },
  {
    icon: "compass",
    tint: "malibu",
    title: "Product leadership",
    body: "Drives product decisions and sharpens the work of everyone around them.",
  },
  {
    icon: "file-check-2",
    tint: "danger",
    title: "Rigorous by default",
    body: "Acceptance criteria, edge cases and rationale documented on every deliverable.",
  },
  {
    icon: "layers-3",
    tint: "spring-green",
    title: "Embedded in your team",
    body: "A senior designer working inside your team and your tools, day to day.",
  },
  {
    icon: "users",
    tint: "malibu",
    title: "A full team behind them",
    body: "Backed by a project manager and the rest of Fetchly when the work calls for it.",
  },
  {
    icon: "gift",
    tint: "spring-green",
    title: "Yours to keep",
    body: "Everything we make is yours to keep. Files, systems, all of it.",
  },
];

export const DESIGNOPS_TEAM = [
  {
    name: "Tim Huey",
    avatar: "/images/team/tim-huey.avif",
    bio: "VP of Design & Creative and a co-founder of Fetchly, shaping how the design team embeds inside client teams.",
  },
  {
    name: "Lucas Teixeira",
    avatar: "/images/team/lucas-teixeira.avif",
    bio: "Director of Design, with 10 years of experience in the design and engineering of technology products.",
  },
  {
    name: "Aline Aleixo",
    avatar: "/images/team/aline-aleixo.avif",
    bio: "DesignOps lead, researcher and strategist, 6+ years shaping ecommerce, SaaS and mobile products for LATAM, European and US teams.",
  },
] as const;

export const DESIGNOPS_PLANS = [
  {
    name: "Part-time DesignOps",
    featured: false,
    priceParts: ["$5,000", "/mo"],
    description: "18 hours a week",
    featuresTitle: "What you get",
    features: [
      "Part-time senior product designer",
      "Part-time project manager, free",
      "Feedback loops twice a month",
      "Research, design, prototyping and strategy",
      "Everything we make is yours to keep",
    ],
    cta: "Schedule a strategy call",
  },
  {
    name: "Full-time DesignOps",
    featured: true,
    priceParts: ["$8,500", "/mo"],
    description: "37 hours a week",
    featuresTitle: "Everything in part-time, plus",
    features: [
      "Full-time dedicated designer",
      "Unlimited feedback loops",
      "Design system built and maintained",
      "Product leadership on your roadmap",
      "The rest of Fetchly when the work calls for it",
    ],
    cta: "Schedule a strategy call",
  },
] as const;

/** Quotes in the DesignOps carousel — the quote marks are part of the copy. */
export const DESIGNOPS_QUOTES = [
  {
    quote:
      '"Fetchly has transformed our development team. Our dedicated developer, and the team Fetchly has around him, allow us to quickly iterate and expand our platform from design through deployment."',
    name: "Dusty Stutsman",
    title: "CEO, NIGHTOUT",
    logo: { src: "/images/logos-mono/ticketsauce.svg", alt: "Ticketsauce" },
    avatar: { src: "/images/team/dusty-stutsman.avif", alt: "Dusty Stutsman" },
  },
  {
    quote:
      '"I was, without exaggerating, blown away by the quality, appearance, and functionality of the app."',
    name: "Douglas H. Clements, Ph.D.",
    title: "Distinguished University Professor, University of Denver",
    logo: { src: "/images/logos-mono/denver.svg", alt: "University of Denver" },
    avatar: {
      src: "/images/team/douglas-clements.avif",
      alt: "Douglas H. Clements",
    },
  },
  {
    quote:
      '"The team at Fetchly is incredibly talented and thorough. We sought out a team to partner with on our website build, and Fetchly was the right choice. They are creative, design beautifully crafted pages, and were able to conquer a robust and challenging technical build."',
    name: "Rochelle Reynolds",
    title: "CEO, Fastr",
    logo: { src: "/images/logos-mono/fastr.svg", alt: "Fastr" },
  },
] as const;
