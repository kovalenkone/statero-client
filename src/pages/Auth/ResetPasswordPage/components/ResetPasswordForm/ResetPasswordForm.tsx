import { AuthCard } from '@/shared/components/AuthCard'
import { PasswordInput } from '@/shared/ui/PasswordInput'
import { useResetPassword } from '../../hooks/useResetPassword'

const ResetPasswordForm = () => {
  const { register, errors, onSubmit } = useResetPassword()

  return (
    <AuthCard.Form onSubmit={onSubmit}>
      <AuthCard.Fields>
        <PasswordInput
          label='Пароль'
          placeholder='Введите пароль'
          autoComplete='off'
          {...register('password')}
          error={errors.password?.message}
        />
        <PasswordInput
          label='Подтвердите пароль'
          placeholder='Введите подверждение пароля'
          {...register('confirmPassword')}
          error={errors.confirmPassword?.message}
        />
      </AuthCard.Fields>
      <AuthCard.Submit label='Обновить пароль' />
    </AuthCard.Form>
  )
}

export { ResetPasswordForm }
