import { PageTabs } from '@/shared/ui/PageTabs'
import { Outlet } from 'react-router-dom'
import { PageLayout } from '../PageLayout'
import { TASK_PAGE_TABS } from './constants/taks-page-tabs.constant'
import { PageHead } from '@/shared/ui/PageHead'

const TasksLayout = () => {
  return (
    <PageLayout title='Задачи'>
      <PageHead
        title='Все задачи'
        descr='Планируйте день, неделю и месяц — все задачи разложены по времени'
      />
      <PageTabs tabs={TASK_PAGE_TABS} />
      <Outlet />
    </PageLayout>
  )
}

export { TasksLayout }
