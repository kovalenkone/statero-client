import { AuthCard } from '@/shared/components/AuthCard'
import { OTPInput } from '@/shared/ui/OTPInput'
import { useVerifyEmail } from '../../hooks/useVerifyEmail'

const VerifyEmailForm = () => {
  const { otp, setOtp, loading } = useVerifyEmail()

  return (
    <AuthCard.Form onSubmit={() => {}}>
      <AuthCard.Fields>
        <OTPInput onChange={setOtp} value={otp} isDisabled={loading} />
      </AuthCard.Fields>
    </AuthCard.Form>
  )
}

export { VerifyEmailForm }
