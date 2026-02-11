import { KanbanTaskFeatures } from './components/KanbanTaskFeatures'
import { KanbanTaskFooter } from './components/KanbanTaskFooter'
import { KanbanTaskHead } from './components/KanbanTaskHead'
import styles from './kanbantask.module.scss'

const KanbanTask = () => {
  return (
    <div className={styles.kanbanTask}>
      <KanbanTaskHead />
      <KanbanTaskFeatures />
      <KanbanTaskFooter />
    </div>
  )
}

export { KanbanTask }
