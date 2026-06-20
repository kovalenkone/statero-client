import { SidebarProjectsListItem } from './components/SidebarProjectsListItem'
import styles from './sidebarprojectslist.module.scss'

const SidebarProjectsList = () => {
  return (
    <ul className={styles.sidebarProjectsList}>
      <li>
        <SidebarProjectsListItem />
      </li>
      <li>
        <SidebarProjectsListItem />
      </li>
      <li>
        <SidebarProjectsListItem />
      </li>
    </ul>
  )
}

export { SidebarProjectsList }
