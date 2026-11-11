# Security notes

Marauder is a **static front-end demo**. It has no server application, no database, no accounts, no API and no payment integration. That removes most of the usual attack surface: there is no login to brute force, no session cookie to steal, no user data to access by object ID, and no query to inject.

## Current posture

- **Content Security Policy** — declared in `_headers` for hosts that support custom headers (Netlify, Cloudflare Pages) and in a `<meta http-equiv>` fallback on every page for hosts that do not (GitHub Pages). The live site runs on GitHub Pages, so the meta CSP is the policy in force there.
- **Security headers** — `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options` and `Cross-Origin-Opener-Policy` are in `_headers`. GitHub Pages ignores that file, so those headers are not sent there; only `Strict-Transport-Security` comes from the host, plus the meta CSP and referrer policy. That means clickjacking protection (`frame-ancestors`/`X-Frame-Options`) is **not active** on the current deployment. Move to Netlify or Cloudflare Pages to enforce it.
- **Internal documents** — `PRD.md`, `DESIGN-BRIEF.md`, `README.md`, `CREDITS.md`, `SECURITY.md`, `_arsip/` and `docs/` are excluded from the build on GitHub Pages via `_config.yml`. Netlify returns `404` for them via `_redirects`. Cloudflare Pages does not support a `404` status in `_redirects` (only redirect codes), so if you deploy there, leave these files out of the publish directory or add a Pages Function — do not rely on `_redirects` alone.
- **Contact form** — validation runs in the browser for demonstration only. The form is explicitly labelled as a demo, and submitting it shows “Demo form — nothing sent”. No data is transmitted or stored. It uses `method="post"` so a JavaScript failure does not put personal data in the URL.
- **No third-party requests** — fonts and images are self-hosted. There is no analytics, tag manager or CDN dependency.
- **No secrets** — the repository contains no API keys, tokens, passwords or environment files. Studio name, people, address, phone and email are fictional; the email uses the reserved `.example` domain.

## Before adding a real backend or checkout

The demo form and the catalogue are not a commerce implementation. If either becomes real, do not rely on the current client-side behaviour:

1. **Validate on the server** — name, email, topic, order reference, message and consent. Never trust the browser.
2. **Rate limit and filter spam on the server** — IP and email based limits, server-side honeypot check, and a challenge if abuse appears. The client-side honeypot is not a control.
3. **Keep price and stock server-authoritative** — the `data-price` attributes and the JSON-LD price are display values. A checkout must look up the product and price by ID on the server.
4. **Protect state-changing requests** — CSRF token, `SameSite` session cookie, `Secure`, `HttpOnly`, and authorization checks for every object.
5. **Do not log personal data** — avoid message bodies, email addresses and order references in application logs.
6. **Update the CSP** — if a form service or API is added, allow only its exact origin in `form-action`/`connect-src`; do not use `*`.

## Reporting

This is a portfolio demo with fictional data. If you find a problem in the static site, open an issue on the repository rather than sending personal data through the demo form.
