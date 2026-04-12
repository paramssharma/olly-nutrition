import { useState, useEffect, type FormEvent } from 'react'
import { submitWaitlist, fetchWaitlistCount } from '../../lib/waitlist'
import { formatPrice } from '../../lib/shopify'

type Status = 'idle' | 'loading' | 'success' | 'error'

const FOUNDING_TOTAL = 500

interface WaitlistCTAProps {
  isBuyable?: boolean
  variantId?: string | null
  price?: string | null
  onAddToCart?: (variantId: string, quantity?: number) => Promise<void>
  productLoading?: boolean
}

export default function WaitlistCTA({
  isBuyable,
  variantId,
  price,
  onAddToCart,
  productLoading,
}: WaitlistCTAProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)
  const [count, setCount] = useState<number | null>(null)

  const canBuy = isBuyable && variantId && onAddToCart

  useEffect(() => {
    if (!canBuy) {
      fetchWaitlistCount().then((n) => {
        if (n !== null) setCount(n)
      })
    }
  }, [canBuy])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'loading') return

    setStatus('loading')
    setError(null)

    const result = await submitWaitlist(email)
    if (result.ok) {
      setStatus('success')
      if (typeof result.count === 'number') setCount(result.count)
    } else {
      setStatus('error')
      setError(result.error ?? 'Something went wrong. Please try again.')
    }
  }

  // ── Buy mode ───────────────────────────────────────────────────────────
  if (canBuy) {
    return (
      <section className="final-cta" id="reserve">
        <div className="container-narrow">
          <div className="section-eyebrow final-cta-eyebrow">Get Yours</div>
          <h2>
            Built different.
            <br />
            Ship to your door.
          </h2>
          <p className="sub">
            14 active-form nutrients in one capsule. Free shipping. 30-day money-back guarantee.
          </p>

          <div className="waitlist-buy-cta">
            <button
              className="btn-primary"
              type="button"
              onClick={() => onAddToCart(variantId)}
              disabled={productLoading}
            >
              Add to Cart — {price ? formatPrice(price) : '₹899'}
            </button>
          </div>
        </div>
      </section>
    )
  }

  // ── Waitlist mode (pre-launch) ─────────────────────────────────────────
  return (
    <section className="final-cta" id="reserve">
      <div className="container-narrow">
        <div className="section-eyebrow final-cta-eyebrow">Founding Members</div>
        <h2>
          Reserve yours.
          <br />
          Help us launch.
        </h2>
        <p className="sub">
          Founding members pay ₹99 (fully refundable) to reserve first-batch access. You get the founding member
          price for life, a direct line to the formulation team, and a voice in what we build next.
        </p>

        {status === 'success' ? (
          <div className="waitlist-success" role="status" aria-live="polite">
            You're in. Check your email.
          </div>
        ) : (
          <form className="waitlist-form" onSubmit={handleSubmit} noValidate>
            <input
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
              aria-invalid={status === 'error'}
              disabled={status === 'loading'}
            />
            <button type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Reserving…' : 'Reserve · ₹99'}
            </button>
          </form>
        )}

        {status === 'error' && error && (
          <div className="waitlist-error" role="alert">
            {error}
          </div>
        )}

        {count !== null && (
          <div className="founding-count">
            <span className="num">{count}</span> / {FOUNDING_TOTAL} Founding Members · Q2 2026 Launch
          </div>
        )}
      </div>
    </section>
  )
}
