import { AuthCard } from '@/shared/ui/AuthCard'
import { LoginForm } from './components/LoginForm'

const LoginPage = () => {
  return (
    <AuthCard>
      <AuthCard.Head
        title='Добро пожаловать'
        descr='Войдите в свою учетную запись Statero'
      />
      <LoginForm />
    </AuthCard>
  )
}

export { LoginPage }
