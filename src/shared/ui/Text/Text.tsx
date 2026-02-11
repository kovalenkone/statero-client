import clsx from 'clsx'
import type { PropsWithChildren } from 'react'
import styles from './text.module.scss'

interface ITextProps {
  as?: 'p' | 'span'
  fz?: 'sm' | 'md' | 'lg' | 'xl'
  fw?: 'normal' | 'medium' | 'bold'
  color?: 'primary' | 'secondary' | 'muted'
  className?: string
}

const Text = ({
  as = 'p',
  fz = 'md',
  fw = 'normal',
  color = 'primary',
  className,
  children,
}: PropsWithChildren<ITextProps>) => {
  const Comp = as

  const textStyles = clsx(
    styles[`${fz}Text`],
    styles[`${fw}Text`],
    styles[`${color}Text`],
    className,
  )

  return <Comp className={textStyles}>{children}</Comp>
}

export { Text }
