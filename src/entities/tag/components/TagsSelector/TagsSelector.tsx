import type { ITag } from '@/entities/tag/types/tag.type'
import { ICON_SIZE } from '@/shared/constants/icon-size.constant'
import { Bage } from '@/shared/ui/Bage'
import { Button } from '@/shared/ui/Button'
import { DropdownSelect } from '@/shared/ui/DropdownSelect'
import { Popover } from '@/shared/ui/Popover'
import { Text } from '@/shared/ui/Text'
import { PlusIcon } from 'lucide-react'
import { useState, type PropsWithChildren } from 'react'
import styles from './tagsselector.module.scss'

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
          <Popover>
            <Popover.Trigger asChild>
              <Button
                size='md'
                variant='ghost'
                stretch
                className={styles.addNewTagButton}
              >
                <PlusIcon size={ICON_SIZE.md} />
                <span>
                  Добавить: <Text as='span'>{searchValue}</Text>
                </span>
              </Button>
            </Popover.Trigger>
            <Popover.Content>
              <button>Red</button>
              <button>Red</button>
              <button>Red</button>
              <button>Red</button>
            </Popover.Content>
          </Popover>
        )}
      </DropdownSelect.Content>
    </DropdownSelect>
  )
}

export { TagsSelector }
