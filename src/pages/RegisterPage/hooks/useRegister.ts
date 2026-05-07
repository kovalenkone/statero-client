import { AuthService } from '@/services/auth/auth.service'
import { AppPath } from '@/shared/configs/app-path'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
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

  const { mutate } = useMutation({
    mutationFn: (data: TRegisterData) => AuthService.register(data),
    onSuccess: (_, variables) => {
      console.log('success')
      navigate(AppPath.verifyWithEmail(variables.email))
    },
    onError: error => {
      console.log('error', error)
    },
  })

  const onSubmit: SubmitHandler<TRegisterData> = data => {
    console.log('data', data)
    mutate(data)
  }

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  }
}
