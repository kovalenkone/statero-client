import { OTPInput } from '@/shared/ui/OTPInput'
import { useState } from 'react'
import styles from './verifyemailform.module.scss'

const VerifyEmailForm = () => {
  const [otp, setOtp] = useState('')

  return (
    <form action='' className={styles.f}>
      <OTPInput onChange={setOtp} value={otp} />
    </form>
  )
}

export { VerifyEmailForm }
