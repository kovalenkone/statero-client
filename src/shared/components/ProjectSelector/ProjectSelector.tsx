import type { IProject } from '@/entities/project/types/project.type'
import { Bage } from '@/shared/ui/Bage'
import { DropdownSelect } from '@/shared/ui/DropdownSelect'
import { AlignVerticalSpaceAroundIcon } from 'lucide-react'
import { type PropsWithChildren } from 'react'
import styles from './projectselector.module.scss'
import { ICON_SIZE } from '@/shared/constants/icon-size.constant'

interface IProjectSelector {
  projects: IProject[]
  selectedProject: IProject
  onSelect: (project: IProject) => void
}

const ProjectSelector = ({
  projects,
  selectedProject,
  onSelect,
  children,
}: PropsWithChildren<IProjectSelector>) => {
  const handleSelectProject = (projectId: string) => {
    const proj = projects.find(p => p.id.toString() === projectId)

    if (!proj) return

    onSelect(proj)
  }

  return (
    <DropdownSelect
      searchable
      value={selectedProject.id.toString()}
      onSelect={handleSelectProject}
    >
      <DropdownSelect.Trigger>{children}</DropdownSelect.Trigger>
      <DropdownSelect.Content align='start'>
        <DropdownSelect.List>
          {projects.map(project => (
            <DropdownSelect.Group key={project.id}>
              <DropdownSelect.Item
                keywords={[
                  project.name,
                  ...project.sections.map(section => section.name),
                ]}
                value={project.id.toString()}
              >
                <Bage size='xs' square>
                  S
                </Bage>
                {project.name}
              </DropdownSelect.Item>
              {project.sections.map(section => (
                <DropdownSelect.Item
                  key={section.id}
                  keywords={[section.name]}
                  className={styles.projectSection}
                  value={section.id}
                >
                  <AlignVerticalSpaceAroundIcon size={ICON_SIZE.md} />
                  {section.name}
                </DropdownSelect.Item>
              ))}
            </DropdownSelect.Group>
          ))}
        </DropdownSelect.List>
      </DropdownSelect.Content>
    </DropdownSelect>
  )
}

export { ProjectSelector }
