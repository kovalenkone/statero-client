import logo from '@/shared/assets/images/statera-logo.svg'
import { ActionButton } from '@/shared/ui/ActionButton'
import { MenuIcon } from 'lucide-react'
import styles from './sidebarheader.module.scss'

interface ISidebarHeaderProps {
  collapsed: boolean
  onChangeCollapsed: () => void
}

const SidebarHeader = ({
  collapsed,
  onChangeCollapsed,
}: ISidebarHeaderProps) => {
  return (
    <div className={styles.sidebarHeader}>
      <ActionButton onClick={onChangeCollapsed}>
        <MenuIcon size={20} />
      </ActionButton>
      <div className={styles.sidebarHeaderLogo}>
        <img width={20} height={20} src={logo} alt='Statero' />
        Statero
      </div>
    </div>
  )
}

export { SidebarHeader }
