import { Header, InputCode, Numpad } from 'components'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const VerifyOtp: React.FC = () => {
  const navigate = useNavigate()
  const [OTP, setOTP] = useState('')

  const onSubmit = (otp: string) => {
    console.log('OTP', otp)
    navigate('/password-reset')
  }

  const resendCode = () => {
    console.log('resendCode')
  }

  return (
    <div
      className={`content-full px-[theme('content.padding.x')] pt-[theme('content.padding.y')]`}
    >
      <Header label='OTP' onBackClick={() => navigate(-1)} />
      <div className='font-semi-bold text-xl mb-3 mt-5'>
        {'Verifikasi Kode OTP '}
      </div>
      <div className='text-neutral-30 text-sm'>
        {'Kami Telah Mengirimkan Kode OTP pada'} <br />
        {'Nomor'}
        <span className='font-semi-bold'>{' *********493'}</span>
      </div>

      <div className='text-center my-8'>
        <div className='font-bold text-xs mb-2'>{'00:58'}</div>
        <div className='text-xs mb-2'>{'Tidak Menerima Kode?'}</div>
        <span className='font-bold text-neutral-20 tex-sm' onClick={resendCode}>
          {'Kirim Ulang'}
        </span>
      </div>

      <InputCode
        className='mx-[10%]'
        cols={6}
        value={OTP}
        onComplete={(e) => onSubmit(e)}
      />

      <Numpad
        className='mx-[15%] my-8'
        onClick={(e) => (OTP.length !== 6 ? setOTP(OTP + e) : {})}
        onDelete={() => (OTP.length !== 0 ? setOTP(OTP.slice(0, -1)) : {})}
      />
    </div>
  )
}
