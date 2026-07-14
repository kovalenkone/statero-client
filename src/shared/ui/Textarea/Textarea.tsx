import clsx from 'clsx'
import { useEffect, useRef, type ComponentProps } from 'react'
import styles from './textarea.module.scss'

interface ITextareaProps extends ComponentProps<'textarea'> {
  variant?: 'default' | 'ghost'
  autoHeight?: boolean
}

const Textarea = ({
  variant,
  autoHeight,
  value,
  rows = 1,
  ...props
}: ITextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const adjustHeight = () => {
    const element = textareaRef.current

    if (!element) return

    element.style.height = 'auto'
    element.style.height = `${element.scrollHeight}px`
  }

  useEffect(() => {
    if (autoHeight) adjustHeight()
  }, [value])

  const textareaStyles = clsx(styles.textarea, styles[`${variant}Input`])

  return (
    <div className={styles.textareaWrapper}>
      <textarea
        className={textareaStyles}
        value={value}
        rows={rows}
        ref={textareaRef}
        {...props}
      />
    </div>
  )
}

export { Textarea }
