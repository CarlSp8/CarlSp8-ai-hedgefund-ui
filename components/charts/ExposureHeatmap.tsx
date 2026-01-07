export function ExposureHeatmap() {
  const rows = [
    { strategy: 'StatArb', factor: 'Value', v: 0.18 },
    { strategy: 'StatArb', factor: 'Momentum', v: -0.07 },
    { strategy: 'Macro', factor: 'Rates', v: 0.22 },
    { strategy: 'Macro', factor: 'FX', v: -0.11 },
    { strategy: 'Momentum', factor: 'Trend', v: 0.15 },
    { strategy: 'Carry', factor: 'Carry', v: 0.09 },
  ]

  return (
    <div className="grid grid-cols-1 gap-2">
      {rows.map((r, idx) => (
        <div key={idx} className="flex items-center justify-between rounded-xl border border-border bg-bg-2 p-3">
          <div className="text-sm">
            <span className="text-text">{r.strategy}</span>
            <span className="text-text-muted"> · {r.factor}</span>
          </div>
          <div className="text-sm font-semibold" style={{ color: r.v >= 0 ? '#2DD4BF' : '#FF4D4F' }}>
            {r.v >= 0 ? '+' : ''}{Math.round(r.v * 100)}%
          </div>
        </div>
      ))}
    </div>
  )
}
