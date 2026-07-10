import { ActionButton } from '@/shared/ui/ActionButton'
import { CalendarDaysIcon } from 'lucide-react'

const KanbanNewTaskDueDate = () => {
  return (
    <ActionButton size='sm'>
      <CalendarDaysIcon size={14} />
    </ActionButton>
  )
}

export { KanbanNewTaskDueDate }
