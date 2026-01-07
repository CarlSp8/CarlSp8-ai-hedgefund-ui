import { PageHeader } from '@/components/PageHeader'
import { Card } from '@/components/ui/Card'
import { OrdersTable } from '@/components/tables/OrdersTable'

export default function ExecutionPage() {
  return (
    <div className="space-y-4">
      <PageHeader
        title="Execution"
        subtitle="Orders, fills, slippage, and trading controls."
        actions={[{ label: 'Approve batch', intent: 'primary' }, { label: 'Kill switch', intent: 'danger' }]}
      />

      <Card title="Proposed Orders" subtitle="Rationale + constraints (mock)">
        <OrdersTable />
      </Card>

      <Card title="Post-trade" subtitle="VWAP vs arrival + venue breakdown (placeholder)">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-bg-2 p-4">
            <div className="text-sm text-text-muted">Avg slippage</div>
            <div className="mt-1 text-2xl font-semibold">7.4 bps</div>
          </div>
          <div className="rounded-xl border border-border bg-bg-2 p-4">
            <div className="text-sm text-text-muted">Fill ratio</div>
            <div className="mt-1 text-2xl font-semibold">96%</div>
          </div>
          <div className="rounded-xl border border-border bg-bg-2 p-4">
            <div className="text-sm text-text-muted">Rejects</div>
            <div className="mt-1 text-2xl font-semibold">0</div>
          </div>
        </div>
      </Card>
    </div>
  )
}
