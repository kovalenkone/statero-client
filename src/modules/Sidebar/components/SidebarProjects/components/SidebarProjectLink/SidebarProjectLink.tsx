import type { TMenu } from '@/shared/types/menu.type'
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
import styles from './sidebarprojectlink.module.scss'

const CustomMenu: TMenu = [
  {
    label: 'Добавить в избранное',
    icon: StarIcon,
    onClick: () => alert('Добавлено в избранное'),
  },
  {
    type: 'separator',
  },
  // {
  //   label: 'Обзор',
  //   icon: PencilIcon,
  //   onClick: () => alert('Добавлено в избранное'),
  // },
  {
    label: 'Изменить',
    icon: PencilIcon,
    onClick: () => alert('Добавлено в избранное'),
  },
  {
    label: 'Дублировать',
    icon: CopyIcon,
    onClick: () => alert('Добавлено в избранное'),
  },
  {
    type: 'separator',
  },
  {
    label: 'Архивировать',
    icon: ArchiveIcon,
  },
  {
    label: 'Удалить',
    icon: Trash2Icon,
  },
]

const SidebarProjectLink = () => {
  return (
    <div className={styles.sidebarProjectLinkWrapper}>
      <Link to={''} className={styles.sidebarProjectLink}>
        <Bage size='xs' square>
          S
        </Bage>
        <span>Statera задачи задачи задачи задачи</span>
      </Link>
      <Menu menu={CustomMenu}>
        <ActionButton size='xs' className={styles.sidebarProjectButton}>
          <EllipsisIcon size={14} />
        </ActionButton>
      </Menu>
    </div>
  )
}

export { SidebarProjectLink }
