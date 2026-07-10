import { ActionButton } from '@/shared/ui/ActionButton'
import { FolderClosedIcon } from 'lucide-react'

const KanbanNewTaskProject = () => {
  return (
    <ActionButton size='sm'>
      <FolderClosedIcon size={14} />
    </ActionButton>
  )
}

export { KanbanNewTaskProject }
