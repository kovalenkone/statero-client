import { DayPicker } from '@daypicker/react'
import { ru } from '@daypicker/react/locale'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import {
  CalendarArrowUpIcon,
  CalendarDaysIcon,
  CalendarXIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'lucide-react'
import type { ComponentProps } from 'react'
import { ActionButton } from '../ActionButton'
import { Button } from '../Button'
import { Text } from '../Text'
import styles from './calendar.module.scss'

dayjs.locale('ru')

type TCalendarProps = {
  presets?: boolean
} & ComponentProps<typeof DayPicker>

const Calendar = ({ presets = true, ...props }: TCalendarProps) => {
  return (
    <div className={styles.calendar}>
      {presets && <CalendarPresets />}
      <DayPicker
        locale={ru}
        disabled={{ before: new Date() }}
        classNames={{
          root: styles.calendarRoot,
          month_caption: styles.calendarMonthCaption,
          month_grid: styles.calendarMonthGrid,
          caption_label: styles.calendarCaption,
          nav: styles.calendarNav,
          button_next: styles.calendarNavButton,
          button_previous: styles.calendarNavButton,
          weekday: styles.calendarWeekday,
          day: styles.calendarDay,
        }}
        components={{
          PreviousMonthButton: ({ ...props }) => (
            <ActionButton size='sm' {...props}>
              <ChevronLeftIcon size={16} />
            </ActionButton>
          ),
          NextMonthButton: ({ ...props }) => (
            <ActionButton size='sm' {...props}>
              <ChevronRightIcon size={16} />
            </ActionButton>
          ),
        }}
        {...props}
      />
    </div>
  )
}

const CalendarPresets = () => {
  const calendarPresets = [
    {
      icon: CalendarDaysIcon,
      label: 'Сегодня',
      date: new Date(),
      day: dayjs().format('dd'),
      color: 'green',
    },
    {
      icon: CalendarArrowUpIcon,
      label: 'Завтра',
      date: new Date(),
      day: dayjs().add(1, 'day').format('dd'),
      color: 'yellow',
    },
    {
      icon: CalendarXIcon,
      label: 'Без срока',
      date: new Date(),
      color: 'grey',
    },
  ]

  return (
    <div className={styles.calendarPresets}>
      {calendarPresets.map(preset => (
        <Button
          key={preset.label}
          variant='ghost'
          size='md'
          stretch
          className={styles.calendarPreset}
        >
          <preset.icon size={16} style={{ color: `var(--${preset.color})` }} />
          {preset.label}
          <Text as='span' color='muted'>
            {preset.day}
          </Text>
        </Button>
      ))}
    </div>
  )
}

export { Calendar }
