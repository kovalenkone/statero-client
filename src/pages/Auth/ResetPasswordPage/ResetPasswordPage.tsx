import { AuthCard } from '@/shared/ui/AuthCard'
import { ResetPasswordForm } from './components/ResetPasswordForm'

const ResetPasswordPage = () => {
  return (
    <AuthCard>
      <AuthCard.Head
        title='Новый пароль'
        descr='Введите новый пароль для вашей учетной записи Statero'
      />
      <ResetPasswordForm />
    </AuthCard>
  )
}

export { ResetPasswordPage }
