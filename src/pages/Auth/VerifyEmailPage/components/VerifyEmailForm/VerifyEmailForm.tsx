import { AuthCard } from '@/shared/ui/AuthCard'
import { OTPInput } from '@/shared/ui/OTPInput'
import { Text } from '@/shared/ui/Text'
import { useVerifyEmail } from '../../hooks/useVerifyEmail'

const VerifyEmailForm = () => {
  const { otp, setOtp, loading } = useVerifyEmail()

  return (
    <AuthCard.Form onSubmit={() => {}}>
      <AuthCard.Fields>
        <OTPInput onChange={setOtp} value={otp} isDisabled={loading} />
        <Text color='muted'>Повторная отправка через 0:24</Text>
      </AuthCard.Fields>
    </AuthCard.Form>
  )
}

export { VerifyEmailForm }
