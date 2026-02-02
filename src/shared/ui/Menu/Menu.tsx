import clsx from 'clsx'
import { DropdownMenu } from 'radix-ui'
import type { ComponentProps } from 'react'
import styles from './menu.module.scss'

const Menu = ({ ...props }: ComponentProps<typeof DropdownMenu.Root>) => {
  return <DropdownMenu.Root {...props} />
}

const MenuTrigger = ({
  ...props
}: ComponentProps<typeof DropdownMenu.Trigger>) => {
  return <DropdownMenu.Trigger {...props} />
}

const MenuContent = ({
  className,
  align = 'start',
  sideOffset = 4,
  ...props
}: ComponentProps<typeof DropdownMenu.Content>) => {
  return (
    <DropdownMenu.Portal>
      <DropdownMenu.Content
        onCloseAutoFocus={e => e.preventDefault()}
        sideOffset={sideOffset}
        align={align}
        className={clsx(styles.menuContent, className)}
        {...props}
      />
    </DropdownMenu.Portal>
  )
}

const MenuGroup = ({ ...props }: ComponentProps<typeof DropdownMenu.Group>) => {
  return <DropdownMenu.Group {...props} />
}

interface IMenuItemProps extends ComponentProps<typeof DropdownMenu.Item> {
  variant?: 'default' | 'danger'
}
const MenuItem = ({
  variant = 'default',
  className,
  ...props
}: IMenuItemProps) => {
  return (
    <DropdownMenu.Item
      className={clsx(styles.menuItem, styles[`${variant}MenuItem`], className)}
      {...props}
    />
  )
}

const MenuLabel = ({
  className,
  ...props
}: ComponentProps<typeof DropdownMenu.Label>) => {
  return (
    <DropdownMenu.Label
      className={clsx(styles.menuLabel, className)}
      {...props}
    />
  )
}

const MenuSeparator = ({
  className,
  ...props
}: ComponentProps<typeof DropdownMenu.Separator>) => {
  return (
    <DropdownMenu.Separator
      className={clsx(styles.menuSeparator, className)}
      {...props}
    />
  )
}

Menu.Trigger = MenuTrigger
Menu.Content = MenuContent
Menu.Group = MenuGroup
Menu.Item = MenuItem
Menu.Label = MenuLabel
Menu.Separator = MenuSeparator

export { Menu }
