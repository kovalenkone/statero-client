import { Outlet } from 'react-router'
import styles from './authlayout.module.css'

const AuthLayout = () => {
  return (
    <div className={styles.authLayout}>
      <Outlet />
    </div>
  )
}

export { AuthLayout }
