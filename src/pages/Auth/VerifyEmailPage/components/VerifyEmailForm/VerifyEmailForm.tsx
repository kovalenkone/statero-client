import { AuthCard } from '@/shared/components/AuthCard'
import { OTPInput } from '@/shared/ui/OTPInput'
import { useState } from 'react'

const VerifyEmailForm = () => {
  const [otp, setOtp] = useState('')

  return (
    <AuthCard.Form onSubmit={() => {}}>
      <AuthCard.Fields>
        <OTPInput onChange={setOtp} value={otp} />
      </AuthCard.Fields>
    </AuthCard.Form>
  )
}

export { VerifyEmailForm }
