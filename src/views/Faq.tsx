import { FaqItem, Header } from 'components'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FAQ_LIST } from 'utils/dumy'

export const Faq: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col h-full'>
      <Header label='FAQ' onBackClick={() => navigate(-1)} />
      <div className='flex flex-col flex-1 h-full bg-white px-4 py-6 -mx-4 -mt-4 -mb-[4rem]'>
        <div className='font-bold text-2xl'>{'Frequently Asked Question'}</div>
        <div className='mt-3'>
          {FAQ_LIST?.map((item, index) => (
            <FaqItem key={index} item={item} className='!bg-white' />
          ))}
        </div>
      </div>
    </div>
  )
}
