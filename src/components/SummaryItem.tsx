import images from 'assets/images'
import React, { useState } from 'react'
import { Button } from './Button/Button'
import { Input } from './Input'
import { Sum } from './Sum'

export const SUMMARY_LIST = [
  {
    id: 1,
    summary: 'Kemerahan pada permukaan kulit',
  },
  {
    id: 2,
    summary: 'Bercak merah di area hidung',
  },
]

export const SummaryItem: React.FC = () => {
  const [sum, setSum] = useState('')
  const [data, setData] = useState(SUMMARY_LIST)

  const handleAdd = () => {
    setData([...data, { id: Math.random(), summary: sum }])
    setSum('')
  }

  console.log(data)

  return (
    <div>
      <div>
        {data.map((data) => (
          <Sum data={data} />
        ))}
      </div>
      <div className='flex items-center mt-2'>
        <Button
          className='!p-0 !h-fit mr-2'
          icon={images.ic_plus_yellow}
          onClick={handleAdd}
        />
        <Input
          className='w-4/5'
          placeholder='Tambah Keluhan'
          inputClass='!p-0 text-xs !border-hidden bg-transparent'
          name='input'
          value={sum}
          onChange={(e) => setSum(e.value)}
        />
      </div>
    </div>
  )
}
