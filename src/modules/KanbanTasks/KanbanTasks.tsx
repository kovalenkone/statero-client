import { KanbanBoard } from './components/KanbanBoard'
import { KanbanNewBoard } from './components/KanbanNewBoard'
import styles from './kanbantasks.module.scss'

const KanbanTasks = () => {
  return (
    <div className={styles.kanabTasks}>
      <KanbanBoard />
      <KanbanBoard />
      <KanbanBoard />
      <KanbanNewBoard />
    </div>
  )
}

export { KanbanTasks }
