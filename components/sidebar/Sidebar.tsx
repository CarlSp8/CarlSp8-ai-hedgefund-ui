'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV } from './nav'
import { cn } from '@/components/ui/cn'

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="rounded-xl border border-border bg-panel shadow-card">
      <div className="border-b border-border px-4 py-4">
        <div className="text-sm font-semibold tracking-tight">AI Hedge Fund</div>
        <div className="mt-1 text-xs text-text-muted">Operating system UI</div>
      </div>

      <nav className="p-2">
        {NAV.map((item) => {
          const active = pathname === item.href
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-text-muted transition',
                active ? 'bg-bg-2 text-text' : 'hover:bg-bg-2 hover:text-text'
              )}
            >
              <Icon size={16} />
              <span className="truncate">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="border-t border-border px-4 py-3">
        <div className="text-xs text-text-faint">v0.1 • mock data</div>
      </div>
    </aside>
  )
}
