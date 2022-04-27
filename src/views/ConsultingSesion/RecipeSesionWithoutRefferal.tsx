import images from 'assets/images'
import { Button, MedicineRefferalItem } from 'components'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MEDICINE_LIST } from 'utils/dumy'

export const RecipeSesionWithoutRefferal: React.FC = () => {
  const navigate = useNavigate()
  const onAddRecomendation = () => {
    navigate('/add-recipe-without-refferal')
  }

  return (
    <div className='-mx-4 bg-white'>
      <div className='pt-3 px-4'>
        <Button
          className='bg-yellow text-white !w-full drop-shadow-md text-xs mb-6'
          label='Tambah Rekomendasi'
          icon={images.ic_plus_white}
          onClick={onAddRecomendation}
        />
      </div>
      <div className='px-4'>
        {MEDICINE_LIST?.map((item) => (
          <MedicineRefferalItem item={item} disabled className='!pb-0' />
        ))}
      </div>
    </div>
  )
}
