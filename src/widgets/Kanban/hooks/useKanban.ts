import type { ISection } from '@/entities/section/types/section.type'
import type {
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
} from '@dnd-kit/abstract'
import { move } from '@dnd-kit/helpers'
import { useMemo, useState } from 'react'
import { KANBAN_ENTITY } from '../constants/kanban-entity'
import type { TKanbanItems } from '../types/kanban-items.type'
import { formatSections } from '../utils/formatSections'
import { sectionsMap } from '../utils/sectionsMap'
import { tasksMap } from '../utils/tasksMap'

const MOCK_DATA: ISection[] = [
  {
    id: 'c1',
    name: 'Сегодня',
    tasks: [
      {
        id: 1,
        title:
          'Задача с большим названием, требующая внимания, создана чисто для теста',
        description: 'Task description',
        isCompleted: false,
      },
      {
        id: 2,
        title: 'Task 2',
        description: 'Task description',
        isCompleted: false,
      },
      {
        id: 3,
        title: 'Task 3',
        description: 'Task description',
        isCompleted: false,
      },
    ],
  },
  {
    id: 'c2',
    name: 'Неделя',
    tasks: [
      {
        id: 4,
        title: 'Task 4',
        description: 'Task description',
        isCompleted: false,
      },
      {
        id: 5,
        title: 'Task 5',
        description: 'Task description',
        isCompleted: false,
      },
    ],
  },
  {
    id: 'c3',
    name: 'Месяц',
    tasks: [],
  },
]

export const useKanban = () => {
  const [items, setItems] = useState<TKanbanItems>(() =>
    formatSections(MOCK_DATA),
  )

  const sections = useMemo(() => {
    return sectionsMap(MOCK_DATA)
  }, [])

  const tasks = useMemo(() => {
    return tasksMap(MOCK_DATA)
  }, [])

  const handleDragStart = (event: DragStartEvent) => {
    const { source } = event.operation
  }

  const handleDragOver = (event: DragOverEvent) => {
    const { source } = event.operation

    if (source?.type === KANBAN_ENTITY.ITEM) {
      setItems(items => move(items, event))
    }
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { source, target } = event.operation
  }

  return {
    items: Object.entries(items),
    sections,
    tasks,
    setItems,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
  }
}
