import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header, Input, Button } from 'components'

export const PasswordInput: React.FC = () => {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')

  const onSubmit = () => {
    navigate('/home')
  }

  const onForgot = () => {
    navigate('/verify-otp')
  }

  return (
    <div
      className={`content-full px-[theme('content.padding.x')] pt-[theme('content.padding.y')]`}
    >
      <Header label='Password' onBackClick={() => navigate(-1)} />
      <div className='font-semi-bold text-xl mb-3 mt-5'>
        {'Masukkan Password'}
      </div>
      <div className='text-neutral-30 text-sm mb-7'>
        {'Untuk Login Silakan isi Password'}
      </div>

      <Input
        type='password'
        name='password'
        label='Password'
        placeholder='Ketikkan Password'
        value={password}
        onChange={(e) => setPassword(e.value)}
      />

      <div className='font-bold text-black-dark text=sm text-right pr-3 mb-14 mt-4'>
        <span onClick={onForgot}>{'Lupa Password'}</span>
      </div>

      <Button
        className='btn-primary !w-full'
        label='Masuk'
        onClick={onSubmit}
      />
    </div>
  )
}
