import { useLocation, useNavigate } from 'react-router'
import styles from './taskspage.module.css'

const TasksPage = () => {
  // const { data } = useLoaderData()
  const navigate = useNavigate()
  const location = useLocation()

  const handleTaskClick = () => {
    // Переходим на страницу задачи, но сохраняем текущее расположение как фон
    navigate(`/task/12}`, {
      state: { background: location },
    })
  }

  return (
    <div className={styles.TasksPage}>
      <button onClick={handleTaskClick}>12</button>
      <h1>Tasks page</h1>
      {/* {data && JSON.stringify(data)} */}
    </div>
  )
}

export { TasksPage }
