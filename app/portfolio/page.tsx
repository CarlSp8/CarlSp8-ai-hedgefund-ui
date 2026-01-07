import { PageHeader } from '@/components/PageHeader'
import { Card } from '@/components/ui/Card'
import { PositionsTable } from '@/components/tables/PositionsTable'
import { ExposureHeatmap } from '@/components/charts/ExposureHeatmap'

export default function PortfolioPage() {
  return (
    <div className="space-y-4">
      <PageHeader
        title="Portfolio"
        subtitle="Positions, exposures, and what-if allocation views."
        actions={[{ label: 'New what-if', intent: 'primary' }, { label: 'Export', intent: 'ghost' }]}
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card title="Exposure Map" subtitle="Strategy × factor (mock)">
          <ExposureHeatmap />
        </Card>
        <Card title="Notes" subtitle="Explainability + constraints">
          <ul className="list-disc space-y-2 pl-5 text-sm text-text-muted">
            <li>Use Decision Cards to explain <span className="text-text">why</span> an instrument is held.</li>
            <li>Show constraints applied (liquidity, leverage, turnover).</li>
            <li>Support Current vs Proposed vs What-if toggles.</li>
          </ul>
        </Card>
      </div>

      <Card title="Positions" subtitle="Filterable table (mock)">
        <PositionsTable />
      </Card>
    </div>
  )
}
