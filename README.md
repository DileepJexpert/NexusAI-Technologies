# NexusAI Technologies — Company Website

Multi-product company website for **NexusAI Technologies**, an Indian AI startup that builds WhatsApp AI assistants for farmers, MSMEs, students and citizens.

Built with **Next.js 15 (App Router)**, **Tailwind CSS**, **Framer Motion** and **MDX** — deploys for free on Cloudflare Pages.

## Tech stack

- **Framework**: Next.js 15 (App Router) + React 18 + TypeScript
- **Styling**: Tailwind CSS 3, custom design tokens, dark mode via `next-themes`
- **UI**: Radix UI primitives + custom shadcn-style components
- **Animations**: Framer Motion
- **Content**: MDX (via `next-mdx-remote`) for the blog
- **Search**: Fuse.js for client-side fuzzy search
- **Forms**: Web3Forms integration for contact/partner inquiries

## Getting started

```bash
# Install dependencies
npm install

# Copy env template and fill in values
cp .env.local.example .env.local

# Start dev server
npm run dev
# Open http://localhost:3000
```

### Environment variables

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (e.g. https://nexusai.in) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number without `+`, e.g. `919876543210` |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Web3Forms access key for the contact form |
| `NEXT_PUBLIC_GA_ID` | Google Analytics measurement ID (optional) |

## Project structure

```
nexusai-website/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── products/           # Products listing, category, detail
│   ├── about/              # About page
│   ├── blog/               # Blog listing + post pages
│   ├── pricing/            # Pricing page
│   ├── partners/           # Partners page
│   ├── contact/            # Contact page
│   ├── privacy/            # Privacy policy
│   ├── terms/              # Terms of service
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── robots.ts           # robots.txt
│   ├── layout.tsx          # Root layout (navbar + footer + providers)
│   └── globals.css         # Tailwind + design tokens
├── components/
│   ├── layout/             # Navbar, Footer, WhatsAppButton
│   ├── home/               # Homepage sections
│   ├── products/           # Product grid, cards, video player
│   ├── shared/             # Reusable primitives (heading, form)
│   ├── ui/                 # Button, Card, Badge, Accordion, Input, Textarea
│   └── providers.tsx       # Theme provider
├── data/
│   ├── products.ts         # All products + categories data
│   ├── categories.ts       # Category definitions
│   ├── team.ts             # Team members
│   ├── stats.ts            # Company stats
│   ├── navigation.ts       # Navbar + footer links
│   ├── recognition.ts      # Awards / partner logos
│   └── types.ts            # Shared TypeScript interfaces
├── content/
│   └── blog/               # MDX blog posts
├── lib/
│   ├── utils.ts            # cn() helper
│   └── blog.ts             # Blog post loader
└── public/                 # Static assets
```

## How to add a new product

Open `data/products.ts` and append a new `Product` object to the `products` array. Every product goes to its category via `category_id`. The product detail page at `/products/[category]/[product]` is automatically generated from this data.

## How to add a blog post

Create a new `.mdx` file in `content/blog/` with frontmatter:

```mdx
---
title: "Your post title"
excerpt: "One-sentence summary for blog card."
date: "2026-04-10"
category: "agriculture"    # One of: agriculture, finance, education, legal, events, health
author: "Your Name"
---

# Your post content in Markdown

Body text goes here…
```

The blog listing and detail routes pick up new files automatically.

## How to change the company name

Search and replace:

- `NexusAI` → your company name (e.g. `YourCo`)
- `nexusai` → your domain slug
- `/public/images/logo.svg` → your logo
- Update WhatsApp number in `.env.local`

Done — no code changes needed.

## Deployment — Cloudflare Pages (free)

1. Push the repo to GitHub.
2. Cloudflare Dashboard → Pages → Create project → Connect to Git.
3. Build settings:
   - Framework preset: **Next.js**
   - Build command: `npm run build`
   - Build output: `.next`
4. Add environment variables from `.env.local`.
5. Deploy. Cloudflare auto-builds on every push to `main`.
6. Add your custom domain in Pages → Custom domains.

Total deploy time: ~5 minutes. Cost: ₹0/month.

## License

© NexusAI Technologies. All rights reserved.
