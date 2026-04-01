import { Outlet } from 'react-router'
import styles from './authlayout.module.scss'

const AuthLayout = () => {
  return (
    <div className={styles.authLayout}>
      <div className={styles.authLayoutContent}>
        <Outlet />
      </div>
      <div className={styles.authLayoutBanner}></div>
    </div>
  )
}

export { AuthLayout }
