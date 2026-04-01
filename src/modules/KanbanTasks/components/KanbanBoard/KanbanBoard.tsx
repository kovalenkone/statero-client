import type { IBoard } from '@/shared/types/board.type'
import { ActionButton } from '@/shared/ui/ActionButton'
import { Text } from '@/shared/ui/Text'
import { useSortable } from '@dnd-kit/react/sortable'
import { EllipsisIcon, PlusIcon } from 'lucide-react'
import { KanbanTask } from '../KanbanTask'
import styles from './kanbanboard.module.scss'

interface IKanbanBoardProps {
  board: IBoard
}

const KanbanBoard = ({ board }: IKanbanBoardProps) => {
  const { ref, handleRef } = useSortable({
    id: board.id,
    index: board.order,
    type: 'board',
    collisionPriority: 1,
    accept: ['task', 'board'],
    disabled: true,
  })

  return (
    <div className={styles.kanbanBoard} ref={ref}>
      <div className={styles.kanbanBoardHead} ref={handleRef}>
        <div className={styles.kanbanBoardHeadInfo}>
          <Text fw='medium'>{board.name}</Text>
        </div>
        <div className={styles.kanbanBoardActions}>
          <ActionButton size='sm'>
            <PlusIcon size={16} />
          </ActionButton>
          <ActionButton size='sm'>
            <EllipsisIcon size={16} />
          </ActionButton>
        </div>
      </div>

      <div className={styles.kanbanBoardBody}>
        {board.tasks?.map(task => (
          <KanbanTask key={task.id} task={task} boardId={board.id} />
        ))}
      </div>
    </div>
  )
}

export { KanbanBoard }
