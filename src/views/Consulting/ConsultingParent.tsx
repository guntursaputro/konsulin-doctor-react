import { Banner } from 'components'
import { Tabs } from 'components/Tabs'
import { TABS_CONSULTING } from 'config/menu'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Online, Scheduled, Completed } from 'views'

export const ConsultingParent: React.FC = () => {
  return (
    <div className='-mt-[4rem]'>
      <Banner />
      <div className='pt-[6.5rem] bg-white -mx-4 px-4'>
        <Tabs items={TABS_CONSULTING} />
      </div>
      <Routes>
        <Route path='/consulting/online' element={<Online />} />
        <Route path='/consulting/completed' element={<Completed />} />
        <Route path='/consulting/scheduled' element={<Scheduled />} />
      </Routes>
    </div>
  )
}
