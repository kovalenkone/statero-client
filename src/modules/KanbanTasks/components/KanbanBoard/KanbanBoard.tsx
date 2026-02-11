import { ActionButton } from '@/shared/ui/ActionButton'
import { Text } from '@/shared/ui/Text'
import { EllipsisIcon, PlusIcon } from 'lucide-react'
import { KanbanTask } from '../KanbanTask'
import styles from './kanbanboard.module.scss'

const KanbanBoard = () => {
  return (
    <div className={styles.kanbanBoard}>
      <div className={styles.kanbanBoardHead}>
        <div className={styles.kanbanBoardHeadInfo}>
          <Text fw='medium'>Сегодня</Text>
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
        <KanbanTask />
        <KanbanTask />
      </div>
    </div>
  )
}

export { KanbanBoard }
