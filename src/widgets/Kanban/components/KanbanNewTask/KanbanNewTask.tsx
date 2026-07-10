import { Input } from '@/shared/ui/Input'
import { useRef, useState } from 'react'
import { KanbanNewTaskDueDate } from './components/KanbanNewTaskDueDate'
import { KanbanNewTaskPriorety } from './components/KanbanNewTaskPriorety'
import { KanbanNewTaskProject } from './components/KanbanNewTaskProject'
import { KanbanNewTaskTags } from './components/KanbanNewTaskTags'
import styles from './kanbannewtask.module.scss'

interface IKanbanNewTaskProps {
  onClose: () => void
  onSubmit: () => void
}

const KanbanNewTask = ({ onClose, onSubmit }: IKanbanNewTaskProps) => {
  const ref = useRef(null)
  const [title, setTitle] = useState('')

  return (
    <div className={styles.kanbanNewTask} ref={ref}>
      <div className={styles.kanbanNewTaskInner}>
        <Input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder='Введите название задачи'
        />
        <div className={styles.kanbanNewTaskProperties}>
          <KanbanNewTaskPriorety />
          <KanbanNewTaskProject />
          <KanbanNewTaskDueDate />
          <KanbanNewTaskTags />
        </div>
      </div>
    </div>
  )
}

export { KanbanNewTask }
