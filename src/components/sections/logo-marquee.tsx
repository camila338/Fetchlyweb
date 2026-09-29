import Image from "next/image";

import { Heading } from "@/components/ui/heading";
import { Marquee } from "@/components/ui/marquee";
import { Section } from "@/components/ui/section";

type Logo = { name: string; src: string; square?: boolean };

/** Centred eyebrow heading over a slow, full-bleed logo marquee. */
export function LogoMarquee({ title, logos }: { title: string; logos: readonly Logo[] }) {
  return (
    <div className="overflow-hidden">
      <Section
        spacing="sm"
        className="py-0 pt-8 md:py-12 md:pt-10 xl:py-section-sm"
      >
        <Heading
          lines={[title]}
          className="text-center text-h6 text-balance text-muted-foreground"
        />
      </Section>
      <div className="py-5 [--duration:44s] [--gap:3.5rem] md:py-7">
        <Marquee>
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex h-12 w-28 items-center justify-center md:w-32"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.square ? 160 : 450}
                height={160}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
