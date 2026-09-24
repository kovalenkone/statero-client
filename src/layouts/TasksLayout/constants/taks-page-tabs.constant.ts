import { AppPath } from '@/shared/configs/app-path'
import type { IPageTab } from '@/shared/types/page-tab'
import { KanbanIcon, TableIcon } from 'lucide-react'

export const TASK_PAGE_TABS: IPageTab[] = [
  {
    icon: KanbanIcon,
    label: 'Канбан',
    path: AppPath.tasksKanban,
  },
  {
    icon: TableIcon,
    label: 'Таблица',
    path: AppPath.tasksTable,
  },
]
