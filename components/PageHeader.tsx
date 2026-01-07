import { Button } from '@/components/ui/Button'

export function PageHeader({
  title,
  subtitle,
  actions = [],
}: {
  title: string
  subtitle?: string
  actions?: Array<{ label: string; intent?: 'primary' | 'ghost' | 'danger' }>
}) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-panel px-4 py-4 shadow-card md:flex-row md:items-center md:justify-between">
      <div className="min-w-0">
        <h1 className="text-lg font-semibold tracking-tight">{title}</h1>
        {subtitle ? <p className="mt-1 text-sm text-text-muted">{subtitle}</p> : null}
      </div>
      <div className="flex flex-wrap gap-2">
        {actions.map((a) => (
          <Button key={a.label} intent={a.intent ?? 'ghost'}>
            {a.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
