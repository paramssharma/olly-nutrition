# Olly Nutrition — Landing Page

Two-route marketing landing page for Olly nutrition supplements (Indian market). Built with React 19 + TypeScript + Vite. Shopify Storefront API for e-commerce.

- `/` — Adults product page (pre-launch waitlist / buy mode)
- `/kids` — Kids product page (subscribe + one-time purchase)

## Setup

```bash
npm install
```

### Environment variables

Create `.env.local` in the project root:

```env
# Shopify Storefront API (required for e-commerce)
VITE_SHOPIFY_DOMAIN=your-store.myshopify.com
VITE_SHOPIFY_STOREFRONT_TOKEN=your-storefront-access-token

# Supabase (required for adults waitlist)
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

#### Getting the Shopify token

1. In your Shopify Admin, go to **Sales channels** and install the **Headless** channel
2. Click **Create storefront** — copy the **public access token**
3. Your domain is the `xxx.myshopify.com` shown in your admin URL bar

#### Shopify product setup

The code expects two products with these exact URL handles:

| Product | Handle | Variants |
|---------|--------|----------|
| Kids Daily Multivitamin Gummy | `kids-daily-multivitamin-gummy` | Subscribe (₹799), One-Time (₹899) |
| Complete Multivitamin | `complete-multivitamin` | Default (₹899) |

- Set **compare-at prices** on kids variants for strikethrough display (₹1,199 and ₹1,099)
- Set adults product **inventory to 0** to keep the page in waitlist mode
- When ready to launch adults: set inventory > 0 in Shopify Admin — the page auto-switches to buy mode

## Development

```bash
npm run dev       # Start dev server (Vite)
npm run build     # TypeScript check + production build
npm run lint      # ESLint
npm run preview   # Preview production build locally
```

## How the Shopify integration works

- **Product data** is fetched from Shopify Storefront API on page load via `shopify-buy` SDK
- **Cart state** is managed in React context (`CartProvider` in `App.tsx`) with `useReducer`
- **Cart drawer** slides out from the right when items are added, themed per page
- **Checkout** redirects to Shopify's hosted checkout page
- **Cart persistence** — checkout ID is saved to `localStorage` and rehydrated on refresh
- **Fallback** — if Shopify API is unavailable, buttons fall back to anchor links with hardcoded prices
- **Adults pre-launch** — `isProductBuyable()` checks variant availability; when all variants have inventory = 0, the page shows the Supabase-powered waitlist form instead of buy buttons
