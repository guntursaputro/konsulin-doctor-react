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
    <div>
      <Button
        className='bg-yellow text-white !w-full drop-shadow-md mt-3'
        label='Tambah Rekomendasi'
        icon={images.ic_plus_white}
        onClick={onAddRecomendation}
      />
      <div className='mt-6'>
        <p className='text-neutral-30 font-semi-bold text-xs'>
          REKOMENDASI PRODUK
        </p>
        <div className='flex font-bold text-xxs justify-between border-b-[2px] border-b-gray mt-4'>
          <p>Produk</p>
          <p>Jumlah</p>
        </div>
        <div>
          {PRODUCT_LIST?.map((item) => (
            <ProductItem item={item} />
          ))}
        </div>
      </div>
      <Button
        icon={images.ic_edit}
        className='btn-outline mt-4 absolute right-0 mr-4'
        onClick={onChangeRecommendation}
        label='Ubah Rekomendasi'
      />
      <Button
        icon={images.ic_send_white}
        label='Kirim Rekomendasi ke Pasien'
        onClick={() => console.log('send')}
        className='btn-primary !w-full mt-20'
      />
    </div>
  )
}
