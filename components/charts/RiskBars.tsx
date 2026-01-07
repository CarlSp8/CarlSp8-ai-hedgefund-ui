'use client'

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'

const data = [
  { name: '1d VaR', v: 1.2 },
  { name: '1d ES', v: 1.9 },
  { name: '10d VaR', v: 3.7 },
  { name: '10d ES', v: 5.6 },
]

export function RiskBars() {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
          <XAxis type="number" tick={{ fill: '#A6B3C7', fontSize: 12 }} axisLine={false} tickLine={false} unit="%" />
          <YAxis type="category" dataKey="name" tick={{ fill: '#A6B3C7', fontSize: 12 }} axisLine={false} tickLine={false} width={70} />
          <Tooltip
            contentStyle={{ background: '#121F38', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 12, color: '#E6ECF5' }}
            cursor={{ fill: 'rgba(255,255,255,0.06)' }}
          />
          <Bar dataKey="v" fill="#4FE3C2" radius={[8, 8, 8, 8]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
