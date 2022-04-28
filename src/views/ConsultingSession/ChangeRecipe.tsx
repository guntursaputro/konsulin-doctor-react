import images from 'assets/images'
import { Button, Header, MedicineItem } from 'components'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MEDICINE_LIST } from 'utils/dumy'

export const ChangeRecipe: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-white -mt-5 -mx-4'>
      <div className='ml-4'>
        <Header onBackClick={() => navigate(-1)} label='Ubah Resep' />
      </div>
      <div className='flex font-bold text-xxs justify-between mx-4 bg-white'>
        <p>OBAT</p>
        <p>HARGA</p>
      </div>
      <div className='border-b-[2px] border-b-gray mx-4'></div>
      <div className='mx-4 bg-white'>
        <div className='bg-white'>
          {MEDICINE_LIST?.map((item) => (
            <MedicineItem item={item} active />
          ))}
        </div>
        <div className='-mx-4 px-4 bg-white'>
          <Button
            onClick={() => console.log('Submit')}
            label='Simpan Rekomendasi'
            className='text-xs btn-primary !w-full mt-40'
            icon={images.ic_disket}
          />
        </div>
      </div>
    </div>
  )
}
