import { Card } from '@/components/ui/Card'

export type KPIItem = {
  label: string
  value: string
  helper?: string
}

export function KPIGrid({ items }: { items: KPIItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((k) => (
        <Card key={k.label} className="overflow-hidden">
          <div className="text-xs text-text-muted">{k.label}</div>
          <div className="mt-1 text-2xl font-semibold tracking-tight">{k.value}</div>
          {k.helper ? <div className="mt-1 text-xs text-text-faint">{k.helper}</div> : null}
        </Card>
      ))}
    </div>
  )
}
