import { Badge } from '@/components/ui/Badge'

export type Decision = {
  recommendation: string
  size: string
  confidence: 'low' | 'med' | 'high'
  regime: string
  drivers: Array<{ name: string; impact: string }>
  constraints: string[]
  modelVersion: string
  approvedBy?: string
}

function confidenceTone(c: Decision['confidence']) {
  if (c === 'high') return 'ok'
  if (c === 'med') return 'warn'
  return 'danger'
}

export function DecisionCard({ decision }: { decision: Decision }) {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <div className="text-xs text-text-muted">Recommendation</div>
          <div className="mt-1 text-lg font-semibold">{decision.recommendation} <span className="text-text-muted">({decision.size})</span></div>
        </div>
        <div className="flex items-center gap-2">
          <Badge tone={confidenceTone(decision.confidence)}>confidence: {decision.confidence}</Badge>
          <Badge tone="muted">regime: {decision.regime}</Badge>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-bg-2 p-3">
        <div className="text-xs font-semibold">Top drivers</div>
        <ul className="mt-2 space-y-1 text-sm text-text-muted">
          {decision.drivers.map((d) => (
            <li key={d.name} className="flex items-center justify-between gap-3">
              <span className="truncate">{d.name}</span>
              <span className="text-text">{d.impact}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl border border-border bg-bg-2 p-3">
        <div className="text-xs font-semibold">Constraints applied</div>
        <div className="mt-2 flex flex-wrap gap-2">
          {decision.constraints.map((c) => (
            <Badge key={c} tone="muted">{c}</Badge>
          ))}
        </div>
      </div>

      <div className="text-xs text-text-faint">
        Model: {decision.modelVersion}{decision.approvedBy ? ` • Approved by: ${decision.approvedBy}` : ''}
      </div>
    </div>
  )
}
