import { PageHead } from '@/components/PageHead'
import { PageLayout } from '@/layouts/PageLayout'

const InboxPage = () => {
  return (
    <PageLayout title='Входящие'>
      <PageHead
        title='Входящие'
        descr='Сюда попадают все новые задачи и идеи. Все, что требует внимания — собери здесь и разберись позже'
      />
    </PageLayout>
  )
}

export { InboxPage }
