# DomainWatch Marketing Website

This repository contains the static marketing website for **DomainWatch**, a fictitious SaaS platform that helps agencies and managed service providers monitor their clients' domains and DNS infrastructure. The site is designed to feel production–ready and includes multiple pages, responsive layouts, polished animations and realistic product mockups.

## Structure

- `index.html` – Homepage with hero section, feature overview, product showcase, testimonials, pricing preview, FAQ and call‑to‑action.
- `features.html` – Detailed breakdown of the product’s capabilities including DNS monitoring, SSL/TLS checks, email deliverability, website health, portfolios and integrations.
- `pricing.html` – Transparent pricing tiers with monthly/annual toggle, plan comparison and billing FAQ.
- `docs.html` – Help centre landing page with search box and high‑level documentation categories.
- `blog.html` – Blog index with article previews covering DNS operations, email authentication and monitoring best practices.
- `about.html` – Company story, mission, values and team introduction.
- `contact.html` – Contact form for sales inquiries or support requests.
- `dashboard.html` – Demo product dashboard showing a portfolio of domains, health statuses and recent events.
- `css/style.css` – Comprehensive stylesheet defining variables, layout utilities, sections, components, responsive behaviour, animations and more.
- `js/main.js` – Handles mobile navigation toggle, FAQ accordion logic, reveal animations and pricing toggle functionality.
- `README.md` – This document.

## Running Locally

This is a static site and does not require any build tooling. To preview it locally:

1. Navigate into the `domainwatch` directory:

   ```bash
   cd domainwatch
   ```
2. Start a simple HTTP server (for example using Python):

   ```bash
   python3 -m http.server 8000
   ```

3. Open your browser and navigate to `http://localhost:8000/index.html` to view the homepage. All other pages are accessible via their respective paths.

Alternatively, you can simply open `index.html` directly in your browser, but some interactive features (such as script modules) may be restricted when opened via the `file://` protocol.

## Backend Integration Notes

DomainWatch’s monitoring functionality is conceptually powered by open‑source CLI tools such as `dig`, `whois`, `openssl`, `curl` and SMTP validators. The static dashboard and features on this site assume a backend that:

- Polls domain records, SSL certificates and websites at configurable intervals.
- Parses and compares results to detect changes, expirations or failures.
- Generates alerts delivered via email, Slack, Teams or webhooks.
- Stores historical data for audit trails and reporting.
- Exposes data via a secure API consumed by the dashboard (e.g., JSON endpoints for portfolios, domains, statuses and events).

When connecting a real backend, map the elements on the dashboard and reports to these API endpoints. For example:

- **Domain grid** – `GET /api/portfolios/{id}/domains` returning status summaries.
- **Recent events** – `GET /api/portfolios/{id}/events?limit=10` returning timestamped change logs.
- **Pricing** – Could be enforced via user and subscription management on the backend.

Feel free to adapt and extend the frontend to fit your actual data structures and workflows.