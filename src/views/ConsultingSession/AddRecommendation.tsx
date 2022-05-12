import images from 'assets/images'
import { Button, Header, ProductItem } from 'components'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PRODUCT_LIST } from 'utils/dumy'

export const AddRecommendation: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-white h-full -mt-5'>
      <Header onBackClick={() => navigate(-1)} label='Tambah Rekomendasi' />
      <div className='-mx-4 bg-white p-4 flex flex-col'>
        <div className='w-full py-2 px-3 text-xs flex justify-between border rounded-md items-center'>
          <p>Facial Wash</p>
          <img src={images.ic_search_loop} alt='' className='w-6 h-6' />
        </div>
        <img
          src={images.ic_sorting}
          alt=''
          className='w-6 pr-1 mt-3 self-end'
        />
      </div>
      <div className='-mx-4 bg-white px-4'>
        {PRODUCT_LIST?.map((item) => (
          <ProductItem item={item} active />
        ))}
      </div>
      <div className='bg-white -mx-4 px-4 pb-16 py-9 -mb-16'>
        <Button
          onClick={() => console.log('Save')}
          icon={images.ic_disket}
          label='Simpan Rekomendasi'
          className='btn-primary !w-full'
        />
      </div>
    </div>
  )
}
