import logo from '@/shared/assets/images/statera-logo.svg'
import { Button } from '@/shared/ui/Button'
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
      <Button onClick={onChangeCollapsed} icon variant='ghost'>
        <MenuIcon />
      </Button>
      <div className={styles.sidebarHeaderLogo}>
        <img width={20} height={20} src={logo} alt='Statero' />
        Statero
      </div>
    </div>
  )
}

export { SidebarHeader }
