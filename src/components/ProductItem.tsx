import images from 'assets/image'
import React, { useState } from 'react'
import { Button } from './Button/Button'
import { PlusMinus } from './PlusMinus'

interface ProductItemProps {
  item: {
    image: string
    title: string
    price: string
    rate: number
    store: string
    description?: string
  }
}

export const ProductItem: React.FC<ProductItemProps> = ({ item }) => {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col border-b-[1px] border-dashed'>
      <div className='flex mt-4'>
        <div className='bg-neutral-10 rounded-md max-w-[100px] max-h-[100px] mr-4 drop-shadow'>
          <img src={item.image} alt={item.title} className='rounded-md' />
        </div>
        <div className='flex flex-col gap-y-1'>
          <p className='text-xxs font-bold'>{item.title}</p>
          <div>{item.rate}</div>
          <p className='text-xs font-bold'>Rp. {item.price}</p>
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
          min={2}
          max={20}
        />
        <div>
          <Button
            className='btn-outline text-xs h-[40px] w-56'
            label='+ Masukan Rekomendasi'
            onClick={() => console.log('Rekomendasi')}
          />
        </div>
      </div>
      <p className='' onClick={() => console.log('tambah')}>
        + Tambahkan Catatan
      </p>
    </div>
  )
}
