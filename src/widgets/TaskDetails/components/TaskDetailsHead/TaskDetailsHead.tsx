import { ICON_SIZE } from '@/shared/constants/icon-size.constant'
import { ActionButton } from '@/shared/ui/ActionButton'
import { Menu } from '@/shared/ui/Menu'
import { Text } from '@/shared/ui/Text'
import {
  BellIcon,
  CopyPlusIcon,
  EllipsisIcon,
  LinkIcon,
  Trash2Icon,
  XIcon,
} from 'lucide-react'
import styles from './taskdetailshead.module.scss'

const ACTION_ICON_SIZE = ICON_SIZE.lg

interface ITaskDetailsHeadProps {
  onClose: () => void
}

const TaskDetailsHead = ({ onClose }: ITaskDetailsHeadProps) => {
  return (
    <div className={styles.taskDetailsHead}>
      <div className={styles.taskDetailsHeadPath}>Statero / В процессе</div>
      <div className={styles.taskDetailsHeadActions}>
        <Menu>
          <Menu.Trigger>
            <ActionButton size='md'>
              <EllipsisIcon size={ACTION_ICON_SIZE} />
            </ActionButton>
          </Menu.Trigger>
          <Menu.Content align='end'>
            <Menu.Label>
              <Text color='muted'>Добавлено 10 июля · 18:36</Text>
            </Menu.Label>
            <Menu.Separator />
            <Menu.Item>
              <BellIcon />
              Настроить уведомления
            </Menu.Item>
            <Menu.Item>
              <LinkIcon />
              Скопировать ссылку на задачу
            </Menu.Item>
            <Menu.Item>
              <CopyPlusIcon />
              Дублировать
            </Menu.Item>
            <Menu.Separator />
            <Menu.Item variant='danger'>
              <Trash2Icon />
              Удалить
            </Menu.Item>
          </Menu.Content>
        </Menu>
        <ActionButton size='md' onClick={onClose}>
          <XIcon size={ACTION_ICON_SIZE} />
        </ActionButton>
      </div>
    </div>
  )
}

export { TaskDetailsHead }
