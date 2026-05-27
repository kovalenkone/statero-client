import { PageLayout } from '@/layouts/PageLayout'
import { PageHead } from '@/shared/components/PageHead'

const OverviewPage = () => {
  return (
    <PageLayout title='Обзор'>
      <PageHead
        title='Обзор'
        descr='Ваше рабочее пространство: всё важное собрано в одном экране'
      />
    </PageLayout>
  )
}

export { OverviewPage }
