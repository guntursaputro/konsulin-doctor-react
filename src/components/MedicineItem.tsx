import images from 'assets/images'
import React from 'react'
import { Button } from './Button/Button'

export const MedicineItem: React.FC = () => {
  return (
    <div className='mt-6'>
      <Button
        className='btn-tertiary h-10 !w-full'
        icon={images.ic_plus_white}
        label='Tambah Resep Obat'
        onClick={() => console.log('Tambah Obat')}
      />
    </div>
  )
}
