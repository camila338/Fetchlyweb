import { z } from "zod";

/** Query parameters worth keeping from the first page view. */
export const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
] as const;

export const leadSchema = z.object({
  name: z.string().trim().min(1, "Tell us your name").max(120),
  email: z.email("Check the email address").max(254),
  company: z.string().trim().min(1, "Tell us your company").max(200),
  website: z
    .string()
    .trim()
    .max(300)
    .transform((value) =>
      value && !/^https?:\/\//i.test(value) ? `https://${value}` : value,
    )
    .pipe(z.url("Check the website address").or(z.literal(""))),
  message: z.string().trim().min(1, "Tell us what you need").max(5000),
  turnstileToken: z.string().min(1),
  utm: z.record(z.string(), z.string()).default({}),
  timezone: z.string().min(1).default("America/Denver"),
});

export const scheduleSchema = z.object({
  leadId: z.string().min(1),
  startTime: z.iso.datetime(),
  turnstileToken: z.string().min(1),
  timezone: z.string().min(1).optional(),
});

export type Lead = z.infer<typeof leadSchema> & {
  id: string;
  createdAt: number;
  startTime?: string;
};

/**
 * Leads live in memory so the flow works out of the box. Swap this for your
 * CRM or database — the two API routes are the only callers.
 */
const leads = new Map<string, Lead>();

/** A lead link is good for an hour, matching the 410 the slot picker handles. */
const LEAD_TTL_MS = 60 * 60 * 1000;

export function createLead(input: z.infer<typeof leadSchema>): Lead {
  const lead: Lead = { ...input, id: crypto.randomUUID(), createdAt: Date.now() };
  leads.set(lead.id, lead);
  return lead;
}

export function getLead(id: string): Lead | undefined {
  const lead = leads.get(id);
  if (!lead) return undefined;
  if (Date.now() - lead.createdAt > LEAD_TTL_MS) {
    leads.delete(id);
    return undefined;
  }
  return lead;
}

export function bookLead(id: string, startTime: string) {
  const lead = getLead(id);
  if (!lead) return undefined;
  lead.startTime = startTime;
  return lead;
}

/** Slots already taken. Replace with a real calendar lookup. */
const booked = new Set<string>();

export function isTaken(startTime: string) {
  return booked.has(startTime);
}

export function take(startTime: string) {
  booked.add(startTime);
}

/**
 * Thirty-minute slots, 9am–5pm on weekdays for the next four weeks, in the
 * company's own timezone. Replace with your calendar's free/busy query.
 */
export function availableSlots(now = new Date()): string[] {
  const slots: string[] = [];
  const start = new Date(now);
  start.setUTCMinutes(0, 0, 0);

  for (let day = 1; day <= 28; day += 1) {
    const date = new Date(start);
    date.setUTCDate(date.getUTCDate() + day);
    const weekday = date.getUTCDay();
    if (weekday === 0 || weekday === 6) continue;

    for (let halfHour = 0; halfHour < 16; halfHour += 1) {
      const slot = new Date(date);
      // 09:00–17:00 America/Denver is 15:00–23:00 UTC outside DST.
      slot.setUTCHours(15 + Math.floor(halfHour / 2), (halfHour % 2) * 30, 0, 0);
      const iso = slot.toISOString();
      if (!booked.has(iso)) slots.push(iso);
    }
  }

  return slots;
}

export function verifyTurnstile(token: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  // Without a secret configured the widget is running on Cloudflare's test
  // key, which issues tokens that no backend can meaningfully verify.
  if (!secret) return Promise.resolve(Boolean(token));

  return fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  })
    .then((res) => res.json())
    .then((data: { success?: boolean }) => Boolean(data.success))
    .catch(() => false);
}
