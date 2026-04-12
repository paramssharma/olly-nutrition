import { createContext } from 'react'
import type { CartLineItem } from '../lib/shopify'

export interface CartState {
  isOpen: boolean
  items: CartLineItem[]
  checkoutId: string | null
  checkoutUrl: string | null
  isLoading: boolean
  error: string | null
}

export interface CartContextValue {
  state: CartState
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  addToCart: (variantId: string, quantity?: number) => Promise<void>
  removeFromCart: (lineItemId: string) => Promise<void>
  updateQuantity: (lineItemId: string, quantity: number) => Promise<void>
  itemCount: number
  subtotal: string
}

export const CartContext = createContext<CartContextValue | null>(null)
