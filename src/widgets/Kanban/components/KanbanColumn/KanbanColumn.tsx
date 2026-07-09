import type { ISection } from '@/entities/section/types/section.type'
import { Text } from '@/shared/ui/Text'
import { CollisionPriority } from '@dnd-kit/abstract'
import { RestrictToHorizontalAxis } from '@dnd-kit/abstract/modifiers'
import { useSortable } from '@dnd-kit/react/sortable'
import type { PropsWithChildren } from 'react'
import { KANBAN_ENTITY } from '../../constants/kanban-entity'
import styles from './kanbancolumn.module.scss'

interface IKanbanColumnProps {
  section: ISection
  index: number
}

const KanbanColumn = ({
  index,
  section,
  children,
}: PropsWithChildren<IKanbanColumnProps>) => {
  const { ref, handleRef } = useSortable({
    id: section.id,
    index,
    type: KANBAN_ENTITY.COLUMN,
    accept: [KANBAN_ENTITY.COLUMN, KANBAN_ENTITY.ITEM],
    collisionPriority: CollisionPriority.Low,
    modifiers: [RestrictToHorizontalAxis],
  })

  return (
    <div className={styles.kanbanColumn} ref={ref}>
      <div className={styles.kanbanColumnHead} ref={handleRef}>
        <Text fw='medium'>{section.name}</Text>
        <div className={styles.kanbanColumnActions}></div>
      </div>
      <div className={styles.kanbanColumnBody}>{children}</div>
    </div>
  )
}

export { KanbanColumn }
