# WalkThePast — Project Guide

## What this is
A Next.js 16 / React 19 academic project for FRS 182. It's a self-guided walking tour of the northern end of Central Park, presented as a phone-shell prototype on the homepage.

## Tech stack
- **Next.js 16.2.4** with App Router — APIs and conventions may differ from older Next.js. Read `node_modules/next/dist/docs/` before writing any Next.js-specific code.
- **React 19.2.4**
- **TypeScript + Tailwind CSS**
- **Mapbox GL** — dynamically imported (client-side only) in `TourMap.tsx`. Requires `NEXT_PUBLIC_MAPBOX_TOKEN` env var.
- **Fonts** — Young Serif (`--font-young-serif`) for headings, Hedvig Letters Serif (`--font-hedvig`) for body. Applied via CSS variables from `layout.tsx`.

## Routes
| Path | Description |
|------|-------------|
| `/` | Homepage — interactive TourMap inside a phone shell mockup |
| `/primary-sources` | One primary source (map, photo, or PDF) per tour stop |
| `/class-connections` | How each stop connects to FRS 182 readings and discussions |
| `/artistic-statement` | Placeholder page, content not yet written |

## Key files
- `app/components/TourMap.tsx` — Client component. Renders a Mapbox map with 10 emoji markers. Three UI states: inactive (Start Tour panel), active (stop card with description + nav), details (full-text panel triggered by "Learn More"). All tour stop data lives in the `TOUR_STOPS` array in this file.
- `app/components/Nav.tsx` — Top nav with 4 links. Active link gets bold + underline via `usePathname`.
- `app/primary-sources/page.tsx` — `SOURCES` array drives rendering. Each source is `image` or `pdf`; images show a thumbnail preview, PDFs show an icon. If `src` is empty, a text-only fallback card renders.
- `app/class-connections/page.tsx` — `CONNECTIONS` array, one entry per stop.

## Tour stops (10 total, northern Central Park)
1. Vanderbilt Gate
2. Conservatory Garden
3. McGowan's Pass
4. Fort Clinton
5. Nutter's Battery
6. The Mount / Mount St. Vincent
7. Harlem Meer
8. Davis Center / former Lasker Rink and Pool
9. Huddlestone Arch
10. The Ravine

Stop order is consistent across `TOUR_STOPS` (TourMap), `SOURCES` (primary-sources), and `CONNECTIONS` (class-connections). Keep them in sync when editing.

## Data shape
```ts
// TourMap stop
{ name, emoji, coords: [lng, lat], description, details: string[] }

// Primary source
{ stop, name, sourceType: 'image' | 'pdf', src, title, description }

// Class connection
{ stop, name, text }
```

## Primary source assets
Static files live in `public/primary-sources/`. Referenced by `/primary-sources/<filename>` paths in the `SOURCES` array.
