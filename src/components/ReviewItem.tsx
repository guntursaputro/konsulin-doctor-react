import React from 'react'

interface ReviewItemProps {
  item: { rating: number; name: string; comment: string }
}

export const ReviewItem: React.FC<ReviewItemProps> = ({ item }) => {
  return (
    <div className='flex flex-col'>
      <div>
        <div>Rating</div>
        <p>Guntur</p>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, minima.
      </p>
    </div>
  )
}
