import clsx from 'clsx'
import type { PropsWithChildren } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import styles from './anchor.module.scss'

interface IAnchorProps extends LinkProps {
  color?: 'primary' | 'secondary' | 'muted'
  fz?: 'sm' | 'md' | 'lg'
}

const Anchor = ({
  color = 'primary',
  fz = 'md',
  className,
  children,
  ...props
}: PropsWithChildren<IAnchorProps>) => {
  const anchorStyles = clsx(
    styles.anchor,
    styles[`${fz}Anchor`],
    styles[`${color}Anchor`],
    className,
  )

  return (
    <Link className={anchorStyles} {...props}>
      {children}
    </Link>
  )
}

export { Anchor }
