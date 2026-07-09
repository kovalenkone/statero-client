import type { ITask } from '@/entities/task/types/task.type'
import { Feedback } from '@dnd-kit/dom'
import { useSortable } from '@dnd-kit/react/sortable'
import { KANBAN_ENTITY } from '../../constants/kanban-entity'
import styles from './kanbantask.module.scss'

interface IKanbanTaskProps {
  task: ITask
  index: number
  column: string
}

const KanbanTask = ({ task, index, column }: IKanbanTaskProps) => {
  const { ref } = useSortable({
    id: task.id.toString(),
    index,
    type: KANBAN_ENTITY.ITEM,
    accept: KANBAN_ENTITY.ITEM,
    group: column,
    data: { column },
    plugins: [Feedback.configure({ feedback: 'clone' })],
  })

  return (
    <div className={styles.kanbanTask} ref={ref}>
      {task.title}
    </div>
  )
}

export { KanbanTask }
