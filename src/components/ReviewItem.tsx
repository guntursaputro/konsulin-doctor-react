import clsx from 'clsx'
import React from 'react'
import { renderStar } from 'utils'

interface ReviewItemProps {
  className?: string
  item: { rating: number; name: string; comment: string }
}

export const ReviewItem: React.FC<ReviewItemProps> = ({ className, item }) => {
  return (
    <div
      className={clsx(
        'flex flex-col bg-white px-3 pb-5 pt-3 mb-3 rounded-md drop-shadow',
        className
      )}
    >
      <div className='flex justify-between'>
        <div className='flex'>{renderStar(item.rating)}</div>
        <p className='text-xxs'>{item.name}</p>
      </div>
      <p className='text-xxs'>{item.comment}</p>
    </div>
  )
}
