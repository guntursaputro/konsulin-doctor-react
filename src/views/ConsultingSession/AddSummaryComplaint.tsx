import images from 'assets/images'
import { Header } from 'components'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const AddSummaryComplaint: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-white h-full -mt-5 -mx-4'>
      <div className='ml-4'>
        <Header onBackClick={() => navigate(-1)} label='Tambah Keluhan' />
      </div>
      <div className='mx-4 bg-white p-4 flex flex-col'>
        <div className='w-full py-2 px-3 text-xs flex justify-between border rounded-md items-center'>
          <p>Merah</p>
          <img src={images.ic_search_loop} alt='' className='w-6 h-6' />
        </div>
        <img
          src={images.ic_sorting}
          alt=''
          className='w-6 pr-1 mt-3 self-end'
        />
      </div>

      <div className='font-semi-bold mx-4 text-xs'>
        <p className='mb-6'>Kulit Kemerahan</p>
        <p className='mb-6'>Bintik Merah</p>
        <p className='mb-6'>Ruam Merah dan Perih</p>
      </div>
    </div>
  )
}
