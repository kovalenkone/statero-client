import {
  AccentColor,
  type TAccentColor,
} from '@/shared/constants/accent-color.constant'
import { formatDate } from '@/shared/libs/dates/formatDate'
import { getAccentColor } from '@/shared/utils/getAccentColor'
import { DayPicker, type DayPickerProps } from '@daypicker/react'
import { ru } from '@daypicker/react/locale'
import dayjs from 'dayjs'
import {
  CalendarArrowUpIcon,
  CalendarDaysIcon,
  CalendarXIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  type LucideIcon,
} from 'lucide-react'
import { ActionButton } from '../ActionButton'
import { Button } from '../Button'
import { Text } from '../Text'
import styles from './calendar.module.scss'

type TCalendarProps = {
  onPresetSelect?: (date: Date | undefined) => void
} & DayPickerProps

const Calendar = ({ onPresetSelect, ...props }: TCalendarProps) => {
  return (
    <div className={styles.calendar}>
      {onPresetSelect && <CalendarPresets onSelect={onPresetSelect} />}
      <DayPicker
        locale={ru}
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
          day_button: styles.calendarDayButton,
          today: styles.calendarDayToday,
          disabled: styles.calendarDayDisabled,
          selected: styles.calendarDaySelected,
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

interface ICalendarPreset {
  icon: LucideIcon
  label: string
  date: Date | undefined
  day?: string
  color: TAccentColor
}

interface ICalendarPresetProps {
  onSelect: (date: Date | undefined) => void
}

const CalendarPresets = ({ onSelect }: ICalendarPresetProps) => {
  const today = dayjs().toDate()
  const tomorrow = dayjs().add(1, 'day').toDate()

  const calendarPresets: ICalendarPreset[] = [
    {
      icon: CalendarDaysIcon,
      label: 'Сегодня',
      date: today,
      day: formatDate(today, 'shortDay'),
      color: AccentColor.Green,
    },
    {
      icon: CalendarArrowUpIcon,
      label: 'Завтра',
      date: tomorrow,
      day: formatDate(tomorrow, 'shortDay'),
      color: AccentColor.Yellow,
    },
    {
      icon: CalendarXIcon,
      label: 'Без срока',
      date: undefined,
      color: AccentColor.Grey,
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
          onClick={() => onSelect(preset.date)}
        >
          <preset.icon
            size={16}
            style={{ color: getAccentColor(preset.color) }}
          />
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
