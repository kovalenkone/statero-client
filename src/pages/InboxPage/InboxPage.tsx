import { PageLayout } from '@/layouts/PageLayout'
import { Columns } from '@/modules/Columns'
import { PageHead } from '@/shared/components/PageHead'

const InboxPage = () => {
  return (
    <PageLayout title='Входящие'>
      <PageHead
        title='Входящие'
        descr='Сюда попадают все новые задачи и идеи. Все, что требует внимания — собери здесь и разберись позже'
      />
      <Columns />
    </PageLayout>
  )
}

export { InboxPage }
