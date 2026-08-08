import {
  TaskPriorety,
  type TTaskPriorety,
} from '@/entities/task/constants/task-priorety.constant'
import { DropdownSelect } from '@/shared/ui/DropdownSelect'
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
    <DropdownSelect value={priorety} onSelect={onSelect}>
      <DropdownSelect.Trigger asChild>{children}</DropdownSelect.Trigger>
      <DropdownSelect.Content align='center'>
        <DropdownSelect.List>
          {Object.values(TaskPriorety).map(option => (
            <DropdownSelect.Item key={option.value} value={option.value}>
              <span
                className={styles.taskPrioretyDot}
                style={{ backgroundColor: getAccentColor(option.color) }}
              />
              {option.label}
            </DropdownSelect.Item>
          ))}
        </DropdownSelect.List>
      </DropdownSelect.Content>
    </DropdownSelect>
  )
}

export { TaskPrioretySelector }
