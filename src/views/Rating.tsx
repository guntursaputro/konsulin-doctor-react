import { Header } from 'components'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Rating: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className=''>
      <Header onBackClick={() => navigate(-1)} label='Ulasan' />
      <div className='bg-white -mt-5 -mx-4 px-8'>
        <div className='flex justify-between text-sm font-semi-bold'>
          <p>Total Konsultasi Terlayani</p>
          <p>{`144`} orang</p>
        </div>
      </div>
    </div>
  )
}
