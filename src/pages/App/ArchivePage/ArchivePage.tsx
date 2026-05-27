import { PageLayout } from '@/layouts/PageLayout'
import { PageHead } from '@/shared/components/PageHead'

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
