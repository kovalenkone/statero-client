import { ICON_SIZE } from '@/shared/constants/icon-size.constant'
import { ActionButton } from '@/shared/ui/ActionButton'
import { Collapse } from '@/shared/ui/Collapse'
import { Text } from '@/shared/ui/Text'
import { ChevronDownIcon, PlusIcon } from 'lucide-react'
import styles from './sidebarprojectshead.module.scss'

interface ISidebarProjectsHeadProps {
  title: string
  onAdd?: () => void
}

const SidebarProjectsHead = ({ title, onAdd }: ISidebarProjectsHeadProps) => {
  return (
    <div className={styles.sidebarProjectsHead}>
      <Collapse.Trigger className={styles.sidebarProjectsHeadTrigger}>
        <ChevronDownIcon size={ICON_SIZE.xs} />
        <Text color='muted' fz='sm'>
          {title}
        </Text>
      </Collapse.Trigger>

      {onAdd && (
        <ActionButton size='xs' onClick={onAdd}>
          <PlusIcon size={ICON_SIZE.sm} />
        </ActionButton>
      )}
    </div>
  )
}

export { SidebarProjectsHead }
