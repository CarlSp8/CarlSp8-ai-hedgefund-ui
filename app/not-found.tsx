import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="rounded-xl border border-border bg-panel p-6 shadow-card">
      <h1 className="text-lg font-semibold">Page not found</h1>
      <p className="mt-2 text-sm text-text-muted">The page you requested doesn’t exist.</p>
      <Link className="mt-4 inline-block text-sm text-brand hover:underline" href="/overview">
        Go to Overview
      </Link>
    </div>
  )
}
