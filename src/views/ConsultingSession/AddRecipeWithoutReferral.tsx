import images from 'assets/images'
import { Button, Header, Input, MedicineNoReferralItem } from 'components'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MEDICINE_LIST } from 'utils/dumy'

export const AddRecipeWithoutReferral: React.FC = () => {
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
    <div className='-mt-5 -mx-4 bg-white -mb-5'>
      <div className='ml-4'>
        <Header onBackClick={() => navigate(-1)} label='Tambah Resep' />
      </div>
      <div className='px-4 bg-white flex flex-col'>
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
      <div className='mx-4'>
        {MEDICINE_LIST?.map((item) => (
          <MedicineNoReferralItem item={item} active />
        ))}
      </div>
      <div className='pb-16 -mb-16 px-4 bg-white'>
        <Button
          onClick={() => console.log('Submit')}
          label='Simpan Rekomendasi'
          className='text-xs btn-primary !w-full mt-16'
          icon={images.ic_disket}
        />
      </div>
    </div>
  )
}
