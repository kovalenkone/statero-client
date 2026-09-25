import { AppPath } from '@/shared/configs/app-path'
import { AuthCard } from '@/shared/ui/AuthCard'
import { Input } from '@/shared/ui/Input'
import { PasswordInput } from '@/shared/ui/PasswordInput'
import { useRegister } from '../../hooks/useRegister'
import styles from './registerform.module.scss'

const RegisterForm = () => {
  const { register, pending, errors, onSubmit } = useRegister()

  return (
    <AuthCard.Form onSubmit={onSubmit}>
      <AuthCard.Fields>
        <div className={styles.registerFormRow}>
          <Input
            label='Имя'
            placeholder='Введите имя'
            {...register('name')}
            error={errors.name?.message}
          />
          <Input
            label='Фамилия'
            placeholder='Введите фамилию'
            {...register('surname')}
            error={errors.surname?.message}
          />
        </div>
        <Input
          label='Email'
          placeholder='Введите Email'
          {...register('email')}
          error={errors.email?.message}
        />
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
      <AuthCard.Submit label='Создать аккаунт' prending={pending} />
      <AuthCard.Link
        text='Уже есть аккаунт?'
        link={{ label: 'Войти', href: AppPath.login }}
      />
    </AuthCard.Form>
  )
}

export { RegisterForm }
