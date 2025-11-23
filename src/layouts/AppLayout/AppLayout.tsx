import { Outlet } from 'react-router'
import styles from './applayout.module.css'

const AppLayout = () => {
  return (
    <div className={styles.appLayout}>
      <Outlet />
    </div>
  )
}

export { AppLayout }
