import clsx from 'clsx'
import { useId, type ComponentProps, type ReactNode } from 'react'
import styles from './input.module.scss'

interface IInputProps extends Omit<ComponentProps<'input'>, 'size'> {
  label?: string
  size?: 'sm' | 'md' | 'lg'
  error?: string
  leftSection?: ReactNode
  rightSection?: ReactNode
}

const Input = ({
  label,
  size = 'md',
  error,
  className,
  leftSection,
  rightSection,
  id,
  ...props
}: IInputProps) => {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const errorId = error ? `${inputId}-error` : undefined

  const inputStyles = clsx(
    styles.input,
    styles[`${size}Input`],
    { [styles.invalid]: error },
    className,
  )

  return (
    <div className={styles.inputRoot}>
      {label && (
        <label className={styles.inputLabel} htmlFor={inputId}>
          {label}
        </label>
      )}
      <div className={styles.inputWrapper}>
        {leftSection && (
          <div className={styles.inputLeftSection}>{leftSection}</div>
        )}
        <input
          className={inputStyles}
          id={inputId}
          aria-invalid={!!error}
          aria-describedby={errorId}
          {...props}
        />
        {rightSection && (
          <div className={styles.inputRightSection}>{rightSection}</div>
        )}
      </div>
      {error && (
        <div className={styles.inputError} id={errorId} role='alert'>
          {error}
        </div>
      )}
    </div>
  )
}

export { Input }
