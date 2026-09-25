import { AccentColorSelector } from '@/entities/accent-color/components/AccentColorSelector'
import type { TAccentColor } from '@/entities/accent-color/constants/accent-color.constant'
import type { ITag } from '@/entities/tag/types/tag.type'
import { Bage } from '@/shared/ui/Bage'
import { Button } from '@/shared/ui/Button'
import { DropdownSelect } from '@/shared/ui/DropdownSelect'
import { Text } from '@/shared/ui/Text'
import { PlusIcon } from 'lucide-react'
import { useState, type PropsWithChildren } from 'react'
import styles from './tagsselector.module.scss'

interface ITagsSelectorProps {
  tags: ITag[]
  selectedTagsIds: string[]
  onSelect: (tagId: string) => void
  onCreate: (tagName: string, tagColor: TAccentColor) => void
}

const TagsSelector = ({
  tags,
  selectedTagsIds,
  onSelect,
  onCreate,
  children,
}: PropsWithChildren<ITagsSelectorProps>) => {
  const [searchValue, setSearchValue] = useState('')

  const alreadyExists = tags.some(tag => tag.name === searchValue)

  return (
    <DropdownSelect
      value={selectedTagsIds}
      onSelect={onSelect}
      searchable
      searchValue={searchValue}
      onSearchValueChange={setSearchValue}
    >
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
        {searchValue && !alreadyExists && (
          <AccentColorSelector onSelect={color => onCreate(searchValue, color)}>
            <Button
              size='md'
              variant='ghost'
              stretch
              className={styles.addNewTagButton}
            >
              <PlusIcon />
              <span>
                Добавить: <Text as='span'>{searchValue}</Text>
              </span>
            </Button>
          </AccentColorSelector>
        )}
      </DropdownSelect.Content>
    </DropdownSelect>
  )
}

export { TagsSelector }
