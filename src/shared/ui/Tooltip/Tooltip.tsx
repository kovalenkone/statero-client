import { Tooltip as TooltipPrimitive } from 'radix-ui'
import type { PropsWithChildren } from 'react'
import styles from './tooltip.module.scss'

interface ITooltipProps {
  content: string
  side?: 'top' | 'right' | 'left' | 'bottom'
}

const Tooltip = ({
  content,
  side = 'top',
  children,
}: PropsWithChildren<ITooltipProps>) => {
  return (
    <TooltipPrimitive.Provider delayDuration={300} skipDelayDuration={300}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            className={styles.tooltipContent}
            sideOffset={4}
            side={side}
          >
            {content}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

export { Tooltip }
