import { AuthCard } from '@/components/AuthCard'
import { RegisterForm } from './components/RegisterForm'

const RegisterPage = () => {
  return (
    <AuthCard
      title='Создайте аккаунт'
      subtitle='Введите все поля ниже, чтобы создать новый аккаунт.'
    >
      <RegisterForm />
    </AuthCard>
  )
}

export { RegisterPage }
