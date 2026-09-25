import { Bage } from '@/shared/ui/Bage'
import { Button } from '@/shared/ui/Button'
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
      <Link
        to={''}
        className={styles.sidebarProjectLink}
        title='Statera задачи задачи задачи задачи'
      >
        <Bage size='xs' square>
          S
        </Bage>
        <span>Statera задачи задачи задачи задачи</span>
      </Link>
      <Menu>
        <Menu.Trigger asChild>
          <Button
            size='xs'
            icon
            variant='ghost'
            className={styles.sidebarProjectButton}
          >
            <EllipsisIcon />
          </Button>
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
