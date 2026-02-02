import { ActionButton } from '@/shared/ui/ActionButton'
import { MenuIcon, OrbitIcon } from 'lucide-react'
import styles from './sidebarheader.module.scss'

const SidebarHeader = () => {
  return (
    <div className={styles.sidebarHeader}>
      <ActionButton>
        <MenuIcon size={20} />
      </ActionButton>
      <div className={styles.sidebarHeaderLogo}>
        <OrbitIcon size={20} />
        Statera
      </div>
    </div>
  )
}

export { SidebarHeader }
