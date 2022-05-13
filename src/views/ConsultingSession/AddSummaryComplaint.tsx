import images from 'assets/images'
import { Header, Input } from 'components'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AddSummaryComplaint: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
  })

  const navigate = useNavigate()

  const handleChangeForm = (e: any) => {
    setForm({
      ...form,
      [e.name]: e.value,
    })
  }
  return (
    <div className='bg-white h-full -mt-5 -mx-4'>
      <div className='ml-4'>
        <Header onBackClick={() => navigate(-1)} label='Tambah Keluhan' />
      </div>
      <div className='bg-white p-4 flex flex-col'>
        <div className='w-full py-3 px-3 text-xs flex justify-between border rounded-md items-center'>
          <Input
            name='name'
            value={form?.name}
            onChange={handleChangeForm}
            className='text-xxs flex-grow'
            inputClass='!p-0 text-xs !border-hidden bg-transparent'
          />
          <img src={images.ic_search_loop} alt='' className='w-6 h-6 ml-1' />
        </div>
        <img
          src={images.ic_sorting}
          alt=''
          className='w-6 pr-1 mt-3 self-end'
        />
      </div>

      <div className='font-semi-bold mx-4 text-xs'>
        <p className='mb-6'>Kulit Kemerahan</p>
        <p className='mb-6'>Bintik Merah</p>
        <p className='mb-6'>Ruam Merah dan Perih</p>
      </div>
    </div>
  )
}
