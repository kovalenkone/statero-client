import { PageLayout } from '@/layouts/PageLayout'
import { PageHead } from '@/shared/components/PageHead'
import { Kanban } from '@/widgets/Kanban'

const ProjectsPage = () => {
  return (
    <PageLayout title='Проекты'>
      <PageHead
        title='Все проекты'
        descr='Организуйте задачи по проектам и держите работу под контролем'
      />
      <Kanban />
    </PageLayout>
  )
}

export { ProjectsPage }
