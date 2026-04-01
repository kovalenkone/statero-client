import { move } from '@dnd-kit/helpers'
import { DragDropProvider } from '@dnd-kit/react'
import { useState } from 'react'
import { Column } from './components/Column'
import { Item } from './components/Item'

const Columns = () => {
  const [items, setItems] = useState({
    A: ['A0', 'A1', 'A2'],
    B: ['B0', 'B1'],
    C: [],
  })

  return (
    <DragDropProvider
      onDragStart={event => {
        const { source } = event.operation

        if (source?.type === 'item') {
          // setItems(items => move(items, event))
          console.log('source', source?.data.column)
        }
      }}
      onDragOver={event => {
        const { source } = event.operation

        // if (source?.type === 'column') {
        //   console.log('a')
        // }

        if (source?.type === 'item') {
          setItems(items => move(items, event))
          console.log('source', source?.data.column)
        }
      }}
      onDragEnd={event => {
        const { source, target } = event.operation

        console.log('source', source?.data.column)
        console.log('target', target)
      }}
    >
      <div className='Root'>
        {Object.entries(items).map(([column, items], index) => (
          <Column key={column} id={column} index={index}>
            {items.map((id, index) => (
              <Item key={id} id={id} index={index} column={column} />
            ))}
          </Column>
        ))}
      </div>
    </DragDropProvider>
  )
}

export { Columns }
