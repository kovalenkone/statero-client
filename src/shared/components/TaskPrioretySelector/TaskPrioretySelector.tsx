import {
  TaskPriorety,
  type TTaskPriorety,
} from '@/entities/task/constants/task-priorety.constant'
import { Menu } from '@/shared/ui/Menu'
import type { PropsWithChildren } from 'react'
import styles from './taskprioretyselector.module.scss'

interface ITaskPrioretySelectorProps {
  priorety: TTaskPriorety
  onChange: (priorety: TTaskPriorety) => void
}

const TaskPrioretySelector = ({
  priorety,
  children,
}: PropsWithChildren<ITaskPrioretySelectorProps>) => {
  return (
    <Menu>
      <Menu.Trigger asChild>{children}</Menu.Trigger>
      <Menu.Content align='center'>
        {Object.values(TaskPriorety).map(priorety => (
          <Menu.Item key={priorety.value}>
            <span
              className={styles.taskPrioretyDot}
              style={{ backgroundColor: `var(--${priorety.color})` }}
            />
            {priorety.label}
          </Menu.Item>
        ))}
      </Menu.Content>
    </Menu>
  )
}

export { TaskPrioretySelector }
