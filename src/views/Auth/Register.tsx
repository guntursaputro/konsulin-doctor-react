import images from 'assets/images'
import React, { useState } from 'react'
import { InputPhone, Button } from 'components'

export const Register: React.FC = () => {
  const [phone, setPhone] = useState('')
  const onSubmit = () => {
    console.log('submit')
  }

  return (
    <div className='content-full bg-gradient flex flex-col'>
      <div className='relative'>
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
      <div className='bg-white rounded-t-2xl px-8 pt-10 -mt-3 relative'>
        <p className='font-bold text-3xl mb-4'>{`Login/Register`}</p>
        <p className='text-neutral-30 text-sm mb-8'>
          {'Masukkan Nomor Hp untuk Login/Register'}
        </p>
        <InputPhone
          className='mb-4'
          name='phone'
          placeholder='8123849583'
          value={phone}
          onChange={(e) => setPhone(e.value)}
        />

        <Button
          className='btn-primary !w-full mb-2'
          label='Masuk'
          onClick={onSubmit}
        />
        <p className='text-center mb-10'>{`Lupa PIN? Klik Disini`}</p>
      </div>
    </div>
  )
}
