import { AccentColor } from '@/shared/constants/accent-color.constant'
import { toMap } from '@/shared/utils/toMap'
import { useMemo, useState } from 'react'
import type { ITag } from '../types/tag.type'

const TAGS: ITag[] = [
  {
    id: 't1',
    name: 'Frontend',
    color: AccentColor.Blue,
  },
  {
    id: 't2',
    name: 'Backend',
    color: AccentColor.Green,
  },
  {
    id: 't3',
    name: 'Test',
    color: AccentColor.Yellow,
  },
]

interface IUseTagsReturn {
  tags: ITag[]
  tagsMap: Record<string, ITag>
}

export const useTags = (): IUseTagsReturn => {
  const [tags, setTags] = useState<ITag[]>(TAGS)

  const tagsMap = useMemo(() => {
    return toMap(TAGS, tag => tag.id)
  }, [])

  return { tags, tagsMap }
}
