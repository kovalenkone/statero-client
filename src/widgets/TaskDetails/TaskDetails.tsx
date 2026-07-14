import { Dialog } from '@/shared/ui/Dialog'
import { TaskDetailsHead } from './components/TaskDetailsHead'
import { TaskDetailsProperties } from './components/TaskDetailsProperties'
import styles from './taskdetails.module.scss'

interface ITaskDetailsProps {
  opened: boolean
  onClose: () => void
}

const TaskDetails = ({ opened = true, onClose }: ITaskDetailsProps) => {
  return (
    <Dialog opened={opened} onClose={onClose} size='lg'>
      <div className={styles.taskDetails}>
        <TaskDetailsHead onClose={onClose} />
        <div className={styles.taskDetailsBody}>
          <div className={styles.taskDetailsContent}></div>
          <TaskDetailsProperties />
        </div>
      </div>
    </Dialog>
  )
}

export { TaskDetails }
