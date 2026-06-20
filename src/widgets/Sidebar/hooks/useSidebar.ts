import { useLocalStorage } from '@/shared/hooks/useLocalStorage'
import { useState } from 'react'

export const useSidebar = () => {
  const [collapsedLS, setCollapsedLS] = useLocalStorage<boolean>(
    'sidebar_collapsed',
    false,
  )
  const [collapsed, setCollapsed] = useState<boolean>(collapsedLS)

  const handleChangeCollapsed = () => {
    setCollapsed(cur => !cur)
    setCollapsedLS(collapsed)
  }

  const favoriteProjects: string[] = []
  const projects: string[] = []

  return {
    collapsed,
    projects,
    favoriteProjects,
    handleChangeCollapsed,
  }
}
