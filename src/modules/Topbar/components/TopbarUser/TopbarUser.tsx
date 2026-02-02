import { Avatar } from '@/shared/ui/Avatar'
import { Menu } from '@/shared/ui/Menu'
import {
  CreditCardIcon,
  LogOutIcon,
  SettingsIcon,
  UserRoundIcon,
} from 'lucide-react'
import styles from './topbaruser.module.scss'

const TopbarUser = () => {
  return (
    <Menu>
      <Menu.Trigger>
        <Avatar>
          <Avatar.Fallback>AK</Avatar.Fallback>
        </Avatar>
      </Menu.Trigger>
      <Menu.Content align='end'>
        <Menu.Label>
          <div className={styles.topbarUser}>
            <Avatar>
              <Avatar.Fallback>AK</Avatar.Fallback>
            </Avatar>
            <div className={styles.topbarUserInfo}>
              <p>Kovalenko Andrey</p>
              <span>iamkovalenkone@gmail.com</span>
            </div>
          </div>
        </Menu.Label>
        <Menu.Separator />
        <Menu.Item>
          <UserRoundIcon />
          Аккаунт
        </Menu.Item>
        <Menu.Item>
          <CreditCardIcon />
          Тарифы и оплата
        </Menu.Item>
        <Menu.Item>
          <SettingsIcon />
          Настройки
        </Menu.Item>
        <Menu.Separator />
        <Menu.Item variant='danger'>
          <LogOutIcon />
          Выйти
        </Menu.Item>
      </Menu.Content>
    </Menu>
  )
}

export { TopbarUser }
