import type { IPageTab } from '@/shared/types/page-tab'
import { CalendarDaysIcon, KanbanIcon, TableOfContentsIcon } from 'lucide-react'
import type { TTaskTab } from '../types/task-tab.type'

export const TASK_TABS: IPageTab<TTaskTab>[] = [
  {
    icon: KanbanIcon,
    label: 'Канбан',
    value: 'kanban',
  },
  {
    icon: TableOfContentsIcon,
    label: 'Таблица',
    value: 'table',
  },
  {
    icon: CalendarDaysIcon,
    label: 'Календарь',
    value: 'calendar',
  },
] as const
