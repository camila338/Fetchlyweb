import { Barlow } from "next/font/google";

/**
 * Barlow is the Ampure product's own type. It is loaded here rather than in the
 * root layout so it only ships for the pages that render the BMID demo.
 */
export const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});
