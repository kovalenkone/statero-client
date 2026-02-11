import { Button } from '@/shared/ui/Button'
import { PaperclipIcon } from 'lucide-react'
import styles from './kanbantaskfooter.module.scss'

const KanbanTaskFooter = () => {
  return (
    <div className={styles.kanbanTaskFooter}>
      <Button
        size='sm'
        variant='ghost'
        className={styles.kanbanTaskFooterButton}
      >
        <PaperclipIcon size={14} />1
      </Button>
    </div>
  )
}

export { KanbanTaskFooter }
