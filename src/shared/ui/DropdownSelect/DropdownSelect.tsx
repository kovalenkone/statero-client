import { ICON_SIZE } from '@/shared/constants/icon-size.constant'
import clsx from 'clsx'
import { Command } from 'cmdk'
import { CheckIcon } from 'lucide-react'
import {
  type ComponentProps,
  createContext,
  type PropsWithChildren,
  useContext,
  useState,
} from 'react'
import { Input } from '../Input'
import { Popover } from '../Popover'
import styles from './dropdownselect.module.scss'

type TDropdownSelectContext<T extends string> =
  | {
      multiple: true
      searchable: boolean
      selectedValue: T[]
      onSelect: (value: T) => void
      close: () => void
    }
  | {
      multiple: false
      searchable: boolean
      selectedValue: T | null
      onSelect: (value: T) => void
      close: () => void
    }

const DropdownSelectContext =
  createContext<TDropdownSelectContext<string> | null>(null)

const useDropdownSelectContext = <T extends string>() => {
  const ctx = useContext(DropdownSelectContext)

  if (!ctx) {
    throw new Error('DropdownSelect.* must be used within <DropdownSelect>')
  }

  return ctx as TDropdownSelectContext<T>
}

type TDropdownSelectProps<T extends string> = {
  searchable?: boolean
  value: T | T[]
  onSelect: (value: T) => void
} & ComponentProps<typeof Popover>

const DropdownSelect = <T extends string>({
  searchable = false,
  value,
  open,
  defaultOpen,
  onSelect,
  onOpenChange,
  ...props
}: TDropdownSelectProps<T>) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen ?? false)
  const isControlled = open !== undefined
  const actualOpen = isControlled ? open : internalOpen

  const setOpen = (next: boolean) => {
    if (!isControlled) setInternalOpen(next)
    onOpenChange?.(next)
  }

  const multiple = Array.isArray(value)

  const contextValue = multiple
    ? {
        multiple: true as const,
        searchable,
        selectedValue: value as T[],
        onSelect,
        close: () => setOpen(false),
      }
    : {
        multiple: false as const,
        searchable,
        selectedValue: value as T | null,
        onSelect,
        close: () => setOpen(false),
      }

  return (
    <DropdownSelectContext.Provider
      value={contextValue as unknown as TDropdownSelectContext<string>}
    >
      <Popover open={actualOpen} onOpenChange={setOpen} {...props} />
    </DropdownSelectContext.Provider>
  )
}

const DropdownSelectTrigger = ({
  ...props
}: ComponentProps<typeof Popover.Trigger>) => {
  return <Popover.Trigger asChild {...props} />
}

const DropdownSelectContent = ({
  ...props
}: ComponentProps<typeof Popover.Content>) => {
  return <Popover.Content className={styles.dropdownSelectContent} {...props} />
}

const DropdownSelectList = ({
  children,
  ...props
}: PropsWithChildren<ComponentProps<typeof Command>>) => {
  const { searchable } = useDropdownSelectContext()

  return (
    <Command
      {...props}
      filter={(value, search, keywords) => {
        const normalizedSearch = search.trim().toLowerCase()

        const searchableValue = [value, ...(keywords ?? [])]
          .join(' ')
          .toLowerCase()

        return searchableValue.includes(normalizedSearch) ? 1 : 0
      }}
    >
      {searchable && (
        <Command.Input asChild className={styles.dropdownSelectSearch}>
          <Input size='sm' placeholder='Поиск...' />
        </Command.Input>
      )}
      <Command.List className={styles.dropdownSelectList}>
        <Command.Empty className={styles.dropdownSelectEmpty}>
          Не найдено
        </Command.Empty>
        {children}
      </Command.List>
    </Command>
  )
}

const DropdownSelectGroup = ({
  ...props
}: ComponentProps<typeof Command.Group>) => {
  return <Command.Group {...props} />
}

const DropdownSelectItem = ({
  value,
  className,
  children,
  ...props
}: Omit<ComponentProps<typeof Command.Item>, 'onSelect'>) => {
  const { multiple, selectedValue, onSelect, close } =
    useDropdownSelectContext()

  const selected =
    multiple && value ? selectedValue.includes(value) : value === selectedValue

  return (
    <Command.Item
      className={clsx(styles.dropdownSelectItem, className)}
      value={value}
      onSelect={value => {
        onSelect(value)

        if (!multiple) close()
      }}
      {...props}
    >
      {children}
      {selected && (
        <span className={styles.dropDownSelectItemChecked}>
          <CheckIcon size={ICON_SIZE.sm} />
        </span>
      )}
    </Command.Item>
  )
}

DropdownSelect.Trigger = DropdownSelectTrigger
DropdownSelect.Content = DropdownSelectContent
DropdownSelect.List = DropdownSelectList
DropdownSelect.Group = DropdownSelectGroup
DropdownSelect.Item = DropdownSelectItem

export { DropdownSelect }
