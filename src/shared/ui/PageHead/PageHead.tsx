import { Text } from '@/shared/ui/Text'
import { Title } from '@/shared/ui/Title'
import styles from './pagehead.module.scss'

interface IPageHeadProps {
  title: string
  descr: string
}

const PageHead = ({ title, descr }: IPageHeadProps) => {
  return (
    <div className={styles.pageHead}>
      <Title>{title}</Title>
      <Text color='muted'>{descr}</Text>
    </div>
  )
}

export { PageHead }
