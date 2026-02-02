import type { TMenu } from '@/shared/types/menu.type'
import { DropdownMenu } from 'radix-ui'
import type { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import styles from './menu.module.scss'

interface IMenuProps {
  menu: TMenu
}

const renderItems = (menu: TMenu) => {
  return menu.map((item, index) => {
    if (item.type === 'separator') {
      return (
        <DropdownMenu.Separator className={styles.menuSeparator} key={index} />
      )
    }

    if (item.type === 'label') {
      return (
        <DropdownMenu.Label className={styles.menuLabel} key={index}>
          {item.label}
        </DropdownMenu.Label>
      )
    }

    const Icon = 'icon' in item && item.icon

    if (item.type === 'submenu') {
      return (
        <DropdownMenu.Sub key={index}>
          <DropdownMenu.SubTrigger>
            {Icon && <Icon />}
            {item.label}
          </DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent>
            {renderItems(item.items)}
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>
      )
    }

    if (item.href) {
      return (
        <DropdownMenu.Item
          asChild
          key={index}
          disabled={item.disabled}
          className={styles.menuItem}
        >
          <Link to={item.href}>
            {Icon && <Icon size={16} />}
            {item.label}
          </Link>
        </DropdownMenu.Item>
      )
    }

    return (
      <DropdownMenu.Item
        key={index}
        disabled={item.disabled}
        onSelect={item.onClick}
        className={styles.menuItem}
      >
        {Icon && <Icon size={16} />}
        {item.label}
      </DropdownMenu.Item>
    )
  })
}

const Menu = ({ menu, children }: PropsWithChildren<IMenuProps>) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align='start'
          sideOffset={4}
          className={styles.menuContent}
        >
          {renderItems(menu)}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export { Menu }
