import { AuthCard } from '@/shared/components/AuthCard'
import { LoginForm } from './components/LoginForm'

const LoginPage = () => {
  return (
    <AuthCard>
      <AuthCard.Head
        title='Добро пожаловать'
        descr='Войдите в свою учетную запись Statera'
      />
      <LoginForm />
    </AuthCard>
  )
}

export { LoginPage }
