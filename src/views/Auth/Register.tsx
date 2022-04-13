import images from 'assets/images'
import React, { useState } from 'react'
import { InputPhone, Button } from 'components'
import { useNavigate } from 'react-router-dom'

export const Register: React.FC = () => {
  const [phone, setPhone] = useState('')
  const navigate = useNavigate()

  const onSubmit = () => {
    navigate('/pasword-input')
  }

  return (
    <div className='content-full bg-white flex flex-col'>
      <div>
        <img
          src={images.ic_login_splash}
          alt=''
          className='relative top-0 right-0'
        />
        <div className='absolute z-50 top-0 left-5 mx-16 mt-12'>
          <img src={images.ic_konsulin} alt='' className='w-64' />
          <img src={images.ic_dokter} alt='' className='w-32 float-right' />
        </div>
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
        <div className='text-center mt-2'>{`Lupa PIN? Klik Disini`}</div>
      </div>
    </div>
  )
}
