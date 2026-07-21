import {
  TaskPriorety,
  type TTaskPriorety,
} from '@/entities/task/constants/task-priorety.constant'
import { TaskPrioretySelector } from '@/shared/components/TaskPrioretySelector'
import { ActionButton } from '@/shared/ui/ActionButton'
import { Button } from '@/shared/ui/Button'
import { getAccentColor } from '@/shared/utils/getAccentColor'
import { CircleAlertIcon } from 'lucide-react'

const PRIORITY_ICON_SIZE = 14

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
      {priorityConfig ? (
        <Button size='sm' variant='ghost'>
          <CircleAlertIcon
            size={PRIORITY_ICON_SIZE}
            style={{ color: getAccentColor(priorityConfig.color) }}
          />
          {priorityConfig.label}
        </Button>
      ) : (
        <ActionButton size='sm'>
          <CircleAlertIcon size={PRIORITY_ICON_SIZE} />
        </ActionButton>
      )}
    </TaskPrioretySelector>
  )
}

export { KanbanNewTaskPriorety }
