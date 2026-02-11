import { TaskCompletion } from '@/shared/ui/TaskCompletion'
import { Text } from '@/shared/ui/Text'
import styles from './kanbantaskhead.module.scss'

const KanbanTaskHead = () => {
  return (
    <div className={styles.kanabTaskHead}>
      <div className={styles.kanbanTaskHeadInner}>
        <TaskCompletion
          completed={false}
          className={styles.kanabTaskHeadCompletion}
        />
        <Text className={styles.kanabTaskHeadName}>
          Реализовать drag and drop на странице задач kanban
        </Text>
      </div>
    </div>
  )
}

export { KanbanTaskHead }
