import clsx from 'clsx'
import type { ComponentProps, ReactNode } from 'react'
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
  ...props
}: IInputProps) => {
  const inputStyles = clsx(
    styles.input,
    styles[`${size}Input`],
    { [styles.invalid]: error },
    className,
  )

  return (
    <div className={styles.inputRoot}>
      {label && (
        <label className={styles.inputLabel} htmlFor={props.id}>
          {label}
        </label>
      )}
      <div className={styles.inputWrapper}>
        {leftSection && (
          <div className={styles.inputLeftSection}>{leftSection}</div>
        )}
        <input className={inputStyles} {...props} />
        {rightSection && (
          <span className={styles.inputRightSection}>{rightSection}</span>
        )}
      </div>
      {error && <div className={styles.inputError}>{error}</div>}
    </div>
  )
}

export { Input }
