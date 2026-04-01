import { RestrictToHorizontalAxis } from '@dnd-kit/abstract/modifiers'
import { useSortable } from '@dnd-kit/react/sortable'
import type { PropsWithChildren } from 'react'

interface IColumnProps {
  id: string
  index: number
}

const Column = ({ id, index, children }: PropsWithChildren<IColumnProps>) => {
  const { ref } = useSortable({
    id,
    index,
    type: 'column',
    collisionPriority: 1,
    accept: ['item', 'column'],
    modifiers: [RestrictToHorizontalAxis],
  })

  return (
    <div className='Column' ref={ref}>
      {children}
    </div>
  )
}

export { Column }
