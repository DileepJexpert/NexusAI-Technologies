# Katixo - Company Website

Umbrella-company website for **Katixo**, a parent brand building and operating focused digital products.

Built with **Next.js 15 (App Router)**, **Tailwind CSS**, **Framer Motion** and **MDX** and deployed on Cloudflare Pages.

## Tech stack

- **Framework**: Next.js 15 (App Router) + React 18 + TypeScript
- **Styling**: Tailwind CSS 3, custom design tokens, dark mode via `next-themes`
- **UI**: Radix UI primitives + custom shadcn-style components
- **Animations**: Framer Motion
- **Content**: MDX for the blog
- **Search**: Fuse.js for client-side fuzzy search
- **Forms & tracking**: Cloudflare Pages Functions + D1 for contact/demo leads and visitor analytics

## Getting started

```bash
npm install
npm run dev
```

## Environment variables

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (for example `https://katixo.com`) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number without `+`, for example `919876543210` |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Web3Forms access key for the contact form |
| `NEXT_PUBLIC_GA_ID` | Google Analytics measurement ID (optional) |
| `ADMIN_PASSWORD` | Cloudflare Pages secret used for `/admin/login` |

## Notes

- Product pages are generated from `data/products.ts`.
- Blog posts live in `content/blog/`.
- The site is exported as static HTML for Cloudflare Pages.
- Admin, contact and page tracking APIs run through Cloudflare Pages Functions with D1.

## Admin and Tracking

Create and initialize the D1 database:

```bash
npx wrangler d1 create katixo_admin
npx wrangler d1 execute katixo_admin --remote --file=schema.sql
npx wrangler pages secret put ADMIN_PASSWORD --project-name=katixo
```

The current production D1 database binding is configured in `wrangler.toml`.

## Deployment

1. Push the repo to GitHub.
2. In Cloudflare Pages, connect the repo.
3. Use `npm run build` as the build command.
4. Use `out` as the build output directory.
5. Add `NEXT_PUBLIC_SITE_URL=https://katixo.com` and the other needed environment variables.
6. Attach `katixo.com` and `www.katixo.com` as custom domains.

## License

© Katixo. All rights reserved.
