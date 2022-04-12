import images from 'assets/images'
import React, { useState } from 'react'
import { Button } from './Button/Button'
import { Input } from './Input'
import { SumItem } from './SumItem'
import { SUMMARY_LIST } from 'utils/dumy'
import clsx from 'clsx'

interface SummaryItemProps {
  className?: string
}

export const SummaryItem: React.FC<SummaryItemProps> = ({ className }) => {
  const [sum, setSum] = useState('')
  const [data, setData] = useState(SUMMARY_LIST)

  const handleAdd = () => {
    setData([...data, { id: Math.random(), summary: sum }])
    setSum('')
  }

  return (
    <div className={(clsx('flex flex-col'), className)}>
      <div>
        {data.map((sum) => (
          <SumItem sum={sum} data={data} setData={setData} key={sum.id} />
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
