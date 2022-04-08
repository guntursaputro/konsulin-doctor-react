import images from 'assets/images'
import React from 'react'
import { numberSeparator } from 'utils'
import { Button } from './Button/Button'

interface MedicineItemProps {
  item: { name: string; amount: number; price: number; note: string }
}

export const MedicineItem: React.FC<MedicineItemProps> = ({ item }) => {
  return (
    <div className='mt-6'>
      <div className='flex flex-col'>
        <div className='flex justify-between mb-2'>
          <p className='text-xxs font-bold w-3/6'>{item.name}</p>
          <p className='text-xxs font-bold'>x{item.amount}</p>
          <p className='text-xxs font-bold'>
            {numberSeparator(item.price, 'Rp.')}
          </p>
        </div>
        <div className='flex items-center'>
          <img src={images.ic_booklet} alt='spiral bound icon' />
          <p className='text-xxs ml-2'>{item.note}</p>
        </div>
      </div>
    </div>
  )
}
