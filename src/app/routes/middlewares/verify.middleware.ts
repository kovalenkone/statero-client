import { AppPath } from '@/shared/configs/app-path'
import { redirect, type LoaderFunctionArgs } from 'react-router'

export const verifyMiddleware = ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url)
  const hasEmail = url.searchParams.has('email')

  if (!hasEmail) {
    throw redirect(AppPath.login)
  }
}
