import images from 'assets/images'
import React, { useState } from 'react'
import { Button } from './Button/Button'
import { Input } from './Input'

interface SummaryItemProps {
  note: string
  summary: string[]
}

export const SummaryItem: React.FC = () => {
  const [form, setForm] = useState('')
  const summary = ['Kemerahan pada permukaan kulit', 'Ruam merah dan perih']
  const [data, setData] = useState(summary)

  const handleSubmit = () => {
    setData([...data, form])
    setForm('')
  }

  console.log('form:', form, 'sum:', data)
  return (
    <div>
      {data?.map((item) => (
        <div className='flex justify-between mt-3 items-center'>
          <p className='text-xs'>{item}</p>
          <img src={images.ic_pencil} alt='pencil edit' className='w-5 h-5' />
        </div>
      ))}
      <div className='flex items-center mt-2'>
        <Button
          className='!p-0 !h-fit mr-2'
          icon={images.ic_plus_yellow}
          onClick={() => handleSubmit()}
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
