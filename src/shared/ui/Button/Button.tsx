import clsx from 'clsx'
import { Slot } from 'radix-ui'
import type { ComponentProps } from 'react'
import styles from './button.module.scss'

interface IButtonProps extends ComponentProps<'button'> {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  stretch?: boolean
  loading?: boolean
  asChild?: boolean
}

const Button = ({
  size = 'lg',
  variant = 'primary',
  asChild,
  stretch,
  loading,
  disabled,
  className,
  ...props
}: IButtonProps) => {
  const Comp = asChild ? Slot.Root : 'button'

  const buttonStyles = clsx(
    styles.button,
    styles[`${variant}Button`],
    styles[`${size}Button`],
    { [styles.stretchButton]: stretch },
    className,
  )

  return (
    <Comp className={buttonStyles} disabled={disabled || loading} {...props} />
  )
}

Button.displayName = 'Button'

export { Button }
