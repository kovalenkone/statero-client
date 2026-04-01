import { Text } from '@/shared/ui/Text'
import { Title } from '@/shared/ui/Title'
import type { PropsWithChildren } from 'react'
import styles from './authcard.module.scss'

interface IAuthCardProps {
  title: string
  subtitle: string
}

const AuthCard = ({
  title,
  subtitle,
  children,
}: PropsWithChildren<IAuthCardProps>) => {
  return (
    <div className={styles.authCard}>
      <div className={styles.authCardHead}>
        <Title fz='lg'>{title}</Title>
        <Text fz='md' color='muted'>
          {subtitle}
        </Text>
      </div>
      <div className={styles.authCardBody}>{children}</div>
      <div className={styles.authCardFooter}>
        By clicking continue, you agree to our Terms of Service and Privacy
        Policy.
      </div>
    </div>
  )
}

export { AuthCard }
