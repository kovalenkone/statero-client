import clsx from 'clsx'
import { Slot } from 'radix-ui'
import type { ComponentProps } from 'react'
import styles from './actionbutton.module.scss'

interface IActionButtonProps extends ComponentProps<'button'> {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger'
  icon?: boolean
  loading?: boolean
  asChild?: boolean
}

const ActionButton = ({
  size = 'lg',
  variant = 'ghost',
  icon,
  loading,
  asChild,
  className,
  disabled,
  ...props
}: IActionButtonProps) => {
  const Comp = asChild ? Slot.Root : 'button'

  const actionButtonStyles = clsx(
    styles.actionButton,
    styles[`${variant}ActionButton`],
    styles[`${size}ActionButton`],
    { [styles.iconButton]: icon },
    className,
  )

  return (
    <Comp
      aria-label={props['aria-label'] || 'action'}
      className={actionButtonStyles}
      disabled={disabled || loading}
      {...props}
    />
  )
}

export { ActionButton }
