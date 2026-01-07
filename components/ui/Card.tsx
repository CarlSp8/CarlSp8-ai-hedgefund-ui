import { cn } from '@/components/ui/cn'

export function Card({
  title,
  subtitle,
  children,
  className,
}: {
  title?: string
  subtitle?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={cn('rounded-xl border border-border bg-panel shadow-card', className)}>
      {(title || subtitle) ? (
        <header className="border-b border-border px-4 py-3">
          {title ? <h2 className="text-sm font-semibold tracking-tight">{title}</h2> : null}
          {subtitle ? <p className="mt-1 text-xs text-text-muted">{subtitle}</p> : null}
        </header>
      ) : null}
      <div className="p-4">{children}</div>
    </section>
  )
}
