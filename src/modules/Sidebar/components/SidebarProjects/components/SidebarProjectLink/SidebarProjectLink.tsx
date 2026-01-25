import { ActionButton } from '@/shared/ui/ActionButton'
import { Bage } from '@/shared/ui/Bage'
import { EllipsisIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './sidebarprojectlink.module.scss'

const SidebarProjectLink = () => {
  return (
    <div className={styles.sidebarProjectLinkWrapper}>
      <Link to={''} className={styles.sidebarProjectLink}>
        <Bage size='xs' square>
          S
        </Bage>
        <span>Statera задачи задачи задачи задачи</span>
      </Link>
      <ActionButton size='xs' className={styles.sidebarProjectButton}>
        <EllipsisIcon size={14} />
      </ActionButton>
    </div>
  )
}

export { SidebarProjectLink }
