import { useLocation, useNavigate } from 'react-router'
import styles from './projectspage.module.css'

const ProjectsPage = () => {
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
    <div className={styles.projectsPage}>
      <button onClick={handleTaskClick}>12</button>
      <h1>Projects Page</h1>
      {/* {data && JSON.stringify(data)} */}
    </div>
  )
}

export { ProjectsPage }
