import { ICON_SIZE } from '@/shared/constants/icon-size.constant'
import { usePathMatch } from '@/shared/hooks/usePathMatch'
import type { ILink } from '@/shared/types/link.type'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import styles from './sidebarlink.module.scss'

interface ISidebarLink {
  link: ILink
}

const SidebarLink = ({ link }: ISidebarLink) => {
  const match = usePathMatch({ path: link.href })

  return (
    <Link
      to={link.href}
      className={clsx(styles.sidebarLink, {
        [styles.active]: match,
      })}
    >
      {link.icon && <link.icon size={ICON_SIZE.md} />}
      {link.label}
    </Link>
  )
}

export { SidebarLink }
