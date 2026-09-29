import { NextResponse } from "next/server";
import { z } from "zod";

import { createLead, leadSchema, verifyTurnstile } from "@/lib/leads";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = leadSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { issues: z.flattenError(parsed.error).fieldErrors },
      { status: 422 },
    );
  }

  if (!(await verifyTurnstile(parsed.data.turnstileToken))) {
    return NextResponse.json({ error: "challenge_failed" }, { status: 403 });
  }

  const lead = createLead(parsed.data);

  return NextResponse.json({ leadId: lead.id });
}
