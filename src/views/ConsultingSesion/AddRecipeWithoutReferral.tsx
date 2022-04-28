import images from 'assets/images'
import { Button, Header, MedicineRefferalItem } from 'components'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MEDICINE_LIST } from 'utils/dumy'

export const AddRecipeWithoutReferral: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className='-mt-5 bg-white'>
      <Header onBackClick={() => navigate(-1)} label='Tambah Resep' />
      <div className='-mx-4 bg-white p-4 flex flex-col'>
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
      <div>
        {MEDICINE_LIST?.map((item) => (
          <MedicineRefferalItem item={item} />
        ))}
      </div>
      <div className='-mb-6 pb-4 px-4 bg-white'>
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
