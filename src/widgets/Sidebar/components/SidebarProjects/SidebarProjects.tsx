import { SidebarProjectsHead } from './components/SidebarProjectHead'
import { SidebarProjectsList } from './components/SidebarProjectsList'
import styles from './sidebarprojects.module.scss'

interface ISidebarProjectsProps {
  title: string
  onAdd?: () => void
}

const SidebarProjects = ({ title, onAdd }: ISidebarProjectsProps) => {
  return (
    <div className={styles.sidebarProjects}>
      <SidebarProjectsHead title={title} onAdd={onAdd} />
      <SidebarProjectsList />
    </div>
  )
}

export { SidebarProjects }
