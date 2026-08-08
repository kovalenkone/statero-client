import { useObjectState } from '@/shared/hooks/useObjectState'
import { changeArray } from '@/shared/utils/changeArray'
import type { ITask, ITaskProject } from '../types/task.type'

interface IUseNewTaskProps {
  project: ITaskProject
  dueDate: Date
}

type TNewTask = Omit<ITask, 'id' | 'isCompleted'>

const isTagsKey = (
  key: keyof TNewTask,
  payload: unknown,
): payload is string => {
  return key === 'tags' && typeof payload === 'string'
}

type TPayloadFor<V> = V extends Array<infer Item> ? Item : V

export const useNewTask = ({ project, dueDate }: IUseNewTaskProps) => {
  const [newTaskData, setNewTaskData] = useObjectState<TNewTask>({
    title: '',
    description: '',
    tags: [],
    priorety: 'none',
    project,
    dueDate,
  })

  const handleChangeNewTaskData = <K extends keyof TNewTask>(
    payload: TPayloadFor<TNewTask[K]>,
    key: K,
  ) => {
    if (isTagsKey(key, payload)) {
      console.log(
        'arraynew',
        changeArray(newTaskData.tags).update(payload, t => t),
      )
      setNewTaskData(
        changeArray(newTaskData.tags).update(payload, t => t),
        'tags',
      )
    } else {
      setNewTaskData(payload, key)
    }
  }

  return {
    newTaskData,
    handleChangeNewTaskData,
  }
}
