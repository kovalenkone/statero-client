import { useSortable } from '@dnd-kit/react/sortable'

interface IItemProps {
  id: string
  index: number
  column: string
}

const Item = ({ id, index, column }: IItemProps) => {
  const { ref, isDragging } = useSortable({
    id,
    index,
    type: 'item',
    accept: ['item'],
    group: column,
    data: {
      column: column,
    },
  })

  return (
    <button className='Item' ref={ref} data-dragging={isDragging}>
      {id}
    </button>
  )
}

export { Item }
