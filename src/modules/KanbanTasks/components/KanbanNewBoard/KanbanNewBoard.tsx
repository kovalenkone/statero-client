import { PlusIcon } from 'lucide-react'
import styles from './kanbannewboard.module.scss'

const KanbanNewBoard = () => {
  return (
    <div className={styles.kanbanNewBoard}>
      <PlusIcon size={18} />
      Добавить раздел
    </div>
  )
}

export { KanbanNewBoard }
