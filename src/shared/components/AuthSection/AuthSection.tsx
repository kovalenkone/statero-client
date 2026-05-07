import { Text } from '@/shared/ui/Text'
import { Title } from '@/shared/ui/Title'
import type { PropsWithChildren } from 'react'
import styles from './authsection.module.scss'

interface IAuthSectionProps {
  title: string
  descr: string
}

const AuthSection = ({
  title,
  descr,
  children,
}: PropsWithChildren<IAuthSectionProps>) => {
  return (
    <div className={styles.authSection}>
      <div className={styles.authSectionHead}>
        <Title fz='lg'>{title}</Title>
        <Text color='muted'>{descr}</Text>
      </div>
      {children}
    </div>
  )
}

export { AuthSection }
