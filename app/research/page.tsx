import { PageHeader } from '@/components/PageHeader'
import { Card } from '@/components/ui/Card'
import { ExperimentsTable } from '@/components/tables/ExperimentsTable'

export default function ResearchPage() {
  return (
    <div className="space-y-4">
      <PageHeader
        title="Research Lab"
        subtitle="Experiments, backtests, and model registry."
        actions={[{ label: 'Run backtest', intent: 'primary' }, { label: 'Promote model', intent: 'ghost' }]}
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card title="Feature Store" subtitle="Datasets, lineage, and leakage checks (placeholder)">
          <ul className="list-disc space-y-2 pl-5 text-sm text-text-muted">
            <li>Source coverage, quality score, and freshness per dataset.</li>
            <li>Leakage and lookahead tests embedded in the workflow.</li>
            <li>Drift monitors auto-linked to model versions.</li>
          </ul>
        </Card>
        <Card title="Model Registry" subtitle="Versions + approvals (placeholder)">
          <div className="space-y-2 text-sm text-text-muted">
            <div className="rounded-xl border border-border bg-bg-2 p-3">Alpha-LS v2.4.1 — Prod — Approved</div>
            <div className="rounded-xl border border-border bg-bg-2 p-3">Macro-CTA v1.9.0 — Paper — Monitoring</div>
            <div className="rounded-xl border border-border bg-bg-2 p-3">StatArb v0.8.3 — Draft — Backtesting</div>
          </div>
        </Card>
      </div>

      <Card title="Experiments" subtitle="Compare runs and promote (mock)">
        <ExperimentsTable />
      </Card>
    </div>
  )
}
