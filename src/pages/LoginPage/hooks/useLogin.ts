import { AuthService } from '@/services/auth/auth.service'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { loginSchema, type TLoginData } from '../schemas/login.schema'

export const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginData>({
    resolver: zodResolver(loginSchema),
  })

  const { mutate } = useMutation({
    mutationFn: (data: TLoginData) => AuthService.login(data),
    onSuccess: () => {},
    onError: () => {},
  })

  const onSubmit: SubmitHandler<TLoginData> = data => mutate(data)

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  }
}
