import { ProjectSelector } from '@/entities/project/components/ProjectSelector'
import type { IProject } from '@/entities/project/types/project.type'
import { Bage } from '@/shared/ui/Bage'
import { Button } from '@/shared/ui/Button'

interface IKanbanNewTaskProjectProps {
  projects: IProject[]
  selectedProject: IProject
  onSelect: (project: IProject) => void
}

const KanbanNewTaskProject = ({
  projects,
  selectedProject,
  onSelect,
}: IKanbanNewTaskProjectProps) => {
  return (
    <ProjectSelector
      projects={projects}
      selectedProject={selectedProject}
      onSelect={onSelect}
    >
      <Button variant='ghost' size='md'>
        <Bage variant='blue' size='xxs' square>
          S
        </Bage>
        Statera / На тесте
      </Button>
    </ProjectSelector>
  )
}

export { KanbanNewTaskProject }
