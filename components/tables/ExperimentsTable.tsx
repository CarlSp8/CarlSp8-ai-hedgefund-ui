import { Badge } from '@/components/ui/Badge'

const exps = [
  { name: 'Alpha-LS v2.4.1', metric: 'Sharpe 1.62', status: 'Prod' },
  { name: 'Macro-CTA v1.9.0', metric: 'Sharpe 1.21', status: 'Paper' },
  { name: 'StatArb v0.8.3', metric: 'Sharpe 1.05', status: 'Draft' },
]

export function ExperimentsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left text-sm">
        <thead>
          <tr className="text-xs text-text-muted">
            <th className="py-2 pr-4">Experiment</th>
            <th className="py-2 pr-4">Key metric</th>
            <th className="py-2 pr-4">Stage</th>
          </tr>
        </thead>
        <tbody>
          {exps.map((e) => (
            <tr key={e.name} className="border-t border-border">
              <td className="py-3 pr-4 text-text font-medium">{e.name}</td>
              <td className="py-3 pr-4 text-text-muted">{e.metric}</td>
              <td className="py-3 pr-4">
                <Badge tone={e.status === 'Prod' ? 'ok' : e.status === 'Paper' ? 'warn' : 'muted'}>
                  {e.status}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
