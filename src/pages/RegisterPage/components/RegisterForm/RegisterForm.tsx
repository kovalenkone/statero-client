import { Api } from '@/services/api'
import {
  RegisterSchema,
  type TRegisterData,
} from '@/services/auth/types/register.type'
import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import { PasswordInput } from '@/shared/ui/PasswordInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type SubmitHandler } from 'react-hook-form'
import styles from './registerform.module.scss'

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterData>({
    resolver: zodResolver(RegisterSchema),
  })

  const onSubmit: SubmitHandler<TRegisterData> = data => Api.Auth.Register(data)

  return (
    <form className={styles.registerForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.registerFormInner}>
        <div className={styles.registerFormFields}>
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
          <PasswordInput
            label='Подтвердите Пароль'
            placeholder='Введите подверждение пароля'
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
        </div>
        <Button size='xl' stretch>
          Создать аккаунт
        </Button>
      </div>
    </form>
  )
}

export { RegisterForm }
