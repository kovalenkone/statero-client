import { getAccentColor } from '@/entities/accent-color/utils/getAccentColor'
import { DueDatePicker } from '@/shared/components/DueDatePicker'
import { getDueDate } from '@/shared/libs/dates/getDueDate'
import { Button } from '@/shared/ui/Button'
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
      <Button variant='ghost' size='md' icon={!dueDate}>
        <CalendarDaysIcon style={{ color: getAccentColor(dueDate?.color) }} />
        {dueDate?.label}
      </Button>
    </DueDatePicker>
  )
}

export { KanbanNewTaskDueDate }
