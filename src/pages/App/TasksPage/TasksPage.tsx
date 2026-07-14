import { PageLayout } from '@/layouts/PageLayout'
import { KanbanTasks } from '@/modules/KanbanTasks'
import { PageHead } from '@/shared/components/PageHead'
import { PageTabs } from '@/shared/components/PageTabs'
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
