import images from 'assets/images'
import { Button, Header, Input, MedicineItem } from 'components'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MEDICINE_LIST } from 'utils/dumy'

export const AddRecipe: React.FC = () => {
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
    <div className='-mt-5 h-full bg-white -mx-4'>
      <div className='mx-4'>
        <Header onBackClick={() => navigate(-1)} label='Tambah Resep' />
      </div>
      <div className='bg-white px-4 flex flex-col'>
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
      <div className='flex font-bold text-xxs justify-between mx-4 bg-white'>
        <p>OBAT</p>
        <p>HARGA</p>
      </div>
      <div className='border-b-[2px] border-b-gray mx-4'></div>
      <div className='mx-4 bg-white mt-6 '>
        {MEDICINE_LIST?.map((item) => (
          <MedicineItem item={item} active />
        ))}
      </div>
      <div className='-mb-16 pb-12 px-4 bg-white'>
        <Button
          onClick={() => console.log('Submit')}
          label='Simpan Rekomendasi'
          className='text-xs btn-primary !w-full mt-40'
          icon={images.ic_disket}
        />
      </div>
    </div>
  )
}
