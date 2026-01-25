import { ActionButton } from '@/shared/ui/ActionButton'
import { SunIcon } from 'lucide-react'
import styles from './topbar.module.scss'

const Topbar = () => {
  return (
    <header className={styles.topbar}>
      <ActionButton>
        <SunIcon />
      </ActionButton>
    </header>
  )
}

export { Topbar }
