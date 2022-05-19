import images from 'assets/images'
import { Button } from 'components'
import { Header } from 'components'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CONSULTATION_LIST } from 'utils/dumy'

export const ConsultingDetail: React.FC = () => {
  const [isConsultingStart, setIsConsultingStart] = useState(false)
  const navigate = useNavigate()
  const { name } = useParams()

  const onConsultingStart = () => {
    navigate('/consulting-sesion/chat')
  }

  return (
    <>
      {CONSULTATION_LIST.filter((item) => item.name === name).map((item) => (
        <div className='-mt-4 -mx-4 p-4 h-full !bg-white'>
          <Header label='Konsultasi' onBackClick={() => navigate(-1)} />
          <div className='-mt-5'>
            <div className='flex -mx-4 p-4 bg-gradient-to-b from-[#dedede] to-[#eee] gap-8 items-center'>
              <img
                src={item.image ? item.image : images.ic_user}
                alt=''
                className='w-12 h-12 rounded-full'
              />
              <div>
                <p className='text-sm font-bold'>{item.name}</p>
                <p className='text-xs'>User Konsulin App</p>
              </div>
            </div>
            <div className='bg-white py-4 -mx-4'>
              <div className='mx-4 text-xs'>
                <p className='font-bold mb-2'>Tanggal Pemesanan</p>
                <p className='mb-4'>11 Januari 2022</p>
                <p className='font-bold mb-2'>Jadwal Booking</p>
                <p className='mb-2'>{item.date}</p>
                <p className='mb-2'>Sesi {item.hour}</p>
              </div>
            </div>
            <div className='bg-white px-4 -mx-4 text-center'>
              {isConsultingStart ? (
                <Button
                  onClick={onConsultingStart}
                  className='btn-primary !w-full mb-4 !text-lg font-semi-bold'
                  label='Mulai Sesi Konsultasi'
                />
              ) : (
                <div
                  className='bg-[#eeeeee] py-4 rounded-lg text-sm mb-4'
                  onClick={() => setIsConsultingStart(true)}
                >
                  <p>Konsultasi akan dimulai dalam</p>
                  <p className='font-bold mt-3'>2 Hari 6 Jam</p>
                </div>
              )}
              <p className='text-xs mb-3'>Atau</p>
              <p
                className='text-base font-bold'
                onClick={() => navigate('/help')}
              >
                Hubungi CS
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
