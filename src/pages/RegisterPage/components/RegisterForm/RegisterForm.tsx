import { AppPath } from '@/shared/configs/app-path'
import { Anchor } from '@/shared/ui/Anchor'
import { Button } from '@/shared/ui/Button'
import { Checkbox } from '@/shared/ui/Checkbox'
import { Input } from '@/shared/ui/Input'
import { PasswordInput } from '@/shared/ui/PasswordInput'
import { Text } from '@/shared/ui/Text'
import { useRegister } from '../../hooks/useRegister'
import styles from './registerform.module.scss'

const RegisterForm = () => {
  const { register, handleSubmit, errors, onSubmit } = useRegister()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.registerFormInner}>
        <div className={styles.registerFormFields}>
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
            {...register('password')}
            error={errors.password?.message}
          />
          <PasswordInput
            label='Подтвердите пароль'
            placeholder='Введите подверждение пароля'
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <Checkbox />
        </div>
        <Button type='submit' size='xl' stretch>
          Создать аккаунт
        </Button>
        <Text color='muted'>
          Уже есть аккаунт?{' '}
          <Anchor color='muted' to={AppPath.login}>
            Войти
          </Anchor>
        </Text>
      </div>
    </form>
  )
}

export { RegisterForm }
