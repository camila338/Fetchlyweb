"use client";

import * as React from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      reset: (id: string) => void;
      remove: (id: string) => void;
    };
    onTurnstileLoad?: () => void;
  }
}

const SCRIPT_ID = "cf-turnstile-script";

/**
 * Cloudflare Turnstile widget. It only loads once the form is `active` (first
 * focus), so the script never costs anything on a page nobody interacts with.
 *
 * The default site key is Cloudflare's public always-passes test key; set
 * `NEXT_PUBLIC_TURNSTILE_SITE_KEY` for a real one.
 */
export function Turnstile({
  onToken,
  active,
}: {
  onToken: (token: string) => void;
  active: boolean;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const handler = React.useRef(onToken);

  React.useEffect(() => {
    handler.current = onToken;
  }, [onToken]);

  React.useEffect(() => {
    if (!active) return;
    const el = ref.current;
    if (!el) return;

    let widgetId: string | undefined;

    const render = () => {
      if (!window.turnstile || !el || widgetId) return;
      widgetId = window.turnstile.render(el, {
        sitekey:
          process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ??
          "1x00000000000000000000AA",
        callback: (token: string) => handler.current(token),
        "expired-callback": () =>
          widgetId && window.turnstile?.reset(widgetId),
        "error-callback": () => handler.current(""),
      });
    };

    if (window.turnstile) {
      render();
    } else {
      window.onTurnstileLoad = render;
      if (!document.getElementById(SCRIPT_ID)) {
        const script = document.createElement("script");
        script.id = SCRIPT_ID;
        script.src =
          "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad&render=explicit";
        script.async = true;
        document.head.append(script);
      }
    }

    return () => {
      if (widgetId) window.turnstile?.remove(widgetId);
    };
  }, [active]);

  return <div ref={ref} />;
}
