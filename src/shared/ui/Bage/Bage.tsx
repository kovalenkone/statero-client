import clsx from 'clsx'
import type { PropsWithChildren } from 'react'
import styles from './bage.module.scss'

interface IBageProps {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  variant?: 'blue' | 'violet' | 'orange' | 'green' | 'yellow' | 'grey'
  square?: boolean
  className?: string
}

const Bage = ({
  size = 'md',
  variant = 'blue',
  square,
  className,
  children,
}: PropsWithChildren<IBageProps>) => {
  const bageStyles = clsx(
    styles.bage,
    styles[`${variant}Bage`],
    styles[`${size}Bage`],
    { [styles.square]: square },
    className,
  )

  return <div className={bageStyles}>{children}</div>
}

export { Bage }
