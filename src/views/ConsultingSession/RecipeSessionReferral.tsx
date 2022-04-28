import images from 'assets/images'
import { Button, MedicineItem } from 'components'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MEDICINE_LIST } from 'utils/dumy'

export const RecipeSessionReferral: React.FC = () => {
  const navigate = useNavigate()
  const onAddRecipe = () => {
    navigate('/add-recipe')
  }
  return (
    <div className='bg-white -mx-4'>
      <div className='pt-6 px-4'>
        <p className='text-black-lighter text-xs font-semi-bold border-b-[2px] border-b-gray'>
          KLINIK REFERRAL
        </p>
        <p className='font-semi-bold text-xs mt-2'>#BNG001-JK</p>
        <p className='font-semi-bold text-xs my-2'>
          Bening's Clinic Jakarta Kemang
        </p>
        <p className='text-xxs mb-6'>
          Jl. Kemang Timur No.6, RT.7/RW.4, Bangka, Kec. Mampang Prapat, Kota
          Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12730
        </p>
      </div>
      <div className='px-4'>
        <Button
          className='bg-yellow text-white !w-full drop-shadow-md mt-3 text-xs'
          label='Tambah Rekomendasi'
          icon={images.ic_plus_white}
          onClick={onAddRecipe}
        />
      </div>
      <div className='px-4'>
        {MEDICINE_LIST?.map((item) => (
          <MedicineItem item={item} />
        ))}
      </div>
      <Button
        icon={images.ic_edit}
        className='btn-outline mt-4 absolute right-0 mr-4 text-xxs'
        onClick={() => console.log('Change')}
        label='Ubah Rekomendasi'
      />
      <div className='mx-4 mt-24 -mb-16'>
        <Button
          icon={images.ic_send_white}
          label='Kirim Rekomendasi ke Pasien'
          onClick={() => console.log('send')}
          className='btn-primary !w-full !text-xs'
        />
      </div>
    </div>
  )
}
