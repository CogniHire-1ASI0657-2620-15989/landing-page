# PathBridge - Landing Page Documentation

**PathBridge** is a career platform designed to bridge the gap from campus to career. It helps junior candidates land their ideal jobs through skill-gap analysis, personalized learning paths, and AI-driven interview coaching.

This document outlines the architecture, structure, and features of the project's main landing page.

## Tech Stack

* **HTML5 Semantic**: Clean markup structured for accessibility and SEO best practices.
* **CSS3**: Custom stylesheet (`./css/main.css`).
* **Google Fonts & Icons**: **Inter** typography and **Material Symbols Outlined** for UI iconography.
* **JavaScript (ES6+)**: Localization script (`./js/i18n.js`) loaded with the `defer` attribute.

## Project Directory Structure

```text
├── index.html          # Main landing page markup
├── css/
│   └── main.css        # Global and component styles
├── js/
│   └── i18n.js         # Multi-language switching logic (ES/EN)
└── images/             # Visual assets (hero.jpg, avatars, etc.)
```

## Page Sections Overview

The landing page is organized into **9 distinct sections** focused on user conversion and engagement:

### 1. Header & Navigation

Sticky top navigation bar featuring:

* Brand logo.
* Primary site links.
* Language switcher (`ES` / `EN`).
* Action buttons:

    * `Sign In`
    * `Join Now`

### 2. Hero Section

High-impact introduction featuring:

* Core value proposition.
* Dual search bar:

    * Keyword search.
    * Location search.
* Hero image.

### 3. Trusted Companies

Social proof section highlighting partner companies that trust the platform's talent pool.

### 4. How It Works

A **4-step grid** explaining the candidate workflow:

1. **Gap Analysis**
   Comparing candidate profiles against job requirements.

2. **Study Plan**
   Providing curated courses from platforms such as Platzi and Udemy.

3. **AI Coach Training**
   Offering interview simulations powered by artificial intelligence.

4. **Job Ready**
   Tracking candidate progress until they are ready to apply and get hired.

### 5. Benefits Section

An alternating layout highlighting the value provided to the different platform users.

#### Candidates

Provides tailored learning plans with visual skill proficiency indicators.

#### Companies

Provides access to verified junior talent with high job-match rates.

#### AI Assistant

Provides a 24/7 interview coach through an interactive interview simulation.

### 6. Boost Your Career

Secondary feature grid reinforcing the main benefits and capabilities of the PathBridge platform.

### 7. Call to Action (CTA)

High-conversion section inviting users to start their career diagnosis and discover their current skill gaps.

### 8. Success Stories

Testimonial cards featuring user avatars and feedback from candidates who have used the platform.

### 9. Footer

Institutional and legal information, including:

* About.
* Contact.
* Privacy Policy.
* Terms and Conditions.
* Copyright information.

## Internationalization (`i18n`) System

The markup is designed with multi-language support in mind.

The default language is **Spanish (ES)**, with **English (EN)** as an additional supported language.

The internationalization functionality is handled by:

```text
./js/i18n.js
```

### Custom HTML Attributes

The application uses custom `data-*` attributes to associate HTML elements with translation keys.

#### `data-i18n`

Used to bind visible text content such as headings, paragraphs, labels, and buttons to translation keys.

Example:

```html
<h1 data-i18n="hero.title"></h1>
```

#### `data-i18n-placeholder`

Used to handle dynamic placeholder text for input fields.

Example:

```html
<input
    type="text"
    data-i18n-placeholder="hero.searchPlaceholder"
>
```

#### `data-lang-switcher`

Identifies the container responsible for managing the language-switching controls.

Example:

```html
<div data-lang-switcher>
    <button>ES</button>
    <button>EN</button>
</div>
```

The `i18n.js` script manages the language toggle and updates the corresponding translated content dynamically.

## Summary

PathBridge's landing page serves as the primary entry point to the platform and communicates its core value proposition: **helping junior candidates transition from education to employment through personalized career development and AI-powered preparation**.

The landing page combines:

* Responsive semantic HTML5 structure.
* Custom CSS styling.
* JavaScript-based internationalization.
* AI-focused career features.
* Candidate and company-oriented benefits.
* Social proof and testimonials.
* Conversion-focused calls to action.

The architecture is intentionally lightweight and modular, making it easy to extend the landing page with additional sections, languages, or platform features in the future.
