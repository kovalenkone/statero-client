import { AppPath } from '@/shared/constants/app-path.constant'
import { ActionButton } from '@/shared/ui/ActionButton'
import { ChevronDownIcon, PlusIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './sidebarprojectscontroller.module.scss'

const SidebarProjectsController = () => {
  return (
    <div className={styles.sidebarProjectsController}>
      <Link
        className={styles.sidebarProjectsControllerLink}
        to={AppPath.Projects}
      >
        Проекты
      </Link>
      <div className={styles.sidebarProjectsControllerActions}>
        <ActionButton size='xs'>
          <PlusIcon size={14} />
        </ActionButton>
        <ActionButton size='xs'>
          <ChevronDownIcon size={14} />
        </ActionButton>
      </div>
    </div>
  )
}

export { SidebarProjectsController }
