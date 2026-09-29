export type Plan = {
  name: string;
  /** The dark, emphasised card in the row. */
  featured: boolean;
  /** e.g. ["From", "$6,400", "/mo"], or a single "Let's talk". */
  priceParts: string[];
  description: string;
  featuresTitle: string;
  features: string[];
  cta: string;
};

export type Route = {
  icon: "building-2" | "layers" | "user-search" | "handshake";
  title: string;
  description: string;
  points: string[];
};

export type PlanTab = {
  label: string;
  plans: Plan[];
  comparison: {
    title: string;
    routes: Route[];
    aside: {
      title: string;
      description: string;
      points: string[];
      cta: string;
    };
  };
};

export const PLAN_TABS: PlanTab[] = [
  {
    label: "eCommerce",
    plans: [
      {
        name: "MAINTENANCE",
        featured: false,
        priceParts: ["From", "$1,800", "/mo"],
        description: "Your store is live and needs to stay fast, current and unbroken.",
        featuresTitle: "WHAT'S COVERED",
        features: [
          "A dedicated developer and a project manager",
          "Bug fixes, platform and app updates",
          "Theme, integration and app monitoring",
          "UX and content updates as you need them",
          "Quarterly performance and code-health audit",
          "Analytics and event tracking kept accurate",
          "Slack access to the team, same-day answers",
        ],
        cta: "Get started",
      },
      {
        name: "GROWTH",
        featured: true,
        priceParts: ["From", "$6,400", "/mo"],
        description: "An embedded team building and optimizing continuously. Most clients start here.",
        featuresTitle: "EVERYTHING IN MAINTENANCE, PLUS",
        features: [
          "Designer, engineers, QA and PM on your roadmap",
          "Storefront design and development",
          "Conversion work: PDP, cart and checkout",
          "A/B testing and CRO, measured against revenue",
          "Email and SMS flows (Klaviyo, and similar)",
          "SEO and SEM planning and execution",
          "Third-party and middleware integrations",
          "Subscriptions, bundles and loyalty",
          "DevOps: CI/CD, staging, monitoring",
        ],
        cta: "Get started",
      },
      {
        name: "ELITE",
        featured: false,
        priceParts: ["Let's talk"],
        description: "High-volume stores that need systems talking to each other and every point of friction removed.",
        featuresTitle: "EVERYTHING IN GROWTH, PLUS",
        features: [
          "ERP, PIM and OMS integrations",
          "Platform migrations and replatforming",
          "Headless and custom storefront builds",
          "Catalogue architecture at scale",
          "AI and ML features: search, recs, support",
          "Data engineering and reporting",
          "Dedicated architect and technical lead",
        ],
        cta: "Let's talk",
      },
    ],
    comparison: {
      title: "What other routes would cost you",
      routes: [
        {
          icon: "building-2",
          title: "Growth agencies",
          description: "Three engagements, three retainers, and you in the middle of them.",
          points: [
            "Brand, build and growth sold as three engagements",
            "A retainer and a roadmap for each of them",
            "Coordinating between them is your job",
            "Storefront work waits on the build contract",
          ],
        },
        {
          icon: "layers",
          title: "Assembling specialists",
          description: "Best-in-class at each channel, accountable for none of the outcome.",
          points: [
            "An SEO consultant, a paid-media shop, a creative team",
            "A Klaviyo partner for retention, a dev shop to ship it",
            "Four contracts, four roadmaps, four invoices",
            "No one accountable for the number they all move",
          ],
        },
      ],
      aside: {
        title: "Working with Fetchly",
        description: "Every facet of store growth in one team, at a flat monthly rate.",
        points: [
          "Design, engineering, QA and PM in one plan",
          "CRO, A/B testing and analytics on the same roadmap",
          "SEO, AEO and GEO, plus paid media and creative",
          "Klaviyo, Okendo, Recharge and the rest, integrated",
          "One team accountable for revenue, not for a channel",
        ],
        cta: "Talk to a Sales Rep",
      },
    },
  },
  {
    label: "Web/Mobile",
    plans: [
      {
        name: "MAINTENANCE",
        featured: false,
        priceParts: ["From", "$1,200", "/mo"],
        description: "Your product is shipped and needs a team keeping it healthy.",
        featuresTitle: "WHAT'S COVERED",
        features: [
          "A dedicated developer and a project manager",
          "Bug fixes, dependency and security updates",
          "UX and UI enhancements as you need them",
          "Quarterly regression testing",
          "Quarterly code-health audit",
          "Uptime and error monitoring",
          "Slack access to the team, same-day answers",
        ],
        cta: "Schedule a call",
      },
      {
        name: "PRODUCT TEAM",
        featured: true,
        priceParts: ["From", "$9,500", "/mo"],
        description: "A full product team on your roadmap: design, engineering, QA, PM and DevOps. Most clients start here.",
        featuresTitle: "EVERYTHING IN MAINTENANCE, PLUS",
        features: [
          "Product design: research, IA, UI, design system",
          "Web and mobile engineering on one plan",
          "Backend systems, APIs and data modelling",
          "QA throughout the build, not bolted on",
          "DevOps: CI/CD, cloud infra, observability",
          "A dedicated PM running your sprints",
          "AI and ML integrations where they earn their place",
          "Quarterly architecture review",
        ],
        cta: "Schedule a call",
      },
      {
        name: "CUSTOM",
        featured: false,
        priceParts: ["Let's talk"],
        description: "Complex scope, multiple workstreams, or a team you want to scale up and down as the roadmap moves.",
        featuresTitle: "EVERYTHING IN PRODUCT TEAM, PLUS",
        features: [
          "Multiple squads across parallel workstreams",
          "Dedicated architect and technical lead",
          "Greenfield platform and SaaS builds",
          "Legacy modernization and migrations",
          "Data engineering and analytics",
          "Mix and match specialists month to month",
        ],
        cta: "Let's talk",
      },
    ],
    comparison: {
      title: "What other routes would cost you",
      routes: [
        {
          icon: "user-search",
          title: "Hiring or staff aug",
          description: "You get people. The structure around them is still yours to build.",
          points: [
            "Sourcing and vetting, or a bench you did not pick",
            "Managing them day to day is still your job",
            "Contractors with no one to pair with or review them",
            "No designer, QA or PM unless you hire those too",
            "Whatever they can't cover comes back to you",
          ],
        },
        {
          icon: "building-2",
          title: "Traditional agencies",
          description: "A scope signed upfront becomes the thing you manage.",
          points: [
            "A scope of work signed before you know what you need",
            "Features negotiated upfront, changes papered later",
            "Priorities that shift create friction, not sprints",
            "You hand over ownership of what gets built",
          ],
        },
      ],
      aside: {
        title: "Working with Fetchly",
        description: "A full team at a flat monthly rate, for less than it costs to staff those roles yourself.",
        points: [
          "Engineering, design, QA, and PM in one plan",
          "Sprints set by your roadmap, not a signed scope",
          "Due diligence and estimates before we build",
          "Shift priorities as you learn what the work needs",
          "What we build stays yours",
        ],
        cta: "Talk to a Sales Rep",
      },
    },
  },
];
