import { DueDatePicker } from '@/shared/components/DueDatePicker'
import { getDueDate } from '@/shared/libs/dates/getDueDate'
import { ActionButton } from '@/shared/ui/ActionButton'
import { Button } from '@/shared/ui/Button'
import { getAccentColor } from '@/shared/utils/getAccentColor'
import { CalendarDaysIcon } from 'lucide-react'

interface IKanbanNewTaskDueDateProps {
  date: Date | undefined
  onSelect: (date: Date | undefined) => void
}

const KanbanNewTaskDueDate = ({
  date,
  onSelect,
}: IKanbanNewTaskDueDateProps) => {
  const dueDate = date ? getDueDate(date) : null

  return (
    <DueDatePicker date={date} onSelect={onSelect}>
      {dueDate ? (
        <Button variant='ghost' size='sm'>
          <CalendarDaysIcon
            size={14}
            style={{ color: getAccentColor(dueDate.color) }}
          />
          {dueDate.label}
        </Button>
      ) : (
        <ActionButton size='sm'>
          <CalendarDaysIcon size={14} />
        </ActionButton>
      )}
    </DueDatePicker>
  )
}

export { KanbanNewTaskDueDate }
