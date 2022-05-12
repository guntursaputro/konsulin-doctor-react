import images from 'assets/images'
import React, { useState } from 'react'
import { InputPhone, Button } from 'components'
import { useNavigate } from 'react-router-dom'

export const Login: React.FC = () => {
  const [phone, setPhone] = useState('')
  const navigate = useNavigate()

  const onSubmit = () => {
    navigate('/password-input')
  }

  return (
    <div className='content-full bg-white flex flex-col'>
      <div>
        <img
          src={images.ic_login_splash}
          alt=''
          className='relative top-0 right-0'
        />
      </div>

      <div className='bg-white rounded-t-2xl z-10 -mt-3 px-8 pb-8'>
        <div className='font-bold text-3xl mb-4 mt-8'>{`Login/Register`}</div>
        <div className='text-neutral-30 text-sm mb-8'>
          {'Masukkan Nomor Hp untuk Login/Register'}
        </div>
        <InputPhone
          className='mb-4'
          name='phone'
          placeholder='8123849583'
          value={phone}
          onChange={(e) => setPhone(e.value)}
        />

        <Button
          className='btn-primary !w-full'
          label='Masuk'
          onClick={onSubmit}
        />
        <p className='text-center text-sm mt-4'>
          Lupa PIN ?{' '}
          <b className='font-bold' onClick={() => navigate('/verify-otp')}>
            Klik Disini
          </b>
        </p>
      </div>
    </div>
  )
}
