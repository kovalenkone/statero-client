import { AuthSection } from '@/shared/components/AuthSection'
import { AppPath } from '@/shared/configs/app-path'
import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { VerifyEmailForm } from './components/VerifyEmailForm'

const VerifyEmailPage = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const email = searchParams.get('email')

  useEffect(() => {
    if (!email) navigate(AppPath.register)
  }, [])

  if (!email) return null

  return (
    <AuthSection
      title='Подтверждение почты'
      descr='Введите код, который прислали вам на почту'
    >
      <VerifyEmailForm />
    </AuthSection>
  )
}

export { VerifyEmailPage }
