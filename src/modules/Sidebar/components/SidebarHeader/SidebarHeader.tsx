import { ActionButton } from '@/shared/ui/ActionButton'
import { MenuIcon } from 'lucide-react'
import styles from './sidebarheader.module.scss'

const SidebarHeader = () => {
  return (
    <div className={styles.sidebarHeader}>
      <ActionButton>
        <MenuIcon size={20} />
      </ActionButton>
    </div>
  )
}

export { SidebarHeader }
