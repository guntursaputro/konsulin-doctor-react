import React from 'react'
import { Header } from 'components'
import { Route, Routes, useNavigate } from 'react-router-dom'
import {
  ChatSesion,
  SummarySesion,
  RecommendationSesion,
  RecipeSesion,
} from 'views'
import { SESION_MENU } from 'config/menu'

export const ConsultingSesionParent: React.FC = () => {
  const navigate = useNavigate()

  const onSesionMenuClick = (to: string) => {
    navigate(to)
  }

  return (
    <div>
      <Header onBackClick={() => navigate(-1)} label='Guntur Saputro' />
      <div className='scroll-x !space-x-2 snap-x snap-mandatory py-3 -mx-4 -mt-5'>
        {SESION_MENU.map((item, index) => (
          <div
            key={index}
            className={`text-sm px-4 py-2 flex items-center min-w-fit rounded-md ${
              item.isSelected
                ? 'bg-primary-base text-white'
                : 'border border-neutral-30'
            }`}
            onClick={() => onSesionMenuClick(item.to)}
          >
            <img src={item.icon} alt='' className='h-4 mr-1' />
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
