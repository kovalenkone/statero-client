import { AuthCard } from '@/shared/components/AuthCard'
import { ForgotPasswordForm } from './components/ForgotPasswordForm'

const ForgotPasswordPage = () => {
  return (
    <AuthCard>
      <AuthCard.Head
        title='Восстановление пароля'
        descr='Введите свой email для восстановления пароля'
      />
      <ForgotPasswordForm />
    </AuthCard>
  )
}

export { ForgotPasswordPage }
