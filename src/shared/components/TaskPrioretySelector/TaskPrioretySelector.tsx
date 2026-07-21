import {
  TaskPriorety,
  type TTaskPriorety,
} from '@/entities/task/constants/task-priorety.constant'
import { Combobox } from '@/shared/ui/Combobox'
import { getAccentColor } from '@/shared/utils/getAccentColor'
import type { PropsWithChildren } from 'react'
import styles from './taskprioretyselector.module.scss'

interface ITaskPrioretySelectorProps {
  priorety: TTaskPriorety
  onSelect: (priorety: TTaskPriorety) => void
}

const TaskPrioretySelector = ({
  priorety,
  onSelect,
  children,
}: PropsWithChildren<ITaskPrioretySelectorProps>) => {
  return (
    <Combobox>
      <Combobox.Trigger asChild>{children}</Combobox.Trigger>
      <Combobox.Content align='center'>
        <Combobox.List>
          {Object.values(TaskPriorety).map(option => (
            <Combobox.Item
              key={option.value}
              value={option.value}
              onSelect={() => onSelect(option.value)}
            >
              <span
                className={styles.taskPrioretyDot}
                style={{ backgroundColor: getAccentColor(option.color) }}
              />
              {option.label}
            </Combobox.Item>
          ))}
        </Combobox.List>
      </Combobox.Content>
    </Combobox>
  )
}

export { TaskPrioretySelector }
