import { useState } from 'react'

export const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key)

    if (storedValue) {
      return JSON.parse(storedValue)
    }

    localStorage.setItem(key, JSON.stringify(defaultValue))
    return defaultValue
  })

  const setToLocalStorage = (value: T) => {
    setValue(value)
    localStorage.setItem(key, JSON.stringify(value))
  }

  const removeFromLocalStorage = () => {
    setValue(defaultValue)
    localStorage.removeItem(key)
  }

  return [value, setToLocalStorage, removeFromLocalStorage] as const
}
