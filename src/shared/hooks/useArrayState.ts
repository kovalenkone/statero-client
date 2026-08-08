import { useState } from 'react'
import { changeArray } from '../utils/changeArray'

type TUseArrayStateReturn<T> = [
  state: T[],
  {
    add: (value: T) => void
    remove: (index: number) => void
    update: (value: T, callback: (value: T) => string | number) => void
  },
]

export const useArrayState = <T>(
  initialArray: T[],
): TUseArrayStateReturn<T> => {
  const [state, setState] = useState<T[]>(initialArray)

  const add = (value: T) => {
    setState(cur => {
      return changeArray(cur).add(value)
    })
  }

  const remove = (index: number) => {
    setState(cur => changeArray(cur).remove(index))
  }

  const update = (value: T, callback: (value: T) => string | number) => {
    setState(cur => {
      return changeArray(cur).update(value, callback)
    })
  }

  return [state, { add, remove, update }]
}
