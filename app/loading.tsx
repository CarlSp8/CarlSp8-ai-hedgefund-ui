export default function Loading() {
  return (
    <div className="rounded-xl border border-border bg-panel p-6 shadow-card">
      <div className="h-4 w-48 animate-pulse rounded bg-[rgba(255,255,255,0.10)]" />
      <div className="mt-3 h-3 w-full animate-pulse rounded bg-[rgba(255,255,255,0.08)]" />
      <div className="mt-2 h-3 w-4/5 animate-pulse rounded bg-[rgba(255,255,255,0.08)]" />
    </div>
  )
}
