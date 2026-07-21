import {
  AccentColor,
  type TAccentColor,
} from '@/shared/constants/accent-color.constant'
import dayjs from 'dayjs'
import { formatDate } from './formatDate'

const NEAR_DAYS_THRESHOLD = 7

interface IDueDateInfo {
  label: string
  color: TAccentColor
}

export const getDueDate = (date: Date): IDueDateInfo => {
  const diffInDays = dayjs(date)
    .startOf('day')
    .diff(dayjs().startOf('day'), 'day')

  if (diffInDays < 0)
    return { label: formatDate(date, 'date'), color: AccentColor.Red }
  if (diffInDays === 0) return { label: 'Сегодня', color: AccentColor.Green }
  if (diffInDays === 1) return { label: 'Завтра', color: AccentColor.Yellow }
  if (diffInDays > 1 && diffInDays < NEAR_DAYS_THRESHOLD) {
    return { label: formatDate(date, 'day'), color: AccentColor.Violet }
  }

  return { label: formatDate(date, 'date'), color: AccentColor.Violet }
}
