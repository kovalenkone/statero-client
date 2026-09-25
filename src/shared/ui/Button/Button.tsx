import clsx from 'clsx'
import { Slot } from 'radix-ui'
import type { ComponentProps } from 'react'
import { Spinner } from '../Spinner'
import styles from './button.module.scss'

interface IButtonProps extends ComponentProps<'button'> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger'
  icon?: boolean
  stretch?: boolean
  centered?: boolean
  loading?: boolean
  asChild?: boolean
}

const Button = ({
  size = 'lg',
  variant = 'primary',
  icon,
  centered,
  asChild,
  stretch,
  loading,
  disabled,
  className,
  children,
  ...props
}: IButtonProps) => {
  const Comp = asChild ? Slot.Root : 'button'

  const buttonStyles = clsx(
    styles.button,
    styles[`${variant}Button`],
    styles[`${size}Button`],
    {
      [styles.stretchButton]: stretch,
      [styles.iconButton]: icon,
      [styles.centeredButton]: centered,
    },
    className,
  )

  return (
    <Comp className={buttonStyles} disabled={disabled || loading} {...props}>
      {loading ? <Spinner /> : children}
    </Comp>
  )
}

Button.displayName = 'Button'

export { Button }
