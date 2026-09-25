import { AuthCard } from '@/shared/ui/AuthCard'
import { VerifyEmailForm } from './components/VerifyEmailForm'

const VerifyEmailPage = () => {
  return (
    <AuthCard>
      <AuthCard.Head
        title='Подтверждение почты'
        descr='Введите код, который прислали вам на почту'
      />
      <VerifyEmailForm />
    </AuthCard>
  )
}

export { VerifyEmailPage }
