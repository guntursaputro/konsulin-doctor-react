import images from 'assets/images'
import { Banner, ConsultationItem, ScheduleItem, Switch } from 'components'
import React, { useState } from 'react'
import clsx from 'clsx'
import { CONSULTATION_LIST, SCHEDULE_LIST } from 'utils/dumy'

export const Home: React.FC = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className='-mt-[4rem]'>
      <Banner />
      <div className='pt-[5rem] bg-white -mx-4 p-4 mb-4'>
        <div className='mt-[2rem] mb-2'>
          <div className='flex items-center justify-between '>
            <div className='w-1/2'>
              <p className='text-xs font-semi-bold mb-2'>{`Selamat Datang,`}</p>
              <p className='font-semi-bold text-sm'>{`dr. Fenny Sp`}</p>
              <p className='text-xs'>
                {`Dokter Spesialis Perawatan dan penyakit Kulit.`}
              </p>
            </div>
            <div className='flex'>
              <p
                className={clsx(
                  'text-xxs font-semi-bold mr-1',
                  isActive ? 'text-primary-base' : 'text-black-light'
                )}
              >
                {isActive ? 'Online' : 'Offline'}
              </p>
              <Switch
                name='home'
                checked={isActive}
                onChange={(e) => setIsActive(e.target.checked)}
              />
            </div>
          </div>
        </div>
        <div className='bg-[#f5ca80] py-2 px-3 rounded-md flex items-center justify-between'>
          <div className='flex items-center'>
            <img src={images.ic_thumb} alt='' className='h-5 w-5 mr-1' />
            <p className='text-xs'>Rating kepuasan pelanggan</p>
          </div>
          <p className='font-semi-bold text-sm'>96%</p>
        </div>
      </div>
      <div className='flex  justify-between mb-4'>
        <p className='font-semi-bold text-xs'>KONSULTASI</p>
        <div className='flex'>
          <img
            src={images.ic_consultation_group}
            alt=''
            className='w-4 h-4 mr-1'
          />
          <p className='text-xxs text-black-light'>Lihat Semua</p>
        </div>
      </div>
      <div>
        {CONSULTATION_LIST?.map((item) => (
          <ConsultationItem item={item} />
        ))}
      </div>
      <div className='flex  justify-between mb-4'>
        <p className='font-semi-bold text-xs'>JADWAL</p>
        <div className='flex'>
          <img src={images.ic_calender} alt='' className='w-4 h-4 mr-1' />
          <p className='text-xxs text-black-light'>Atur Jadwal</p>
        </div>
      </div>
      <div>
        {SCHEDULE_LIST?.map((item) => (
          <ScheduleItem item={item} onChange={(e) => console.log(e)} />
        ))}
      </div>
    </div>
  )
}

export default Home
