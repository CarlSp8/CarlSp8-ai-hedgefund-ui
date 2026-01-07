'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="rounded-xl border border-border bg-panel p-6 shadow-card">
      <h1 className="text-lg font-semibold">Something went wrong</h1>
      <p className="mt-2 text-sm text-text-muted">Try again. If it persists, check logs.</p>
      <button
        onClick={() => reset()}
        className="mt-4 rounded-xl border border-border bg-bg-2 px-3 py-2 text-sm hover:bg-bg-3"
      >
        Retry
      </button>
    </div>
  )
}
