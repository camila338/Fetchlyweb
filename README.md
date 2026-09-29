# Fetchly

A Next.js rebuild of the Fetchly marketing site.

## Running it

```bash
npm install
npm run dev
```

Node 22 or newer. On this machine Node lives in `~/.local/node`, so
`./dev.sh` puts it on `PATH` before starting the dev server.

```bash
npm run build && npm start   # production
```

## Layout

```
src/
  app/          routes; one file per page, plus the two contact API handlers
  components/   layout chrome and page sections
    ui/         design-system primitives (button, accordion, marquee, …)
    sections/   composed blocks shared across pages
  content/      all copy and data, kept out of the components
  lib/          cn() and the contact-form lead store
public/images/  photography, logos and product shots
public/videos/  the home page bento clips
src/fonts/      Marjorie, the display face
```

`src/app/globals.css` holds the whole design system: the brand scales, the
fluid type ramp, the layout rhythm, and the custom utilities (`hero-plate`,
`ink-bloom`, `light-ray`, `glass`, `reveal`, `ring-spin`).

Copy lives in `src/content/`, so editing a headline, a plan or a case study
never means touching a component.

## The contact flow

Three steps: the form (`/contact`), the slot picker (`/contact/schedule`) and
the confirmation (`/contact/confirmed`).

`POST /api/lead` validates with zod, checks the Cloudflare Turnstile token and
returns a lead id. `POST /api/schedule` books a slot against that lead.

Both are backed by `src/lib/leads.ts`, which keeps leads and bookings **in
memory** and generates weekday 09:00–17:00 slots. Point `createLead`,
`availableSlots` and `take` at your CRM and calendar to make it real.

Turnstile defaults to Cloudflare's public test key. Set `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
and `TURNSTILE_SECRET_KEY` to verify tokens for real.

## Environment

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin used by the metadata. Defaults to `http://localhost:3000`. |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Turnstile widget key. Defaults to Cloudflare's always-passes test key. |
| `TURNSTILE_SECRET_KEY` | Turnstile server key. Without it, tokens are accepted unverified. |
