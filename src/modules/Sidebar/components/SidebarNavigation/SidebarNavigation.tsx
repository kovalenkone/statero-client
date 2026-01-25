import { SidebarMainNavigation } from '../../constants/sidebar-navigations.constant'
import { SidebarLink } from '../SidebarLink'
import styles from './sidebarnavigation.module.scss'

const SidebarNavigation = () => {
  return (
    <div className={styles.sidebarNavigation}>
      <ul className={styles.sidebarNavigationList}>
        {SidebarMainNavigation.map(link => (
          <li key={link.href}>
            <SidebarLink link={link} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export { SidebarNavigation }
