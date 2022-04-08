import images from 'assets/images'
import React, { useState } from 'react'
import { Button } from './Button/Button'
import { Input } from './Input'

export const SummaryItem: React.FC = () => {
  const [form, setForm] = useState('')
  console.log(form)
  return (
    <div>
      <div className='flex justify-between mt-3 items-center'>
        <p className='text-xs'>Gatal-Gatal pada permukaan kulit</p>
        <img src={images.ic_pencil} alt='pencil edit' className='w-5 h-5' />
      </div>
      <div className='flex justify-between mt-3 items-center'>
        <p className='text-xs'>Ruam merah dan perih</p>
        <img src={images.ic_pencil} alt='pencil edit' className='w-5 h-5' />
      </div>
      <div className='flex items-center mt-2'>
        <Button
          className='!p-0 !h-fit mr-2'
          icon={images.ic_plus_yellow}
          onClick={() => console.log('Submit')}
        />

        <Input
          className='w-4/5'
          placeholder='Tambah Keluhan'
          inputClass='!p-0 text-xs !border-hidden bg-transparent'
          name='input'
          value={form}
          onChange={(e) => setForm(e.value)}
        />
      </div>
    </div>
  )
}
