import type { ISection } from '@/entities/section/types/section.type'
import type { ITask } from '@/entities/task/types/task.type'

export const tasksMap = (sections: ISection[]): Record<string, ITask> => {
  return sections.reduce((result, section) => {
    const tasks = section.tasks.reduce((res, task) => {
      return {
        ...res,
        [task.id]: task,
      }
    }, {})

    return {
      ...result,
      ...tasks,
    }
  }, {})
}
