import type { PropsWithChildren } from 'react'
import styles from './sidebarscrollarea.module.scss'

const SidebarScrollArea = ({ children }: PropsWithChildren) => {
  return <div className={styles.sidebarScrollArea}>{children}</div>
}

export { SidebarScrollArea }
