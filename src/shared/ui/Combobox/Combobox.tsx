import { Command } from 'cmdk'
import { Popover } from 'radix-ui'
import {
  createContext,
  useContext,
  useState,
  type ComponentProps,
  type PropsWithChildren,
} from 'react'
import styles from './combobox.module.scss'

type TComboboxContext = { close: () => void }
const ComboboxContext = createContext<TComboboxContext | null>(null)

const Combobox = ({
  open,
  defaultOpen,
  onOpenChange,
  ...props
}: ComponentProps<typeof Popover.Root>) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen ?? false)
  const isControlled = open !== undefined
  const actualOpen = isControlled ? open : internalOpen

  const setOpen = (next: boolean) => {
    if (!isControlled) setInternalOpen(next)
    onOpenChange?.(next)
  }

  return (
    <ComboboxContext.Provider value={{ close: () => setOpen(false) }}>
      <Popover.Root open={actualOpen} onOpenChange={setOpen} {...props} />
    </ComboboxContext.Provider>
  )
}

const ComboboxTrigger = ({
  ...props
}: ComponentProps<typeof Popover.Trigger>) => {
  return <Popover.Trigger {...props} />
}

const ComboboxContent = ({
  ...props
}: ComponentProps<typeof Popover.Content>) => {
  return (
    <Popover.Portal>
      <Popover.Content className={styles.comboboxContent} {...props} />
    </Popover.Portal>
  )
}

const ComboboxList = ({
  children,
  ...props
}: PropsWithChildren<ComponentProps<typeof Command>>) => {
  return (
    <Command {...props}>
      <Command.List>{children}</Command.List>
    </Command>
  )
}

const ComboboxItem = ({
  onSelect,
  ...props
}: ComponentProps<typeof Command.Item>) => {
  const ctx = useContext(ComboboxContext)

  return (
    <Command.Item
      className={styles.comboboxItem}
      onSelect={value => {
        onSelect?.(value)
        ctx?.close()
      }}
      {...props}
    />
  )
}

Combobox.Trigger = ComboboxTrigger
Combobox.Content = ComboboxContent
Combobox.List = ComboboxList
Combobox.Item = ComboboxItem

export { Combobox }
