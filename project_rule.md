# HSE SkillUp — Enhanced Website Engineering & SEO Architecture Rules

# Core Principle

Website MUST be:

* scalable
* maintainable
* SEO-first
* conversion-oriented
* content-driven
* reusable
* enterprise-grade

---

# RULE 1 — Architecture Separation

## Next.js Responsibilities

* UI/UX
* Rendering
* Routing
* SEO Rendering
* Animation
* Performance
* State Management

## WordPress Responsibilities

* Content Management
* Media Management
* SEO Metadata
* Blog Management
* Dynamic Content
* Structured Content

## Forbidden

* Elementor
* WPBakery
* Styling in WordPress
* Business logic inside CMS
* UI rendering inside CMS

---

# RULE 2 — Feature-based Project Structure

```bash
src/
│
├── app/
│
├── features/
│   ├── blog/
│   ├── certification/
│   ├── training/
│   ├── marketing/
│   └── auth/
│
├── shared/
│   ├── ui/
│   ├── hooks/
│   ├── lib/
│   ├── utils/
│   └── types/
│
├── services/
├── styles/
├── constants/
└── tokens/
```

---

# RULE 3 — Design Token System

Mandatory:

```bash
tokens/
├── colors.ts
├── spacing.ts
├── typography.ts
├── radius.ts
├── shadows.ts
└── motion.ts
```

Purpose:

* consistent design
* scalable UI
* easier rebranding
* Figma synchronization

---

# RULE 4 — API Standard

Mandatory:

* GraphQL only
* WPGraphQL
* Typed Query
* Zod Validation
* Centralized Fetching

Forbidden:

* Direct REST fetch in components
* any type
* Business logic in UI

---

# RULE 5 — Service Layer

All data fetching MUST go through:

```bash
services/
```

Example:

```ts
post.service.ts
training.service.ts
seo.service.ts
```

---

# RULE 6 — Dynamic Section System

Mandatory reusable sections:

* Hero
* CTA
* FAQ
* Pricing
* Features
* Testimonials
* Instructor
* Schedule

Use registry pattern:

```ts
const sectionRegistry = {
  hero: HeroSection,
  faq: FAQSection,
  pricing: PricingSection,
}
```

Rendering:

```tsx
const Component = sectionRegistry[type]
return <Component {...props} />
```

---

# RULE 7 — STRICT Component & Content Separation

MANDATORY:

Components MUST NEVER contain hardcoded business content.

BAD:

```tsx
<h1>Sertifikasi K3 Resmi</h1>
```

GOOD:

```tsx
<h1>{title}</h1>
```

All content MUST come from:

* WordPress CMS
* constants
* configuration
* API response

Purpose:

* easier content revision
* scalable localization
* easier SEO optimization
* easier A/B testing
* safer content management

---

# RULE 8 — CMS Naming Convention

GOOD:

```txt
hero_title
hero_description
cta_button_text
```

BAD:

```txt
text1
judulFixBanget
```

---

# RULE 9 — Content Modeling

Example:

```txt
Course
├── title
├── slug
├── duration
├── price
├── certification
├── instructor
├── FAQ
├── schedule
├── city
└── SEO
```

Purpose:

* predictable API
* scalable architecture
* easier GraphQL typing

---

# RULE 10 — SEO-first URL Structure

GOOD:

```txt
/sertifikasi-bnsp/
/pelatihan-k3/
/training-ahli-k3-umum/
```

BAD:

```txt
/blog/post-1
```

---

# RULE 11 — Programmatic SEO

Mandatory:

```txt
/pelatihan-k3-jakarta
/pelatihan-k3-bandung
/sertifikasi-bnsp-scaffolding
```

Programmatic pages MUST contain:

* unique intro
* unique FAQ
* localized data
* dynamic testimonials
* dynamic schema

Purpose:

* long-tail traffic
* SEO domination
* lead generation

---

# RULE 12 — Internal Linking

Every article MUST contain:

* related articles
* training links
* service links
* CTA links

---

# RULE 13 — AI SEO Optimization

Mandatory:

* semantic heading structure
* entity-first content
* FAQ-rich content
* author schema
* citation-ready structure
* chunkable paragraphs
* llms.txt
* structured content blocks

---

# RULE 14 — Lead Magnet System

Every strategic page MUST contain:

* WhatsApp CTA
* consultation form
* sticky CTA
* downloadable PDF
* lead capture form

---

# RULE 15 — Conversion UX

Mandatory:

* sticky mobile CTA
* floating WhatsApp
* CTA every 2 viewport
* inline form
* social proof
* breadcrumb CTA
* trust badge

---

# RULE 16 — Analytics & Tracking

Mandatory:

* Google Analytics
* GTM
* Meta Pixel
* Search Console

Track:

* form submissions
* CTA clicks
* WhatsApp clicks
* scroll depth

---

# RULE 17 — Structured Data SEO

Mandatory schema:

* Organization
* Article
* FAQ
* Breadcrumb
* Course
* LocalBusiness

Use JSON-LD.

---

# RULE 18 — Performance Standard

Target:

| Metric                 | Target |
| ---------------------- | ------ |
| LCP                    | < 2s   |
| CLS                    | < 0.1  |
| Lighthouse SEO         | 100    |
| Lighthouse Performance | 95+    |

---

# RULE 19 — Rendering Strategy

| Page         | Strategy |
| ------------ | -------- |
| Homepage     | ISR      |
| Blog         | ISR      |
| Landing Page | SSG      |
| Dashboard    | SSR      |
| Search       | CSR      |

---

# RULE 20 — Component Rule

Default:

* Server Components

Client Components ONLY for:

* forms
* animation
* browser APIs
* interactive state

---

# RULE 21 — Design System

Mandatory:

* Storybook
* shadcn/ui
* reusable components

Structure:

```bash
components/
├── ui/
├── forms/
├── layout/
├── marketing/
├── sections/
└── animations/
```

---

# RULE 22 — Motion System

Animation MUST be:

* subtle
* purposeful
* lightweight
* performance-safe

Duration:

```txt
150ms–300ms
```

---

# RULE 23 — Accessibility Standard

Mandatory:

* WCAG AA
* semantic HTML
* keyboard navigation
* aria labels
* focus state
* proper contrast

---

# RULE 24 — Image Optimization

Mandatory:

* next/image
* WebP/AVIF
* lazy loading
* CDN cache

Forbidden:

* raw image rendering
* full-size uploads

---

# RULE 25 — Security Standard

## WordPress

Mandatory:

* disable XMLRPC
* limit login attempts
* hide wp-admin
* minimal plugins
* Cloudflare WAF

## Next.js

Mandatory:

* CSP headers
* rate limiting
* HTML sanitization
* secure ENV

---

# RULE 26 — VPS Architecture

```txt
Cloudflare
↓
Nginx
↓
Next.js
↓
WordPress
↓
MariaDB
```

---

# RULE 27 — Docker Architecture

Mandatory separate containers:

```txt
frontend
wordpress
database
redis
nginx
```

Forbidden:

```txt
single-container architecture
```

---

# RULE 28 — Cache Strategy

Mandatory:

* Redis cache
* ISR cache
* Cloudflare edge cache
* browser cache

---

# RULE 29 — CI/CD Pipeline

Use:

* GitHub
* GitHub Actions
* Docker Compose

Flow:

```txt
Push GitHub
→ Build
→ Test
→ Deploy VPS
```

---

# RULE 30 — Monitoring

Mandatory:

* Sentry
* Uptime Kuma
* error logging

---

# RULE 31 — Backup System

Mandatory:

* daily DB backup
* weekly full backup
* offsite backup
* VPS snapshot

---

# RULE 32 — Testing Standard

| Type           | Tool       |
| -------------- | ---------- |
| Unit Test      | Vitest     |
| Component Test | RTL        |
| E2E Test       | Playwright |

---

# RULE 33 — Code Quality

Mandatory:

* ESLint
* Prettier
* Husky
* Commitlint

---

# RULE 34 — Error Handling

Mandatory:

* global error boundary
* fallback UI
* loading skeleton
* retry strategy
* graceful API failure

---

# RULE 35 — Environment Management

Mandatory:

```env
NEXT_PUBLIC_SITE_URL=
WORDPRESS_API_URL=
GRAPHQL_ENDPOINT=
REDIS_URL=
```

Environment:

* local
* staging
* production

---

# RULE 36 — WordPress Plugin Standard

Install plugin ONLY if:

* actively maintained
* secure
* lightweight
* truly necessary

Forbidden:

* page builders
* abandoned plugins
* duplicate functionality plugins

---

# RULE 37 — Content Funnel Strategy

## Top Funnel

* Apa itu K3
* Manfaat Sertifikasi BNSP

## Middle Funnel

* Biaya Sertifikasi
* Cara Mengikuti Sertifikasi

## Bottom Funnel

* Jadwal Training
* Daftar Sertifikasi

---

# RULE 38 — Final Business Objective

Website MUST function as:

* Company Profile
* SEO Engine
* Lead Magnet
* Sales Funnel
* Authority Builder
* Training Information Portal
* Conversion Machine
