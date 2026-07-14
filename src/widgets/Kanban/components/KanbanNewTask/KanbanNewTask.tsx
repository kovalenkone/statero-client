import type { TTaskPriorety } from '@/entities/task/constants/task-priorety.constant'
import { ConfirmDialog } from '@/shared/components/ConfirmDialog'
import { useDisclosure } from '@/shared/hooks/useDisclosure'
import { ActionButton } from '@/shared/ui/ActionButton'
import { Textarea } from '@/shared/ui/Textarea'
import { SendHorizonalIcon, XIcon } from 'lucide-react'
import { useState } from 'react'
import { KanbanNewTaskDueDate } from './components/KanbanNewTaskDueDate'
import { KanbanNewTaskPriorety } from './components/KanbanNewTaskPriorety'
import { KanbanNewTaskProject } from './components/KanbanNewTaskProject'
import { KanbanNewTaskTags } from './components/KanbanNewTaskTags'
import styles from './kanbannewtask.module.scss'

interface IKanbanNewTaskProps {
  onClose: () => void
  onSubmit: () => void
}

const KanbanNewTask = ({ onClose, onSubmit }: IKanbanNewTaskProps) => {
  const [title, setTitle] = useState('')
  const [priorety, setPriorety] = useState<TTaskPriorety>(null)

  const [confirmOpened, { open: confirmOpen, close: confirmClose }] =
    useDisclosure(false)

  const handleCloseNewTask = () => {
    if (title) {
      confirmOpen()
    } else {
      onClose()
    }
  }

  return (
    <>
      <div className={styles.kanbanNewTask}>
        <div className={styles.kanbanNewTaskInner}>
          <Textarea
            autoFocus
            autoHeight
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder='Введите название задачи'
            onKeyDown={e => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                onSubmit()
              }
            }}
          />
          <div className={styles.kanbanNewTaskProperties}>
            <KanbanNewTaskPriorety priorety={priorety} onChange={setPriorety} />
            <KanbanNewTaskDueDate />
            <KanbanNewTaskTags />
          </div>
          <div className={styles.kanbanNewTaskFooter}>
            <KanbanNewTaskProject />

            <div className={styles.kanbanNewTaskActions}>
              <ActionButton
                variant='danger'
                size='sm'
                onClick={handleCloseNewTask}
              >
                <XIcon size={16} />
              </ActionButton>
              <ActionButton variant='secondary' size='sm'>
                <SendHorizonalIcon size={14} />
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
      <ConfirmDialog
        title='Закрыть создание новой задачи?'
        description='Несохраненные изменения будут удалены'
        opened={confirmOpened}
        onClose={confirmClose}
        confirm={{ label: 'Закрыть', callback: onClose }}
      />
    </>
  )
}

export { KanbanNewTask }
