import { PageHead } from '@/components/PageHead'
import { PageLayout } from '@/layouts/PageLayout'

const ArchivePage = () => {
  return (
    <PageLayout title='Архив'>
      <PageHead
        title='Архив'
        descr='Здесь хранятся завершённые и скрытые задачи — всё, что больше не требует внимания'
      />
    </PageLayout>
  )
}

export { ArchivePage }
