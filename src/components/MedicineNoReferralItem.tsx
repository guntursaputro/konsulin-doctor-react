import images from 'assets/images'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { numberSeparator, renderStar } from 'utils'
import { Button } from './Button/Button'
import { Input } from './Input'
import { PlusMinus } from './PlusMinus'

interface MedicineNoReferralItemProps {
  className?: string
  active?: boolean
  disabled?: boolean
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
  edited?: boolean
}

export const MedicineNoReferralItem: React.FC<MedicineNoReferralItemProps> = ({
  className,
  active,
  disabled,
  item,
  edited,
}) => {
  const [isActive, setIsActive] = useState(false)
  const [form, setForm] = useState('')
  const [count, setCount] = useState(0)
  const [value, setValue] = useState({})

  useEffect(() => {
    console.log(value)
  }, [value])

  const onSubmit = () => {
    setValue({
      amount: count,
      note: form,
    })
  }

  return (
    <div className={clsx(`border-b-[1px] border-dashed mt-4 pb-4`, className)}>
      {active ? (
        <div className='flex justify-between mb-2'>
          <p className='text-xxs font-bold w-3/6'>{item.name}</p>
          <p className='text-xxs font-bold'>
            {numberSeparator(item.price, 'Rp.')}
          </p>
        </div>
      ) : (
        ''
      )}
      <div className='flex mt-4'>
        <div className='bg-neutral-10 rounded-md max-w-[100px] max-h-[100px] mr-4 drop-shadow'>
          <img src={item.image} alt={item.name} className='rounded-md' />
        </div>
        <div className='flex items-baseline pr-[3rem]'>
          <div className='flex flex-col gap-y-1'>
            <p className='text-xxs font-bold'>{item.name}</p>
            <div className='flex content-center'>
              {renderStar(item.rate)}
              <p className='text-xs ml-3'>{item.rate}.0</p>
            </div>
            <p className='text-xs font-bold'>
              {numberSeparator(item.price, 'Rp.')}
            </p>
            <p className='text-xxs'>{item.description}</p>
            <div className='flex items-center'>
              <img
                src={images.ic_store}
                alt='store icon'
                className='max-w-4 max-h-4 mr-1'
              />
              <p className='text-xxs'>{item.store}</p>
            </div>
          </div>
        </div>
      </div>

      {active ? (
        ''
      ) : (
        <div className='text-xxs mt-3'>
          <p className='mb-1'>Catatan Dokter:</p>
          <p>{item.note}</p>
        </div>
      )}

      <div
        className={`flex justify-between items-center ${
          edited ? '' : 'my - 4'
        }`}
      >
        <PlusMinus
          onChange={(e) => setCount(e)}
          value={count}
          min={1}
          max={20}
          disabled={disabled}
        />

        {active ? (
          <div>
            {edited ? (
              <Button
                onClick={() => console.log('delete')}
                icon={images.ic_trash}
                className='h6- w-6 text-xs !font-regular'
                label='Hapus'
              />
            ) : (
              <Button
                className='btn-outline text-xs !h-[40px] !w-56'
                label='+ Masukan Resep'
                onClick={onSubmit}
              />
            )}
          </div>
        ) : (
          ''
        )}
      </div>

      {active ? (
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
      ) : (
        ''
      )}
    </div>
  )
}
