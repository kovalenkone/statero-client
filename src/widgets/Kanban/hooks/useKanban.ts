import type { ISection } from '@/entities/section/types/section.type'
import { flatMap } from '@/shared/utils/flatMap'
import { toMap } from '@/shared/utils/toMap'
import type {
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
} from '@dnd-kit/abstract'
import { move } from '@dnd-kit/helpers'
import { useMemo, useState } from 'react'
import { KANBAN_ENTITY } from '../constants/kanban-entity'
import type { TKanbanItems } from '../types/kanban-items.type'

const SECTIONS: ISection[] = [
  {
    id: 'c1',
    name: 'Сегодня',
    tasks: [
      {
        id: '1',
        title:
          'Задача с большим названием, требующая внимания, создана чисто для теста',
        description: 'Task description',
        isCompleted: false,
        tags: [],
        priorety: 'none',
        project: { id: '' },
        dueDate: null,
      },
      {
        id: '2',
        title: 'Task 2',
        description: 'Task description',
        isCompleted: false,
        tags: [],
        priorety: 'none',
        project: { id: '' },
        dueDate: null,
      },
      {
        id: '3',
        title: 'Task 3',
        description: 'Task description',
        isCompleted: false,
        tags: [],
        priorety: 'none',
        project: { id: '' },
        dueDate: null,
      },
    ],
  },
  {
    id: 'c2',
    name: 'Неделя',
    tasks: [
      {
        id: '4',
        title: 'Task 4',
        description: 'Task description',
        isCompleted: false,
        tags: [],
        priorety: 'none',
        project: { id: '' },
        dueDate: null,
      },
      {
        id: '5',
        title: 'Task 5',
        description: 'Task description',
        isCompleted: false,
        tags: [],
        priorety: 'none',
        project: { id: '' },
        dueDate: null,
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
    toMap(
      SECTIONS,
      section => section.id,
      section => section.tasks.map(task => task.id),
    ),
  )

  const sections = useMemo(() => {
    return toMap(SECTIONS, section => section.id)
  }, [])

  const tasks = useMemo(() => {
    return toMap(
      flatMap(SECTIONS, section => section.tasks),
      t => t.id,
    )
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
