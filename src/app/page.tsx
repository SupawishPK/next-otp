import { useState } from 'react';
import OtpInput from 'react-otpcode-input';

export default function Home() {
  const [otp, setOtp] = useState("")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
    </main>
  )
}
