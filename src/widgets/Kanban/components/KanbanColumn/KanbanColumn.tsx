import type { ISection } from '@/entities/section/types/section.type'
import { ICON_SIZE } from '@/shared/constants/icon-size.constant'
import { useDisclosure } from '@/shared/hooks/useDisclosure'
import { ActionButton } from '@/shared/ui/ActionButton'
import { Menu } from '@/shared/ui/Menu'
import { Text } from '@/shared/ui/Text'
import { CollisionPriority } from '@dnd-kit/abstract'
import { RestrictToHorizontalAxis } from '@dnd-kit/abstract/modifiers'
import { closestCorners } from '@dnd-kit/collision'
import { PointerActivationConstraints, PointerSensor } from '@dnd-kit/dom'
import { useSortable } from '@dnd-kit/react/sortable'
import {
  EllipsisIcon,
  PencilIcon,
  PlusIcon,
  SparkleIcon,
  Trash2Icon,
} from 'lucide-react'
import { type PropsWithChildren } from 'react'
import { KANBAN_ENTITY } from '../../constants/kanban-entity'
import { KanbanNewTask } from '../KanbanNewTask'
import styles from './kanbancolumn.module.scss'

const ACTION_ICON_SIZE = ICON_SIZE.md

interface IKanbanColumnProps {
  index: number
  section: ISection
  totalTasks: number
}

const KanbanColumn = ({
  index,
  section,
  totalTasks,
  children,
}: PropsWithChildren<IKanbanColumnProps>) => {
  const { ref, handleRef } = useSortable({
    id: section.id,
    index,
    type: KANBAN_ENTITY.COLUMN,
    accept: [KANBAN_ENTITY.COLUMN, KANBAN_ENTITY.ITEM],
    collisionPriority: CollisionPriority.Low,
    collisionDetector: closestCorners,
    modifiers: [RestrictToHorizontalAxis],

    sensors: [
      PointerSensor.configure({
        activationConstraints: [
          new PointerActivationConstraints.Delay({ value: 100, tolerance: 1 }),
        ],
      }),
    ],
    // plugins: [Feedback.configure({ feedback: 'clone' })],
  })

  const [isNewTaskOpened, { open: openNewTask, close: closeNewTask }] =
    useDisclosure(false)

  return (
    <div className={styles.kanbanColumn} ref={ref}>
      <div className={styles.kanbanColumnHead} ref={handleRef}>
        <Text fw='medium' fz='md'>
          {section.name}
        </Text>
        <Text color='muted'>{totalTasks}</Text>
        <div className={styles.kanbanColumnActions}>
          <ActionButton
            size='sm'
            disabled={isNewTaskOpened}
            className={styles.kanbanColumnAddNewTaskBtn}
            onPointerDownCapture={e => e.stopPropagation()}
            onClick={openNewTask}
          >
            <PlusIcon size={ACTION_ICON_SIZE} />
          </ActionButton>
          <Menu>
            <Menu.Trigger asChild>
              <ActionButton size='sm' className={styles.kanbanColumnMenu}>
                <EllipsisIcon size={ACTION_ICON_SIZE} />
              </ActionButton>
            </Menu.Trigger>
            <Menu.Content align='center'>
              <Menu.Item>
                <PencilIcon />
                Переименовать
              </Menu.Item>
              <Menu.Item>
                <SparkleIcon />
                Автоматизация
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
      <div className={styles.kanbanColumnBody}>
        {isNewTaskOpened && (
          <KanbanNewTask onClose={closeNewTask} onSubmit={() => {}} />
        )}
        {children}
      </div>
    </div>
  )
}

export { KanbanColumn }
