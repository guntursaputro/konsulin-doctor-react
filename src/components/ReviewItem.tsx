import React from 'react'
import { renderStar } from 'utils'

interface ReviewItemProps {
  item: { rating: number; name: string; comment: string }
}

export const ReviewItem: React.FC<ReviewItemProps> = ({ item }) => {
  return (
    <div className='flex flex-col bg-white px-3 pb-6 pt-3 mt-3 rounded-md drop-shadow'>
      <div className='flex justify-between'>
        <div className='flex'>{renderStar(item.rating)}</div>
        <p className='text-xxs'>{item.name}</p>
      </div>
      <p className='text-xxs'>{item.comment}</p>
    </div>
  )
}
