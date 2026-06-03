import { AuthService } from '@/services/auth/auth.service'
import { AppPath } from '@/shared/configs/app-path'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { registerSchema, type TRegisterData } from '../schemas/register.schema'

export const useRegister = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterData>({
    resolver: zodResolver(registerSchema),
  })

  const { mutate, isPending } = useMutation({
    mutationFn: (data: TRegisterData) => AuthService.register(data),
    onSuccess: (_, variables) => {
      const searchParams = createSearchParams({ email: variables.email })

      navigate({
        pathname: AppPath.verifyEmail,
        search: searchParams.toString(),
      })
    },
    onError: error => {
      if (axios.isAxiosError(error)) {
        toast.error('Неизвестная ошибка')
      }
    },
  })

  const onSubmit: SubmitHandler<TRegisterData> = data => {
    console.log('data', data)
    mutate(data)
  }

  return {
    register,
    errors,
    pending: isPending,
    onSubmit: handleSubmit(onSubmit),
  }
}
