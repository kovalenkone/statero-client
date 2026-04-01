import type { IBoard } from '@/shared/types/board.type'
import type { ITask } from '@/shared/types/task.type'
import { move } from '@dnd-kit/helpers'
import { DragDropProvider } from '@dnd-kit/react'
import { useState } from 'react'
import { KanbanBoard } from './components/KanbanBoard'
import styles from './kanbantasks.module.scss'

const BOARDS: IBoard[] = [
  {
    id: 'id1',
    name: 'Today',
    order: 0,
    tasks: [
      {
        id: 'task-id-1',
        title: 'title',
        priorety: 'none',
        order: 0,
      },
      {
        id: 'task-id-2',
        title: 'title',
        priorety: 'none',
        order: 1,
      },
    ],
  },
  {
    id: 'id2',
    name: 'Tommorow',
    order: 1,
    tasks: [
      {
        id: 'task-id-3',
        title: 'title',
        priorety: 'none',
        order: 0,
      },
      {
        id: 'task-id-4',
        title: 'title',
        priorety: 'none',
        order: 1,
      },
    ],
  },
  {
    id: 'id3',
    name: 'Month',
    order: 2,
    tasks: [],
  },
]

const tasksByBoard: Record<string, ITask[]> = BOARDS.reduce((acc, board) => {
  acc[board.id] = board.tasks ?? [] // если tasks нет, используем пустой массив
  return acc
}, {} as Record<string, ITask[]>)

const KanbanTasks = () => {
  const [boards, setBoards] = useState(tasksByBoard)

  console.log('tasksByBoard', tasksByBoard)

  return (
    <div className={styles.kanabTasks}>
      <DragDropProvider
        onDragOver={event => {
          setBoards(items => move(items, event))
        }}
      >
        {Object.entries(boards).map(([board]) => {
          const boardData = BOARDS.find(b => b.id === board)
          if (!boardData) return null

          return <KanbanBoard key={board} board={boardData} />
        })}
      </DragDropProvider>
    </div>
  )
}

export { KanbanTasks }
