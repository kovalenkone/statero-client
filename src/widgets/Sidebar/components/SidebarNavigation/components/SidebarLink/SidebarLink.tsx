import { ICON_SIZE } from '@/shared/constants/icon-size.constant'
import type { ILink } from '@/shared/types/link.type'
import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'
import styles from './sidebarlink.module.scss'

interface ISidebarLink {
  link: ILink
}

const SidebarLink = ({ link }: ISidebarLink) => {
  const Icon = link.icon

  const { pathname } = useLocation()

  return (
    <Link
      to={link.href}
      className={clsx(styles.sidebarLink, {
        [styles.active]: pathname === link.href,
      })}
    >
      {Icon && <Icon size={ICON_SIZE.md} />}
      {link.label}
    </Link>
  )
}

export { SidebarLink }
