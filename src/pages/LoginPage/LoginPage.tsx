import { AuthCard } from '@/components/AuthCard'
import { LoginForm } from './components/LoginForm'

const LoginPage = () => {
  return (
    <AuthCard
      title='Добро пожаловать'
      subtitle='Войдите в свою учетную запись Statera'
    >
      <LoginForm />
    </AuthCard>
  )
}

export { LoginPage }
