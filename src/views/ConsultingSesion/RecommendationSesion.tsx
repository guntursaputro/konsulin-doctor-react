import images from 'assets/images'
import { Button, ProductItem } from 'components'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PRODUCT_LIST } from 'utils/dumy'

export const RecommendationSesion: React.FC = () => {
  const navigate = useNavigate()

  const onAddRecomendation = () => {
    navigate('/add-recommendation')
  }

  const onChangeRecommendation = () => {
    navigate('/change-recommendation')
  }

  return (
    <div className='-mx-4 bg-white'>
      <div className='pt-3 px-4'>
        <Button
          className='bg-yellow text-white !w-full drop-shadow-md text-xs'
          label='Tambah Rekomendasi'
          icon={images.ic_plus_white}
          onClick={onAddRecomendation}
        />
      </div>
      <div className='mt-6 px-4'>
        <p className='text-neutral-30 font-semi-bold text-xs'>
          REKOMENDASI PRODUK
        </p>
        <div className='flex font-bold text-xxs justify-between mt-4 mr-8'>
          <p>Produk</p>
          <p>Jumlah</p>
        </div>
        <div className='border-b-[2px] border-b-gray'></div>
        <div>
          {PRODUCT_LIST?.map((item) => (
            <ProductItem item={item} />
          ))}
        </div>
      </div>
      <Button
        icon={images.ic_edit}
        className='btn-outline mt-8 absolute right-0 mr-5 text-xxs'
        onClick={onChangeRecommendation}
        label='Ubah Rekomendasi'
      />
      <div className='mx-4 mt-32 -mb-16'>
        <Button
          icon={images.ic_send_white}
          label='Kirim Rekomendasi ke Pasien'
          onClick={() => console.log('send')}
          className='btn-primary !w-full !text-xs mb-8'
        />
      </div>
    </div>
  )
}
