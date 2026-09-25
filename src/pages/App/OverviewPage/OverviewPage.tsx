import { PageLayout } from '@/layouts/PageLayout'
import { Button } from '@/shared/ui/Button'
import { PageHead } from '@/shared/ui/PageHead'
import styles from './overviewpage.module.scss'

const OverviewPage = () => {
  return (
    <PageLayout title='Обзор'>
      <PageHead
        title='Обзор'
        descr='Ваше рабочее пространство: всё важное собрано в одном экране'
      />
      <div className={styles.uip}>
        <div className={styles.uid}>
          <Button size='sm'>Кнопка</Button>
          <Button size='md'>Кнопка</Button>
          <Button size='lg'>Кнопка</Button>
          <Button size='xl'>Кнопка</Button>
        </div>
        <div className={styles.uid}>
          <Button size='sm' variant='secondary'>
            Кнопка
          </Button>
          <Button size='md' variant='secondary'>
            Кнопка
          </Button>
          <Button size='lg' variant='secondary'>
            Кнопка
          </Button>
          <Button size='xl' variant='secondary'>
            Кнопка
          </Button>
        </div>
        <div className={styles.uid}>
          <Button size='sm' variant='ghost'>
            Кнопка
          </Button>
          <Button size='md' variant='ghost'>
            Кнопка
          </Button>
          <Button size='lg' variant='ghost'>
            Кнопка
          </Button>
          <Button size='xl' variant='ghost'>
            Кнопка
          </Button>
        </div>
      </div>
    </PageLayout>
  )
}

export { OverviewPage }
