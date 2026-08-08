import { ICON_SIZE } from '@/shared/constants/icon-size.constant'
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
        <PaperclipIcon size={ICON_SIZE.sm} />
      </Button>
    </div>
  )
}

export { KanbanTaskFooter }
