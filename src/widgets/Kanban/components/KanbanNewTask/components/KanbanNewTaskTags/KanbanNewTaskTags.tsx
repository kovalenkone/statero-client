import { TagsSelector } from '@/entities/tag/components/TagsSelector'
import { useTags } from '@/entities/tag/hooks/useTags'
import { ICON_SIZE } from '@/shared/constants/icon-size.constant'
import { ActionButton } from '@/shared/ui/ActionButton'
import { Bage } from '@/shared/ui/Bage'
import { Button } from '@/shared/ui/Button'
import { TagIcon } from 'lucide-react'

const TAG_ICON_SIZE = ICON_SIZE.md

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
    >
      {selectedTagsIds.length ? (
        <Button size='md' variant='ghost'>
          <TagIcon size={TAG_ICON_SIZE} />
          {selectedTagsIds.map(tag => {
            const selectedTag = tagsMap[tag]

            return (
              <Bage
                key={selectedTag.name}
                size='xs'
                variant={selectedTag.color}
              >
                {selectedTag.name}
              </Bage>
            )
          })}
        </Button>
      ) : (
        <ActionButton size='sm'>
          <TagIcon size={TAG_ICON_SIZE} />
        </ActionButton>
      )}
    </TagsSelector>
  )
}

export { KanbanNewTaskTags }
