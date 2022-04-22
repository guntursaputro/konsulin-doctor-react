import React from 'react'
import { Header } from 'components'
import { Route, Routes, useNavigate, useParams } from 'react-router-dom'
import {
  ChatSesion,
  SummarySesion,
  RecommendationSesion,
  RecipeSesion,
} from 'views'
import { SESION_MENU } from 'config/menu'
import images from 'assets/images'

export const HEADER_ICON = [
  { icon: images.ic_video_cam },
  { icon: images.ic_dots },
]

export const ConsultingSesionParent: React.FC = () => {
  const navigate = useNavigate()
  const { type } = useParams()

  const onSesionMenuClick = (to: string) => {
    navigate(to)
  }

  const isActive = (key: string) => {
    if (type) return type === key
  }

  // const checkPage = () => {
  //   if (type === 'chat' || type === 'recommendation') {
  //     HEADER_ICON.shift()
  //     return HEADER_ICON
  //   }
  // }

  console.log(HEADER_ICON[1])

  return (
    <div>
      <Header
        onBackClick={() => navigate(-1)}
        label='Guntur Saputro'
        profile={images.ic_user}
        icon={
          type === 'chat' || type === 'recommendation'
            ? HEADER_ICON
            : [{ icon: images.ic_dots }]
        }
        iconClassName='w-6 h-6'
      />
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
        <Route path='/consulting-sesion/chat' element={<ChatSesion />} />
        <Route path='/consulting-sesion/summary' element={<SummarySesion />} />
        <Route
          path='/consulting-sesion/recommendation'
          element={<RecommendationSesion />}
        />
        <Route path='/consulting-sesion/recipe' element={<RecipeSesion />} />
      </Routes>
    </div>
  )
}
