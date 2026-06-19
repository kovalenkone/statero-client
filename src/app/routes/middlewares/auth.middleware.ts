import { AuthService } from '@/services/auth/auth.service'
import { getAccessToken, setAccessToken } from '@/shared/api/api'
import { AppPath } from '@/shared/configs/app-path'
import { redirect } from 'react-router'

export const authMiddleware = async () => {
  const accessToken = getAccessToken()

  if (!accessToken) {
    await AuthService.refresh()
      .then(res => {
        setAccessToken(res.accessToken)
      })
      .catch(() => {
        throw redirect(AppPath.login)
      })
  }
}
