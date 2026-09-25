import { AppPath } from '@/shared/configs/app-path'
import { AuthCard } from '@/shared/ui/AuthCard'
import { Input } from '@/shared/ui/Input'
import { useForgotPassword } from '../../hooks/useForgotPassword'

const ForgotPasswordForm = () => {
  const { register, errors, onSubmit } = useForgotPassword()

  return (
    <AuthCard.Form onSubmit={onSubmit}>
      <AuthCard.Fields>
        <Input
          label='Email'
          placeholder='Введите Email'
          {...register('email')}
          error={errors.email?.message}
        />
      </AuthCard.Fields>
      <AuthCard.Submit label='Сбросить пароль' />
      <AuthCard.Link
        text='Вспомнили пароль?'
        link={{ label: 'Войти', href: AppPath.login }}
      />
    </AuthCard.Form>
  )
}

export { ForgotPasswordForm }
