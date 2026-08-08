import { useState } from 'react'

type TUseObjectStateReturn<T> = [
  state: T,
  handleChangeState: <K extends keyof T>(payload: T[K], key: keyof T) => void,
]

export const useObjectState = <T extends object>(
  initialState: T,
): TUseObjectStateReturn<T> => {
  const [state, setState] = useState<T>(initialState)

  const handleChangeState = <K extends keyof T>(
    payload: T[K],
    key: keyof T,
  ) => {
    setState(cur => {
      return { ...cur, [key]: payload }
    })
  }

  return [state, handleChangeState]
}
