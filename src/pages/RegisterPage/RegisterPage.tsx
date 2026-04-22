import { AuthCard } from '@/components/AuthCard'
import { RegisterForm } from './components/RegisterForm'

const RegisterPage = () => {
  return (
    <AuthCard
      title='Создайте аккаунт'
      subtitle='Введите свои данные для создания учетной записи'
    >
      <RegisterForm />
    </AuthCard>
  )
}

export { RegisterPage }
