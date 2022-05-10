import images from 'assets/images'
import { Header, ReviewItem } from 'components'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { COMMENT_LIST } from 'utils/dumy'

const RATING_MENU = [
  {
    total: 144,
    data: [
      { rating: 5, progress: 120 },
      { rating: 4, progress: 24 },
      { rating: 3, progress: 0 },
      { rating: 2, progress: 0 },
      { rating: 1, progress: 0 },
    ],
  },
]

export const Rating: React.FC = () => {
  const navigate = useNavigate()

  const progress = '50%'

  return (
    <div>
      <Header onBackClick={() => navigate('/rating')} label='Ulasan' />
      {RATING_MENU.map((item) => (
        <div className='bg-white -mx-4 -mt-5 px-8 pb-6'>
          <div className='flex font-semi-bold justify-between text-sm'>
            <p>Total Konsultasi Terlayani:</p>
            <p>{item.total} Orang</p>
          </div>

          <div className='mt-6 text-sm'>
            <p className='mb-4'>Rating</p>
            <div className='flex-col'>
              {item.data.map((data) => (
                <div className='flex items-center mb-3 '>
                  <img
                    src={images.ic_star_fill}
                    alt='star icon'
                    className='w-6 mr-1'
                  />
                  <p className='mr-4 font-semi-bold items-center w-1'>
                    {data.rating}
                  </p>
                  <div
                    style={{
                      width: (data.progress / item.total) * 100 + 1 + '%',
                    }}
                  >
                    <div className='bg-yellow h-4 rounded' />
                  </div>
                  <p className='ml-3 text-sm w-1/4'>{data.progress}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className='-mx-4'>
        <p className='font-semi-bold my-4 ml-8'>Komentar</p>
        <div className='flex flex-col mx-8'>
          {COMMENT_LIST.map((item) => (
            <ReviewItem item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
