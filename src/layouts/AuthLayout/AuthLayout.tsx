import banner from '@/shared/assets/images/auth-banner.svg'
import { Logo } from '@/shared/ui/Logo'
import { Outlet } from 'react-router'
import styles from './authlayout.module.scss'

const AuthLayout = () => {
  return (
    <div className={styles.authLayout}>
      <div className={styles.authLayoutBody}>
        <Logo className={styles.authLayoutLogo} />
        <Outlet />
      </div>
      <div className={styles.authLayoutBanner}>
        <img src={banner} alt='auth banner' />
      </div>
    </div>
  )
}

export { AuthLayout }
