import { cn } from '@/components/ui/cn'

type Tone = 'ok' | 'warn' | 'danger' | 'muted'

export function Badge({
  tone = 'muted',
  children,
  className,
}: {
  tone?: Tone
  children: React.ReactNode
  className?: string
}) {
  const styles: Record<Tone, string> = {
    ok: 'bg-[rgba(45,212,191,0.15)] text-ok border-[rgba(45,212,191,0.25)]',
    warn: 'bg-[rgba(255,176,32,0.15)] text-warn border-[rgba(255,176,32,0.25)]',
    danger: 'bg-[rgba(255,77,79,0.15)] text-danger border-[rgba(255,77,79,0.25)]',
    muted: 'bg-[rgba(255,255,255,0.06)] text-text-muted border-border',
  }
  return (
    <span className={cn('inline-flex items-center rounded-full border px-2 py-0.5 text-xs', styles[tone], className)}>
      {children}
    </span>
  )
}
