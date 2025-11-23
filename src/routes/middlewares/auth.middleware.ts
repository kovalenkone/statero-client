import { AppPath } from '@/shared/constants/app-path.constant'
import { redirect } from 'react-router'

export const authMiddleware = () => {
  const user = true

  if (!user) {
    throw redirect(AppPath.Login)
  }
}
