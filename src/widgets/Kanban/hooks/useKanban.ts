import { useState } from 'react'

export const useKanban = () => {
  const [tasks, setTasks] = useState()

  const handleDragStart = () => {}

  const handleDragOver = () => {}

  const handleDragEnd = () => {}

  return {
    tasks,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
  }
}
