import {
  TaskPriorety,
  type TTaskPriorety,
} from '@/entities/task/constants/task-priorety.constant'
import { Combobox } from '@/shared/ui/Combobox'
import type { PropsWithChildren } from 'react'
import styles from './taskprioretyselector.module.scss'

interface ITaskPrioretySelectorProps {
  priorety: TTaskPriorety
  onSelect: (priorety: string) => void
}

const TaskPrioretySelector = ({
  priorety,
  onSelect,
  children,
}: PropsWithChildren<ITaskPrioretySelectorProps>) => {
  console.log('Object.values(TaskPriorety)', Object.values(TaskPriorety))

  return (
    <Combobox>
      <Combobox.Trigger asChild>{children}</Combobox.Trigger>
      <Combobox.Content align='center'>
        <Combobox.List>
          {Object.values(TaskPriorety).map(priorety => (
            <Combobox.Item
              key={priorety.value}
              value={priorety.value}
              onSelect={() => onSelect(priorety.value)}
            >
              <span
                className={styles.taskPrioretyDot}
                style={{ backgroundColor: `var(--${priorety.color})` }}
              />
              {priorety.label}
            </Combobox.Item>
          ))}
        </Combobox.List>
      </Combobox.Content>
    </Combobox>
  )
}

export { TaskPrioretySelector }
