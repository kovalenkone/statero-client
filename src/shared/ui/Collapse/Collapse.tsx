import clsx from 'clsx'
import { Collapsible } from 'radix-ui'
import type { ComponentProps } from 'react'
import styles from './collapse.module.scss'

const Collapse = ({
  className,
  ...props
}: ComponentProps<typeof Collapsible.Root>) => {
  return (
    <Collapsible.Root className={clsx(styles.collapse, className)} {...props} />
  )
}

const CollapseTrigger = ({
  ...props
}: ComponentProps<typeof Collapsible.CollapsibleTrigger>) => {
  return <Collapsible.CollapsibleTrigger {...props} />
}

const CollapseContent = ({
  ...props
}: ComponentProps<typeof Collapsible.CollapsibleContent>) => {
  return <Collapsible.CollapsibleContent {...props} />
}

Collapse.Trigger = CollapseTrigger
Collapse.Content = CollapseContent

export { Collapse }
