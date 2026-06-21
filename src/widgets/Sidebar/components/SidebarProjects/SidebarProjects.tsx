import { useDisclosure } from '@/shared/hooks/useDisclosure'
import { Collapse } from '@/shared/ui/Collapse'
import { SidebarProjectsHead } from './components/SidebarProjectHead'
import { SidebarProjectsList } from './components/SidebarProjectsList'
import styles from './sidebarprojects.module.scss'

interface ISidebarProjectsProps {
  title: string
  onAdd?: () => void
}

const SidebarProjects = ({ title, onAdd }: ISidebarProjectsProps) => {
  const [opened, { toggle }] = useDisclosure(true)

  return (
    <div className={styles.sidebarProjects}>
      <Collapse open={opened} onOpenChange={toggle}>
        <SidebarProjectsHead title={title} onAdd={onAdd} />
        <Collapse.Content>
          <SidebarProjectsList />
        </Collapse.Content>
      </Collapse>
    </div>
  )
}

export { SidebarProjects }
