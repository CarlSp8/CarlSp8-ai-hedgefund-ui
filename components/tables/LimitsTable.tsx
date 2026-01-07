import { Badge } from '@/components/ui/Badge'

const limits = [
  { name: 'Max single-name', current: '3.1%', limit: '4.0%', status: 'ok' as const },
  { name: 'Gross exposure', current: '118%', limit: '130%', status: 'ok' as const },
  { name: 'Net exposure', current: '24%', limit: '35%', status: 'ok' as const },
  { name: '1d VaR', current: '1.2%', limit: '1.0%', status: 'warn' as const },
]

export function LimitsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left text-sm">
        <thead>
          <tr className="text-xs text-text-muted">
            <th className="py-2 pr-4">Limit</th>
            <th className="py-2 pr-4">Current</th>
            <th className="py-2 pr-4">Threshold</th>
            <th className="py-2 pr-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {limits.map((l) => (
            <tr key={l.name} className="border-t border-border">
              <td className="py-3 pr-4 text-text font-medium">{l.name}</td>
              <td className="py-3 pr-4 text-text-muted">{l.current}</td>
              <td className="py-3 pr-4 text-text-muted">{l.limit}</td>
              <td className="py-3 pr-4">
                <Badge tone={l.status === 'ok' ? 'ok' : l.status === 'warn' ? 'warn' : 'danger'}>
                  {l.status.toUpperCase()}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
