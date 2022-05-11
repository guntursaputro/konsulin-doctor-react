import images from 'assets/images'
import { Button, Header, MedicineNoReferralItem } from 'components'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MEDICINE_LIST } from 'utils/dumy'

export const ChangeRecipeWithoutReferral: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className='-mt-5 -mx-4 bg-white'>
      <div className='ml-4'>
        <Header onBackClick={() => navigate(-1)} label='Ubah Resep Obat' />
      </div>
      <div className='mx-4 bg-white flex flex-col'>
        <div className='w-full py-2 px-3 text-xs flex justify-between border rounded-md items-center'>
          <p>Beta</p>
          <img src={images.ic_search_loop} alt='' className='w-6 h-6' />
        </div>
        <img
          src={images.ic_sorting}
          alt=''
          className='w-6 pr-1 mt-3 self-end'
        />
      </div>
      <div className='mx-4 bg-white'>
        {MEDICINE_LIST?.map((item) => (
          <MedicineNoReferralItem item={item} active edited />
        ))}
      </div>
      <div className='bg-white mx-4 pb-16 py-9 -mb-16'>
        <Button
          onClick={() => console.log('Save')}
          icon={images.ic_disket}
          label='Simpan Rekomendasi'
          className='btn-primary !w-full'
        />
      </div>
    </div>
  )
}
