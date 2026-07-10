import { DragDropProvider } from '@dnd-kit/react'
import { KanbanColumn } from './components/KanbanColumn'
import { KanbanTask } from './components/KanbanTask'
import { useKanban } from './hooks/useKanban'
import styles from './kanban.module.scss'

const Kanban = () => {
  const { items, sections, tasks, handleDragOver } = useKanban()

  return (
    <DragDropProvider
      // onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      // onDragEnd={handleDragEnd}
    >
      <div className={styles.kanban}>
        {items.map(([column, tasksIds], index) => (
          <KanbanColumn
            key={column}
            index={index}
            section={sections[column]}
            totalTasks={tasksIds.length}
          >
            {tasksIds.map((id, index) => (
              <KanbanTask
                key={id}
                index={index}
                task={tasks[id]}
                column={column}
              />
            ))}
          </KanbanColumn>
        ))}
      </div>
    </DragDropProvider>
  )
}

export { Kanban }
