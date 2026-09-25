import { TagsSelector } from '@/entities/tag/components/TagsSelector'
import { useTags } from '@/entities/tag/hooks/useTags'
import { Bage } from '@/shared/ui/Bage'
import { Button } from '@/shared/ui/Button'
import { TagIcon } from 'lucide-react'

interface IKanbanNewTaskTagsProps {
  selectedTagsIds: string[]
  onSelect: (tagId: string) => void
}

const KanbanNewTaskTags = ({
  selectedTagsIds,
  onSelect,
}: IKanbanNewTaskTagsProps) => {
  const { tags, tagsMap } = useTags()

  return (
    <TagsSelector
      tags={tags}
      selectedTagsIds={selectedTagsIds}
      onSelect={onSelect}
      onCreate={() => {}}
    >
      <Button size='md' variant='ghost' icon={!selectedTagsIds.length}>
        <TagIcon />
        {selectedTagsIds.map(tag => {
          const selectedTag = tagsMap[tag]

          return (
            <Bage key={selectedTag.name} size='xs' variant={selectedTag.color}>
              {selectedTag.name}
            </Bage>
          )
        })}
      </Button>
    </TagsSelector>
  )
}

export { KanbanNewTaskTags }
