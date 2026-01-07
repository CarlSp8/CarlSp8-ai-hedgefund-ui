import { PageHeader } from '@/components/PageHeader'
import { KPIGrid } from '@/components/kpi/KPIGrid'
import { Card } from '@/components/ui/Card'
import { DecisionCard } from '@/components/decision/DecisionCard'
import { AttributionChart } from '@/components/charts/AttributionChart'
import { mockDecision, mockKpis } from '@/lib/mock'

export default function OverviewPage() {
  return (
    <div className="space-y-4">
      <PageHeader
        title="Overview"
        subtitle="What changed today, what needs approval, and what is driving PnL."
        actions={[{ label: 'Approve rebalance', intent: 'primary' }, { label: 'Safe mode', intent: 'ghost' }]}
      />

      <KPIGrid items={mockKpis} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card title="Today’s Drivers" subtitle="Attribution by strategy (mock)">
          <AttributionChart />
        </Card>
        <Card title="Proposed Decision" subtitle="Explainable allocation recommendation">
          <DecisionCard decision={mockDecision} />
        </Card>
      </div>

      <Card title="Model Health" subtitle="Freshness, drift, and monitoring (placeholder)">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-bg-2 p-4">
            <div className="text-sm text-text-muted">Data freshness</div>
            <div className="mt-1 text-2xl font-semibold">OK</div>
            <div className="mt-1 text-xs text-text-faint">Last update: 3 min ago</div>
          </div>
          <div className="rounded-xl border border-border bg-bg-2 p-4">
            <div className="text-sm text-text-muted">Drift</div>
            <div className="mt-1 text-2xl font-semibold">Low</div>
            <div className="mt-1 text-xs text-text-faint">PSI: 0.06 (7d)</div>
          </div>
          <div className="rounded-xl border border-border bg-bg-2 p-4">
            <div className="text-sm text-text-muted">Retrain due</div>
            <div className="mt-1 text-2xl font-semibold">12d</div>
            <div className="mt-1 text-xs text-text-faint">Model v2.4.1</div>
          </div>
        </div>
      </Card>
    </div>
  )
}
