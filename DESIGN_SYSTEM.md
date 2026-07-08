# Design System — MKF_ANALYTICS_V1.0

Dark, terminal/executive-dashboard aesthetic. This doc is the single source of truth for styling — Tailwind config and component classes should trace back to these tokens.

## Concept
The site reads like a live BI dashboard / ops console rather than a traditional "creative" portfolio: monospace labels with underscores, card-based metric widgets, dotted-grid background texture, sidebar + top nav dual-navigation pattern.

## Color Tokens

| Token | Hex (approx) | Usage |
|---|---|---|
| `bg-base` | `#0a0e0d` / near-black | Page background |
| `bg-card` | `#111716` | Card/panel backgrounds |
| `border-subtle` | `#1f2926` | Card borders, dividers |
| `accent-primary` | `#2dd4bf` (teal/mint) | Primary accent — buttons, active nav, highlights, key metrics |
| `accent-highlight` | `#7c3aed` (violet, used sparingly) | Selection outline / focus ring (seen on card select state) |
| `text-primary` | `#f5f5f5` | Headings, primary text |
| `text-secondary` | `#a1a8a6` | Body copy, descriptions |
| `text-muted` | `#5c6664` | Labels, metadata, timestamps |
| `success` | `#2dd4bf` | Positive metrics (reuses accent) |

> ⚠️ Placeholder hexes — replace with exact values once exported from Google Stitch.

## Typography
- **Headings / Hero name:** Bold sans-serif, large scale (e.g. `Inter` or `Space Grotesk`)
- **Labels / nav / metrics:** Monospace, uppercase, underscore-separated (e.g. `JetBrains Mono`, `IBM Plex Mono`) — used for things like `EXECUTE_CONTACT`, `DATA_POINTS_PROCESSED`
- **Body copy:** Same sans-serif as headings, regular weight, `text-secondary` color

## Layout Patterns
- **Dual nav:** Left sidebar (Home / Analysis / Experience / Repository / System) + top bar (Dashboard / Metrics / Stack / Projects / Log) — reconcile these into one consistent nav model before final build (currently two conventions from the Stitch mockups)
- **Dotted-grid texture:** Subtle dot pattern on sidebar and section backgrounds
- **Cards:** Rounded corners (~8px), 1px subtle border, no heavy shadows — flat/dashboard style
- **Metric widgets:** Label (muted, monospace, uppercase) above large accent-colored value, small delta/context text below
- **Buttons:** Primary = solid teal fill, dark text; Secondary = outlined, transparent fill

## Responsive Behavior
- **Desktop:** Sidebar + content layout, multi-column metric grids
- **Mobile:** Sidebar collapses to a top identity card + stacked sections; single-column metric cards

## Reference Screens (from Stitch)
- Home / Dashboard (hero, professional summary, KPI strip, technical stack preview)
- Sidebar identity card (avatar, name, role label — currently reads `DATA_ANALYST`, not `SENIOR_DATA_ARCHITECT`)
- Top nav bar (Dashboard / Metrics / Stack / Projects / Log + `Execute_Contact` CTA)

## Open Design Decisions
- [ ] Finalize exact hex values from Stitch export
- [ ] Confirm font families and load via `index.css` / Tailwind config
- [ ] Reconcile sidebar nav labels (Home/Analysis/Experience/Repository/System) with top nav labels (Dashboard/Metrics/Stack/Projects/Log) — these currently overlap in purpose
