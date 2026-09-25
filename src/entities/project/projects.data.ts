import { AccentColor } from '../accent-color/constants/accent-color.constant'
import type { IProject } from './types/project.type'

export const PROJECTS: IProject[] = [
  {
    id: '0',
    name: 'Входящие',
    description: '',
    color: AccentColor.Blue,
    icon: '',
    sections: [],
    isInbox: true,
  },
  {
    id: '1',
    name: 'Statera',
    description: '',
    color: AccentColor.Blue,
    icon: '',
    sections: [
      {
        id: '11',
        name: 'Бэклог',
        tasks: [],
      },
      {
        id: '22',
        name: 'Нужно сделать',
        tasks: [],
      },
      {
        id: '33',
        name: 'Выполняется',
        tasks: [],
      },
    ],
  },
  {
    id: '2',
    name: 'Проект 1',
    description: '',
    color: AccentColor.Orange,
    icon: '',
    sections: [
      {
        id: '111',
        name: 'Сегодня',
        tasks: [],
      },
      {
        id: '222',
        name: 'Выполняется',
        tasks: [],
      },
      {
        id: '333',
        name: 'Завтра',
        tasks: [],
      },
    ],
  },
]
