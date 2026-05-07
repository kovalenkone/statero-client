import type { IPageTab } from '@/shared/types/page-tab'
import { Button } from '@/shared/ui/Button'
import clsx from 'clsx'
import { useState } from 'react'
import styles from './pagetabs.module.scss'

interface IPageTabsProps<T extends string> {
  defaultTab: T
  tabs: IPageTab<T>[]
}

const PageTabs = <T extends string>({
  defaultTab,
  tabs,
}: IPageTabsProps<T>) => {
  const [value, setValue] = useState<T>(defaultTab)

  const handleChangeTab = (param: T) => {
    setValue(param)
  }

  return (
    <div className={styles.pageTabs}>
      {tabs.map(tab => (
        <div
          key={tab.value}
          className={clsx(styles.pageTab, {
            [styles.active]: tab.value === value,
          })}
        >
          <Button
            variant='ghost'
            size='md'
            onClick={() => handleChangeTab(tab.value)}
          >
            {tab.icon && <tab.icon size={16} />}
            {tab.label}
          </Button>
        </div>
      ))}
    </div>
  )
}

export { PageTabs }
