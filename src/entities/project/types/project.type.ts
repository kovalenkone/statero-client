import type { ISection } from '@/entities/section/types/section.type'
import type { TAccentColor } from '@/shared/constants/accent-color.constant'

export interface IProject {
  id: string
  name: string
  description: string
  color: TAccentColor
  icon: string
  sections: ISection[]
}
