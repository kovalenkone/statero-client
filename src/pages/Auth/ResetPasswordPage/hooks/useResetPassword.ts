import { AuthService } from '@/services/auth/auth.service'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm, type SubmitHandler } from 'react-hook-form'
import {
  resetPasswordSchema,
  type TResetPassword,
} from '../schemas/reset-password.schema'

export const useResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TResetPassword>({
    resolver: zodResolver(resetPasswordSchema),
  })

  const { mutate } = useMutation({
    mutationFn: (data: TResetPassword) => AuthService.resetPassword(data),
    onSuccess: () => {},
    onError: () => {},
  })

  const onSubmit: SubmitHandler<TResetPassword> = data => mutate(data)

  return {
    register,
    errors,
    onSubmit: handleSubmit(onSubmit),
  }
}
