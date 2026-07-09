import type { ISection } from '@/entities/section/types/section.type'
import type { TKanbanItems } from '../types/kanban-items.type'

export const formatSections = (sections: ISection[]): TKanbanItems => {
  return sections.reduce((result, section) => {
    return {
      ...result,
      [section.id]: section.tasks.map(t => t.id.toString()),
    }
  }, {})
}
