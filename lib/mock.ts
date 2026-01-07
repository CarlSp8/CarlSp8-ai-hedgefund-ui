import type { KPIItem } from '@/components/kpi/KPIGrid'
import type { Decision } from '@/components/decision/DecisionCard'

export const mockKpis: KPIItem[] = [
  { label: 'MTD', value: '+2.14%', helper: 'Net of fees (mock)' },
  { label: 'Sharpe', value: '1.58', helper: 'Rolling 90d' },
  { label: 'Max DD', value: '-3.6%', helper: 'YTD' },
  { label: 'VaR (1d)', value: '1.2%', helper: '95% (mock)' },
]

export const mockInvestorKpis: KPIItem[] = [
  { label: 'YTD', value: '+9.8%', helper: 'Net (mock)' },
  { label: 'Vol', value: '8.4%', helper: 'Annualized (mock)' },
  { label: 'Max DD', value: '-4.1%', helper: 'Rolling 1y' },
  { label: 'Liquidity', value: 'Monthly', helper: 'Subscription terms' },
]

export const mockDecision: Decision = {
  recommendation: 'Increase StatArb',
  size: '+4% gross',
  confidence: 'med',
  regime: 'Risk-on',
  drivers: [
    { name: 'Cross-sectional mean reversion', impact: '+0.23%' },
    { name: 'Earnings surprise dispersion', impact: '+0.12%' },
    { name: 'Funding + borrow', impact: '-0.04%' },
  ],
  constraints: ['Max single-name 4%', 'Turnover cap 22%', 'Liquidity: ADV>20M'],
  modelVersion: 'Alpha-LS v2.4.1',
  approvedBy: 'CIO (mock)',
}

export const mockPositions = [
  { symbol: 'AAPL', name: 'Apple Inc.', qty: 1200, pnl: 1.24, risk: 1.8, liquidity: 'High' as const },
  { symbol: 'MSFT', name: 'Microsoft Corp.', qty: -800, pnl: -0.62, risk: 1.5, liquidity: 'High' as const },
  { symbol: 'NVDA', name: 'NVIDIA Corp.', qty: 300, pnl: 0.48, risk: 2.2, liquidity: 'Med' as const },
  { symbol: 'TLT', name: 'iShares 20+ Year Treasury', qty: 150, pnl: 0.19, risk: 0.9, liquidity: 'Med' as const },
  { symbol: 'XLF', name: 'Financial Select Sector SPDR', qty: -500, pnl: -0.11, risk: 0.7, liquidity: 'High' as const },
]
