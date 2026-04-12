import { useState, useEffect, useMemo, useCallback } from 'react'
import { fetchProductByHandle, type ShopifyProduct } from '../lib/shopify'

const cache = new Map<string, ShopifyProduct>()

type FetchStatus = 'idle' | 'loading' | 'done' | 'error'

export default function useShopifyProduct(handle: string) {
  const cached = useMemo(() => cache.get(handle) ?? null, [handle])
  const [product, setProduct] = useState<ShopifyProduct | null>(cached)
  const [status, setStatus] = useState<FetchStatus>(cached ? 'done' : 'idle')

  const fetchProduct = useCallback(async (h: string) => {
    setStatus('loading')
    const result = await fetchProductByHandle(h)
    if (result) {
      cache.set(h, result)
      setProduct(result)
      setStatus('done')
    } else {
      setStatus('error')
    }
  }, [])

  useEffect(() => {
    if (cached) return
    // eslint-disable-next-line react-hooks/set-state-in-effect -- async fetch, not synchronous setState
    fetchProduct(handle)
  }, [handle, cached, fetchProduct])

  return {
    product,
    isLoading: status === 'idle' || status === 'loading',
    error: status === 'error' ? 'Product not found' : null,
  }
}
