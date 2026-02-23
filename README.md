# BAPS COLLECTION

Elevated essentials for the modern wardrobe. A premium men's fashion e-commerce storefront built with Next.js 16.

## Live Site

[bapscollection.com](https://bapscollection.com)

## Features

- **Landing Page** -- Full-viewport editorial hero, horizontal category grid (Shirts, Suits, Denim, Knitwear), trending product grid with wishlist hearts and star ratings
- **Product Detail** (`/products/[id]`) -- Vertical thumbnail gallery, color swatches, size selector (S--XXL), care instructions, and "Add to Bag" CTA
- **Shopping Cart** -- Slide-out drawer with item thumbnails, quantity controls, subtotal, and checkout button
- **Checkout** (`/checkout`) -- 3-step wizard (Shipping, Payment, Review) with order summary sidebar and confirmation screen
- **Lookbook** (`/lookbook`) -- Magazine-style alternating layout with "Shop the Look" hover hotspots and quick-view product modals

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui + Radix UI primitives
- **Icons:** Lucide React
- **Analytics:** Vercel Analytics

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm (recommended), npm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Sijan025/v0-baps-collection-store.git
cd v0-baps-collection-store

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
app/
  page.tsx                  # Landing page
  layout.tsx                # Root layout with navbar, cart drawer, footer
  checkout/page.tsx         # Checkout flow
  lookbook/page.tsx         # Lookbook page
  products/[id]/page.tsx    # Product detail page
components/
  cart-drawer.tsx           # Slide-out shopping cart
  cart-provider.tsx         # Cart state management (React Context)
  category-grid.tsx         # Category navigation grid
  checkout-wizard.tsx       # Multi-step checkout form
  footer.tsx                # Site footer
  hero-section.tsx          # Landing page hero
  lookbook-feed.tsx         # Lookbook image feed with hotspots
  navbar.tsx                # Sticky glassmorphism navigation
  product-card.tsx          # Product card with wishlist toggle
  product-detail.tsx        # Full product detail view
  trending-section.tsx      # Trending products section
  ui/                       # shadcn/ui components
lib/
  data.ts                   # Product catalog and category data
  utils.ts                  # Utility functions
public/
  images/                   # Product, category, hero, and lookbook images
  CNAME                     # Custom domain configuration
```

## Design

- **Background:** Charcoal (#121212)
- **Text:** Ivory (#F5F5F5)
- **Accent:** Vibrant Pink (#E91E63)
- **Typography:** Inter
- **Style:** Dark-mode-first, glassmorphism navigation, editorial photography

## Deployment

This project is configured for deployment on [Vercel](https://vercel.com). Push to the `main` branch and Vercel will build and deploy automatically.

## License

All rights reserved. BAPS COLLECTION.
