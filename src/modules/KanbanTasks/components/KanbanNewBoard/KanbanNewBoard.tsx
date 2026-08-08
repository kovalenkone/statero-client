import { ICON_SIZE } from '@/shared/constants/icon-size.constant'
import { PlusIcon } from 'lucide-react'
import styles from './kanbannewboard.module.scss'

const KanbanNewBoard = () => {
  return (
    <div className={styles.kanbanNewBoard}>
      <PlusIcon size={ICON_SIZE.lg} />
      Добавить раздел
    </div>
  )
}

export { KanbanNewBoard }
