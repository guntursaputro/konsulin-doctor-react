import images from 'assets/images'
import React, { useState, useEffect } from 'react'
import { Button } from './Button/Button'
import { Input } from 'components'
import { PlusMinus } from './PlusMinus'
import { renderStar, numberSeparator } from 'utils'

interface ProductItemProps {
  item: {
    image: string
    title: string
    price: number
    rate: number
    store: string
    description?: string
  }
}

export const ProductItem: React.FC<ProductItemProps> = ({ item }) => {
  const [active, setActive] = useState(false)
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
    <div className='flex flex-col border-b-[1px] border-dashed pb-4'>
      <div className='flex mt-4'>
        <div className='bg-neutral-10 rounded-md max-w-[100px] max-h-[100px] mr-4 drop-shadow'>
          <img src={item.image} alt={item.title} className='rounded-md' />
        </div>
        <div className='flex flex-col gap-y-1'>
          <p className='text-xxs font-bold'>{item.title}</p>
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
      <div className='flex my-4 justify-between'>
        <PlusMinus
          onChange={(e) => setCount(e)}
          value={count}
          min={1}
          max={20}
        />
        <div>
          <Button
            className='btn-outline text-xs !h-[40px] !w-56'
            label='+ Masukan Rekomendasi'
            onClick={onSubmit}
          />
        </div>
      </div>
      <div>
        <p
          className={`text-xs font-semi-bold ${active ? 'mb-1' : ''}`}
          onClick={() => setActive(!active)}
        >
          {active ? 'Catatan' : '+ Tambahkan Catatan'}
        </p>
        <Input
          type='text-area'
          className={`text-xs h-11 mb-4', ${active ? 'mb-4' : 'hidden'}`}
          value={form}
          name='note'
          onChange={(e) => setForm(e.value)}
        />
      </div>
    </div>
  )
}
