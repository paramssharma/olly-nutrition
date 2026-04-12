// ─────────────��──────────────────────────────────��────────────────────────
// SHOPIFY — Storefront API via shopify-buy SDK
// ──────────────��──────────────────────────────────────────────────────────
import Client from 'shopify-buy'

const client = Client.buildClient({
  domain: import.meta.env.VITE_SHOPIFY_DOMAIN as string,
  storefrontAccessToken: import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN as string,
} as unknown as ShopifyBuy.Config)

// ── Normalized types (decoupled from SDK internals) ─────────────────────

export interface ShopifyVariant {
  id: string
  title: string
  price: string               // e.g. "799.00"
  compareAtPrice: string | null
  available: boolean
}

export interface ShopifyProduct {
  id: string
  handle: string
  title: string
  description: string
  images: { src: string; altText: string | null }[]
  variants: ShopifyVariant[]
}

export interface CartLineItem {
  id: string
  variantId: string
  title: string
  variantTitle: string
  quantity: number
  price: string
  image: { src: string; altText: string | null } | null
}

// ── Helpers ──────────���──────────────────────────────────────────────────

function normalizeProduct(p: ShopifyBuy.Product): ShopifyProduct {
  return {
    id: p.id as string,
    handle: p.handle,
    title: p.title,
    description: p.description,
    images: p.images.map(img => ({
      src: img.url as string,
      altText: img.altText ?? null,
    })),
    variants: p.variants.map(v => ({
      id: v.id as string,
      title: v.title,
      price: String(v.price.amount),
      compareAtPrice: v.compareAtPrice ? String(v.compareAtPrice.amount) : null,
      available: v.availableForSale,
    })),
  }
}

function normalizeLineItem(li: ShopifyBuy.CheckoutLineItem): CartLineItem {
  const variant = li.variant
  return {
    id: li.id as string,
    variantId: variant?.id as string,
    title: li.title,
    variantTitle: variant?.title ?? '',
    quantity: li.quantity,
    price: String(variant?.price?.amount ?? '0'),
    image: variant?.image
      ? { src: variant.image.url as string, altText: variant.image.altText ?? null }
      : null,
  }
}

// ── Product fetching ────────────────────────────────────────────────────

export async function fetchProductByHandle(handle: string): Promise<ShopifyProduct | null> {
  try {
    const product = await client.product.fetchByHandle(handle)
    if (!product) return null
    return normalizeProduct(product)
  } catch {
    return null
  }
}

// ── Checkout / cart ──────────��──────────────────────────────────────────

export async function createCheckout(): Promise<ShopifyBuy.Checkout> {
  return client.checkout.create()
}

export async function fetchCheckout(checkoutId: string): Promise<ShopifyBuy.Checkout | null> {
  try {
    const checkout = await client.checkout.fetch(checkoutId)
    return checkout
  } catch {
    return null
  }
}

export async function addLineItems(
  checkoutId: string,
  items: { variantId: string; quantity: number }[],
): Promise<ShopifyBuy.Checkout> {
  return client.checkout.addLineItems(checkoutId, items)
}

export async function removeLineItems(
  checkoutId: string,
  lineItemIds: string[],
): Promise<ShopifyBuy.Checkout> {
  return client.checkout.removeLineItems(checkoutId, lineItemIds)
}

export async function updateLineItems(
  checkoutId: string,
  items: { id: string; quantity: number }[],
): Promise<ShopifyBuy.Checkout> {
  return client.checkout.updateLineItems(checkoutId, items)
}

export function normalizeCheckoutLineItems(checkout: ShopifyBuy.Checkout): CartLineItem[] {
  return checkout.lineItems.map(normalizeLineItem)
}

export function isProductBuyable(product: ShopifyProduct | null): boolean {
  if (!product) return false
  return product.variants.some(v => v.available)
}

/** Format a Shopify price string (e.g. "799.00") as "₹799" */
export function formatPrice(amount: string): string {
  const num = Math.round(parseFloat(amount))
  return `₹${num.toLocaleString('en-IN')}`
}
