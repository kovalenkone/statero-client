import { AuthService } from '@/services/auth/auth.service'
import { setAccessToken } from '@/shared/api/api'
import { AppPath } from '@/shared/configs/app-path'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { loginSchema, type TLoginData } from '../schemas/login.schema'

export const useLogin = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TLoginData>({
    resolver: zodResolver(loginSchema),
  })

  const naviagte = useNavigate()

  const { mutate, isPending } = useMutation({
    mutationFn: (data: TLoginData) => AuthService.login(data),
    onSuccess: res => {
      setAccessToken(res.accessToken)
      naviagte(AppPath.overview)
      toast.success('Успешный вход')
    },
    onError: () => {
      setValue('password', '')
      toast.error('Неверный логин или пароль')
    },
  })

  const onSubmit: SubmitHandler<TLoginData> = data => mutate(data)

  return {
    register,
    errors,
    pending: isPending,
    onSubmit: handleSubmit(onSubmit),
  }
}
