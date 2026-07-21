import clsx from 'clsx'
import { Popover as PopoverPrimitive } from 'radix-ui'
import type { ComponentProps } from 'react'
import styles from './popover.module.scss'

const Popover = ({
  ...props
}: ComponentProps<typeof PopoverPrimitive.Root>) => {
  return <PopoverPrimitive.Root {...props} />
}

const PopoverTrigger = ({
  ...props
}: ComponentProps<typeof PopoverPrimitive.Trigger>) => {
  return <PopoverPrimitive.Trigger {...props} />
}

const PopoverContent = ({
  sideOffset = 4,
  className,
  ...props
}: ComponentProps<typeof PopoverPrimitive.Content>) => {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        sideOffset={sideOffset}
        className={clsx(styles.popoverContent, className)}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}

Popover.Trigger = PopoverTrigger
Popover.Content = PopoverContent

export { Popover }
