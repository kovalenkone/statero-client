import { SIDEBAR_FOOTER_NAVIGATION } from '../../constants/sidebar-navigations.constant'
import { SidebarLink } from '../SidebarLink'
import styles from './sidebarfooter.module.scss'

const SidebarFooter = () => {
  return (
    <div className={styles.sidebarFooterNavigation}>
      <ul className={styles.sidebarFooterNavigationList}>
        {SIDEBAR_FOOTER_NAVIGATION.map(link => (
          <li key={link.href}>
            <SidebarLink link={link} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export { SidebarFooter }
