import { Header } from 'components'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col h-full'>
      <Header label='Kebijakan Privacy' onBackClick={() => navigate(-1)} />
      <div className='flex flex-col flex-1 h-full bg-white px-4 py-6 -mx-4 -mt-4 -mb-[4rem]'>
        <div className='font-bold text-2xl'>{'Konsulin Privacy Policy'}</div>
        <div className='text-xxs mt-3'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam,
          magnam! Illum perferendis quae beatae itaque dicta, deleniti
          architecto delectus accusamus aliquid nihil. Cum aperiam ea eligendi
          iusto vel mollitia? Odio!
        </div>
      </div>
    </div>
  )
}
