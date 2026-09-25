import { ICON_SIZE } from '@/shared/constants/icon-size.constant'
import { Button } from '@/shared/ui/Button'
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
        <Button size='xs' icon onClick={onAdd} variant='ghost'>
          <PlusIcon />
        </Button>
      )}
    </div>
  )
}

export { SidebarProjectsHead }
