import images from 'assets/images'
import { Button, Modal, ScheduleItem } from 'components'
import React, { useState } from 'react'
export const SCHEDULE_LIST = [
  {
    status: true,
    date: 'Senin',
    hour: ['10:00 - 11.30', '12.00 - 14.00', '14.30 - 15.30'],
  },
  {
    status: true,
    date: 'Selasa',
    hour: [
      '10:00 - 11.30',
      '12.00 - 14.00',
      '14.30 - 15.30',
      '17.30 - 18.30',
      '18.30 - 19.30',
    ],
  },
  {
    status: false,
    date: 'Rabu',
    hour: ['10:00 - 11.30', '12.00 - 14.00', '14.30 - 15.30'],
  },
  {
    status: true,
    date: 'Kamis',
    hour: [
      '10:00 - 11.30',
      '12.00 - 14.00',
      '14.30 - 15.30',
      '17.30 - 18.30',
      '18.30 - 19.30',
    ],
  },
  {
    status: false,
    date: 'Jumat',
    hour: ['10:00 - 11.30', '12.00 - 14.00', '14.30 - 15.30'],
  },
  {
    status: false,
    date: 'Sabtu',
    hour: ['10:00 - 11.30', '12.00 - 14.00', '14.30 - 15.30'],
  },
  {
    status: false,
    date: 'Minggu',
    hour: ['10:00 - 11.30', '12.00 - 14.00', '14.30 - 15.30'],
  },
]

export const OnlineSchedule: React.FC = () => {
  const [isNewSchedule, setIsNewSchedule] = useState(false)
  const [scheduleData, setScheduleData] = useState(SCHEDULE_LIST)

  return (
    <div>
      <div className='mt-5 mb-4'>
        <p className='text-sm font-bold'>Jadwal Harian</p>
        <p className='mt-1.5 text-xs'>Pengaturan Jadwal Setiap Hari</p>
      </div>
      {scheduleData?.map((item) => (
        <ScheduleItem
          item={item}
          onChange={() => setScheduleData([...scheduleData])}
          onClicked={() => setIsNewSchedule(true)}
          active
        />
      ))}
      <Button
        iconClassName='!h-4 w-4'
        icon={images.ic_disket}
        onClick={() => console.log('Save Change')}
        className='bg-primary-base !w-full text-white mt-36'
        label='Simpan Perubahan'
      />
      <Modal
        show={isNewSchedule}
        dialogClassName='!items-end !justify-end'
        onHide={() => setIsNewSchedule(false)}
      >
        <div className='bg-white rounded-t-2xl text-center font-bold'>
          <p className='pt-4 mb-6'>Pilih Jam untuk Sesi Baru</p>
          <p className='mb-5'>Senin</p>
          <div className='font-regular flex justify-center items-center'>
            <div className='border rounded-xl py-2 px-6'>
              <p>
                00 <span className='mx-4'>:</span> 01
              </p>
            </div>
            <p className='mx-7'>-</p>
            <div className='border rounded-xl py-2 px-6'>
              <p>
                00 <span className='mx-4'>:</span> 30
              </p>
            </div>
          </div>
          <div className='!mx-4 pb-28'>
            <Button
              onClick={() => console.log('Submit')}
              className='btn-primary mt-12 !w-full'
              label='Buat Sesi Baru'
            />
          </div>
        </div>
      </Modal>
    </div>
  )
}
