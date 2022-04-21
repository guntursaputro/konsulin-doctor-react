import images from 'assets/images'
import { Button, Header, Input } from 'components'
import { Modal } from 'components'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const PasswordReset: React.FC = () => {
  const [showSetting, setShowSetting] = useState(false)
  const navigate = useNavigate()
  const [form, setForm] = useState({
    password: '',
    password_confirmation: '',
  })

  const handleChangeForm = (e: any) => {
    setForm({
      ...form,
      [e.name]: e.value,
    })
  }

  const onSubmit = () => {
    setShowSetting(true)
    // navigate('/register')
  }

  return (
    <div
      className={`content-full px-[theme('content.padding.x')] pt-[theme('content.padding.y')]`}
    >
      <Header label='Reset Password' onBackClick={() => navigate(-1)} />
      <div className='font-semi-bold text-xl mb-3 mt-5'>
        {'Masukkan Password Baru'}
      </div>
      <div className='text-neutral-30 text-sm mb-7'>
        {'Set Password Baru Akun Kamu'}
      </div>

      <Input
        className='mb-7'
        type='password'
        name='password'
        label='Password'
        placeholder='Ketikkan Password'
        value={form?.password}
        onChange={handleChangeForm}
      />

      <Input
        className='mb-14'
        type='password'
        name='password_confirmation'
        label='Konfirmasi Password'
        placeholder='Ketikkan Ulang Password'
        value={form?.password_confirmation}
        onChange={handleChangeForm}
      />

      <Button
        className='btn-primary !w-full'
        label='Submit'
        onClick={onSubmit}
      />
      <Modal show={showSetting} onHide={() => setShowSetting(false)}>
        <div className='w-11/12 h-60 bg-white mx-auto rounded-2xl my-auto flex'>
          <div className='my-auto mx-auto w-52'>
            <img
              src={images.ic_shield_success}
              alt=''
              className='w-20 h-20 mx-auto'
            />
            <p className='text-base font-medium text-[#707070] text-center mt-4'>
              Password Kamu Berhasil Diperbarui!
            </p>
          </div>
        </div>
      </Modal>
    </div>
  )
}
