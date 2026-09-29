/**
 * Long-form body content for each case-study page, keyed by slug. The index
 * metadata (title, cover, dates) lives in `case-studies.ts`.
 */
export type CaseStudyMeta =
  | { term: string; value: string }
  | { term: string; tags: string[] };

export type ProseSection = {
  heading: string | null;
  paras: string[];
  list?: string[];
};

export type Step = { title: string; body: string; highlight: boolean };

export type CaseStudyBody = {
  lead: string;
  coverAlt: string;
  stats: { value: string; label: string }[];
  meta: CaseStudyMeta[];
} & (
  | { layout: "prose"; sections: ProseSection[] }
  | { layout: "steps"; steps: Step[] }
);

export const CASE_STUDY_BODIES: Record<string, CaseStudyBody> = {
  "ampure-design-ops": {
    lead: "How Fetchly's DesignOps designer turned Ampure PosiCharge's legacy field tools into a mobile app foundation: user flows, IA, a design system, and dev-ready…",
    coverAlt: "Ampure cover image",
    stats: [
      { value: "Mobile", label: "Foundation for field teams" },
      { value: "1", label: "Shared product vision across teams" },
      { value: "Scalable", label: "Design system for future work" },
    ],
    meta: [
      { term: "Sector", value: "EV charging infrastructure" },
      { term: "Challenge", value: "Field teams relied on legacy tools tied to extra hardware and hard to use on site." },
      { term: "What we did", value: "A DesignOps engagement: user flows, information architecture, a design system and dev-ready specs for a mobile foundation." },
      { term: "Services", tags: ["DesignOps", "UX research", "Design system", "Mobile product design"] },
    ],
    layout: "prose",
    sections: [
      {
        heading: null,
        paras: [
          "Ampure PosiCharge specializes in advanced industrial battery charging solutions. They provide hardware and software tools that help businesses optimize, manage, and maintain battery-powered fleets efficiently.",
          "Ampure engaged Fetchly's DesignOps service. A dedicated senior product designer embedded with their team to turn years of legacy technical tooling into a single mobile product, partnering with Ampure's own developers and subject matter experts throughout.",
        ],
      },
      {
        heading: "The problem",
        paras: [
          "Ampure relied on a collection of legacy tools to configure devices, access operational data, and perform critical maintenance workflows. These tools had evolved over time and were heavily tied to technical workflows, additional hardware, and interfaces that were difficult to use in the field.",
          "Our challenge was translating years of technical functionality into a mobile product without losing the depth, reliability, and flexibility that technicians depended on.",
          "Many of these workflows were dictated by hardware constraints and the demands of the field. Device discovery, Bluetooth communication, battery configuration, firmware management, diagnostic data collection, and gateway registration all carried technical constraints that influenced how the product needed to behave.",
          "Because we weren't physically present in the environments where the product was used, we had to reconstruct those workflows remotely through stakeholder conversations, technical documentation, prototypes, and continuous validation. Understanding the software was only part of the challenge. We also needed to understand the operational context surrounding it.",
          "The project required balancing field usability, technical constraints, existing hardware capabilities, and future product ambitions.",
        ],
      },
      {
        heading: "What we did",
        paras: [
          "To understand the product beyond the interface itself, we first needed to understand the operational reality behind it.",
          "We mapped how technicians discovered devices, connected through Bluetooth, configured battery parameters, downloaded diagnostic data, updated firmware, and managed devices in the field. We also documented the different user roles involved in the ecosystem, from technicians performing day-to-day maintenance to administrators managing access and future gateway infrastructure.",
          "Because much of this knowledge existed across conversations, legacy tools, and technical documentation, a significant part of the work focused on creating a shared understanding of the system. User journeys, workflow diagrams, stakeholder maps, information architecture, and interactive prototypes became alignment tools that kept our designer, Ampure's developers, and their subject matter experts working from the same model.",
          "The design effort focused on reducing complexity without removing capability. Configuration settings were reorganized around operational goals, technical terminology was translated into more intuitive structures, and new functionality was introduced in ways that felt consistent with existing technician workflows.",
          "Through continuous feedback sessions, prototype reviews, and collaborative workshops, the product evolved from a collection of technical requirements into a coherent mobile experience.",
        ],
      },
      {
        heading: "The results",
        paras: [
          "We helped a team understand a complex domain, align around a product vision, and transform operational knowledge into a scalable digital experience. By providing Ampure with:",
          "The project established a shared understanding of how the mobile product should work, how different systems interacted, and how future functionality could be introduced without disrupting core workflows.",
          "Most importantly, it transformed a collection of technical capabilities into a product that technicians can understand and operate with confidence in real-world environments.",
        ],
        list: [
          "A complete mobile-first product foundation",
          "Defined user flows for all Phase 1 functionality",
          "A scalable information architecture",
          "A reusable design system and component library",
          "Developer-ready specifications and prototypes",
          "A framework for future Bluetooth, gateway, and cloud-connected features",
        ],
      },
    ],
  },
  "casper-sleep-shopify-plus-migration-and-embedded-development-partnership": {
    lead: "Casper Sleep Shopify Plus migration case study from Fetchly. OMS, POS, and embedded development that replaced a brittle Salesforce Commerce Cloud system.",
    coverAlt: "Casper Sleep cover image",
    stats: [
      { value: "Platform", label: "Migrated to Shopify Plus" },
      { value: "Zero", label: "Knowledge concentration risk" },
      { value: "Simpler", label: "Integration layer" },
    ],
    meta: [
      { term: "Sector", value: "DTC mattress & sleep" },
      { term: "Challenge", value: "The platform itself had become the bottleneck, with specialist knowledge needed at every turn." },
      { term: "What we did", value: "A Shopify Plus migration with OMS and POS integration, run as an embedded development partnership." },
      { term: "Services", tags: ["Shopify Plus", "Migration", "OMS", "POS", "Embedded team"] },
    ],
    layout: "prose",
    sections: [
      {
        heading: "When the platform itself becomes the bottleneck",
        paras: [
          "Casper sells mattresses, bedding, and sleep accessories direct to consumers, online and in store. For a DTC brand, this commerce platform is the business. Casper had outgrown theirs.",
          "Years of custom development on Salesforce Commerce Cloud had left Casper with a brittle, specialist-dependent codebase. Non-technical team members couldn't touch basic workflows without pulling in a developer. Retail locations were running legacy POS systems held together by workarounds. And a sprawling integration layer across PIM, ERP, fulfillment, and marketing tools required constant maintenance just to stay operational.",
          "Nothing was broken. It was just expensive and hard to move fast.",
        ],
      },
      {
        heading: "What we did",
        paras: [
          "Moving Casper to the Shopify ecosystem",
          "We started with an audit. Before writing code, we mapped the full architecture. That assessment drove everything: the platform decision, the integration design, and the scope of each workstream. It gave both teams a picture of what migration would require.",
          "From there, the work had three main tracks.",
          "E-Commerce and OMS Migration. We replaced Salesforce OMS with Shopify's native order management, built around a new middleware layer that created a cleaner separation between Shopify, the fulfillment engine, and the ERP. Customer service workflows were rebuilt natively in Shopify before cutover.",
          "Shopify POS Implementation. We replaced the legacy POS across every retail location, starting from what Shopify handles out of the box and methodically closing the gaps: shipping logic, bundle handling, split shipments, sales attribution, role-based permissions. We also built Casper's training program from scratch for enterprise deployment.",
          "Post-Migration Development. After go-live, we kept building. A custom bundle app, a metafield-powered mattress comparison tool, bundle upsell modules, and a full WCAG audit across desktop and mobile.",
        ],
      },
      {
        heading: "The results",
        paras: [
          "A platform built for the whole team",
          "Casper moved from a system that required specialist knowledge at every turn to one any team member can navigate. Knowledge concentration risk is gone. The integration layer is simpler. And release cadence shifted to a structured sprint cycle with full cross-team visibility.",
          "When your infrastructure stops fighting you, guess what, you get to build.",
          "Want to learn how we can help bring your vision to life? Get in touch.",
        ],
      },
    ],
  },
  "container-alliance": {
    lead: "How Fetchly rebuilt the Container Alliance CRM and website. Read our web and application development case study covering architecture, design, and delivery.",
    coverAlt: "Container Alliance cover image",
    stats: [
      { value: "1", label: "Connected system, from lead to payment" },
      { value: "Full", label: "Sales cycle in one place" },
      { value: "Faster", label: "Quote-to-close conversions" },
    ],
    meta: [
      { term: "Sector", value: "Industrial containers & logistics" },
      { term: "Challenge", value: "Fragmented sales tools slowed growth: lead capture, quoting, invoicing and payments all lived in different places." },
      { term: "What we did", value: "A rebuilt website on a unified sales-cycle CRM, with third-party integrations across the full funnel." },
      { term: "Services", tags: ["Custom CRM", "Web development", "Integrations", "Sales automation"] },
    ],
    layout: "steps",
    steps: [
      {
        title: "When Fragmented Sales Tools Slow Down Growth",
        body: "Container Alliance had outgrown their existing systems. Their CRM couldn't handle the full sales cycle in one place—lead capture, quoting, invoicing, payments, and customer communication were fragmented across tools. Their website wasn't pulling its weight either: slow, dated, and not built to convert potential customers. They needed both rebuilt, and they needed them talking to each other.",
        highlight: false,
      },
      {
        title: "Building a Unified Sales Cycle CRM",
        body: "We've worked with Container Alliance for several years. The rebuilt CRM now handles the entire sales cycle: lead capture, quote generation, customer relationship management, invoicing, payments, and email communication. It integrates directly with their website, pulling real-time data from partners and products. We're currently building a new module to bring delivery and driver logistics into the same system.",
        highlight: false,
      },
      {
        title: "Redesigning for Faster Conversions",
        body: "The website got a full web design overhaul—faster, more user-friendly, and built for conversion. Potential customers can get instant quotes, find information quickly, and connect with sales in a few clicks, making closing deals faster and improving the overall customer experience.",
        highlight: false,
      },
      {
        title: "Third-Party Integrations That Power the Platform",
        body: "The system connects CallRail for call tracking, Zoho for invoicing, Stripe for payments, Hygraph for content management, Postmark for email delivery, and Interchange (coming soon) for product management.",
        highlight: false,
      },
      {
        title: "A Single Connected System for Long-Term Growth",
        body: "Container Alliance now operates on a single connected system—CRM, website, and third-party tools all working in sync. They have the automation and flexibility to strengthen customer relationships and set themselves up for long-term success.",
        highlight: true,
      },
    ],
  },
  "oats-over-night": {
    lead: "How Fetchly built a custom ECommerce subscription platform for Oats Overnight. Read our case study on mobile app development, Shopify & subscription solutions.",
    coverAlt: "Oats Overnight cover image",
    stats: [
      { value: "300,000+", label: "Active subscribers" },
      { value: "40%", label: "Longer average subscription" },
      { value: "94%", label: "Of revenue now on subscriptions" },
    ],
    meta: [
      { term: "Sector", value: "DTC food & beverage subscriptions" },
      { term: "Challenge", value: "Legacy systems were blocking growth: subscribers could not self-serve and the warehouse ran on manual work." },
      { term: "What we did", value: "A self-service subscriber portal, automated backend tooling for the warehouse, and a mobile-first Shopify and Klaviyo integration." },
      { term: "Services", tags: ["Shopify", "Subscriptions", "Backend systems", "Klaviyo", "Mobile-first UX"] },
    ],
    layout: "steps",
    steps: [
      {
        title: "Legacy Systems Blocking eCommerce Growth",
        body: "Oats Overnight's legacy systems couldn't keep up with growth. Customers had no way to tweak deliveries or explore new flavors without calling or emailing support. Behind the scenes, staff dealt with manual bundling, poor inventory visibility, and limited marketing tools. Any change—skipping a shipment, swapping a flavor—meant hours of support time. And one-time buyers had no clear path to becoming subscribers. Customer experience was suffering, growth was slowing, and operations were bottlenecked.",
        highlight: false,
      },
      {
        title: "A Self-Service Subscriber Portal That Builds Loyalty",
        body: "We built a subscriber portal where customers can skip, swap, or pause orders in a few taps. A member-only dashboard unlocks seasonal flavors and lets subscribers vote on new products—turning passive buyers into engaged community members and driving customer loyalty.",
        highlight: false,
      },
      {
        title: "Automated Backend Tools for Warehouse Efficiency",
        body: "On the backend, custom admin tools automate pick-and-pack workflows, surface real-time inventory data, and flag upsell opportunities. An optimized checkout flow identifies first-time buyers and offers subscription incentives at the right moment.",
        highlight: false,
      },
      {
        title: "Mobile-First Shopify and Klaviyo Integration",
        body: "The platform integrates deeply with Shopify and Klaviyo, built mobile-first since most customers manage their boxes on the go. Security was non-negotiable: data encryption, secure logins, and continuous monitoring.",
        highlight: false,
      },
      {
        title: "94% of Revenue Now Runs Through Subscriptions",
        body: "Customer churn dropped by nearly a third. Average subscription duration jumped over 40%. Warehouse errors fell dramatically. First-order subscriptions climbed toward 90%, active subscribers now top 300,000, and customer satisfaction is at an all-time high.",
        highlight: true,
      },
    ],
  },
  "pet-releaf-shopify-product-page-redesign": {
    lead: "How a restructured product page, visual swatch selector, and custom subscription widget helped Pet Releaf convert more of the traffic they already had.",
    coverAlt: "Pet Releaf cover image",
    stats: [
      { value: "10.7%", label: "Relative conversion lift" },
      { value: "3.1%", label: "Conversion rate, from 2.8%" },
      { value: "$0", label: "Extra acquisition spend" },
    ],
    meta: [
      { term: "Sector", value: "Pet CBD & wellness eCommerce" },
      { term: "Challenge", value: "The Shopify product page was leaking conversions: shoppers could not find what they needed to decide." },
      { term: "What we did", value: "A restructured product page with a visual swatch selector and a custom subscription widget." },
      { term: "Services", tags: ["Shopify", "CRO", "Product page design", "Subscriptions"] },
    ],
    layout: "prose",
    sections: [
      {
        heading: "The problem",
        paras: [
          "A dated product page is a leaky bucket",
          "Pet Releaf sells hemp-based health supplements for pets through their Shopify store. For a DTC brand, the product detail page is where the decision gets made. It's the last thing a shopper sees before buying or bouncing.",
          "Theirs had grown without a clear content strategy behind it. Key information was buried. The design had drifted from the brand. Variant selection was hidden behind plain dropdowns that made it hard to browse options or understand what made each one different. And on the backend, more than 15 product templates had accumulated over time, all requiring individual maintenance. A lot of repetitive work with nothing to show for it.",
        ],
      },
      {
        heading: "What we did",
        paras: [
          "Rebuilding the PDP for clarity and conversion",
          "We redesigned the page layout, variant selection, and subscription purchasing experience, keeping design and development tightly aligned so every decision was grounded in theme capabilities.",
          "Restructured page layout. We reorganized the content hierarchy so the most important information leads the experience: what the product is, what it does, and which option fits the customer's pet. New sections brought relevant product information forward in a way that felt clean rather than cluttered.",
          "Visual swatch variant selector. We replaced dropdown menus with visual swatches, letting shoppers see all available options at once and select without opening a menu. It's a small change that makes browsing feel completely different.",
          "Custom subscription widget. We integrated and styled a subscription purchasing widget to match the brand, positioned within the page hierarchy rather than appended below it.",
          "We also consolidated those 15-plus templates into a single universal product template that renders dynamic content for each product type. The client's team gets their time back.",
        ],
      },
      {
        heading: "The results",
        paras: [
          "More of the same traffic, turning into buyers",
          "After the redesign, Pet Releaf's conversion rate moved from 2.8% to 3.1%. That's a 10.7% relative improvement with no additional acquisition spend.",
          "For a brand already driving traffic, that kind of lift from page optimization is exactly the argument for investing in the buying experience before spending more on ads.",
          "Want to learn how we can help bring your vision to life? Get in touch.",
        ],
      },
    ],
  },
  "vrt-sync": {
    lead: "How Fetchly built VRT Sync's map-driven property management platform. Read our case study on custom business solution development using geolocation.",
    coverAlt: "VRT Sync cover image",
    stats: [
      { value: "Launched", label: "Fully operational platform" },
      { value: "4", label: "Stakeholder groups on one system" },
      { value: "Ready", label: "To scale to more communities" },
    ],
    meta: [
      { term: "Sector", value: "HOA & property management software" },
      { term: "Challenge", value: "HOA boards had no centralized system: maintenance, contractors and residents were tracked separately." },
      { term: "What we did", value: "A greenfield map-driven property platform with community mapping, contractor task management and invoice tracking." },
      { term: "Services", tags: ["Product design", "Web platform", "Mapping", "Custom software"] },
    ],
    layout: "steps",
    steps: [
      {
        title: "Why HOA Boards Needed a Centralized Maintenance System",
        body: "VRT Sync came to us with a vision but no existing system. They wanted to build a web platform that would modernize how HOA boards, property managers, and contractors coordinate on property maintenance. The core challenges: fragmented communication, limited contractor accountability, and no centralized way to track work or support informed decision-making across communities.",
        highlight: false,
      },
      {
        title: "How We Built a Map-Driven Property Management Platform",
        body: "We handled the full product build—web development, product design, software integration, and QA working together from the start. The platform centers on dynamic mapping powered by QGIS, paired with task management tools for property admins and contractors.",
        highlight: false,
      },
      {
        title: "Interactive Community Mapping Features",
        body: "Layered community maps showing infrastructure, irrigation zones, tree planting, and more give stakeholders complete visibility into property assets.",
        highlight: false,
      },
      {
        title: "Contractor Task Management and Invoice Tracking",
        body: "Task creation and management for contractors and maintenance teams, plus invoice tracking across service providers, keeps all work organized in one place.",
        highlight: false,
      },
      {
        title: "Property Maintenance Reporting Tools",
        body: "Reports for water usage, irrigation systems, and tree planting support data-driven decisions. Weekly QA cycles kept us catching bugs early and adapting to new requirements without losing momentum. Tightly scoped sprints and continuous alignment across teams meant we launched on time without cutting corners on code quality.",
        highlight: false,
      },
      {
        title: "Full Transparency for HOA Stakeholders",
        body: "VRT Sync launched with a fully operational platform and the foundation to scale as they add more communities. Every stakeholder—boards, managers, contractors, and residents—now has full transparency, leading to better customer satisfaction and faster, more informed decisions.",
        highlight: true,
      },
    ],
  },
};
