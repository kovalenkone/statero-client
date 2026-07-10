import { ActionButton } from '@/shared/ui/ActionButton'
import { TagIcon } from 'lucide-react'

const KanbanNewTaskTags = () => {
  return (
    <ActionButton size='sm'>
      <TagIcon size={14} />
    </ActionButton>
  )
}

export { KanbanNewTaskTags }
