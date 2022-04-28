import images from 'assets/images'
import { Button, Switch } from 'components'
import React, { useState } from 'react'

export const SetSchedule: React.FC = () => {
  const [isScheduleActive, setIsScheduleActive] = useState(false)
  const [isNotifActive, setIsNotifActive] = useState(true)

  return (
    <div>
      <div className='bg-white flex -mx-4 px-4 pb-10 pt-8 items-center justify-between gap-10'>
        {isNotifActive ? (
          <div className='w-3/5'>
            <p className='text-sm font-bold mb-1'>Matikan Notifikasi</p>
            <p className='text-xs w-60 h-14'>
              Anda tidak akan menerima notifikasi dari sistem mengenai jadwal
              online anda
            </p>
          </div>
        ) : (
          <div className='w-3/5'>
            <p className='text-sm font-bold text-black-light mb-1'>
              Nyalakan Notifikasi
            </p>
            <p className='text-xs text-black-light w-60  h-14'>
              Anda akan menerima notifikasi dari sistem mengenai jadwal online
              anda
            </p>
          </div>
        )}
        <Switch
          className='relative z-50 w-1/12'
          checked={isNotifActive}
          onChange={() => setIsNotifActive(!isNotifActive)}
          name='schedule'
        />
      </div>
      <div>
        {isScheduleActive ? (
          <div className='flex flex-col mb-6'>
            <p className='text-sm font-bold pt-3 mb-1 text-black-light'>
              Nyalakan Jadwal
            </p>
            <p className='text-xs text-black-light'>
              Anda dapat kembali menerima pesanan konsultasi sesuai dengan
              jadwal anda
            </p>
          </div>
        ) : (
          <div className='flex flex-col mb-6'>
            <p className='text-sm font-bold pt-3 mb-1'>
              {isScheduleActive ? 'Nyalakan Jadwal' : 'Matikan Jadwal'}
            </p>
            <p className='text-xs'>
              Anda tidak dapat menerima konsultasi apapun selama jadwal
              dimatikan
            </p>
          </div>
        )}
        {isScheduleActive ? (
          <Button
            icon={images.ic_power_white}
            onClick={() => setIsScheduleActive(!isScheduleActive)}
            label='Nyalakan Jadwal'
            className='btn-primary !w-full'
          />
        ) : (
          <Button
            icon={images.ic_power_black}
            onClick={() => setIsScheduleActive(!isScheduleActive)}
            label='Matikan Jadwal'
            className='btn-outline !w-full'
          />
        )}
      </div>
    </div>
  )
}
