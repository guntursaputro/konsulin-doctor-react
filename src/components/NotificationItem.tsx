import clsx from 'clsx'
import React from 'react'

interface NotificationItemProps {
  className?: string
  item: {
    title: string
    note: string
    hour: string
    isRead: boolean
    canceled?: boolean
  }
}

export const NotificationItem: React.FC<NotificationItemProps> = ({
  className,
  item,
}) => {
  return (
    <div
      className={clsx(
        'flex gap-3 px-4 py-4 justify-between -mx-4 my-1 border-b-2 border-b-neutral-10',
        item.isRead ? 'bg-white' : 'bg-highlight',
        className
      )}
    >
      <div className='flex flex-col'>
        <p
          className={`text-sm font-semibold ${
            item.canceled ? 'text-error' : ''
          }`}
        >
          {item.title}
        </p>
        <p className='text-xs'>{item.note}</p>
      </div>
      <p
        className={`text-xxs ${
          item.isRead ? 'text-black-lighter' : 'text-white'
        }`}
      >
        {item.hour}
      </p>
    </div>
  )
}
