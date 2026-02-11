import type { PropsWithChildren } from 'react'
import styles from './pagelayout.module.scss'

interface IPageLayoutProps {
  title?: string
}

const PageLayout = ({
  title,
  children,
}: PropsWithChildren<IPageLayoutProps>) => {
  return <div className={styles.pageLayout}>{children}</div>
}

export { PageLayout }
