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
        <ChevronDownIcon size={12} />
        <Text color='muted' fz='sm'>
          {title}
        </Text>
      </Collapse.Trigger>

      {onAdd && (
        <ActionButton size='xs' onClick={onAdd}>
          <PlusIcon size={14} />
        </ActionButton>
      )}
    </div>
  )
}

export { SidebarProjectsHead }
