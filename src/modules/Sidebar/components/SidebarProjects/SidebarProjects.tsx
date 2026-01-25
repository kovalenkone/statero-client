import { SidebarProjectLink } from './components/SidebarProjectLink'
import { SidebarProjectsController } from './components/SidebarProjectsController'
import styles from './sidebarprojects.module.scss'

const SidebarProjects = () => {
  return (
    <div className={styles.sidebarProjects}>
      <SidebarProjectsController />
      <ul className={styles.sidebarProjectsList}>
        <li>
          <SidebarProjectLink />
        </li>
        <li>
          <SidebarProjectLink />
        </li>
        <li>
          <SidebarProjectLink />
        </li>
      </ul>
    </div>
  )
}

export { SidebarProjects }
