import { AppPath } from '@/routes/app-path'
import type { ILink } from '@/shared/types/link.type'
import {
  ArchiveIcon,
  HouseIcon,
  InboxIcon,
  SquareCheckBigIcon,
} from 'lucide-react'

export const SIDEBAR_MAIN_NAVIGATION: ILink[] = [
  {
    label: 'Обзор',
    href: AppPath.Overview,
    icon: HouseIcon,
  },
  {
    label: 'Входящие',
    href: AppPath.Inbox,
    icon: InboxIcon,
  },
  {
    label: 'Задачи',
    href: AppPath.Tasks,
    icon: SquareCheckBigIcon,
  },
]

export const SIDEBAR_FOOTER_NAVIGATION: ILink[] = [
  {
    label: 'Архив',
    href: AppPath.Archive,
    icon: ArchiveIcon,
  },
]
