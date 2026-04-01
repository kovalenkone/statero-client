import type { ITask } from '@/shared/types/task.type'
import { useSortable } from '@dnd-kit/react/sortable'
import { KanbanTaskHead } from './components/KanbanTaskHead'
import styles from './kanbantask.module.scss'
import { KanbanTaskFeatures } from './components/KanbanTaskFeatures'
import { KanbanTaskFooter } from './components/KanbanTaskFooter'

interface IKanbanTaskProps {
  task: ITask
  boardId: string
}

const KanbanTask = ({ task, boardId }: IKanbanTaskProps) => {
  const { ref, isDragging } = useSortable({
    id: task.id,
    index: task.order,
    type: 'task',
    accept: 'task',
    group: boardId,
  })

  return (
    <div className={styles.kanbanTask} ref={ref} data-dragging={isDragging}>
      <KanbanTaskHead />
      <KanbanTaskFeatures />
      <KanbanTaskFooter />
    </div>
  )
}

export { KanbanTask }
