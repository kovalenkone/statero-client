import clsx from 'clsx'
import { CheckIcon } from 'lucide-react'
import { Checkbox as CheckboxPrimitive } from 'radix-ui'
import {
  useId,
  type ComponentProps,
  type PropsWithChildren,
  type ReactNode,
} from 'react'
import styles from './checkbox.module.scss'

interface ICheckboxProps extends ComponentProps<typeof CheckboxPrimitive.Root> {
  label?: ReactNode
  error?: string
}

const Checkbox = ({
  id,
  label,
  error,
  className,
  ...props
}: PropsWithChildren<ICheckboxProps>) => {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const errorId = error ? `${inputId}-error` : undefined

  return (
    <div className={styles.checkboxRoot}>
      <div className={styles.checkboxWrapper}>
        <CheckboxPrimitive.Root
          id={inputId}
          className={clsx(styles.checkbox, className)}
          {...props}
        >
          <CheckboxPrimitive.Indicator className={styles.checkboxIndicator}>
            <CheckIcon size={14} />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>

        {label && <label htmlFor={inputId}>{label}</label>}
      </div>
      {error && (
        <div className={styles.checkboxError} id={errorId} role='alert'>
          {error}
        </div>
      )}
    </div>
  )
}

export { Checkbox }
