import type { ITask } from '@/entities/task/types/task.type'

export interface ISection {
  id: string
  name: string
  // position: number

  tasks: ITask[]
}
