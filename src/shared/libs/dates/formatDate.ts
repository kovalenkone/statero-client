import dayjs from 'dayjs'
dayjs.locale('ru')

type TDateFormat = 'day' | 'shortDay' | 'date'

const DATE_FORMATS: Record<TDateFormat, string> = {
  day: 'dddd',
  shortDay: 'dd',
  date: 'DD.MM',
}

export const formatDate = (
  date: dayjs.ConfigType,
  format: TDateFormat = 'day',
) => {
  return dayjs(date).format(DATE_FORMATS[format])
}
