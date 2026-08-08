import { ICON_SIZE } from '@/shared/constants/icon-size.constant'
import { ActionButton } from '@/shared/ui/ActionButton'
import { Menu } from '@/shared/ui/Menu'
import { TaskCompletion } from '@/shared/ui/TaskCompletion'
import { Text } from '@/shared/ui/Text'
import {
  CopyPlusIcon,
  EllipsisIcon,
  LinkIcon,
  PencilIcon,
  Trash2Icon,
} from 'lucide-react'
import styles from './kanbantaskhead.module.scss'

interface IKanbanTaskHeadProps {
  title: string
  completed: boolean
}

const KanbanTaskHead = ({ title, completed }: IKanbanTaskHeadProps) => {
  return (
    <div className={styles.kanbanTaskHead}>
      <div className={styles.kanbanTaskHeadInner}>
        <TaskCompletion
          completed={completed}
          className={styles.kanabTaskHeadCompletion}
        />
        <Text className={styles.kanabTaskHeadName}>{title}</Text>
        <Menu>
          <Menu.Trigger asChild>
            <ActionButton
              size='sm'
              className={styles.kanbanTaskHeadActions}
              data-kanban-task-actions
            >
              <EllipsisIcon size={ICON_SIZE.md} />
            </ActionButton>
          </Menu.Trigger>
          <Menu.Content align='center'>
            <Menu.Item>
              <PencilIcon />
              Изменить
            </Menu.Item>
            <Menu.Item>
              <LinkIcon />
              Скопировать
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
      </div>
    </div>
  )
}

export { KanbanTaskHead }
