import { PageHeader } from '@/components/PageHeader'
import { Card } from '@/components/ui/Card'
import { KPIGrid } from '@/components/kpi/KPIGrid'
import { mockInvestorKpis } from '@/lib/mock'

export default function InvestorPage() {
  return (
    <div className="space-y-4">
      <PageHeader
        title="Investor Portal"
        subtitle="LP-friendly performance, risk snapshots, and reports."
        actions={[{ label: 'Download report', intent: 'primary' }, { label: 'Contact IR', intent: 'ghost' }]}
      />

      <KPIGrid items={mockInvestorKpis} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card title="Exposure Snapshot" subtitle="High-level, capped detail">
          <div className="space-y-2 text-sm text-text-muted">
            <div className="flex items-center justify-between rounded-xl border border-border bg-bg-2 p-3"><span>Net exposure</span><span className="text-text">+24%</span></div>
            <div className="flex items-center justify-between rounded-xl border border-border bg-bg-2 p-3"><span>Gross exposure</span><span className="text-text">118%</span></div>
            <div className="flex items-center justify-between rounded-xl border border-border bg-bg-2 p-3"><span>Leverage</span><span className="text-text">1.3x</span></div>
          </div>
        </Card>
        <Card title="Documents" subtitle="PPM, DDQ, letters (placeholder)">
          <ul className="list-disc space-y-2 pl-5 text-sm text-text-muted">
            <li>Monthly letter (PDF)</li>
            <li>Audited financials</li>
            <li>DDQ</li>
          </ul>
        </Card>
      </div>
    </div>
  )
}
