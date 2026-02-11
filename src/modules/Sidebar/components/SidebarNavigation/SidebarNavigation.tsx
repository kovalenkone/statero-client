import { SIDEBAR_MAIN_NAVIGATION } from '../../constants/sidebar-navigations.constant'
import { SidebarLink } from '../SidebarLink'
import styles from './sidebarnavigation.module.scss'

const SidebarNavigation = () => {
  return (
    <div className={styles.sidebarNavigation}>
      <ul className={styles.sidebarNavigationList}>
        {SIDEBAR_MAIN_NAVIGATION.map(link => (
          <li key={link.href}>
            <SidebarLink link={link} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export { SidebarNavigation }
