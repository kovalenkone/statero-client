import type { ILink } from '@/shared/types/link.type'
import { SidebarLink } from './components/SidebarLink'
import styles from './sidebarnavigation.module.scss'

interface ISidebarNavigationProps {
  links: ILink[]
}

const SidebarNavigation = ({ links }: ISidebarNavigationProps) => {
  return (
    <div className={styles.sidebarNavigation}>
      <ul className={styles.sidebarNavigationList}>
        {links.map(link => (
          <li key={link.href}>
            <SidebarLink link={link} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export { SidebarNavigation }
