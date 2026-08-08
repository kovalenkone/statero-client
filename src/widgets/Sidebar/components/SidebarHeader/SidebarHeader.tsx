import logo from '@/shared/assets/images/statera-logo.svg'
import { ICON_SIZE } from '@/shared/constants/icon-size.constant'
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
        <MenuIcon size={ICON_SIZE.xl} />
      </ActionButton>
      <div className={styles.sidebarHeaderLogo}>
        <img width={20} height={20} src={logo} alt='Statero' />
        Statero
      </div>
    </div>
  )
}

export { SidebarHeader }
