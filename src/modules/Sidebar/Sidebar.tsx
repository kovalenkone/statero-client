import { SidebarFooter } from './components/SidebarFooter'
import { SidebarHeader } from './components/SidebarHeader'
import { SidebarNavigation } from './components/SidebarNavigation'
import { SidebarProjects } from './components/SidebarProjects'
import styles from './sidebar.module.scss'

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <SidebarHeader />
      <SidebarNavigation />
      <SidebarProjects />
      <SidebarFooter />
    </aside>
  )
}

export { Sidebar }
