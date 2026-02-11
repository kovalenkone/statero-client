import { PageHead } from '@/components/PageHead'
import { PageLayout } from '@/layouts/PageLayout'

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
