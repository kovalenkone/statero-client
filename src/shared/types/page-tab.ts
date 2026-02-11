import type { LucideIcon } from 'lucide-react'

export interface IPageTab<T> {
  icon?: LucideIcon
  label: string
  value: T
}
