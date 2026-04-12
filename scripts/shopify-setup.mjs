#!/usr/bin/env node
/**
 * One-time Shopify product setup script.
 *
 * Usage:
 *   node scripts/shopify-setup.mjs
 *
 * Requires these env vars (add to .env.local first):
 *   VITE_SHOPIFY_DOMAIN           — e.g. cdecw9-mw.myshopify.com
 *   VITE_SHOPIFY_STOREFRONT_TOKEN — Storefront API token (for the landing page)
 *   SHOPIFY_ADMIN_TOKEN           — Admin API token (for this script only)
 */

import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// ── Load .env.local ──────────────────────────────────────────────────────
const envPath = resolve(__dirname, '..', '.env.local')
const envContent = readFileSync(envPath, 'utf-8')
const env = {}
for (const line of envContent.split('\n')) {
  const trimmed = line.trim()
  if (!trimmed || trimmed.startsWith('#')) continue
  const eq = trimmed.indexOf('=')
  if (eq === -1) continue
  env[trimmed.slice(0, eq)] = trimmed.slice(eq + 1)
}

const DOMAIN = env.VITE_SHOPIFY_DOMAIN
const ADMIN_TOKEN = env.SHOPIFY_ADMIN_TOKEN

if (!DOMAIN || !ADMIN_TOKEN) {
  console.error('\n❌  Missing required env vars in .env.local:')
  if (!DOMAIN) console.error('   VITE_SHOPIFY_DOMAIN')
  if (!ADMIN_TOKEN) console.error('   SHOPIFY_ADMIN_TOKEN')
  console.error('\nSee instructions below.\n')
  process.exit(1)
}

const API_BASE = `https://${DOMAIN}/admin/api/2025-04`
const headers = {
  'Content-Type': 'application/json',
  'X-Shopify-Access-Token': ADMIN_TOKEN,
}

// ── Helpers ──────────────────────────────────────────────────────────────

async function adminRequest(path, options = {}) {
  const url = `${API_BASE}${path}`
  const res = await fetch(url, { headers, ...options })
  const body = await res.json()
  if (!res.ok) {
    console.error(`\n❌  ${options.method || 'GET'} ${path} → ${res.status}`)
    console.error(JSON.stringify(body, null, 2))
    throw new Error(`Shopify API error: ${res.status}`)
  }
  return body
}

async function findProduct(handle) {
  const data = await adminRequest(`/products.json?handle=${handle}`)
  return data.products?.[0] ?? null
}

// ── Product definitions ──────────────────────────────────────────────────

const KIDS_PRODUCT = {
  product: {
    title: 'Kids Daily Multivitamin Gummy',
    handle: 'kids-daily-multivitamin',
    body_html: '<p>Pectin-based gummy with active, bioavailable vitamin forms. Zero added sugar, fruit juice sweetened, natural colors.</p>',
    vendor: 'Olly Nutrition',
    product_type: 'Supplements',
    status: 'active',
    variants: [
      {
        title: 'Subscribe',
        option1: 'Subscribe',
        price: '799.00',
        compare_at_price: '1199.00',
        sku: 'OLLY-KIDS-SUB',
        inventory_management: 'shopify',
        inventory_quantity: 100,
        requires_shipping: true,
      },
      {
        title: 'One-Time',
        option1: 'One-Time',
        price: '899.00',
        compare_at_price: '1099.00',
        sku: 'OLLY-KIDS-OT',
        inventory_management: 'shopify',
        inventory_quantity: 100,
        requires_shipping: true,
      },
    ],
    options: [{ name: 'Plan' }],
  },
}

const ADULTS_PRODUCT = {
  product: {
    title: 'Complete Multivitamin',
    handle: 'adults-complete-multivitamin',
    body_html: '<p>One capsule, fourteen active forms. Methylcobalamin B12, 5-MTHF Quatrefolic, D3 + K2-MK7, Magnesium Bisglycinate, Zinc Bisglycinate, Iron Ferrous Bisglycinate.</p>',
    vendor: 'Olly Nutrition',
    product_type: 'Supplements',
    status: 'active',
    variants: [
      {
        title: 'Default',
        price: '899.00',
        compare_at_price: null,
        sku: 'OLLY-DV01',
        inventory_management: 'shopify',
        inventory_quantity: 0,  // 0 = keeps landing page in waitlist mode
        requires_shipping: true,
      },
    ],
  },
}

// ── Main ─────────────────────────────────────────────────────────────────

async function createOrSkip(definition, label) {
  const handle = definition.product.handle
  const existing = await findProduct(handle)

  if (existing) {
    console.log(`⏭️  ${label} already exists (id: ${existing.id}, handle: ${handle})`)
    return existing
  }

  console.log(`📦  Creating ${label}...`)
  const data = await adminRequest('/products.json', {
    method: 'POST',
    body: JSON.stringify(definition),
  })

  const product = data.product
  console.log(`✅  ${label} created`)
  console.log(`   ID: ${product.id}`)
  console.log(`   Handle: ${product.handle}`)
  for (const v of product.variants) {
    console.log(`   Variant "${v.title}": ₹${v.price} (compare at: ${v.compare_at_price ?? '—'}) | inventory: ${v.inventory_quantity}`)
  }
  return product
}

async function main() {
  console.log(`\n🔗  Store: ${DOMAIN}`)
  console.log(`📡  API: ${API_BASE}\n`)

  // Verify connection
  try {
    const shop = await adminRequest('/shop.json')
    console.log(`🏪  Connected to: ${shop.shop.name} (${shop.shop.myshopify_domain})`)
    console.log(`💱  Currency: ${shop.shop.currency}\n`)

    if (shop.shop.currency !== 'INR') {
      console.warn(`⚠️  Store currency is ${shop.shop.currency}, expected INR.`)
      console.warn(`   Go to Settings → Store details to change it.\n`)
    }
  } catch {
    console.error('❌  Could not connect. Check SHOPIFY_ADMIN_TOKEN and VITE_SHOPIFY_DOMAIN.')
    process.exit(1)
  }

  await createOrSkip(KIDS_PRODUCT, 'Kids Daily Multivitamin Gummy')
  console.log('')
  await createOrSkip(ADULTS_PRODUCT, 'Adults Complete Multivitamin')

  console.log('\n──────────────────────────────────────────────')
  console.log('✅  Done! Both products are set up.')
  console.log('')
  console.log('Next steps:')
  console.log('  1. Make sure VITE_SHOPIFY_STOREFRONT_TOKEN is in .env.local')
  console.log('  2. Run: npm run dev')
  console.log('  3. Test the buy buttons on /kids')
  console.log('  4. Adults page stays in waitlist mode (inventory = 0)')
  console.log('     → Set inventory > 0 in Shopify Admin when ready to launch')
  console.log('')
}

main().catch((err) => {
  console.error('\n💥  Setup failed:', err.message)
  process.exit(1)
})
