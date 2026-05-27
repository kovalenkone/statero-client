import { AuthService } from '@/services/auth/auth.service'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm, type SubmitHandler } from 'react-hook-form'
import {
  forgotPasswordSchema,
  type TForgotPasswordData,
} from '../schemas/forgot-password.schema'

export const useForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TForgotPasswordData>({
    resolver: zodResolver(forgotPasswordSchema),
  })

  const { mutate } = useMutation({
    mutationFn: (data: TForgotPasswordData) => AuthService.forgotPassword(data),
    onSuccess: () => {},
    onError: () => {},
  })

  const onSubmit: SubmitHandler<TForgotPasswordData> = data => mutate(data)

  return {
    register,
    errors,
    onSubmit: handleSubmit(onSubmit),
  }
}
