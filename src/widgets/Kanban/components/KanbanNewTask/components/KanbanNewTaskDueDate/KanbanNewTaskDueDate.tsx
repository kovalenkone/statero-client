import { DueDatePicker } from '@/shared/components/DueDatePicker'
import { ICON_SIZE } from '@/shared/constants/icon-size.constant'
import { getDueDate } from '@/shared/libs/dates/getDueDate'
import { ActionButton } from '@/shared/ui/ActionButton'
import { Button } from '@/shared/ui/Button'
import { getAccentColor } from '@/shared/utils/getAccentColor'
import { CalendarDaysIcon } from 'lucide-react'

const DATE_ICON_SIZE = ICON_SIZE.md

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
        <Button variant='ghost' size='md'>
          <CalendarDaysIcon
            size={DATE_ICON_SIZE}
            style={{ color: getAccentColor(dueDate.color) }}
          />
          {dueDate.label}
        </Button>
      ) : (
        <ActionButton size='sm'>
          <CalendarDaysIcon size={DATE_ICON_SIZE} />
        </ActionButton>
      )}
    </DueDatePicker>
  )
}

export { KanbanNewTaskDueDate }
