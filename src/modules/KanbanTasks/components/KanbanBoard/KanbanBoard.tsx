import { ICON_SIZE } from '@/shared/constants/icon-size.constant'
import type { IBoard } from '@/shared/types/board.type'
import { Button } from '@/shared/ui/Button'
import { Text } from '@/shared/ui/Text'
import { useSortable } from '@dnd-kit/react/sortable'
import { EllipsisIcon, PlusIcon } from 'lucide-react'
import { KanbanTask } from '../KanbanTask'
import styles from './kanbanboard.module.scss'

const ACTION_ICON_SIZE = ICON_SIZE.md

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
          <Button size='sm' variant='ghost' icon>
            <PlusIcon size={ACTION_ICON_SIZE} />
          </Button>
          <Button size='sm' variant='ghost' icon>
            <EllipsisIcon size={ACTION_ICON_SIZE} />
          </Button>
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
