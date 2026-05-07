import { AuthSection } from '@/shared/components/AuthSection'
import { RegisterForm } from './components/RegisterForm'

const RegisterPage = () => {
  return (
    <AuthSection
      title='Создайте аккаунт'
      descr='Введите свои данные для создания учетной записи Statera'
    >
      <RegisterForm />
    </AuthSection>
  )
}

export { RegisterPage }
