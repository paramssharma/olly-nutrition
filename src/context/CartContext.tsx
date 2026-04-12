import { useReducer, useEffect, useCallback, type ReactNode } from 'react'
import {
  createCheckout,
  fetchCheckout,
  addLineItems,
  removeLineItems,
  updateLineItems,
  normalizeCheckoutLineItems,
  type CartLineItem,
} from '../lib/shopify'
import { CartContext, type CartState } from './cartContextDef'

const initialState: CartState = {
  isOpen: false,
  items: [],
  checkoutId: null,
  checkoutUrl: null,
  isLoading: false,
  error: null,
}

// ── Actions ──────────────────────────────────────────────────────────────

type Action =
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' }
  | { type: 'TOGGLE_CART' }
  | { type: 'SET_CHECKOUT'; checkoutId: string; checkoutUrl: string; items: CartLineItem[] }
  | { type: 'SET_ITEMS'; items: CartLineItem[]; checkoutUrl: string }
  | { type: 'SET_LOADING'; isLoading: boolean }
  | { type: 'SET_ERROR'; error: string | null }

function reducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case 'OPEN_CART':
      return { ...state, isOpen: true }
    case 'CLOSE_CART':
      return { ...state, isOpen: false }
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen }
    case 'SET_CHECKOUT':
      return {
        ...state,
        checkoutId: action.checkoutId,
        checkoutUrl: action.checkoutUrl,
        items: action.items,
      }
    case 'SET_ITEMS':
      return { ...state, items: action.items, checkoutUrl: action.checkoutUrl }
    case 'SET_LOADING':
      return { ...state, isLoading: action.isLoading }
    case 'SET_ERROR':
      return { ...state, error: action.error }
  }
}

const STORAGE_KEY = 'olly_checkout_id'

// ── Provider ─────────────────────────────────────────────────────────────

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  // Rehydrate checkout from localStorage on mount
  useEffect(() => {
    const savedId = localStorage.getItem(STORAGE_KEY)
    if (!savedId) return

    fetchCheckout(savedId).then(checkout => {
      if (!checkout || (checkout as unknown as { completedAt?: string }).completedAt) {
        localStorage.removeItem(STORAGE_KEY)
        return
      }
      dispatch({
        type: 'SET_CHECKOUT',
        checkoutId: checkout.id as string,
        checkoutUrl: checkout.webUrl as string,
        items: normalizeCheckoutLineItems(checkout),
      })
    })
  }, [])

  const ensureCheckout = useCallback(async (): Promise<string> => {
    if (state.checkoutId) return state.checkoutId

    const checkout = await createCheckout()
    const id = checkout.id as string
    localStorage.setItem(STORAGE_KEY, id)
    dispatch({
      type: 'SET_CHECKOUT',
      checkoutId: id,
      checkoutUrl: checkout.webUrl as string,
      items: [],
    })
    return id
  }, [state.checkoutId])

  const addToCart = useCallback(async (variantId: string, quantity = 1) => {
    dispatch({ type: 'SET_LOADING', isLoading: true })
    dispatch({ type: 'SET_ERROR', error: null })
    try {
      const checkoutId = await ensureCheckout()
      const checkout = await addLineItems(checkoutId, [{ variantId, quantity }])
      dispatch({
        type: 'SET_ITEMS',
        items: normalizeCheckoutLineItems(checkout),
        checkoutUrl: checkout.webUrl as string,
      })
      dispatch({ type: 'OPEN_CART' })
    } catch {
      dispatch({ type: 'SET_ERROR', error: 'Failed to add item. Please try again.' })
    } finally {
      dispatch({ type: 'SET_LOADING', isLoading: false })
    }
  }, [ensureCheckout])

  const removeFromCart = useCallback(async (lineItemId: string) => {
    if (!state.checkoutId) return
    dispatch({ type: 'SET_LOADING', isLoading: true })
    try {
      const checkout = await removeLineItems(state.checkoutId, [lineItemId])
      dispatch({
        type: 'SET_ITEMS',
        items: normalizeCheckoutLineItems(checkout),
        checkoutUrl: checkout.webUrl as string,
      })
    } catch {
      dispatch({ type: 'SET_ERROR', error: 'Failed to remove item.' })
    } finally {
      dispatch({ type: 'SET_LOADING', isLoading: false })
    }
  }, [state.checkoutId])

  const updateQuantity = useCallback(async (lineItemId: string, quantity: number) => {
    if (!state.checkoutId) return
    dispatch({ type: 'SET_LOADING', isLoading: true })
    try {
      const checkout = quantity <= 0
        ? await removeLineItems(state.checkoutId, [lineItemId])
        : await updateLineItems(state.checkoutId, [{ id: lineItemId, quantity }])
      dispatch({
        type: 'SET_ITEMS',
        items: normalizeCheckoutLineItems(checkout),
        checkoutUrl: checkout.webUrl as string,
      })
    } catch {
      dispatch({ type: 'SET_ERROR', error: 'Failed to update quantity.' })
    } finally {
      dispatch({ type: 'SET_LOADING', isLoading: false })
    }
  }, [state.checkoutId])

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = state.items
    .reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0)
    .toFixed(2)

  return (
    <CartContext.Provider value={{
      state,
      openCart: () => dispatch({ type: 'OPEN_CART' }),
      closeCart: () => dispatch({ type: 'CLOSE_CART' }),
      toggleCart: () => dispatch({ type: 'TOGGLE_CART' }),
      addToCart,
      removeFromCart,
      updateQuantity,
      itemCount,
      subtotal,
    }}>
      {children}
    </CartContext.Provider>
  )
}
