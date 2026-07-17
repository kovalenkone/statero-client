export type TTaskPriorety = 'high' | 'medium' | 'low' | 'none'

export const TaskPriorety = {
  high: {
    color: 'red',
    value: 'high',
    label: 'Высокий',
  },
  medium: {
    color: 'yellow',
    value: 'medium',
    label: 'Средний',
  },
  low: {
    color: 'green',
    value: 'low',
    label: 'Низкий',
  },
  none: {
    color: 'grey',
    value: 'none',
    label: 'Без приоритета',
  },
} as const
