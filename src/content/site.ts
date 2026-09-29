export const SITE = {
  name: "Fetchly",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "hello@fetch.ly",
} as const;

export const SERVICES = [
  {
    href: "/ecommerce",
    icon: "store",
    title: "Ecommerce",
    description:
      "Development of Ecommerce Shopify and custom storefronts: builds, integrations, migrations.",
  },
  {
    href: "/web-and-mobile",
    icon: "monitor-smartphone",
    title: "Web and Mobile",
    description:
      "Development of Web and Mobile products and mobile apps, from architecture to launch.",
  },
  {
    href: "/designops",
    icon: "pen-tool",
    title: "DesignOps",
    description:
      "A senior product designer embedded in your team, at a flat monthly rate.",
  },
] as const;

export const PRIMARY_NAV = [
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/work", label: "Our Work" },
  { href: "/blog", label: "Blog" },
] as const;

export const FOOTER_NAV = [
  [
    { href: "/", label: "Home" },
    { href: "/pricing", label: "Pricing" },
  ],
  [
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/work", label: "Work" },
  ],
  [
    { href: "/ecommerce", label: "Ecomm" },
    { href: "/faq", label: "FAQ" },
  ],
] as const;

/** Client logos on the dark footer strip and the light "trusted by" rows. */
export const CLIENT_LOGOS = [
  { name: "Casper", slug: "casper" },
  { name: "Resident", slug: "resident" },
  { name: "Oats Overnight", slug: "oats-overnight" },
  { name: "Winc", slug: "winc" },
  { name: "City Winery", slug: "city-winery" },
  { name: "Spyderco", slug: "spyderco" },
  { name: "Container Alliance", slug: "container-alliance" },
  { name: "Lowe's", slug: "lowes" },
  { name: "VAST", slug: "vast" },
  { name: "Golden Globes", slug: "golden-globes" },
] as const;
