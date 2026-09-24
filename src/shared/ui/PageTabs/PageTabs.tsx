import { ICON_SIZE } from '@/shared/constants/icon-size.constant'
import type { IPageTab } from '@/shared/types/page-tab'
import clsx from 'clsx'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { Button } from '../Button'
import styles from './pagetabs.module.scss'

interface IPageTabsProps {
  tabs: IPageTab[]
}

const PageTabs = ({ tabs }: IPageTabsProps) => {
  return (
    <nav className={styles.pageTabs}>
      <ul className={styles.pageTabsList}>
        {tabs.map(tab => (
          <PageTabItem key={tab.path} tab={tab} />
        ))}
      </ul>
    </nav>
  )
}

const PageTabItem = ({ tab }: { tab: IPageTab }) => {
  const resolved = useResolvedPath(tab.path)
  const match = useMatch({ path: resolved.pathname, end: true })

  return (
    <li className={styles.pageTabsItem}>
      <Button asChild variant='ghost' size='md'>
        <Link
          to={tab.path}
          className={clsx(styles.pageTabsLink, { [styles.active]: !!match })}
        >
          {tab.icon && <tab.icon size={ICON_SIZE.md} />}
          {tab.label}
        </Link>
      </Button>
    </li>
  )
}

export { PageTabs }
