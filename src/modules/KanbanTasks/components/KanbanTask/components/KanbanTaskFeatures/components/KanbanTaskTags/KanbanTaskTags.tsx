import { Bage } from '@/shared/ui/Bage'
import { Button } from '@/shared/ui/Button'
import styles from './kanbantasktags.module.scss'

const KanbanTaskTags = () => {
  return (
    <Button variant='ghost' size='sm' className={styles.kanbanTaskTags}>
      <Bage size='xs' variant='orange'>
        Frontend
      </Bage>
      <Bage size='xs' variant='yellow'>
        Test
      </Bage>
    </Button>
  )
}

export { KanbanTaskTags }
