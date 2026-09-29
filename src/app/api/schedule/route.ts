import { NextResponse } from "next/server";

import {
  bookLead,
  getLead,
  isTaken,
  scheduleSchema,
  take,
  verifyTurnstile,
} from "@/lib/leads";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = scheduleSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "invalid" }, { status: 422 });
  }

  const { leadId, startTime, turnstileToken } = parsed.data;

  if (!(await verifyTurnstile(turnstileToken))) {
    return NextResponse.json({ error: "challenge_failed" }, { status: 403 });
  }

  // The lead link has expired, so the form has to be filled in again.
  if (!getLead(leadId)) {
    return NextResponse.json({ error: "expired" }, { status: 410 });
  }

  if (isTaken(startTime)) {
    return NextResponse.json({ error: "taken" }, { status: 409 });
  }

  take(startTime);
  bookLead(leadId, startTime);

  // Hook your conferencing provider in here to return a real joinUrl.
  return NextResponse.json({ startTime, joinUrl: null });
}
