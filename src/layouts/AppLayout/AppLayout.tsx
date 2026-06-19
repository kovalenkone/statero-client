import { Sidebar } from '@/modules/Sidebar'
import { Topbar } from '@/modules/Topbar'
import { UserService } from '@/services/user/user.service'
import { useEffect } from 'react'
import { Outlet } from 'react-router'
import styles from './applayout.module.scss'

const AppLayout = () => {
  useEffect(() => {
    UserService.me()
  })

  return (
    <div className={styles.appLayout}>
      <Sidebar />
      <div className={styles.appLayoutRight}>
        <Topbar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export { AppLayout }
