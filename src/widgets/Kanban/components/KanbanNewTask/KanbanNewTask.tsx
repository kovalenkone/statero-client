import { PROJECTS } from '@/entities/project/projects.data'
import type { IProject } from '@/entities/project/types/project.type'
import { useNewTask } from '@/entities/task/hooks/useNewTask'
import { useDisclosure } from '@/shared/hooks/useDisclosure'
import { Button } from '@/shared/ui/Button'
import { ConfirmDialog } from '@/shared/ui/ConfirmDialog'
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
  const { newTaskData, handleChangeNewTaskData } = useNewTask({
    project: { id: '1' },
    dueDate: new Date(),
  })

  const [project, setProject] = useState<IProject>(PROJECTS[0])

  const [confirmOpened, { open: confirmOpen, close: confirmClose }] =
    useDisclosure(false)

  const handleCloseNewTask = () => {
    if (newTaskData.title) {
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
            value={newTaskData.title}
            onChange={e => handleChangeNewTaskData(e.target.value, 'title')}
            placeholder='Введите название задачи'
            onKeyDown={e => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                onSubmit()
              }
            }}
          />
          <div className={styles.kanbanNewTaskProperties}>
            <KanbanNewTaskPriorety
              priorety={newTaskData.priorety}
              onSelect={priorety =>
                handleChangeNewTaskData(priorety, 'priorety')
              }
            />
            <KanbanNewTaskDueDate
              date={newTaskData.dueDate ?? undefined}
              onSelect={date =>
                handleChangeNewTaskData(date ?? null, 'dueDate')
              }
            />
            <KanbanNewTaskTags
              selectedTagsIds={newTaskData.tags}
              onSelect={tag => handleChangeNewTaskData(tag, 'tags')}
            />
          </div>
          <div className={styles.kanbanNewTaskFooter}>
            <KanbanNewTaskProject
              projects={PROJECTS}
              selectedProject={project}
              onSelect={setProject}
            />

            <div className={styles.kanbanNewTaskActions}>
              <Button
                variant='danger'
                size='md'
                icon
                onClick={handleCloseNewTask}
              >
                <XIcon />
              </Button>
              <Button variant='secondary' size='md' icon>
                <SendHorizonalIcon />
              </Button>
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
