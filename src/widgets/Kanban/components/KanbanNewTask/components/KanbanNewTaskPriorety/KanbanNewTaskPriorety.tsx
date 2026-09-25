import { getAccentColor } from '@/entities/accent-color/utils/getAccentColor'
import { TaskPrioretySelector } from '@/entities/task/components/TaskPrioretySelector'
import {
  TaskPriorety,
  type TTaskPriorety,
} from '@/entities/task/constants/task-priorety.constant'
import { Button } from '@/shared/ui/Button'
import { CircleAlertIcon } from 'lucide-react'

interface IKanbanNewTaskPrioretyProps {
  priorety: TTaskPriorety
  onSelect: (priorety: TTaskPriorety) => void
}

const KanbanNewTaskPriorety = ({
  priorety,
  onSelect,
}: IKanbanNewTaskPrioretyProps) => {
  const priorityConfig = priorety !== 'none' ? TaskPriorety[priorety] : null

  return (
    <TaskPrioretySelector priorety={priorety} onSelect={onSelect}>
      <Button size='md' variant='ghost' icon={!priorityConfig}>
        <CircleAlertIcon
          style={{ color: getAccentColor(priorityConfig?.color) }}
        />
        {priorityConfig?.label}
      </Button>
    </TaskPrioretySelector>
  )
}

export { KanbanNewTaskPriorety }
