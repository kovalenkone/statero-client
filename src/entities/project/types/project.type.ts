import type { TAccentColor } from '@/entities/accent-color/constants/accent-color.constant'
import type { ISection } from '@/entities/section/types/section.type'

export interface IProject {
  id: string
  name: string
  description: string
  color: TAccentColor
  icon: string
  sections: ISection[]
  isInbox?: boolean
}
