import { AppPath } from '@/shared/constants/app-path.constant'
import type { ILink } from '@/shared/types/link.type'
import {
  ArchiveIcon,
  HouseIcon,
  InboxIcon,
  SquareCheckBigIcon,
} from 'lucide-react'

export const SidebarMainNavigation: ILink[] = [
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

export const SidebarFooterNavigation: ILink[] = [
  {
    label: 'Архив',
    href: AppPath.Archive,
    icon: ArchiveIcon,
  },
]
