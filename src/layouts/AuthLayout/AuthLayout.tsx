import { Outlet } from 'react-router'
import styles from './authlayout.module.scss'

const AuthLayout = () => {
  return (
    <div className={styles.authLayout}>
      <Outlet />
    </div>
  )
}

export { AuthLayout }
