import React, { useState } from 'react'
import clsx from 'clsx'
import { Switch } from './Switch/Switch'
import { Button } from './Button/Button'
import images from '../assets/image'

export const ScheduleItem: React.FC = () => {
  const [isActive, setActive] = useState(false)

  return (
    <div className='bg-white drop-shadow flex flex-col px-4 py-3 mb-3 justify-start rounded-lg'>
      <div className='flex justify-between content-center'>
        <p className='text-xs font-bold'>Senin</p>
        <div className='flex transition content-center'>
          <p
            className={clsx(
              'text-xxs font-semi-bold',
              isActive ? 'text-primary-base' : 'text-black-light'
            )}
          >
            {isActive ? 'Aktif' : 'Non Aktif'}
          </p>
          <Switch
            className=' ml-1'
            name='isActive'
            checked={isActive}
            onChange={(e) => setActive(e.target.checked)}
          />
        </div>
      </div>
      <div className={isActive ? '' : 'hidden'}>
        <div className='grid grid-cols-3 my-4 gap-y-3'>
          <div className='bg-neutral-10 rounded w-24'>
            <p className='text-xs mx-2 my-1 text-center font-semi-bold'>
              10.30 - 11.30
            </p>
          </div>
          <div className='bg-neutral-10 rounded w-24'>
            <p className='text-xs mx-2 my-1 text-center font-semi-bold'>
              10.30 - 11.30
            </p>
          </div>
          <div className='bg-neutral-10 rounded w-24'>
            <p className='text-xs mx-2 my-1 text-center font-semi-bold'>
              10.30 - 11.30
            </p>
          </div>
          <div className='bg-neutral-10 rounded w-24'>
            <p className='text-xs mx-2 my-1 text-center font-semi-bold'>
              10.30 - 11.30
            </p>
          </div>
        </div>
        <div className='flex justify-between'>
          <Button
            className='btn-tertiary font-xs mt-1'
            label='+ Buat Sesi Baru'
            onClick={() => console.log('click')}
          />
          <Button
            className='text-xs font-semi-bold self-end'
            icon={images.ic_pencil}
            label='Ubah'
            onClick={() => console.log('click')}
          />
        </div>
      </div>
    </div>
  )
}
