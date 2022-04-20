import images from 'assets/images'
import { Button } from 'components'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const PersonalInfo: React.FC = () => {
  const navigate = useNavigate()
  const onBackClick = () => {
    navigate(-1)
  }

  return (
    <div className='-mt-[4rem]'>
      <div className='component__header h-[60px] max-h-[60px] max-w-content fixed top-0 w-full flex flex-col justify-center z-50 px-4 py-2 -ml-4'>
        <div className='safe-top flex items-center justify-between'>
          <img
            className='w-7 h-7'
            src={images.ic_arrow_profile}
            alt=''
            onClick={onBackClick}
          />
        </div>
      </div>
      <div className='-ml-4 top-0 absolute'>
        <div>
          <img src={images.bg_profile_dummy} alt='' />
        </div>
        <div className='px-4 pt-4 bg-white h-1/3'>
          <p className='font-bold text-sm mb-1'>Dr. Fenny S.E</p>
          <p className='text-xxs mb-5 text-black-light'>
            Bening's Clinic Kemang
          </p>
          <p className='text-xxs pb-4'>
            Dokter spesialis perawatan dan penyakit kulit
          </p>
        </div>
        <div className='bg-gradient-to-b from-[#dedede] to-[#eee] h-2/3 w-full text-xxs px-4 pb-16'>
          <p className='font-bold pt-5'>Pengalaman Praktik</p>
          <p>4 tahun</p>
          <p className='font-bold mt-5'>Alumni</p>
          <p className='mt-1'>Universitas Gajah Mada(2011-2016)</p>
          <p className='font-bold mt-5'>Tempat Praktik</p>
          <p className='mt-1'>Klinik Bening Kemang Jakarta Selatan</p>
          <p className='font-bold mt-5'>No. STR</p>
          <p>00212232200032</p>
          <Button
            onClick={() => console.log('click')}
            label='Ajukan Perubahan Data'
            className='btn-primary !w-full mt-20'
          />
        </div>
      </div>
    </div>
  )
}
