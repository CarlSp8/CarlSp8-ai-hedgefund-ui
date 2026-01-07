import type { LucideIcon } from 'lucide-react'
import {
  LayoutDashboard,
  Briefcase,
  Shield,
  Activity,
  FlaskConical,
  Users,
} from 'lucide-react'

export type NavItem = {
  href: string
  label: string
  icon: LucideIcon
}

export const NAV: NavItem[] = [
  { href: '/overview', label: 'Overview', icon: LayoutDashboard },
  { href: '/portfolio', label: 'Portfolio', icon: Briefcase },
  { href: '/risk', label: 'Risk', icon: Shield },
  { href: '/execution', label: 'Execution', icon: Activity },
  { href: '/research', label: 'Research Lab', icon: FlaskConical },
  { href: '/investor', label: 'Investor Portal', icon: Users },
]
