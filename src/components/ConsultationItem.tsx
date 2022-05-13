import React from 'react'
import images from 'assets/images'
import clsx from 'clsx'

interface ConsultationItemProps {
  className?: string
  item: {
    image?: string
    name: string
    date: string
    hour: string
    status: string
    startTime?: string
  }
  onClick: (e: any) => void
}

export const ConsultationItem: React.FC<ConsultationItemProps> = ({
  onClick,
  item,
  className,
}) => {
  const statusStyle = (status: string) => {
    switch (status) {
      case 'Online':
        return 'bg-primary-base text-white'
      case 'Selesai':
        return 'bg-gray'
      case 'Terjadwal':
        return 'bg-yellow'
    }
  }

  return (
    <div
      className={clsx(
        'bg-white p-2 drop-shadow flex items-center justify-between rounded-lg mb-4',
        className
      )}
      onClick={onClick}
    >
      <div className='bg-gray mx-4 w-14 h-1/6 rounded-full'>
        <img
          src={item.image ? item.image : images.ic_user}
          className='m-auto rounded-full w-full h-full'
          alt='User avatar'
        />
      </div>
      <div className='flex flex-col grow gap-y-2 shrink'>
        <p className='font-bold text-sm'>{item.name}</p>
        <span className='flex gap-5'>
          <p className='text-xs w-24'>{item.date}</p>
          <p className='text-xs'>Jam {item.hour}</p>
        </span>
        <p
          className={`px-2 py-1 w-max rounded-lg text-xs font-semi-bold mb-1 ${statusStyle(
            item.status
          )}`}
        >
          {item.status === 'Terjadwal'
            ? item.startTime
            : item.status === 'Online'
            ? item.status + ' Sekarang'
            : item.status}
        </p>
      </div>
    </div>
  )
}
