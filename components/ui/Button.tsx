import * as React from 'react'
import { cn } from '@/components/ui/cn'

type Intent = 'primary' | 'ghost' | 'danger'

export function Button({
  intent = 'ghost',
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { intent?: Intent }) {
  const base = 'inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm font-medium transition border border-border'
  const styles: Record<Intent, string> = {
    primary: 'bg-brand text-white border-transparent hover:opacity-90 shadow-card',
    ghost: 'bg-bg-2 text-text hover:bg-bg-3',
    danger: 'bg-danger text-white border-transparent hover:opacity-90',
  }
  return <button className={cn(base, styles[intent], className)} {...props} />
}
