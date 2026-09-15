# Portfolio

A single-page portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.

## Getting started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form setup (required for the form to actually send email)

The form at [src/components/sections/contact.tsx](src/components/sections/contact.tsx) posts to [src/app/api/contact/route.ts](src/app/api/contact/route.ts), which validates the payload with Zod again server-side and sends the email via [Resend](https://resend.com). Without configuration it fails gracefully — the API returns a clear error and the form shows an error toast — rather than pretending to succeed.

1. Sign up at [resend.com](https://resend.com) and create an API key.
2. Copy [.env.example](.env.example) to `.env.local` and fill in:
   - `RESEND_API_KEY` — from Resend.
   - `CONTACT_TO_EMAIL` — defaults to `pranavg9876@gmail.com`, where submissions land.
   - `CONTACT_FROM_EMAIL` — the "from" address. Resend's shared `onboarding@resend.dev` sender only delivers to your own Resend account's email, so for real production use [verify a domain](https://resend.com/domains) and use an address on it instead.
3. Restart `npm run dev` (env vars are only read at server start).
4. `.env.local` is already git-ignored — never commit real API keys.

**Prefer Nodemailer + Gmail instead of Resend?** Swap the body of the `POST` handler in `route.ts`: create a Gmail [App Password](https://myaccount.google.com/apppasswords), then use Nodemailer's `createTransport({ service: "gmail", auth: { user, pass } })` and `transporter.sendMail(...)` in place of the `resend.emails.send(...)` call — the Zod validation and error handling around it don't need to change.

## Before you publish

All copy lives in one place: [src/lib/data.ts](src/lib/data.ts). Update it, then check these:

- **Project repo links** — each project's `repo.href` in `data.ts` currently points at your GitHub profile (`github.com/pranav20030`), not a specific repository. Point each one at its actual repo, and add a `link` (live demo URL) for ClickShop or the Messenger App if either is deployed — a clickable demo converts much better than a screenshot for freelance clients.
- **Headshot** — the hero uses `public/pranav.jpeg` (a candid outdoor photo) via `site.headshotUrl` in `data.ts`. It's cropped with `object-[38%_32%]` in [hero.tsx](src/components/sections/hero.tsx) to center your face in the circle; if you swap in a front-facing headshot later, that offset will likely need adjusting (or can be removed for a centered crop). The near-duplicate `public/WhatsApp Image ....jpeg` looks like the original export — delete it once you've confirmed `pranav.jpeg` is the one you want kept.
- **Resume** — the floating "Download Resume" button ([src/components/floating-resume-button.tsx](src/components/floating-resume-button.tsx), bottom-right on every page) links to `/resume.pdf`; drop your actual resume at [public/resume.pdf](public/resume.pdf).
- **Project screenshots** — each card in [src/components/sections/projects.tsx](src/components/sections/projects.tsx) shows a gradient "Screenshot coming soon" placeholder inside a browser-frame mockup. Swap in real screenshots/GIFs of Adar, the Messenger App, ClickShop, the Campaign Management Module, and your Codeaegis dashboards once you have shareable versions (blur/redact anything company-confidential — the Codeaegis dashboards may need client sign-off before going public).
- **Testimonials** — `testimonials` in `data.ts` is empty, which renders the "coming soon" empty state. Add entries there once you have quotes.

Note: none of the current projects (Adar, Messenger App, ClickShop) involve Stripe identity/bank verification, so no case study was added for that — the "Notes before you use this" list mentioned it but it doesn't apply to this project set. If you do fintech/payments work elsewhere, add a project entry for it in `data.ts` and it'll pick up the same problem → solution → impact card treatment.

## Design notes

- Gradient accent tokens (`--accent-a/b/c`) live in [src/app/globals.css](src/app/globals.css) — change those three values to retheme the whole gradient system (hero blobs, gradient text, icon chips, hover glows).
- Scroll reveals use Framer Motion's `whileInView` ([src/components/reveal.tsx](src/components/reveal.tsx)) and respect `prefers-reduced-motion`.
- Brand icons (GitHub/LinkedIn) are hand-drawn SVGs in [src/components/icons.tsx](src/components/icons.tsx) — the installed `lucide-react` major version dropped brand/logo icons.

## Stack

React 19, Next.js 16, Tailwind CSS v4, shadcn/ui (Radix base), Framer Motion, next-themes for dark mode, sonner for toasts, Zod for validation, Resend for the contact form's outgoing email.
