import React from 'react'
import images from 'assets/image'

interface ConsultationItemProp {
  image?: string
  name: string
  date: string
  hour: string
  status: string
}

export const ConsultationItem: React.FC<ConsultationItemProp> = ({
  image,
  name,
  date,
  hour,
  status,
}) => {
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
      <div className='bg-gray mx-4 w-14 h-14 rounded-full'>
        <img
          src={image ? image : images.ic_user}
          className='bg-auto m-auto rounded-full'
          alt='User avatar'
        />
      </div>
      <div className='flex flex-col grow gap-y-2 shrink'>
        <p className='font-bold'>{name}</p>
        <span className='flex gap-4'>
          <p>{date}</p>
          <p>Jam {hour}</p>
        </span>
        <p
          className={`px-2 py-1 w-max ${statusStyle(
            status
          )} rounded-lg font-medium mb-1`}
        >
          {status}
        </p>
      </div>
      <div className='dots mx-2 self-start'>
        <img src={images.ic_dots} alt='dots' />
      </div>
    </div>
  )
}
