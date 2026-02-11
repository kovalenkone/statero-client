import clsx from 'clsx'
import type { PropsWithChildren } from 'react'
import styles from './title.module.scss'

interface ITitleProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  fz?: 'sm' | 'md' | 'lg' | 'xl'
  fw?: 'normal' | 'medium' | 'bold'
  color?: 'primary' | 'secondary' | 'muted'
}

const Title = ({
  as = 'h1',
  fz = 'lg',
  fw = 'medium',
  color = 'primary',
  children,
}: PropsWithChildren<ITitleProps>) => {
  const Comp = as

  const titleStyles = clsx(
    styles[`${fz}Title`],
    styles[`${fw}Title`],
    styles[`${color}Title`],
  )

  return <Comp className={titleStyles}>{children}</Comp>
}

export { Title }
