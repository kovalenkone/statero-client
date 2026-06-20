import { SidebarHeader } from './components/SidebarHeader'
import { SidebarNavigation } from './components/SidebarNavigation'
import { SidebarProjects } from './components/SidebarProjects'
import { SidebarScrollArea } from './components/SidebarScrollArea'
import {
  SIDEBAR_FOOTER_NAVIGATION,
  SIDEBAR_MAIN_NAVIGATION,
} from './constants/sidebar-navigations.constant'
import { useSidebar } from './hooks/useSidebar'
import styles from './sidebar.module.scss'

const Sidebar = () => {
  const { collapsed, handleChangeCollapsed } = useSidebar()

  return (
    <aside className={styles.sidebar}>
      <SidebarHeader
        collapsed={collapsed}
        onChangeCollapsed={handleChangeCollapsed}
      />

      <SidebarNavigation links={SIDEBAR_MAIN_NAVIGATION} />

      <SidebarScrollArea>
        <SidebarProjects title='Проекты' />
        <SidebarProjects title='Избранное' />
      </SidebarScrollArea>

      <SidebarNavigation links={SIDEBAR_FOOTER_NAVIGATION} />
    </aside>
  )
}

export { Sidebar }
