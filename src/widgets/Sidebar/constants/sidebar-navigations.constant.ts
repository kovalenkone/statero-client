import { AppPath } from '@/shared/configs/app-path'
import type { ILink } from '@/shared/types/link.type'
import {
  ArchiveIcon,
  FolderClosedIcon,
  HouseIcon,
  InboxIcon,
  SettingsIcon,
  SquareCheckBigIcon,
} from 'lucide-react'

export const SIDEBAR_MAIN_NAVIGATION: ILink[] = [
  {
    label: 'Обзор',
    href: AppPath.overview,
    icon: HouseIcon,
  },
  {
    label: 'Входящие',
    href: AppPath.inbox,
    icon: InboxIcon,
  },
  {
    label: 'Задачи',
    href: AppPath.tasks,
    icon: SquareCheckBigIcon,
  },
  {
    label: 'Проекты',
    href: AppPath.projects,
    icon: FolderClosedIcon,
  },
]

export const SIDEBAR_FOOTER_NAVIGATION: ILink[] = [
  {
    label: 'Архив',
    href: AppPath.archive,
    icon: ArchiveIcon,
  },
  {
    label: 'Настройки',
    href: AppPath.archive,
    icon: SettingsIcon,
  },
]
