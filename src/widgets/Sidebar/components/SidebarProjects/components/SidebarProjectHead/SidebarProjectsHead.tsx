import { ActionButton } from '@/shared/ui/ActionButton'
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
      <Text color='muted' fz='sm'>
        {title}
      </Text>
      <div className={styles.sidebarProjectsHeadActions}>
        {onAdd && (
          <ActionButton size='xs' onClick={onAdd}>
            <PlusIcon size={14} />
          </ActionButton>
        )}
        <ActionButton size='xs'>
          <ChevronDownIcon size={14} />
        </ActionButton>
      </div>
    </div>
  )
}

export { SidebarProjectsHead }
