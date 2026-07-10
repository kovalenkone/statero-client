import { ActionButton } from '@/shared/ui/ActionButton'
import { CircleAlertIcon } from 'lucide-react'

const KanbanNewTaskPriorety = () => {
  return (
    <ActionButton size='sm'>
      <CircleAlertIcon size={14} />
    </ActionButton>
  )
}

export { KanbanNewTaskPriorety }
