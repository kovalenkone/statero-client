import type { ComponentProps } from 'react'
import { OtpInput } from 'reactjs-otp-input'
import styles from './otpinput.module.scss'

interface IOTPInputProps
  extends Omit<ComponentProps<typeof OtpInput>, 'numInputs'> {
  numInputs?: number
  error?: string
}

const OTPInput = ({
  error,
  numInputs = 6,
  isInputNum = true,
  hasErrored,
  ...props
}: IOTPInputProps) => {
  return (
    <div>
      <OtpInput
        isInputNum={isInputNum}
        numInputs={numInputs}
        hasErrored={hasErrored ?? !!error}
        {...props}
        containerStyle={styles.OTPContainer}
        inputStyle={styles.OTPInput}
      />
    </div>
  )
}

export { OTPInput }
