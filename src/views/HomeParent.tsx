import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Consulting, Home, Profil } from 'views'
import { MenuBottom } from 'components'
import images from 'assets/images'

const menu = [
  {
    icon: images.ic_home_inactive,
    icon_active: images.ic_home_active,
    title: 'Home',
    to: '/home',
  },
  {
    icon: images.ic_consulting_inactive,
    icon_active: images.ic_consulting_active,
    title: 'Consulting',
    to: '/consulting',
    secondary_to: '/consulting',
  },
  {
    icon: images.ic_profile_inactive,
    icon_active: images.ic_profile_active,
    title: 'Profile',
    to: '/profile',
  },
]

export const HomeParent: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/consulting' element={<Consulting />} />
        <Route path='/profile' element={<Profil />} />
      </Routes>
      <MenuBottom menu={menu} />
    </>
  )
}
