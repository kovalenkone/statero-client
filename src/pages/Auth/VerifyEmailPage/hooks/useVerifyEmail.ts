import { AuthService } from '@/services/auth/auth.service'
import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { IVerifyEmailData } from '../types/verifyEmailData.type'

export const useVerifyEmail = () => {
  const [searchParams] = useSearchParams()
  const [otp, setOtp] = useState('')

  const { mutate, isPending, error } = useMutation({
    mutationFn: (data: IVerifyEmailData) => AuthService.verifyEmail(data),
    onSuccess: () => {
      console.log('Success')
    },
    onError: () => {
      setOtp('')
    },
  })

  const handleSubmit = () => {
    const email = searchParams.get('email')

    if (!email) return

    mutate({ email, code: otp })
  }

  useEffect(() => {
    if (otp.length === 6) handleSubmit()
  }, [otp])

  return {
    otp,
    setOtp,
    error,
    loading: isPending,
  }
}
