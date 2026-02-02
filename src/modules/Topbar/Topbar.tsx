import { Input } from '@/shared/ui/Input'
import { TopbarControls } from './components/TopbarControls'
import { TopbarUser } from './components/TopbarUser'
import styles from './topbar.module.scss'

const Topbar = () => {
  return (
    <header className={styles.topbar}>
      <Input />
      <div className={styles.topbarRight}>
        <TopbarControls />
        <TopbarUser />
      </div>
    </header>
  )
}

export { Topbar }
