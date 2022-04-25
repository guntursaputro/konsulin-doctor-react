import images from 'assets/images'
import { Button, MedicineItem } from 'components'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MEDICINE_LIST } from 'utils/dumy'

export const RecipeSesionRefferal: React.FC = () => {
  const navigate = useNavigate()
  const onAddRecipe = () => {
    navigate('/add-recipe')
  }
  return (
    <div>
      <div className='mt-6 w-'>
        <p className='text-black-lighter text-xs font-semi-bold border-b-[2px] border-b-gray'>
          KLINIK REFFERAL
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
      <Button
        className='bg-yellow text-white !w-full drop-shadow-md mt-3'
        label='Tambah Rekomendasi'
        icon={images.ic_plus_white}
        onClick={onAddRecipe}
      />
      <div>
        {MEDICINE_LIST?.map((item) => (
          <MedicineItem item={item} />
        ))}
      </div>
      <Button
        icon={images.ic_edit}
        className='btn-outline mt-4 absolute right-0 mr-4'
        onClick={() => console.log('Change')}
        label='Ubah Rekomendasi'
      />
      <Button
        icon={images.ic_send_white}
        label='Kirim Rekomendasi ke Pasien'
        onClick={() => console.log('send')}
        className='btn-primary !w-full mt-40'
      />
    </div>
  )
}
