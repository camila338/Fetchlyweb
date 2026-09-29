"use client";

import { useRouter } from "next/navigation";
import * as React from "react";

import { Turnstile } from "@/components/turnstile";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

/** Zones offered at the top of the picker before the full IANA list. */
const COMMON_ZONES = [
  "America/New_York",
  "America/Chicago",
  "America/Denver",
  "America/Los_Angeles",
  "America/Sao_Paulo",
  "Europe/London",
  "Europe/Berlin",
  "Asia/Tokyo",
  "Australia/Sydney",
];

function zoneLabel(zone: string, at: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: zone,
    timeZoneName: "short",
  }).formatToParts(at);
  const abbreviation = parts.find((p) => p.type === "timeZoneName")?.value;
  const name = zone.replace(/_/g, " ");
  return abbreviation ? `${name} (${abbreviation})` : name;
}

function TimezoneSelect({
  value,
  onChange,
  id,
}: {
  value: string;
  onChange: (zone: string) => void;
  id: string;
}) {
  const { common, rest } = React.useMemo(() => {
    const now = new Date();
    const supported = Intl.supportedValuesOf("timeZone");
    const preferred = [...new Set([...COMMON_ZONES, value])].filter((zone) =>
      supported.includes(zone),
    );
    return {
      common: preferred.map((zone) => ({ zone, text: zoneLabel(zone, now) })),
      rest: supported
        .filter((zone) => !preferred.includes(zone))
        .map((zone) => ({ zone, text: zoneLabel(zone, now) })),
    };
  }, [value]);

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-body-sm text-muted-foreground">
        Times shown in
      </label>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-11 w-full max-w-sm rounded-lg border border-input bg-transparent px-3 text-body text-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        <optgroup label="Common">
          {common.map((option) => (
            <option key={option.zone} value={option.zone}>
              {option.text}
            </option>
          ))}
        </optgroup>
        <optgroup label="All time zones">
          {rest.map((option) => (
            <option key={option.zone} value={option.zone}>
              {option.text}
            </option>
          ))}
        </optgroup>
      </select>
    </div>
  );
}

function dayKey(date: Date) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

/** Step two: a month calendar of free days beside that day's 30-minute slots. */
export function SlotPicker({
  slots,
  leadId,
}: {
  slots: string[];
  leadId: string;
}) {
  const router = useRouter();
  const [token, setToken] = React.useState("");
  const [selectedSlot, setSelectedSlot] = React.useState<string>();
  const [booking, setBooking] = React.useState(false);
  const [error, setError] = React.useState<string>();
  const [timezone, setTimezone] = React.useState(
    () => Intl.DateTimeFormat().resolvedOptions().timeZone,
  );

  const byDay = React.useMemo(() => {
    const map = new Map<string, string[]>();
    for (const slot of slots) {
      const key = dayKey(new Date(slot));
      map.set(key, [...(map.get(key) ?? []), slot]);
    }
    return map;
  }, [slots]);

  const days = React.useMemo(
    () => [...byDay.keys()].map((key) => new Date(`${key}T12:00:00`)),
    [byDay],
  );

  const [selectedDay, setSelectedDay] = React.useState<Date | undefined>(days[0]);
  const daySlots = selectedDay ? (byDay.get(dayKey(selectedDay)) ?? []) : [];

  const timeFormat = React.useMemo(
    () =>
      new Intl.DateTimeFormat(undefined, {
        hour: "numeric",
        minute: "2-digit",
        timeZone: timezone,
      }),
    [timezone],
  );

  async function confirm() {
    if (!selectedSlot) return;
    if (!token) {
      setError("Just finishing a quick security check — try again in a second.");
      return;
    }

    setBooking(true);
    setError(undefined);

    const response = await fetch("/api/schedule", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        leadId,
        startTime: selectedSlot,
        turnstileToken: token,
        timezone,
      }),
    }).catch(() => null);

    if (response?.ok) {
      const { startTime, joinUrl } = await response.json();
      const params = new URLSearchParams({ t: startTime });
      if (joinUrl) params.set("j", joinUrl);
      params.set("z", timezone);
      router.push(`/contact/confirmed?${params}`);
      return;
    }

    setBooking(false);
    if (response?.status === 409) {
      setError("That time has just gone. Pick another, and we will hold it.");
      router.refresh();
    } else if (response?.status === 410) {
      setError("This link has expired. Please fill the form in again.");
    } else {
      setError(
        "Something went wrong on our side. We have your details and will be in touch.",
      );
    }
  }

  if (!slots.length) {
    return (
      <p className="text-body text-muted-foreground">
        No times are free in the next month. We have your details and will email
        you to find one.
      </p>
    );
  }

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="grid gap-6 md:grid-cols-[auto_minmax(0,1fr)] md:items-start">
        <div className="rounded-3xl border border-border bg-card p-2">
          <Calendar
            mode="single"
            selected={selectedDay}
            onSelect={(day) => {
              if (!day) return;
              setSelectedDay(day);
              setSelectedSlot(undefined);
            }}
            disabled={(day) => !byDay.has(dayKey(day))}
            startMonth={days[0]}
            endMonth={days[days.length - 1]}
            className="bg-transparent"
          />
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-mono text-tagline text-foreground uppercase">
            {selectedDay
              ? new Intl.DateTimeFormat(undefined, {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  timeZone: timezone,
                }).format(selectedDay)
              : "Pick a date"}
          </h2>

          <div className="grid max-h-80 grid-cols-2 gap-2 overflow-y-auto pr-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
            {daySlots.map((slot) => (
              <button
                key={slot}
                type="button"
                aria-pressed={selectedSlot === slot}
                onClick={() => setSelectedSlot(slot)}
                className={cn(
                  "rounded-lg border px-3 py-2.5 text-body-sm transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50 motion-reduce:transition-none",
                  selectedSlot === slot
                    ? "border-transparent bg-primary font-semibold text-primary-foreground"
                    : "border-border bg-card text-foreground hover:border-malibu-darker hover:bg-muted",
                )}
              >
                {timeFormat.format(new Date(slot))}
              </button>
            ))}
          </div>

          <TimezoneSelect
            id="booking-timezone"
            value={timezone}
            onChange={setTimezone}
          />
          <p className="text-body-sm text-muted-foreground">
            30 minutes, on Google Meet.
          </p>
        </div>
      </div>

      <Turnstile onToken={setToken} active={Boolean(selectedSlot)} />

      {error ? (
        <p role="alert" className="text-body-sm text-danger-dark">
          {error}
        </p>
      ) : null}

      <div className="sticky bottom-4 z-10 flex flex-col gap-3 rounded-2xl border border-border bg-card/95 p-4 shadow-lg backdrop-blur">
        {selectedSlot ? (
          <p className="text-body-sm text-foreground">
            <span className="text-muted-foreground">Selected: </span>
            {new Intl.DateTimeFormat(undefined, {
              weekday: "long",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit",
              timeZone: timezone,
            }).format(new Date(selectedSlot))}
          </p>
        ) : (
          <p className="text-body-sm text-muted-foreground">
            Choose a time to continue.
          </p>
        )}
        <Button
          type="button"
          size="block"
          onClick={confirm}
          disabled={!selectedSlot || booking}
          className="h-12 w-full text-body"
        >
          {booking ? "Booking…" : "Confirm this time"}
        </Button>
      </div>
    </div>
  );
}
