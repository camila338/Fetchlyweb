export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  /** Logo shown top-right of the card. `mono` logos are flat SVGs. */
  logo?: { src: string; alt: string; width?: number; height?: number };
  avatar?: string;
};

/** The full set, used on the home page. */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The process feels much more like their team is an extension of your own.",
    name: "Spencer Steffen",
    role: "VP of Engineering, Oats Overnight",
    logo: {
      src: "/images/logos/oats-overnight.png",
      alt: "Oats Overnight",
      width: 160,
      height: 160,
    },
    avatar: "/images/avatars/spencer-steffen.avif",
  },
  {
    quote:
      "Their work to understand a client's needs and goals for a project was impressive.",
    name: "Dan Mulligan",
    role: "Principal, YellowDog",
    logo: { src: "/images/logos/yellowdog.png", alt: "YellowDog" },
    avatar: "/images/avatars/dan-mulligan.avif",
  },
  {
    quote:
      "They're fantastic partners who make themselves available whenever we need them.",
    name: "Danielle Waters",
    role: "Senior Digital Product Manager, GNC",
    logo: { src: "/images/logos/gnc.png", alt: "GNC" },
    avatar: "/images/avatars/danielle-waters.avif",
  },
  {
    quote:
      "They feel like employees of our company and are always available if we needed them.",
    name: "Anonymous",
    role: "Founder, Fastr",
    logo: { src: "/images/logos-mono/fastr.svg", alt: "Fastr" },
  },
  {
    quote: "Fetchly Labs has a customer-forward approach.",
    name: "Mike Colich",
    role: "Executive, North Canna",
    logo: { src: "/images/logos/north-canna.png", alt: "North Canna Co." },
  },
  {
    quote:
      "The app is high quality, both in terms of appearance and functionality.",
    name: "Douglas H. Clements, Ph.D.",
    role: "Distinguished University Professor, University of Denver",
    logo: { src: "/images/logos-mono/denver.svg", alt: "University of Denver" },
    avatar: "/images/team/douglas-clements.avif",
  },
  {
    quote:
      "Fast, thoughtful, and easy to work with. The user experience speaks for itself.",
    name: "Ethan Walkers",
    role: "Product Manager",
  },
];

/**
 * The shorter set the pricing and service pages run. It is the first five
 * quotes, and the Fastr one appears there without its logo.
 */
export const SHORT_TESTIMONIALS: Testimonial[] = TESTIMONIALS.slice(0, 5).map(
  (testimonial) =>
    testimonial.name === "Anonymous"
      ? { ...testimonial, logo: undefined }
      : testimonial,
);
