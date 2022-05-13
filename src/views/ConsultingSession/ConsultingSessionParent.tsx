import React, { useState } from 'react'
import { Header, Modal } from 'components'
import { Route, Routes, useNavigate, useParams } from 'react-router-dom'
import {
  ChatSession,
  SummarySession,
  RecommendationSession,
  RecipeSessionReferral,
  RecipeSessionWithoutReferral,
} from 'views'
import { SESION_MENU } from 'config/menu'
import images from 'assets/images'

export const HEADER_ICON = [
  { icon: images.ic_video_cam, to: '/video-call' },
  { icon: images.ic_dots },
]

export const ConsultingSessionParent: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false)
  const navigate = useNavigate()
  const { type } = useParams()

  const onSesionMenuClick = (to: string) => {
    navigate(to, { replace: true })
  }

  const isActive = (key: string) => {
    if (type) return type === key
  }

  return (
    <div>
      <Header
        onBackClick={() => navigate(-1)}
        label='Guntur Saputro'
        profile={images.ic_user}
        icon={type === 'chat' ? HEADER_ICON : []}
        iconClassName='w-6 h-6'
        onIconClick={() => setIsClicked(!isClicked)}
      />
      <Modal
        show={isClicked}
        dialogClassName='!items-start !justify-start'
        onHide={() => setIsClicked(false)}
      >
        <div className='bg-white w-1/2 float-right mr-4 mt-4 pl-2 py-3 rounded-md text-xs'>
          <div
            className='flex mb-1.5 items-center'
            onClick={() => navigate('/schedule/set-schedule')}
          >
            <img
              src={images.ic_nonotification}
              alt=''
              className='w-6 h-6 mx-1.5'
            />
            <p>Matikan Notifikasi</p>
          </div>
          <div className='flex items-center'>
            <img src={images.ic_search} alt='' className='w-6 h-6 mx-1.5' />
            <p>Cari Chat</p>
          </div>
        </div>
      </Modal>
      <div className='scroll-x !space-x-2 snap-x snap-mandatory py-3 -mx-4 -mt-5'>
        {SESION_MENU?.map((item) => (
          <div
            key={item.key}
            className={`text-sm px-4 py-2 flex items-center min-w-fit rounded-md ${
              isActive(item.key)
                ? 'bg-primary-base text-white'
                : 'border border-neutral-30'
            }`}
            onClick={() => onSesionMenuClick(item.to)}
          >
            <img
              src={isActive(item.key) ? item.icon_inactive : item.icon}
              alt=''
              className='h-4 mr-1'
            />
            <p className='text-xxs'>{item.label}</p>
          </div>
        ))}
      </div>
      <Routes>
        <Route path='/consulting-sesion/chat' element={<ChatSession />} />
        <Route path='/consulting-sesion/summary' element={<SummarySession />} />
        <Route
          path='/consulting-sesion/recommendation'
          element={<RecommendationSession />}
        />
        <Route
          path='/consulting-sesion/recipe'
          element={<RecipeSessionReferral />}
        />
        <Route
          path='/consulting-sesion/recipe-without-referral'
          element={<RecipeSessionWithoutReferral />}
        />
      </Routes>
    </div>
  )
}
