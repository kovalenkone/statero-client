import { redirect } from 'react-router'
import { AppPath } from '../app-path'

export const authMiddleware = () => {
  const user = true

  if (!user) {
    throw redirect(AppPath.Login)
  }
}
