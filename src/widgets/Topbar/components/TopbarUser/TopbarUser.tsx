import { useDisclosure } from '@/shared/hooks/useDisclosure'
import { Avatar } from '@/shared/ui/Avatar'
import { ConfirmDialog } from '@/shared/ui/ConfirmDialog'
import { Menu } from '@/shared/ui/Menu'
import { Text } from '@/shared/ui/Text'
import {
  CreditCardIcon,
  LogOutIcon,
  SettingsIcon,
  UserRoundIcon,
} from 'lucide-react'
import styles from './topbaruser.module.scss'

const TopbarUser = () => {
  const [exitOpened, { open, close }] = useDisclosure(false)

  const logout = () => {}

  return (
    <>
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
                <Text>Kovalenko Andrey</Text>
                <Text as='span' fz='sm' color='muted'>
                  iamkovalenkone@gmail.com
                </Text>
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
          <Menu.Item variant='danger' onClick={open}>
            <LogOutIcon />
            Выйти
          </Menu.Item>
        </Menu.Content>
      </Menu>
      <ConfirmDialog
        opened={exitOpened}
        onClose={close}
        title='Выход из аккаунта'
        description='Вы действительно хотите выйти из аккаунта?'
        confirm={{
          label: 'Выйти',
          callback: logout,
        }}
      />
    </>
  )
}

export { TopbarUser }
