import { ActionButton } from '@/shared/ui/ActionButton'
import { Bage } from '@/shared/ui/Bage'
import { Menu } from '@/shared/ui/Menu'
import {
  ArchiveIcon,
  CopyIcon,
  EllipsisIcon,
  PencilIcon,
  StarIcon,
  Trash2Icon,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './sidebarprojectslistitem.module.scss'

const SidebarProjectsListItem = () => {
  return (
    <div className={styles.sidebarProjectLinkWrapper}>
      <Link to={''} className={styles.sidebarProjectLink}>
        <Bage size='xs' square>
          S
        </Bage>
        <span>Statera задачи задачи задачи задачи</span>
      </Link>
      <Menu>
        <Menu.Trigger asChild>
          <ActionButton size='xs' className={styles.sidebarProjectButton}>
            <EllipsisIcon size={14} />
          </ActionButton>
        </Menu.Trigger>
        <Menu.Content>
          <Menu.Item>
            <StarIcon />
            Добавить в избранное
          </Menu.Item>
          <Menu.Separator />
          <Menu.Item>
            <PencilIcon />
            Изменить
          </Menu.Item>
          <Menu.Item>
            <CopyIcon />
            Дублировать
          </Menu.Item>
          <Menu.Separator />
          <Menu.Item>
            <ArchiveIcon />
            Архивировать
          </Menu.Item>
          <Menu.Item variant='danger'>
            <Trash2Icon />
            Удалить
          </Menu.Item>
        </Menu.Content>
      </Menu>
    </div>
  )
}

export { SidebarProjectsListItem }
