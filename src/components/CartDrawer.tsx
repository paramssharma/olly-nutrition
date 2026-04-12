import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { formatPrice } from '../lib/shopify'
import '../styles/cart.css'

export default function CartDrawer() {
  const { state, closeCart, removeFromCart, updateQuantity, itemCount, subtotal } = useCart()
  const location = useLocation()
  const theme = location.pathname === '/' ? 'adults' : 'kids'

  const drawerRef = useRef<HTMLElement>(null)
  const triggerRef = useRef<Element | null>(null)

  // Capture the element that opened the drawer for focus restoration
  useEffect(() => {
    if (state.isOpen) {
      triggerRef.current = document.activeElement
      // Focus the close button
      const closeBtn = drawerRef.current?.querySelector<HTMLButtonElement>('.cart-close-btn')
      closeBtn?.focus()
    } else if (triggerRef.current instanceof HTMLElement) {
      triggerRef.current.focus()
      triggerRef.current = null
    }
  }, [state.isOpen])

  // Escape key closes drawer
  useEffect(() => {
    if (!state.isOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCart()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [state.isOpen, closeCart])

  // Lock body scroll when open
  useEffect(() => {
    if (state.isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [state.isOpen])

  if (!state.isOpen) return null

  return (
    <>
      <div className="cart-overlay" onClick={closeCart} aria-hidden="true" />
      <aside
        ref={drawerRef}
        className="cart-drawer"
        data-theme={theme}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="cart-header">
          <h2 className="cart-title">
            Your Cart
            <span className="cart-count" aria-live="polite">({itemCount})</span>
          </h2>
          <button className="cart-close-btn" onClick={closeCart} aria-label="Close cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </svg>
          </button>
        </div>

        {/* Error */}
        {state.error && (
          <div className="cart-error" role="alert">{state.error}</div>
        )}

        {/* Body */}
        <div className="cart-body">
          {state.isLoading && <div className="cart-loading" aria-label="Updating cart" />}

          {state.items.length === 0 ? (
            <div className="cart-empty">
              <p>Your cart is empty</p>
            </div>
          ) : (
            <ul className="cart-items">
              {state.items.map(item => (
                <li key={item.id} className="cart-item">
                  {item.image && (
                    <img
                      src={item.image.src}
                      alt={item.image.altText ?? item.title}
                      className="cart-item-img"
                    />
                  )}
                  <div className="cart-item-info">
                    <p className="cart-item-title">{item.title}</p>
                    {item.variantTitle && (
                      <p className="cart-item-variant">{item.variantTitle}</p>
                    )}
                    <p className="cart-item-price">{formatPrice(item.price)}</p>
                  </div>
                  <div className="cart-item-actions">
                    <div className="cart-qty">
                      <button
                        className="cart-qty-btn"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        aria-label={`Decrease quantity of ${item.title}`}
                      >
                        −
                      </button>
                      <span className="cart-qty-val">{item.quantity}</span>
                      <button
                        className="cart-qty-btn"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label={`Increase quantity of ${item.title}`}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="cart-remove-btn"
                      onClick={() => removeFromCart(item.id)}
                      aria-label={`Remove ${item.title} from cart`}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-subtotal">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <a href={state.checkoutUrl ?? '#'} className="cart-checkout-btn">
              Checkout
            </a>
          </div>
        )}
      </aside>
    </>
  )
}
