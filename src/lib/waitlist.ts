// ─────────────────────────────────────────────────────────────────────────
// WAITLIST — Supabase REST API (no SDK, just fetch)
// ─────────────────────────────────────────────────────────────────────────
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string

const HEADERS = {
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`,
  'Content-Type': 'application/json',
}

export type WaitlistResult = {
  ok: boolean
  count?: number
  error?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function isValidEmail(email: string): boolean {
  return EMAIL_RE.test(email.trim())
}

/** Fetch current waitlist signup count. */
export async function fetchWaitlistCount(): Promise<number | null> {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/waitlist?select=count`,
      { headers: { ...HEADERS, Prefer: 'count=exact' } },
    )
    if (!res.ok) return null
    const range = res.headers.get('content-range') // e.g. "0-24/247"
    if (range) {
      const total = range.split('/')[1]
      if (total && total !== '*') return parseInt(total, 10)
    }
    // Fallback: parse body
    const data = (await res.json()) as { count: number }[]
    return data?.[0]?.count ?? null
  } catch {
    return null
  }
}

/** Submit an email to the waitlist. Returns ok + updated count. */
export async function submitWaitlist(email: string): Promise<WaitlistResult> {
  const trimmed = email.trim()
  if (!isValidEmail(trimmed)) {
    return { ok: false, error: 'Please enter a valid email address.' }
  }

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/waitlist`, {
      method: 'POST',
      headers: { ...HEADERS, Prefer: 'return=minimal' },
      body: JSON.stringify({ email: trimmed, source: 'adults-landing' }),
    })

    if (res.status === 409 || res.status === 23505) {
      return { ok: false, error: 'This email is already on the waitlist.' }
    }

    if (!res.ok) {
      // Supabase returns a JSON body with a `message` field on errors
      try {
        const err = (await res.json()) as { message?: string; code?: string }
        // Unique constraint violation comes back as 409 or with code 23505
        if (err.code === '23505') {
          return { ok: false, error: 'This email is already on the waitlist.' }
        }
        return { ok: false, error: err.message ?? `Something went wrong (${res.status}).` }
      } catch {
        return { ok: false, error: `Something went wrong (${res.status}). Please try again.` }
      }
    }

    // Fetch updated count after successful insert
    const count = await fetchWaitlistCount()
    return { ok: true, count: count ?? undefined }
  } catch {
    return { ok: false, error: 'Network error. Check your connection and try again.' }
  }
}
