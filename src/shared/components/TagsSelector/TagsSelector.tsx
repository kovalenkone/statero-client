import type { ITag } from '@/entities/tag/types/tag.type'
import { Bage } from '@/shared/ui/Bage'
import { DropdownSelect } from '@/shared/ui/DropdownSelect'
import { type PropsWithChildren } from 'react'

interface ITagsSelectorProps {
  tags: ITag[]
  selectedTagsIds: string[]
  onSelect: (tagId: string) => void
}

const TagsSelector = ({
  tags,
  selectedTagsIds,
  onSelect,
  children,
}: PropsWithChildren<ITagsSelectorProps>) => {
  return (
    <DropdownSelect value={selectedTagsIds} onSelect={onSelect} searchable>
      <DropdownSelect.Trigger>{children}</DropdownSelect.Trigger>
      <DropdownSelect.Content align='start'>
        <DropdownSelect.List>
          {tags.map(tag => (
            <DropdownSelect.Item
              key={tag.name}
              value={tag.id}
              keywords={[tag.name]}
            >
              <Bage size='xs' variant={tag.color}>
                {tag.name}
              </Bage>
            </DropdownSelect.Item>
          ))}
        </DropdownSelect.List>
      </DropdownSelect.Content>
    </DropdownSelect>
  )
}

export { TagsSelector }
