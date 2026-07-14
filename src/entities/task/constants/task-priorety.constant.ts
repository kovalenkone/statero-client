export type TTaskPriorety = 'high' | 'medium' | 'low' | null

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
    value: null,
    label: 'Без приоритета',
  },
} as const
