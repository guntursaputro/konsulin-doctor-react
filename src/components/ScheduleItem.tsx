import React, { useState } from 'react'
import clsx from 'clsx'
import { Switch } from './Switch/Switch'
import { Button } from './Button/Button'
import images from '../assets/images'
import { renderToday } from 'utils'

interface ScheduleItemProps {
  className?: string
  active?: boolean
  item: {
    date: string
    status: boolean
    hour: string[]
  }
  onChange: (e: Array<any>) => void
  onClicked: (e: boolean) => void
}

export const ScheduleItem: React.FC<ScheduleItemProps> = ({
  active,
  className,
  item,
  onChange,
  onClicked,
}) => {
  const [isActive, setActive] = useState(item.status)
  const [isClicked, setIsClicked] = useState(false)

  const handleChange = (e: any) => {
    setActive(e.target.checked)
    item.status = !isActive
    onChange([item])
  }

  const handleClick = () => {
    setIsClicked(!isClicked)
    onClicked(isClicked)
  }

  return (
    <div
      className={clsx(
        'bg-white drop-shadow flex flex-col px-4 py-3 mb-3 justify-start rounded-lg',
        className,
        renderToday(item.date) ? 'bg-highlight' : ''
      )}
    >
      <div className='flex justify-between content-center'>
        <p className='text-xs font-bold'>{item.date}</p>
        {active && (
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
              onChange={(e) => handleChange(e)}
            />
          </div>
        )}
      </div>
      <div className={active ? (isActive ? '' : 'hidden') : ''}>
        <div className='grid grid-cols-3 my-4 gap-y-3'>
          {item.hour?.map((hour, index) => (
            <div className='bg-neutral-10 rounded w-24' key={index}>
              <p className='text-xs mx-2 my-1 text-center font-semi-bold'>
                {hour}
              </p>
            </div>
          ))}
        </div>
        {active && (
          <div className='flex justify-between'>
            <Button
              className='btn-tertiary font-xs mt-1 !h-[2rem]'
              label='+ Buat Sesi Baru'
              onClick={handleClick}
            />
            <Button
              className='text-xs font-semi-bold self-end !h-[2rem]'
              icon={images.ic_pencil}
              label='Ubah'
              onClick={() => console.log('Ubah')}
            />
          </div>
        )}
      </div>
    </div>
  )
}
