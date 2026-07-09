import { Sidebar } from '@/widgets/Sidebar'
import { Topbar } from '@/widgets/Topbar'
import { Outlet } from 'react-router'
import styles from './applayout.module.scss'

const AppLayout = () => {
  // useEffect(() => {
  //   UserService.me()
  // })

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
