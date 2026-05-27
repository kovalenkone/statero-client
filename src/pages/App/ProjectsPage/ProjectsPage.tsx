import { PageLayout } from '@/layouts/PageLayout'
import { PageHead } from '@/shared/components/PageHead'

const ProjectsPage = () => {
  return (
    <PageLayout title='Проекты'>
      <PageHead
        title='Все проекты'
        descr='Организуйте задачи по проектам и держите работу под контролем'
      />
    </PageLayout>
  )
}

export { ProjectsPage }
