'use client'

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'

const data = [
  { name: 'StatArb', pnl: 0.42 },
  { name: 'Macro', pnl: 0.18 },
  { name: 'Momentum', pnl: -0.09 },
  { name: 'Carry', pnl: 0.05 },
]

export function AttributionChart() {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <XAxis dataKey="name" tick={{ fill: '#A6B3C7', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: '#A6B3C7', fontSize: 12 }} axisLine={false} tickLine={false} unit="%" />
          <Tooltip
            contentStyle={{ background: '#121F38', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 12, color: '#E6ECF5' }}
            cursor={{ fill: 'rgba(255,255,255,0.06)' }}
          />
          <Bar dataKey="pnl" fill="#7C5CFF" radius={[8, 8, 8, 8]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
