import type { LucideIcon } from 'lucide-react'

type TBaseItem = {
  label: string
  icon?: LucideIcon
  disabled?: boolean
}

export type TMenuItem =
  | (TBaseItem & { type?: 'item'; href?: string; onClick?: () => void })
  | { type: 'separator' }
  | { type: 'label'; label: string }
  | (TBaseItem & { type: 'submenu'; items: TMenuItem[] })

export type TMenu = TMenuItem[]
