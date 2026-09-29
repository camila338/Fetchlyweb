import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge only knows Tailwind's stock scales, so the design system's
 * own `text-*`, `max-w-site-*` and spacing tokens have to be registered —
 * otherwise `text-display-1` is treated as a colour and dropped by
 * `text-foreground`.
 */
const FONT_SIZES = [
  "display-1",
  "display-2",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "body-lg",
  "body-md",
  "body",
  "body-sm",
  "body-xs",
  "tagline",
];

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: FONT_SIZES }],
      "max-w": [{ "max-w": ["site-sm", "site-md", "site-lg"] }],
      p: [{ p: ["page"] }],
      px: [{ px: ["page"] }],
      py: [{ py: ["page", "section-sm", "section-md", "section-lg"] }],
      pt: [{ pt: ["page", "section-sm", "section-md", "section-lg"] }],
      pb: [{ pb: ["page", "section-sm", "section-md", "section-lg"] }],
      m: [{ m: ["page"] }],
      "font-family": ["font-display"],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
