# Your Marble Brand Website

A polished Next.js App Router website for a premium marble, granite, porcelain, quartz, and natural stone business.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Edit business details

Update the main business placeholders in `data/business.ts`:

- `name` controls the logo/footer business name.
- `phoneDisplay` and `phoneHref` control the visible phone number and `tel:` links.
- `whatsappNumber` controls WhatsApp links.
- `email`, `location`, and `hours` control contact/footer details.

## Edit services

Update service cards in `data/services.ts`. Each service includes:

- `title`
- `slug`
- `description`
- `benefits`
- `image`

## Edit gallery/projects

Update project placeholders in `data/projects.ts`. Each project includes:

- `title`
- `category`
- `material`
- `location`
- `image`
- `alt`

Use your own project photos before publishing. You can replace the current remote placeholder image URLs with local images in `public/images` and then reference them as `/images/photo-name.jpg`.

## Before publishing

Replace these placeholders:

1. Business name and logo text.
2. Phone number, WhatsApp number, email, location, and hours.
3. Placeholder project images with real work photos.
4. Placeholder service images with real workshop or installation photos.
5. Demo contact form behavior with a real form provider, email API, or CRM integration.
6. SEO location keywords for your exact service area.
