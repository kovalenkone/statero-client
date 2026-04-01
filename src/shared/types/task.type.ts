export type TTaskPriorety = 'low' | 'medium' | 'high' | 'none'

export interface ITask {
  id: string
  title: string
  description?: string
  priorety: TTaskPriorety
  dueDate?: string
  tags?: string[]
  order: number
}
