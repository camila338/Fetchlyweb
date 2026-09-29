import { cn } from "@/lib/utils";

/**
 * The circular "we help companies build great products" wordmark. It rotates
 * as it scrolls through the viewport.
 *
 * `id` must be unique when more than one is on the page, because the text is
 * laid out along a referenced `<path>`.
 */
export function RingWordmark({
  className,
  id = "ring-path",
}: {
  className?: string;
  id?: string;
}) {
  return (
    <svg viewBox="0 0 1512 1512" aria-hidden className={cn("ring-spin overflow-visible", className)}>
      <defs>
        <path
          id={id}
          d="M 244,756 a 512,512 0 1,1 1024,0 a 512,512 0 1,1 -1024,0"
        />
      </defs>
      <g>
        <text
          fill="var(--color-malibu)"
          fontSize="126"
          fontStyle="italic"
          fontWeight="600"
          letterSpacing="0.02em"
          className="font-display"
        >
          <textPath href={`#${id}`} startOffset="0%">
            WE HELP COMPANIES BUILD GREAT PRODUCTS •
          </textPath>
        </text>
      </g>
    </svg>
  );
}
