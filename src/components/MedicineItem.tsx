import images from 'assets/images'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { numberSeparator } from 'utils'
import { Button } from './Button/Button'
import { Input } from './Input'
import { PlusMinus } from './PlusMinus'

interface MedicineItemProps {
  className?: string
  item: {
    name: string
    amount: number
    price: number
    rate: number
    note: string
    store: string
    description: string
    image?: string
  }
  active?: boolean
}

export const MedicineItem: React.FC<MedicineItemProps> = ({
  className,
  item,
  active,
}) => {
  const [isActive, setIsActive] = useState(false)
  const [form, setForm] = useState('')
  const [count, setCount] = useState(0)
  const [value, setValue] = useState({})

  const onSubmit = () => {
    setValue({
      amount: count,
      note: form,
    })
  }

  useEffect(() => {
    console.log(value)
  }, [value])

  return (
    <div className={clsx('mt-6', className)}>
      {active ? (
        <div className='border-b-[1px] border-dashed pb-4'>
          <div className='flex justify-between mb-2'>
            <p className='text-xxs font-bold w-3/6'>{item.name}</p>
            <p className='text-xxs font-bold'>
              {numberSeparator(item.price, 'Rp.')}
            </p>
          </div>
          <div className='flex mt-2 mb-4 justify-between items-center'>
            <PlusMinus
              onChange={(e) => setCount(e)}
              value={count}
              min={1}
              max={20}
            />
            <div>
              <Button
                className='btn-outline text-xs !h-[40px] !w-56'
                label='+ Masukan Resep'
                onClick={onSubmit}
              />
            </div>
          </div>
          <div>
            <p
              className={`text-xs font-semi-bold ${isActive ? 'mb-1' : ''}`}
              onClick={() => setIsActive(!isActive)}
            >
              {isActive ? 'Catatan' : '+ Tambahkan Catatan'}
            </p>
            <Input
              type='text-area'
              className={`text-xxs h-11 mb-4', ${isActive ? 'mb-4' : 'hidden'}`}
              value={form}
              name='note'
              onChange={(e) => setForm(e.value)}
            />
          </div>
        </div>
      ) : (
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
      )}
    </div>
  )
}
