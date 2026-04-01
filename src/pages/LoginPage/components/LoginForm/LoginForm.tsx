import { Api } from '@/services/api'
import { LoginSchema, type TLoginData } from '@/services/auth/types/login.type'
import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import { PasswordInput } from '@/shared/ui/PasswordInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type SubmitHandler } from 'react-hook-form'
import styles from './loginform.module.scss'

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginData>({
    resolver: zodResolver(LoginSchema),
  })

  const onSubmit: SubmitHandler<TLoginData> = data => Api.Auth.Login(data)

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
          <PasswordInput
            label='Пароль'
            placeholder='Введите пароль'
            {...register('password')}
            error={errors.password?.message}
          />
        </div>
        <Button size='xl' stretch>
          Войти
        </Button>
      </div>
    </form>
  )
}

export { LoginForm }
