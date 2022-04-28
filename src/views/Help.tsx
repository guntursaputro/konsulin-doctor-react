import images from 'assets/images'
import { Button, Header, Input } from 'components'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Help: React.FC = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    subject: '',
    note: '',
  })

  const handleChangeForm = (e: any) => {
    setForm({
      ...form,
      [e.name]: e.value,
    })
  }

  const onSubmit = () => {
    console.log('onSubmit', form)
  }

  return (
    <div className='flex flex-col h-full'>
      <Header label='Bantuan' onBackClick={() => navigate(-1)} />
      <div className='flex flex-col flex-1 h-full bg-white px-4 py-6 -mx-4 -mt-4 -mb-[4rem]'>
        <div className='font-bold text-2xl mb-8'>
          {'Apa Yang Bisa Kami Bantu?'}
        </div>

        <div>
          <p>Data Yang Hendak Diubah</p>
          <div className='bg-white rounded-md text-sm p-3 outline outline-1 flex justify-between items-center my-3'>
            <p>Pilih kategori bantuan</p>
            <img src={images.ic_down} alt='' className='h-5 w-5' />
          </div>
        </div>

        <Input
          className='mb-7'
          type='text-area'
          name='note'
          label='Tulis Tambahan Keterangan'
          placeholder='Keterangan untuk menjelaskan permasalahan'
          rows={4}
          inputClass='border-black-darker'
          value={form?.note}
          onChange={handleChangeForm}
        />
        <div className='flex flex-1 items-end pb-4'>
          <Button
            className='btn-primary !w-full'
            label='Submit'
            onClick={onSubmit}
          />
        </div>
      </div>
    </div>
  )
}
