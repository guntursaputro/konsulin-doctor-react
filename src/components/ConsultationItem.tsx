import React from 'react'
import images from 'assets/image'

interface ConsultationItemProps {
  item: {
    image?: string
    name: string
    date: string
    hour: string
    status: string
  }
}

export const ConsultationItem: React.FC<ConsultationItemProps> = ({ item }) => {
  const statusStyle = (status: string) => {
    switch (status) {
      case 'Online Sekarang':
        return 'bg-primary-base text-white'
      case 'Selesai':
        return 'bg-gray'
      default:
        return 'bg-yellow'
    }
  }
  return (
    <div className='bg-white p-2 drop-shadow flex items-center justify-between rounded-lg mb-4'>
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
          <p className='text-xs'>{item.date}</p>
          <p className='text-xs'>Jam {item.hour}</p>
        </span>
        <p
          className={`px-2 py-1 w-max rounded-lg text-xs font-semi-bold mb-1 ${statusStyle(
            item.status
          )}`}
        >
          {item.status}
        </p>
      </div>
      <div className='mx-2 self-start h-4 min-w-fit'>
        <img src={images.ic_dots} alt='dots' className='h-full' />
      </div>
    </div>
  )
}
