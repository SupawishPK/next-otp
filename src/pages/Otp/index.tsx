import { useState } from 'react'
import OtpInput from 'react-otpcode-input'

export default function OTP() {
  const [otp, setOtp] = useState('')

  return (
    <OtpInput
      numberOfInputs={6}
      onChange={(code) => {
        console.log('onChange', code)
        setOtp(code)
      }}
      onComplete={(code) => {
        console.log('onComplete', code)
        setOtp(code)
      }}
      otp={otp}
      autoFocus={true}
    />
  )
}
