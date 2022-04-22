import { Header } from 'components'
import { SetSchedule, OnlineSchedule } from 'views'
import { Tabs } from 'components/Tabs'
import { TABS_SCHEDULE } from 'config/menu'
import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

export const SetScheduleParent: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Header onBackClick={() => navigate(-1)} label='Pengaturan Jadwal' />
      <Tabs items={TABS_SCHEDULE} className='-mt-5' />
      <Routes>
        <Route path='/schedule/online-schedule' element={<OnlineSchedule />} />
        <Route path='/schedule/set-schedule' element={<SetSchedule />} />
      </Routes>
    </div>
  )
}
