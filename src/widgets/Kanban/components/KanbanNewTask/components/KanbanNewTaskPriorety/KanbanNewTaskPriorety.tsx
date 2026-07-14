import type { TTaskPriorety } from '@/entities/task/constants/task-priorety.constant'
import { TaskPrioretySelector } from '@/shared/components/TaskPrioretySelector'
import { ActionButton } from '@/shared/ui/ActionButton'
import { CircleAlertIcon } from 'lucide-react'

interface IKanbanNewTaskPrioretyProps {
  priorety: TTaskPriorety
  onChange: (priorety: TTaskPriorety) => void
}

const KanbanNewTaskPriorety = ({
  priorety,
  onChange,
}: IKanbanNewTaskPrioretyProps) => {
  return (
    <TaskPrioretySelector priorety={priorety} onChange={onChange}>
      <ActionButton size='sm'>
        <CircleAlertIcon size={14} />
      </ActionButton>
    </TaskPrioretySelector>
  )
}

export { KanbanNewTaskPriorety }
