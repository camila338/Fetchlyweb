import Image from "next/image";

import { LogoMarquee } from "@/components/sections/logo-marquee";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Stars } from "@/components/ui/stars";

const CELL =
  "glass relative rounded-xl [--glass-edge:var(--color-neutral)] [mask-image:radial-gradient(white,white)] [mask-size:100%_100%]";

const CAPTION =
  "pointer-events-none absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center rounded-full bg-neutral-lightest px-5 py-2.5 shadow-sm lg:top-3 lg:right-3 lg:bottom-auto lg:left-auto lg:translate-x-0 lg:px-3.5 lg:py-1.5";

const OVERLAY =
  "pointer-events-none absolute bottom-3 left-1/2 hidden h-auto -translate-x-1/2 rounded-lg shadow-lg lg:block";

type VideoCell = {
  slug: string;
  poster: string;
  posterSize: [number, number];
  label: string;
  logo: { src: string; alt: string; size: [number, number] };
  overlay: { src: string; size: [number, number]; className?: string };
  span: string;
};

const VIDEO_CELLS: VideoCell[] = [
  {
    slug: "oats",
    poster: "/images/home/oats-poster.avif",
    posterSize: [560, 968],
    label:
      "Oats Overnight packs taken from a cupboard, poured into a shaker and drunk",
    logo: { src: "/images/logos/oats-overnight.png", alt: "Oats Overnight", size: [160, 160] },
    overlay: {
      src: "/images/home/bento-oats-screen.webp",
      size: [898, 659],
      className: "w-[calc(100%-1.5rem)]",
    },
    span: "md:row-span-3 lg:row-auto lg:row-start-1 lg:row-end-2",
  },
  {
    slug: "spyderco",
    poster: "/images/home/spyderco-poster.avif",
    posterSize: [560, 966],
    label:
      "Spyderco's 50th anniversary film: archival shop photographs, their Colorado factory, and the Native 5 blade being machined",
    logo: { src: "/images/logos/spyderco.png", alt: "Spyderco", size: [450, 160] },
    overlay: {
      src: "/images/home/bento-spyderco-screen.webp",
      size: [898, 607],
      className: "w-[calc(100%-1.5rem)]",
    },
    span: "md:row-span-4 lg:row-auto lg:row-start-1 lg:row-end-3",
  },
  {
    slug: "casper",
    poster: "/images/home/casper-poster.jpg",
    posterSize: [406, 720],
    label: "The Casper storefront on mobile, scrolling its mattress range",
    logo: { src: "/images/logos/casper.png", alt: "Casper", size: [450, 160] },
    overlay: {
      src: "/images/home/bento-casper-screen.webp",
      size: [898, 476],
      className: "w-[calc(100%-1.5rem)]",
    },
    span: "md:row-span-4 lg:row-auto lg:row-start-1 lg:row-end-3",
  },
  {
    slug: "winc",
    poster: "/images/home/winc-poster.jpg",
    posterSize: [406, 720],
    label: "The Winc wine app on mobile, browsing bottles and adding to cart",
    logo: { src: "/images/logos/winc.png", alt: "Winc", size: [450, 160] },
    overlay: {
      src: "/images/home/bento-winc-screen.webp",
      size: [911, 903],
      className: "max-h-[46%] w-auto max-w-[calc(100%-1.5rem)]",
    },
    span: "md:row-span-4 lg:row-auto lg:row-start-2 lg:row-end-4",
  },
  {
    slug: "vast",
    poster: "/images/home/vast-poster.jpg",
    posterSize: [402, 720],
    label: "The VAST platform in use, moving through its dashboard views",
    logo: { src: "/images/logos/vast.png", alt: "VAST", size: [450, 160] },
    overlay: {
      src: "/images/home/bento-vast-screen.webp",
      size: [247, 82],
      className: "w-[calc(100%-1.5rem)]",
    },
    span: "md:row-span-4 lg:row-auto lg:row-start-2 lg:row-end-4",
  },
];

function VideoTile({ cell }: { cell: VideoCell }) {
  return (
    <figure className={`${CELL} ${cell.span}`}>
      <video
        src={`/videos/home/${cell.slug}.mp4`}
        poster={cell.poster}
        autoPlay
        loop
        muted
        playsInline
        aria-label={cell.label}
        className="h-full w-full object-cover motion-reduce:hidden"
      />
      <Image
        src={cell.poster}
        alt={cell.label}
        width={cell.posterSize[0]}
        height={cell.posterSize[1]}
        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
        className="hidden h-full w-full object-cover motion-reduce:block"
      />
      <Image
        src={cell.overlay.src}
        alt=""
        aria-hidden
        width={cell.overlay.size[0]}
        height={cell.overlay.size[1]}
        sizes="(min-width: 1024px) 22vw, 44vw"
        className={`${OVERLAY} ${cell.overlay.className ?? ""}`}
      />
      <figcaption className={CAPTION}>
        <Image
          src={cell.logo.src}
          alt={cell.logo.alt}
          width={cell.logo.size[0]}
          height={cell.logo.size[1]}
          sizes="(min-width: 1024px) 112px, 176px"
          className="max-h-11 w-auto max-w-44 object-contain lg:max-h-9 lg:max-w-32"
        />
      </figcaption>
    </figure>
  );
}

/**
 * The home page's masonry of client videos, a pull quote and a claim card,
 * followed by the client-logo strip — both lift together on scroll.
 */
export function Bento({
  logos,
}: {
  logos: readonly { name: string; src: string; square?: boolean }[];
}) {
  const [oats, spyderco, casper, winc, vast] = VIDEO_CELLS;

  return (
    <div className="reveal">
      <Section spacing="md" className="pb-6 md:pb-10">
        <div className="grid auto-rows-[16rem] gap-4 md:auto-rows-[5.5rem] md:grid-cols-2 lg:h-[52rem] lg:auto-rows-auto lg:grid-cols-4 lg:grid-rows-[minmax(0,29fr)_minmax(0,6fr)_minmax(0,29fr)]">
          <VideoTile cell={oats} />
          <VideoTile cell={spyderco} />

          <div
            className={`${CELL} flex flex-col justify-start p-5 sm:p-6 md:row-span-3 lg:row-auto lg:row-start-1 lg:row-end-2`}
          >
            <Heading
              lines={["Every role you need,", "on day one."]}
              className="relative text-h4 text-balance text-foreground"
            />
            <Image
              src="/images/home/bento-relay-race.avif"
              alt=""
              aria-hidden
              width={528}
              height={291}
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
              className="pointer-events-none absolute inset-x-0 bottom-0 max-h-[40%] w-full object-cover object-bottom opacity-90 md:object-contain"
            />
          </div>

          <VideoTile cell={casper} />
          <VideoTile cell={winc} />

          <figure
            className={`${CELL} flex flex-col justify-between gap-4 p-6 sm:p-8 md:row-span-3 lg:row-auto lg:row-start-3 lg:row-end-4`}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute right-2 bottom-0 h-[7rem] font-display text-[10rem] leading-none text-neutral-light/40 select-none [mask-image:radial-gradient(white,white)] [mask-size:100%_100%]"
            >
              “
            </span>
            <div className="relative flex items-start justify-between gap-3">
              <p className="flex items-center gap-2">
                <Stars className="text-lg" />
                <span className="sr-only">Rated 5 out of 5</span>
              </p>
              <Image
                src="/images/logos/gnc.png"
                alt="GNC"
                width={450}
                height={160}
                sizes="96px"
                className="max-h-8 w-auto max-w-20 shrink-0 object-contain"
              />
            </div>
            <blockquote className="relative text-body text-pretty text-foreground">
              They&apos;re fantastic partners who make themselves available
              whenever we need them.
            </blockquote>
            <figcaption className="relative flex items-center gap-3">
              <Image
                src="/images/avatars/danielle-waters.avif"
                alt=""
                aria-hidden
                width={400}
                height={400}
                sizes="40px"
                className="size-10 shrink-0 rounded-full object-cover"
              />
              <span className="text-body-sm text-muted-foreground">
                <span className="block font-semibold text-foreground">
                  Danielle Waters
                </span>
                Senior Digital Product Manager, GNC
              </span>
            </figcaption>
          </figure>

          <VideoTile cell={vast} />

          <figure
            className={`${CELL} md:row-span-3 lg:row-auto lg:row-start-3 lg:row-end-4`}
          >
            <Image
              src="/images/home/bento-shopify-badge.avif"
              alt="Shopify Plus partner badge over a product photograph"
              width={984}
              height={1358}
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
              className="h-full w-full object-cover"
            />
          </figure>
        </div>
      </Section>

      <LogoMarquee title="Trusted by brands you know" logos={logos} />
    </div>
  );
}
