import { PageHeader } from '@/components/PageHeader'
import { Card } from '@/components/ui/Card'
import { RiskBars } from '@/components/charts/RiskBars'
import { LimitsTable } from '@/components/tables/LimitsTable'

export default function RiskPage() {
  return (
    <div className="space-y-4">
      <PageHeader
        title="Risk"
        subtitle="VaR/ES, drawdown, stress tests, and guardrails."
        actions={[{ label: 'Run stress', intent: 'primary' }, { label: 'Tighten limits', intent: 'ghost' }]}
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card title="Risk Summary" subtitle="VaR / ES (mock)">
          <RiskBars />
        </Card>
        <Card title="Stress Scenarios" subtitle="Historical + custom shocks (placeholder)">
          <div className="space-y-2 text-sm text-text-muted">
            <div className="rounded-xl border border-border bg-bg-2 p-3">2008 crisis: -8.2% (est.)</div>
            <div className="rounded-xl border border-border bg-bg-2 p-3">COVID shock: -5.1% (est.)</div>
            <div className="rounded-xl border border-border bg-bg-2 p-3">Rates +200 bps: -2.4% (est.)</div>
          </div>
        </Card>
      </div>

      <Card title="Limits" subtitle="Hard/soft limits with escalation (mock)">
        <LimitsTable />
      </Card>
    </div>
  )
}
