"use client";

import { useReducedMotion } from "motion/react";
import * as React from "react";

const CODE = `import { useQuery } from "@tanstack/react-query";

export function useOrders(userId: string) {
  return useQuery({
    queryKey: ["orders", userId],
    queryFn: () => api.get(\`/users/\${userId}/orders\`),
    staleTime: 60_000,
  });
}

export default function OrdersScreen({ userId }: Props) {
  const { data, isLoading } = useOrders(userId);
  if (isLoading) return <Skeleton rows={6} />;

  return (
    <FlatList
      data={data.items}
      keyExtractor={(order) => order.id}
      renderItem={({ item }) => <OrderRow {...item} />}
    />
  );
}
`;

const KEYWORDS =
  /^(import|from|export|default|function|return|const|if|await|async|new)$/;

type Token = { text: string; cls: string };

function tokenize(src: string): Token[] {
  const parts = src.match(
    /"[^"\n]*"|`[^`]*`|\b\w+\b|\s+|[^\w\s]/g,
  ) as string[];
  return parts.map((text) => {
    let cls = "";
    if (text[0] === '"' || text[0] === "`") cls = "text-spring-green-darker";
    else if (KEYWORDS.test(text)) cls = "text-info";
    else if (/^[A-Z]\w*$/.test(text)) cls = "text-malibu-darker";
    return { text, cls };
  });
}

const TOKENS = tokenize(CODE);
const TOTAL = CODE.length;
const TICK_MS = 28;
const CHARS_PER_TICK = 2;
const HOLD_TICKS = 90;

/**
 * Large, low-opacity block of code that types itself out behind a hero
 * visual, then restarts. Purely decorative; static under reduced motion.
 */
export function CodeBackdrop({ className }: { className?: string }) {
  const reduced = useReducedMotion();
  const [count, setCount] = React.useState(reduced ? TOTAL : 0);

  React.useEffect(() => {
    if (reduced) return;
    let n = 0;
    const id = setInterval(() => {
      n += CHARS_PER_TICK;
      if (n > TOTAL + HOLD_TICKS * CHARS_PER_TICK) n = 0;
      setCount(Math.min(n, TOTAL));
    }, TICK_MS);
    return () => clearInterval(id);
  }, [reduced]);

  let remaining = count;
  const spans: React.ReactNode[] = [];
  for (let i = 0; i < TOKENS.length && remaining > 0; i++) {
    const { text, cls } = TOKENS[i];
    const shown = text.slice(0, remaining);
    remaining -= shown.length;
    spans.push(
      <span key={i} className={cls}>
        {shown}
      </span>,
    );
  }

  return (
    <div
      aria-hidden
      className={`pointer-events-none overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_65%,transparent_100%)] ${className ?? ""}`}
    >
      <pre className="m-0 p-6 font-mono text-[1.15rem] leading-8 whitespace-pre text-malibu-darkest/45 select-none">
        {spans}
        <span className="ml-px inline-block h-4 w-[7px] translate-y-0.5 animate-pulse bg-malibu-darker/60" />
      </pre>
    </div>
  );
}
