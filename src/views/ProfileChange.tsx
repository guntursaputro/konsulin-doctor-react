import images from 'assets/images'
import { Button, Header, Input } from 'components'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const ProfileChange: React.FC = () => {
  const [form, setForm] = useState({
    university: '',
    subject: '',
  })
  const navigate = useNavigate()

  const onHandleChange = (e: any) => {
    setForm({
      ...form,
      [e.name]: e.value,
    })
  }

  return (
    <div>
      <Header onBackClick={() => navigate(-1)} label='Ajukan Perubahan Data' />
      <div className='text-sm'>
        <div className='flex gap-2 mb-6'>
          <p>Data:</p>
          <p className='font-bold'> Personal info</p>
        </div>
        <div>
          <p>Data Yang Hendak Diubah</p>
          <div className='bg-white rounded-md font-bold text-xs p-3 outline outline-1 outline-neutral-20 flex justify-between items-center my-3'>
            <p>Alumni</p>
            <img src={images.ic_down} alt='' className='h-5 w-5' />
          </div>
        </div>
        <Input
          placeholder='Universitas Atma Jaya (2016)'
          className='mt-6'
          label='Perubahan'
          name='university'
          value={form?.university}
          onChange={(e) => onHandleChange(e)}
        />
        <Input
          type='text-area'
          placeholder='Penjelasan Perubahan Data'
          label='Keterangan'
          className='mt-6 mb-32'
          name='subject'
          value={form?.subject}
          onChange={(e) => onHandleChange(e)}
        />
        <Button
          onClick={() => console.log('submit')}
          label='Kirim'
          className='bg-primary-base text-white !w-full'
        />
      </div>
    </div>
  )
}
