import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ConsultingParent, Home, Profile } from 'views'
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
    title: 'Konsultasi',
    to: '/consulting/online',
    secondary_to: '/consulting/scheduled',
    third_to: '/consulting/completed',
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
        <Route element={<ConsultingParent />}>
          <Route path='/consulting/:type' />
        </Route>
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <MenuBottom menu={menu} />
    </>
  )
}
