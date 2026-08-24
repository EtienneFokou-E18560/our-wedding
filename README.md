# Etienne & Nafisat — wedding site

Clarity-first static wedding site for [withjoy.com/etienne-and-nafisat](https://withjoy.com/etienne-and-nafisat).

**Live site (after GitHub Pages is enabled):** `https://etiennefokou-e18560.github.io/our-wedding/`

## Open locally

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploy on GitHub Pages

1. Push this repo to `main`.
2. In the repo on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The included workflow deploys automatically on every push to `main`.

## What’s optimized

- **Guest clarity first:** RSVP and schedule are the primary hero actions
- **Orangeburg / Nigeria facts only:** removed Joy demo placeholders (Seattle/DC travel, sample party bios)
- **Fast static page:** no SPA payload; photos are local assets
- **Mobile-ready:** sticky header, compact nav, readable timeline

RSVP, registry, and hotel blocks still deep-link to Joy so guest tools stay connected.
