import type { TTaskPriorety } from '../constants/task-priorety.constant'

export interface ITask {
  id: string
  title: string
  description?: string

  tags: string[]
  priorety: TTaskPriorety
  project: ITaskProject
  dueDate: Date | null

  // position: number
  // priorety: string

  isCompleted: boolean
  // completedAt: Date
}

export interface ITaskProject {
  id: string
  section?: string | null
}
