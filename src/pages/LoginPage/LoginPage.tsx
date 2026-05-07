import { AuthSection } from '@/shared/components/AuthSection'
import { LoginForm } from './components/LoginForm'

const LoginPage = () => {
  return (
    <AuthSection
      title='Добро пожаловать'
      descr='Войдите в свою учетную запись Statera'
    >
      <LoginForm />
    </AuthSection>
  )
}

export { LoginPage }
