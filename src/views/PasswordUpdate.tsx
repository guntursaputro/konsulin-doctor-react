import { Button, Header, Input } from 'components'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const PasswordUpdate: React.FC = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    password_old: '',
    password_new: '',
    password_confirmation: '',
  })

  const handleChangeForm = (e: any) => {
    setForm({
      ...form,
      [e.name]: e.value,
    })
  }

  const onSubmit = () => {
    navigate('/login')
  }

  return (
    <div className='bg-white -mx-4'>
      <div className='ml-4'>
        <Header label='Ganti Password' onBackClick={() => navigate(-1)} />
      </div>
      <div className='mx-4 -mt-5 pt-20'>
        <div className='flex items-end justify-between mb-2'>
          <div className='font-medium text-black-light text-sm'>
            {'Password Lama'}
          </div>
        </div>

        <Input
          className='mb-7'
          type='password'
          name='password_old'
          placeholder='Ketikkan Password'
          value={form?.password_old}
          onChange={handleChangeForm}
        />

        <Input
          className='mb-7'
          type='password'
          name='password_new'
          label='Password Baru'
          placeholder='Ketikkan Password'
          value={form?.password_new}
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
          label='Simpan'
          onClick={onSubmit}
        />
      </div>
    </div>
  )
}
