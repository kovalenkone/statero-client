import { TopbarControls } from './components/TopbarControls'
import { TopbarSearch } from './components/TopbarSearch'
import { TopbarUser } from './components/TopbarUser'
import styles from './topbar.module.scss'

const Topbar = () => {
  return (
    <header className={styles.topbar}>
      <TopbarSearch />
      <div className={styles.topbarRight}>
        <TopbarControls />
        <TopbarUser />
      </div>
    </header>
  )
}

export { Topbar }
