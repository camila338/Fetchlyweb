"use client";

import { useRouter } from "next/navigation";
import * as React from "react";

import { Turnstile } from "@/components/turnstile";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input, Textarea } from "@/components/ui/input";
import { UTM_KEYS } from "@/lib/leads";

const UTM_STORAGE_KEY = "fetchly_utms";
const CONTROL = "h-11 rounded-lg px-3.5 text-body";

type Issues = Partial<Record<string, string[]>>;

/** Merges any UTM parameters on this URL into the ones already remembered. */
function captureUtms(): Record<string, string> {
  try {
    const stored = JSON.parse(
      sessionStorage.getItem(UTM_STORAGE_KEY) ?? "{}",
    ) as Record<string, string>;
    const params = new URLSearchParams(window.location.search);
    const merged = { ...stored };

    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) merged[key] = value;
    }

    if (Object.keys(merged).length) {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(merged));
    }
    return merged;
  } catch {
    return {};
  }
}

/** Step one of the contact flow. On success it hands off to the slot picker. */
export function LeadForm({ submitLabel }: { submitLabel: string }) {
  const router = useRouter();
  const [token, setToken] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);
  const [issues, setIssues] = React.useState<Issues>({});
  const [failed, setFailed] = React.useState(false);
  const [touched, setTouched] = React.useState(false);
  const [pendingChallenge, setPendingChallenge] = React.useState(false);

  React.useEffect(() => {
    captureUtms();
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setIssues({});
    setFailed(false);

    // The challenge has not finished yet — ask for a retry rather than
    // sending something the API will reject.
    if (!token) {
      setPendingChallenge(true);
      setSubmitting(false);
      return;
    }
    setPendingChallenge(false);

    const data = new FormData(event.currentTarget);
    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.get("name"),
        email: data.get("email"),
        company: data.get("company"),
        website: data.get("website"),
        message: data.get("message"),
        turnstileToken: token,
        utm: captureUtms(),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      }),
    }).catch(() => null);

    if (!response?.ok) {
      const body = await response?.json().catch(() => null);
      if (body?.issues) setIssues(body.issues);
      else setFailed(true);
      setSubmitting(false);
      return;
    }

    const { leadId } = await response.json();
    router.push(`/contact/schedule?l=${encodeURIComponent(leadId)}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      onFocusCapture={() => setTouched(true)}
      noValidate
      className="flex w-full flex-col gap-6"
    >
      <FieldGroup>
        <Field data-invalid={issues.name ? true : undefined}>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Input id="name" name="name" autoComplete="name" required className={CONTROL} />
          {issues.name ? <FieldError>{issues.name[0]}</FieldError> : null}
        </Field>

        <Field data-invalid={issues.email ? true : undefined}>
          <FieldLabel htmlFor="email">Work email</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={CONTROL}
          />
          {issues.email ? <FieldError>{issues.email[0]}</FieldError> : null}
        </Field>

        <Field data-invalid={issues.company ? true : undefined}>
          <FieldLabel htmlFor="company">Company</FieldLabel>
          <Input
            id="company"
            name="company"
            autoComplete="organization"
            required
            className={CONTROL}
          />
          {issues.company ? <FieldError>{issues.company[0]}</FieldError> : null}
        </Field>

        <Field data-invalid={issues.website ? true : undefined}>
          <FieldLabel htmlFor="website">Website (optional)</FieldLabel>
          <Input
            id="website"
            name="website"
            type="text"
            autoComplete="url"
            placeholder="acme.com"
            className={CONTROL}
          />
          {issues.website ? <FieldError>{issues.website[0]}</FieldError> : null}
        </Field>

        <Field data-invalid={issues.message ? true : undefined}>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Tell us about the project, the timeline, and what's in the way."
            className="min-h-32 rounded-lg px-3.5 py-3 text-body"
          />
          <FieldDescription>
            The more you tell us, the better prepared we are for the call.
          </FieldDescription>
          {issues.message ? <FieldError>{issues.message[0]}</FieldError> : null}
        </Field>
      </FieldGroup>

      <Turnstile onToken={setToken} active={touched} />

      {pendingChallenge ? (
        <p role="alert" className="text-body-sm text-muted-foreground">
          Just finishing a quick security check — try again in a second.
        </p>
      ) : null}

      {failed ? (
        <p role="alert" className="text-body-sm text-danger-dark">
          Something went wrong on our side. Try again, or email{" "}
          <a
            href="mailto:hello@fetch.ly"
            className="underline underline-offset-4"
          >
            hello@fetch.ly
          </a>
          .
        </p>
      ) : null}

      <Button
        type="submit"
        size="block"
        disabled={submitting}
        className="h-12 w-full text-body"
      >
        {submitting ? "Sending…" : submitLabel}
      </Button>

      <p className="text-body-sm text-muted-foreground">
        No newsletter, no drip sequence. We use your details to prepare for the
        call.
      </p>
    </form>
  );
}
