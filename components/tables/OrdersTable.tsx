import { Badge } from '@/components/ui/Badge'

const orders = [
  { symbol: 'AAPL', side: 'BUY', qty: 1200, type: 'MKT', urgency: 'High', reason: 'signal ↑, within liquidity' },
  { symbol: 'MSFT', side: 'SELL', qty: 800, type: 'LMT', urgency: 'Med', reason: 'risk budget trim' },
  { symbol: 'TLT', side: 'BUY', qty: 150, type: 'MKT', urgency: 'Low', reason: 'rates hedge' },
]

export function OrdersTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left text-sm">
        <thead>
          <tr className="text-xs text-text-muted">
            <th className="py-2 pr-4">Symbol</th>
            <th className="py-2 pr-4">Side</th>
            <th className="py-2 pr-4">Qty</th>
            <th className="py-2 pr-4">Type</th>
            <th className="py-2 pr-4">Urgency</th>
            <th className="py-2 pr-4">Rationale</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.symbol + o.side} className="border-t border-border">
              <td className="py-3 pr-4 text-text font-medium">{o.symbol}</td>
              <td className="py-3 pr-4">
                <Badge tone={o.side === 'BUY' ? 'ok' : 'danger'}>{o.side}</Badge>
              </td>
              <td className="py-3 pr-4 text-text-muted">{o.qty.toLocaleString()}</td>
              <td className="py-3 pr-4 text-text-muted">{o.type}</td>
              <td className="py-3 pr-4">
                <Badge tone={o.urgency === 'High' ? 'warn' : 'muted'}>{o.urgency}</Badge>
              </td>
              <td className="py-3 pr-4 text-text-muted">{o.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
