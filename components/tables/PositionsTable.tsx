import { Badge } from '@/components/ui/Badge'
import { mockPositions } from '@/lib/mock'

export function PositionsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left text-sm">
        <thead>
          <tr className="text-xs text-text-muted">
            <th className="py-2 pr-4">Instrument</th>
            <th className="py-2 pr-4">Qty</th>
            <th className="py-2 pr-4">PnL</th>
            <th className="py-2 pr-4">Risk contrib</th>
            <th className="py-2 pr-4">Liquidity</th>
          </tr>
        </thead>
        <tbody>
          {mockPositions.map((p) => (
            <tr key={p.symbol} className="border-t border-border">
              <td className="py-3 pr-4">
                <div className="text-text font-medium">{p.symbol}</div>
                <div className="text-xs text-text-faint">{p.name}</div>
              </td>
              <td className="py-3 pr-4 text-text-muted">{p.qty.toLocaleString()}</td>
              <td className="py-3 pr-4" style={{ color: p.pnl >= 0 ? '#2DD4BF' : '#FF4D4F' }}>
                {p.pnl >= 0 ? '+' : ''}{p.pnl.toFixed(2)}%
              </td>
              <td className="py-3 pr-4 text-text-muted">{p.risk.toFixed(1)}%</td>
              <td className="py-3 pr-4">
                <Badge tone={p.liquidity === 'High' ? 'ok' : p.liquidity === 'Med' ? 'warn' : 'danger'}>{p.liquidity}</Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
