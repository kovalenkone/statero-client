import { KanbanTaskTags } from './components/KanbanTaskTags'
import styles from './kanbantaskfeatures.module.scss'

const KanbanTaskFeatures = () => {
  return (
    <div className={styles.kanbanTaskFeatures}>
      <KanbanTaskTags />
    </div>
  )
}

export { KanbanTaskFeatures }
