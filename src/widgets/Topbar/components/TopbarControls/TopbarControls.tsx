import { TopbarLanguage } from './components/TopbarLanguage'
import { TopbarTheme } from './components/TopbarTheme'
import styles from './topbarcontrols.module.scss'

const TopbarControls = () => {
  return (
    <div className={styles.topbarControls}>
      <TopbarLanguage />
      <TopbarTheme />
    </div>
  )
}

export { TopbarControls }
