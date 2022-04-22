import images from 'assets/images'
import { Button, ScheduleItem } from 'components'
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
  const [scheduleData, setScheduleData] = useState(SCHEDULE_LIST)
  console.log(scheduleData)

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
    </div>
  )
}
