import clsx from 'clsx'
import { CheckIcon } from 'lucide-react'
import styles from './taskcompletion.module.scss'

interface ITaskCompletionProps {
  completed: boolean
  onChange?: () => void
  className?: string
}

const TaskCompletion = ({
  completed,
  onChange,
  className,
}: ITaskCompletionProps) => {
  const taskCompletionStyles = clsx(
    styles.taskCompletion,
    {
      [styles.completed]: completed,
    },
    className,
  )

  return (
    <button
      role='checkbox'
      type='button'
      aria-checked={completed}
      aria-label={completed ? 'Отметить невыполненной' : 'Отметить выполненной'}
      className={taskCompletionStyles}
      onClick={onChange}
    >
      <CheckIcon size={10} />
    </button>
  )
}

export { TaskCompletion }
