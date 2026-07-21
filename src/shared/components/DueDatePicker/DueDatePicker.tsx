import { useDisclosure } from '@/shared/hooks/useDisclosure'
import { Calendar } from '@/shared/ui/Calendar'
import { Popover } from '@/shared/ui/Popover'
import type { PropsWithChildren } from 'react'

interface IDueDatePickerProps {
  date: Date | undefined
  onSelect: (date: Date | undefined) => void
}

const DueDatePicker = ({
  date,
  onSelect,
  children,
}: PropsWithChildren<IDueDatePickerProps>) => {
  const [opened, { open, close }] = useDisclosure(false)

  const handleSelect = (date: Date | undefined) => {
    close()
    onSelect(date)
  }

  return (
    <Popover open={opened} onOpenChange={next => (next ? open() : close())}>
      <Popover.Trigger asChild>{children}</Popover.Trigger>
      <Popover.Content>
        <Calendar
          mode='single'
          selected={date}
          defaultMonth={date}
          disabled={{ before: new Date() }}
          onSelect={handleSelect}
          onPresetSelect={handleSelect}
        />
      </Popover.Content>
    </Popover>
  )
}

export { DueDatePicker }
