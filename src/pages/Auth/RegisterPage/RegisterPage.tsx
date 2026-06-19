import { AuthCard } from '@/shared/components/AuthCard'
import { RegisterForm } from './components/RegisterForm'

const RegisterPage = () => {
  return (
    <AuthCard>
      <AuthCard.Head
        title='Создайте аккаунт'
        descr='Введите свои данные для создания учетной записи Statero'
      />
      <RegisterForm />
    </AuthCard>
  )
}

export { RegisterPage }
