# PathBridge - Landing Page Documentation

PathBridge is a career platform designed to bridge the gap from campus to career. It helps junior candidates land their ideal jobs through skill-gap analysis, personalized learning paths, and AI-driven interview coaching.

This document outlines the architecture, structure, and features of the project's landing pages.

## 🛠 Tech Stack

- **HTML5 Semantic**: Clean markup structured for accessibility and SEO best practices.
- **CSS3**: Custom stylesheet (`./css/main.css`), shared across every page.
- **Google Fonts & Icons**: Inter typography and Material Symbols Outlined for UI iconography.
- **JavaScript (ES6+)**: Localization script (`./js/i18n.js`) loaded with the `defer` attribute on every page.

This is a **static site**: there is no backend, no build step, and no client-side persistence. It's meant to be opened directly or served from any static file host.

## Project Directory Structure

```
├── index.html                    # Main landing page markup
├── css/
│   └── main.css                  # Global and component styles (shared by all pages)
├── js/
│   └── i18n.js                   # Multi-language switching logic (ES/EN)
├── images/                       # Visual assets (hero.jpg, avatars, etc.)
└── pages/                        # Secondary/internal pages
    ├── beneficios.html           # Full benefits page (candidates + companies + AI)
    ├── jobs.html                 # Job board with mock listings and match scores
    └── career-advice.html        # Resource center: articles and templates
```

Pages inside `pages/` reference shared assets with relative paths (`../css/main.css`, `../js/i18n.js`, `../images/`) and link back to the home page with `../index.html`.

## Page Sections Overview

### `index.html` — Home

1. **Header & Navigation**
   Sticky top navigation bar featuring:
    - Brand logo (**not translated** — stays "PathBridge" in every language).
    - Primary site links: Inicio, Beneficios, Jobs, Career Advice.
    - Language switcher (ES / EN).
    - No account-related actions (no Sign In / Join Now buttons — the site does not manage accounts).

2. **Hero Section**
   High-impact introduction featuring:
    - Core value proposition (title + subtitle).
    - A single call-to-action button, **"Ir a la aplicación" / "Go to the app"**, placed right under the subtitle. It links out to the actual PathBridge web app (`https://app.pathbridge.com` — replace with the real production URL once available).
    - Hero image.
    - There is no search bar and no "trusted companies" logo strip on this page; the hero's only job is to explain the value proposition and send the visitor into the app.

3. **How It Works**
   A 4-step grid explaining the candidate workflow:
    - **Gap Analysis** — comparing candidate profiles against job requirements.
    - **Study Plan** — curated courses from platforms such as Platzi and Udemy.
    - **AI Coach Training** — interview simulations powered by artificial intelligence.
    - **Job Ready** — tracking candidate progress until they are ready to apply and get hired.

4. **Benefits Section** (`id="beneficios"`)
   An alternating layout highlighting the value provided to different platform users:
    - **Candidates** — tailored learning plans with visual skill-proficiency indicators.
    - **Companies** — access to verified junior talent with high job-match rates (conceptual/marketing content only; there is no dedicated Companies page in this project).
    - **AI Assistant** — a 24/7 interview coach through an interactive chat mock-up.
      A "Ver todos los beneficios" link points to the extended `pages/beneficios.html`.

5. **Boost Your Career**
   Secondary feature grid reinforcing the main benefits and capabilities of the PathBridge platform.

6. **Call to Action (CTA)**
   High-conversion section inviting users to start their career diagnosis and discover their current skill gaps.

7. **Success Stories**
   Testimonial cards featuring user avatars and feedback from candidates who have used the platform.

8. **Footer**
   Institutional and legal information, including About, Contact, Privacy Policy, Terms of Service, Help Center and copyright — **fully translated**, like every other section on the page.

### `pages/jobs.html` — Jobs

- Filter bar (keyword, location, level) — presentational only, since the page is static.
- A list of mock job cards, each showing company, location, contract type, required skills and a compatibility ("match") percentage.
- Closing CTA that links out to the real application instead of a fake "activate alerts" button.

### `pages/career-advice.html` — Career Advice

- Category chips (Resume & portfolio, Interviews, Technical skills, First job).
- A grid of article cards (title, excerpt, tag, estimated reading time).
- A "recruiter-reviewed templates" block listing the kind of resources available inside the app — with **no download buttons**, since this is a static page with no files to serve.

### `pages/beneficios.html` — Beneficios (full page)

- The same three value blocks as the home page (Candidates / Companies / AI Assistant), reused for a dedicated, deeper page.
- An FAQ accordion covering how the match score is calculated, data privacy, and whether the AI Coach replaces a real interview.
- Closing CTA linking to the real application.

> **Note:** There is intentionally **no Companies page** in this project. The "For companies" messaging still lives inside the Benefits blocks (home and `beneficios.html`) as marketing copy, but it doesn't link out to a standalone page or any pricing/plans content.

## Internationalization (i18n) System

The markup is designed with multi-language support in mind. The default language is **Spanish (ES)**, with **English (EN)** as an additional supported language.

The internationalization functionality is handled by:

```
./js/i18n.js
```

Every visible string on every page — **including the navbar and the footer, but excluding the "PathBridge" brand name** — is wired to the dictionary in `i18n.js`. Switching the language updates the header, the hero, every section, and the footer at once, on whichever page the visitor is on.

### Custom HTML Attributes

The application uses custom `data-*` attributes to associate HTML elements with translation keys.

**`data-i18n`**
Used to bind visible text content such as headings, paragraphs, labels, and buttons to translation keys.

```html
<h1 data-i18n="hero.title"></h1>
```

**`data-i18n-placeholder`**
Used to handle dynamic placeholder text for input fields.

```html
<input
    type="text"
    data-i18n-placeholder="jobs.filters.keyword"
>
```

**`data-lang-switcher`**
Identifies the container responsible for managing the language-switching controls.

```html
<div data-lang-switcher>
    <button data-lang="es">ES</button>
    <button data-lang="en">EN</button>
</div>
```

The `i18n.js` script manages the language toggle, persists the choice in `localStorage` (`pathbridge.lang`), and updates the corresponding translated content dynamically on every page load.

## Summary

PathBridge's landing pages serve as the primary entry point to the platform and communicate its core value proposition: helping junior candidates transition from education to employment through personalized career development and AI-powered preparation.

The project combines:

- Responsive semantic HTML5 structure, split across a home page and three secondary pages under `pages/`.
- Custom, shared CSS styling.
- JavaScript-based internationalization covering the entire UI (header, content and footer) except the brand name.
- A single, clear call to action — sending visitors to the real application — instead of static buttons that pretend to download files or activate features.
- AI-focused career features, candidate-oriented benefits, social proof and testimonials.

The architecture is intentionally lightweight and modular, making it easy to extend the project with additional pages, languages, or platform features in the future.

**Last updated:** 2026.
