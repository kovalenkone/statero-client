import {
  TaskPriorety,
  type TTaskPriorety,
} from '@/entities/task/constants/task-priorety.constant'
import { TaskPrioretySelector } from '@/shared/components/TaskPrioretySelector'
import { ActionButton } from '@/shared/ui/ActionButton'
import { Button } from '@/shared/ui/Button'
import { CircleAlertIcon } from 'lucide-react'

interface IKanbanNewTaskPrioretyProps {
  priorety: TTaskPriorety
  onChange: (priorety: string) => void
}

const KanbanNewTaskPriorety = ({
  priorety,
  onChange,
}: IKanbanNewTaskPrioretyProps) => {
  return (
    <TaskPrioretySelector priorety={priorety} onSelect={onChange}>
      {priorety !== 'none' ? (
        <Button size='sm' variant='ghost'>
          <CircleAlertIcon
            size={14}
            style={{ color: `var(--${TaskPriorety[priorety].color})` }}
          />
          {TaskPriorety[priorety].label}
        </Button>
      ) : (
        <ActionButton size='sm'>
          <CircleAlertIcon size={14} />
        </ActionButton>
      )}
    </TaskPrioretySelector>
  )
}

export { KanbanNewTaskPriorety }
