import { AuthCard } from '@/components/AuthCard'
import { LoginForm } from './components/LoginForm'

const LoginPage = () => {
  return (
    <AuthCard
      title='Войдите в свой аккаунт'
      subtitle='Введите свой адрес электронной почты ниже, чтобы войти в свой аккаунт.'
    >
      <LoginForm />
    </AuthCard>
  )
}

export { LoginPage }
