import { Anchor } from '@/shared/ui/Anchor'
import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import { PasswordInput } from '@/shared/ui/PasswordInput'
import { Text } from '@/shared/ui/Text'
import { useLogin } from '../../hooks/useLogin'
import styles from './loginform.module.scss'
import { AppPath } from '@/shared/configs/app-path'

const LoginForm = () => {
  const { register, errors, handleSubmit, onSubmit } = useLogin()

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.loginFormInner}>
        <div className={styles.loginFormFields}>
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
            <Anchor to={AppPath.register}>Забыли пароль?</Anchor>
          </div>
        </div>
        <Button type='submit' size='xl' stretch>
          Войти
        </Button>
        <Text color='muted'>
          Нет аккаунта?{' '}
          <Anchor color='muted' to={AppPath.register}>
            Зарегистрироваться
          </Anchor>
        </Text>
      </div>
    </form>
  )
}

export { LoginForm }
