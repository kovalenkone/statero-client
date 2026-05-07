import { AppPath } from '@/shared/configs/app-path'
import { redirect } from 'react-router'

export const authMiddleware = () => {
  const user = true

  if (!user) {
    throw redirect(AppPath.login)
  }
}
