import { Button } from '@/shared/ui/Button'
import { Dialog } from '@/shared/ui/Dialog'
import styles from './confirmdialog.module.scss'

interface IConfirmDialogProps {
  opened: boolean
  title: string
  description?: string
  confirm: {
    label: string
    callback: () => void
  }
  onClose: () => void
}

const ConfirmDialog = ({
  opened,
  title,
  description,
  confirm,
  onClose,
}: IConfirmDialogProps) => {
  return (
    <Dialog
      className={styles.confirmDialog}
      size='md'
      opened={opened}
      onClose={onClose}
    >
      <div className={styles.confirmDialogHead}>
        <Dialog.Title>{title}</Dialog.Title>
        {description && <Dialog.Description>{description}</Dialog.Description>}
      </div>
      <div className={styles.confirmDialogActions}>
        <Dialog.Close asChild>
          <Button variant='secondary'>Отмена</Button>
        </Dialog.Close>
        <Button onClick={confirm.callback} variant='danger'>
          {confirm.label}
        </Button>
      </div>
    </Dialog>
  )
}

export { ConfirmDialog }
