import type { TAccentColor } from '@/entities/accent-color/constants/accent-color.constant'
import clsx from 'clsx'
import type { PropsWithChildren } from 'react'
import styles from './bage.module.scss'

interface IBageProps {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg'
  variant?: TAccentColor
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
