import { Marquee } from "@/components/ui/marquee";
import { STACK_MARKS } from "@/content/about";

/** Dark-band marquee: each mark is knocked out to white. */
export function StackMarquee() {
  return (
    <div className="overflow-hidden py-8 md:py-10">
      <div>
        <Marquee className="[--duration:90s] [--gap:5rem]">
          {STACK_MARKS.map((mark) => (
            <div
              key={mark.name}
              className={`flex items-center justify-center ${mark.height}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={mark.src}
                alt={mark.name}
                className="h-full w-auto object-contain brightness-0 invert"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
