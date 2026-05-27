import { AuthCard } from '@/shared/components/AuthCard'
import { AppPath } from '@/shared/configs/app-path'
import { Anchor } from '@/shared/ui/Anchor'
import { Input } from '@/shared/ui/Input'
import { PasswordInput } from '@/shared/ui/PasswordInput'
import { useLogin } from '../../hooks/useLogin'
import styles from './loginform.module.scss'

const LoginForm = () => {
  const { register, errors, onSubmit } = useLogin()

  return (
    <AuthCard.Form onSubmit={onSubmit}>
      <AuthCard.Fields>
        <Input
          label='Email'
          placeholder='Введите Email'
          {...register('email')}
          error={errors.email?.message}
        />
        <div className={styles.loginFormPasswordField}>
          <PasswordInput
            label='Пароль'
            placeholder='Введите пароль'
            {...register('password')}
            error={errors.password?.message}
          />
          <Anchor to={AppPath.forgotPassword}>Забыли пароль?</Anchor>
        </div>
      </AuthCard.Fields>
      <AuthCard.Submit label='Войти' />
      <AuthCard.Link
        text='Нет аккаунта?'
        link={{ label: 'Зарегистрироваться', href: AppPath.register }}
      />
    </AuthCard.Form>
  )
}

export { LoginForm }
