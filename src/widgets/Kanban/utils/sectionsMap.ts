import type { ISection } from '@/entities/section/types/section.type'

export const sectionsMap = (section: ISection[]): Record<string, ISection> => {
  return section.reduce((result, section) => {
    return {
      ...result,
      [section.id]: section,
    }
  }, {})
}
