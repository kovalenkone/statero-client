import { AuthCard } from '@/shared/components/AuthCard'
import { ResetPasswordForm } from './components/ResetPasswordForm'

const ResetPasswordPage = () => {
  return (
    <AuthCard>
      <AuthCard.Head
        title='Новый пароль'
        descr='Введите новый пароль для вашей учетной записи Statera'
      />
      <ResetPasswordForm />
    </AuthCard>
  )
}

export { ResetPasswordPage }
