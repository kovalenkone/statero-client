import { PageHead } from '@/components/PageHead'
import { PageTabs } from '@/components/PageTabs'
import { PageLayout } from '@/layouts/PageLayout'
import { KanbanTasks } from '@/modules/KanbanTasks'
import { TASK_TABS } from './constants/task-tabs.constant'

const TasksPage = () => {
  return (
    <PageLayout title='Задачи'>
      <PageHead
        title='Все задачи'
        descr='Планируйте день, неделю и месяц — все задачи разложены по времени'
      />
      <PageTabs defaultTab={'kanban'} tabs={TASK_TABS} />
      <KanbanTasks />
    </PageLayout>
  )
}

export { TasksPage }
