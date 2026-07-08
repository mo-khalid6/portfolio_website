# Pages & Sections

Maps the site's information architecture to the actual components in `src/components/`.

## Navigation
Dual nav pattern from the Stitch design:
- **Sidebar** (desktop): Home / Analysis / Experience / Repository / System
- **Top bar**: Dashboard / Metrics / Stack / Projects / Log + `Execute_Contact` CTA
- **Mobile:** Sidebar collapses into a stacked identity card + section list

> Decide whether to keep both nav conventions or unify into one — see open item in `DESIGN_SYSTEM.md`.

---

## 1. Hero (`Hero.tsx`)
- Status pill: `PORTFOLIO_CORE_ACTIVE`
- Name: Muhammad Fouad
- Title: Data Analyst | SQL · Power BI · Python
- Short value-prop line (from Professional Summary, condensed)
- CTAs: `View Projects` / `Download CV` / `Contact Me`

## 2. About / Professional Summary (`About.tsx`)
- Full professional summary text (see `CONTENT.md`)
- KPI strip: Experience (5+ Yrs), Analyzed (100K+), Certifications (8), Accuracy (100%)

## 3. Skills / Stack (`Skills.tsx`)
Grouped pill/tag clusters per category:
- Data Analysis & Query
- Data Preprocessing & ETL
- Automation & Scripting
- Database Management
- Tools & Platforms
- Machine Learning (Foundational)

Also acts as the "System" page content — certifications shown as a checklist, languages as proficiency bars.

## 4. Experience / Log (`Experience.tsx`)
Vertical timeline, 3 entries (reverse chronological):
1. Anti-Piracy & Data Specialist — Cyber Theft Watch
2. Data Specialist — Welz for Import & Export
3. Data Entry Operator — Rania Abu Bakr Pharmacies

Each styled as a log entry: date, role/company header, bullet achievements.

## 5. Projects / Repository (`Projects.tsx`)
Card grid, repo-style:
1. Sentiment AI
2. Power BI Executive Dashboard Theme
3. Telecom Customer Churn Data Model
4. Interactive Sales KPI Dashboard

Each card: title, description, tech-stack tags, status badge, link-out button.

## 6. Certifications (`Certifications.tsx`)
Compact list/grid of 7 certifications with issuing platform and year.

## 7. Contact (`Contact.tsx`)
- Email, phone, LinkedIn, GitHub as terminal-style key-value rows
- Simple contact form (Name, Email, Message)
- Social buttons

## 8. Footer (`Footer.tsx`)
- Repeat contact links
- Copyright / built-with note

## Utility
- `Navbar.tsx` — top/sidebar navigation, active-link state, `Execute_Contact` CTA
- `ScrollToTop.tsx` — scroll-to-top behavior on route change

---

## Not Yet Built (per Stitch mockups, pending)
- Dedicated Analysis/Metrics page with chart widgets and a metrics history table
- Expandable/collapsible detail state on Experience log entries
