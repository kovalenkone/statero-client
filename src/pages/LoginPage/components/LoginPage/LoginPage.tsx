import { Link } from 'react-router'
import styles from './loginpage.module.css'

const LoginPage = () => {
  return (
    <div className={styles.LoginPage}>
      <Link to='/task/12'>12</Link>
      <h1>Login page</h1>
    </div>
  )
}

export { LoginPage }
