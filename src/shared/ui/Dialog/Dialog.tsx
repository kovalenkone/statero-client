import clsx from 'clsx'
import { Dialog as DialogPrimitive } from 'radix-ui'
import type { ComponentProps, PropsWithChildren } from 'react'
import styles from './dialog.module.scss'

interface IDialogProps {
  opened: boolean
  size: 'sm' | 'md' | 'lg'
  className?: string
  onClose: () => void
}

const Dialog = ({
  opened,
  size,
  className,
  onClose,
  children,
}: PropsWithChildren<IDialogProps>) => {
  const dialogStyles = clsx(styles.dialog, styles[`${size}Dialog`], className)

  return (
    <DialogPrimitive.Root open={opened} onOpenChange={onClose}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={styles.dialogOverlay} />
        <DialogPrimitive.Content className={dialogStyles}>
          {children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

export const DialogTitle = ({
  ...props
}: ComponentProps<typeof DialogPrimitive.Title>) => {
  return <DialogPrimitive.Title className={styles.dialogTitle} {...props} />
}

export const DialogDescription = ({
  ...props
}: ComponentProps<typeof DialogPrimitive.Description>) => {
  return (
    <DialogPrimitive.Description
      className={styles.dialogDescription}
      {...props}
    />
  )
}

export const DialogClose = ({
  ...props
}: ComponentProps<typeof DialogPrimitive.Close>) => {
  return <DialogPrimitive.Close {...props} />
}

Dialog.Title = DialogTitle
Dialog.Description = DialogDescription
Dialog.Close = DialogClose

export { Dialog }
